# Tecsior — VPS Deployment

Self-contained scripts to deploy the monorepo (NestJS backend + Next.js frontend) to a single Ubuntu / Debian VPS using **PM2** + **nginx**, and to auto-redeploy on every push to `main` via **GitHub Actions**.

## Files in this folder

| File | Purpose |
|---|---|
| `setup-vps.sh` | **One-time** VPS bootstrap: installs Node 22 LTS, git, build tools, PM2; clones the repo; wires PM2 into systemd so apps survive reboot. |
| `deploy.sh` | **Idempotent** deploy: `git fetch` → install → build → `pm2 reload`. Safe to re-run. Used by both the manual flow and the GitHub Action. |
| `ecosystem.config.js` | PM2 process map (`tecsior-backend` on :4000, `tecsior-frontend` on :3000). |
| `nginx.conf.template` | Reverse proxy: marketing at `tecsior.com`, API at `api.tecsior.com`. |

## Architecture on the VPS

```
              ┌──────────────────────────────┐
   :443 ─────►│ nginx (TLS via certbot)      │
              ├──────────────────────────────┤
              │ tecsior.com     → 127.0.0.1:3000  (Next.js / next start)
              │ api.tecsior.com → 127.0.0.1:4000  (NestJS  / node dist/main.js)
              └──────────────────────────────┘
                          │
                          ▼  (PM2 keeps both alive, restarts on crash, boots on reboot)
              ┌──────────────────────────────┐
              │ /var/www/tecsior/             │  ← APP_DIR (configurable)
              │   ├ backend/   ← dist/main.js │
              │   └ frontend/  ← .next/       │
              └──────────────────────────────┘
                          │
                          ▼
              MongoDB Atlas · Cloudinary · Resend  (all external SaaS)
```

---

## First-time setup (~5 minutes)

Run on a fresh Ubuntu 22.04 / 24.04 (or Debian 12) VPS. SSH in as a sudo-capable user.

```bash
# 1. Grab the bootstrap script
curl -fsSL https://raw.githubusercontent.com/zamansheikh/programmer-nexus/main/deploy/setup-vps.sh -o setup-vps.sh

# 2. Run it (defaults: clones to /var/www/tecsior, current user owns)
sudo bash setup-vps.sh

# Override defaults if you want:
APP_DIR=/srv/tecsior REPO_URL=git@github.com:you/your-fork.git sudo -E bash setup-vps.sh
```

It installs everything, clones the repo, and prints the **two manual steps left**:

### Step 1 — backend env
```bash
sudo -u $USER cp /var/www/tecsior/backend/.env.example /var/www/tecsior/backend/.env
sudo -u $USER nano /var/www/tecsior/backend/.env
```
Fill in:
- `MONGODB_URI` — your Atlas connection string (whitelist `0.0.0.0/0` in Atlas → Network Access, or your VPS IP)
- `ADMIN_PASSWORD` — strong password (seeds the first admin user)
- `JWT_SECRET` — long random string (generate: `openssl rand -hex 48`)
- `CLOUDINARY_URL` — `cloudinary://<key>:<secret>@<cloud_name>`
- `CORS_ORIGIN` — `https://tecsior.com` (or whatever your frontend URL will be)
- `RESEND_API_KEY` + `CONTACT_EMAIL` — optional, only needed for contact-form emails

### Step 2 — frontend env
```bash
echo 'NEXT_PUBLIC_API_URL=https://api.tecsior.com' | sudo -u $USER tee /var/www/tecsior/frontend/.env.local
```

### Step 3 — first deploy
```bash
sudo -u $USER bash /var/www/tecsior/deploy/deploy.sh
```

That pulls the latest code, installs both apps, builds them, and starts PM2. After ~30s:
```bash
pm2 status              # both apps "online"
curl localhost:4000/api/health    # {"status":"ok","service":"tecsior-api",...}
curl -I localhost:3000            # 200 OK (Next.js)
```

---

## nginx + SSL (optional, recommended)

If you want clean URLs and HTTPS instead of `http://your-ip:3000`:

```bash
# 1. Install nginx + certbot
sudo apt-get install -y nginx certbot python3-certbot-nginx

# 2. Copy and customize the template
sudo cp /var/www/tecsior/deploy/nginx.conf.template /etc/nginx/sites-available/tecsior
sudo sed -i 's/tecsior.example.com/YOUR-DOMAIN.com/g' /etc/nginx/sites-available/tecsior
sudo ln -sf /etc/nginx/sites-available/tecsior /etc/nginx/sites-enabled/tecsior
sudo nginx -t && sudo systemctl reload nginx

# 3. Issue Let's Encrypt certs (DNS must point at the VPS first)
sudo certbot --nginx -d YOUR-DOMAIN.com -d www.YOUR-DOMAIN.com -d api.YOUR-DOMAIN.com
```

DNS records you need before running certbot:
- `A  YOUR-DOMAIN.com           → <vps-ip>`
- `A  www.YOUR-DOMAIN.com       → <vps-ip>`
- `A  api.YOUR-DOMAIN.com       → <vps-ip>`

certbot will rewrite your nginx config in place to add the HTTPS server blocks and redirect HTTP → HTTPS. After it finishes, update `backend/.env` so `CORS_ORIGIN` matches the new HTTPS frontend URL, then `pm2 reload tecsior-backend`.

---

## Auto-deploy on every `git push`

The workflow at `.github/workflows/deploy.yml` triggers on push to `main` and SSHes into the VPS to run `deploy.sh`. To enable it:

### 1. Create an SSH key pair on the VPS

```bash
# On the VPS, as the user that owns the repo:
ssh-keygen -t ed25519 -f ~/.ssh/github_deploy -N ''
cat ~/.ssh/github_deploy.pub >> ~/.ssh/authorized_keys
cat ~/.ssh/github_deploy     # copy this PRIVATE key to GitHub secrets
```

### 2. Add GitHub Actions secrets

Repo → **Settings → Secrets and variables → Actions → New repository secret**. Add:

| Secret | Value |
|---|---|
| `VPS_HOST` | VPS IP or hostname (e.g. `203.0.113.10` or `tecsior.com`) |
| `VPS_USER` | the SSH user that owns the repo (e.g. `ubuntu`, `deploy`, your username) |
| `VPS_SSH_KEY` | full contents of `~/.ssh/github_deploy` (the **private** key, with the header/footer lines) |
| `VPS_APP_DIR` | full path to the repo on the VPS (e.g. `/var/www/tecsior`) |
| `VPS_SSH_PORT` | optional; defaults to 22 |

### 3. Push

```bash
git commit -am "feat: ship something cool"
git push origin main
```

Within ~60 seconds the GitHub Action runs, the VPS pulls the new code, rebuilds both apps, and `pm2 reload` swaps the processes with zero downtime. Watch progress at **GitHub → Actions tab**.

### What the workflow ignores

Edits to `*.md`, `design-system/**`, `logo/**`, and `.gitignore` skip the deploy (no point rebuilding for a typo fix in a README). Adjust `paths-ignore` in `deploy.yml` if you want stricter filtering.

### Manual re-trigger

GitHub → Actions → **"Deploy to VPS"** → **Run workflow** → `main`. Useful for redeploying after editing a secret.

---

## Day-2 ops

```bash
pm2 status                       # show both apps
pm2 logs                         # tail logs from both
pm2 logs tecsior-backend         # just backend
pm2 reload all                   # zero-downtime restart
pm2 restart tecsior-frontend     # hard restart one
pm2 monit                        # live dashboard
```

PM2 logs land in `/var/log/tecsior/{backend,frontend}.{out,err}.log` (rotated by PM2 itself when they grow).

### Rolling back

```bash
cd /var/www/tecsior
git log --oneline -10           # find the commit you want
git reset --hard <sha>
bash deploy/deploy.sh           # rebuild + reload
```

### Updating env vars

Edit `backend/.env` or `frontend/.env.local`, then:
```bash
pm2 restart tecsior-backend     # NestJS reads env at boot
pm2 restart tecsior-frontend    # Next.js bakes some envs into build — if you changed NEXT_PUBLIC_*, you also need to `bash deploy.sh` to rebuild
```

### Troubleshooting

| Symptom | Likely cause |
|---|---|
| `pm2 status` shows app "errored" looping | check `pm2 logs <name> --lines 100`; usually missing env var or Atlas IP not allowlisted |
| Frontend returns 502 | `pm2 status` — frontend process probably crashed; check `pm2 logs tecsior-frontend` |
| CORS errors in browser | `backend/.env` `CORS_ORIGIN` must list your frontend's full origin (`https://tecsior.com`); restart backend after editing |
| Login works but `/admin` flashes back to `/login` | the JWT cookie was set with `secure: true` but you're on HTTP. Use HTTPS (certbot) or set `NODE_ENV=development` |
| GitHub Action fails on `Permission denied (publickey)` | the `VPS_SSH_KEY` secret is wrong, or you forgot to append the public key to `~/.ssh/authorized_keys` on the VPS |

---

## Alternatives

| If you want… | …consider |
|---|---|
| **Zero VPS management** | Deploy frontend to Vercel (see root `README.md`) and backend to **Railway** / **Render** / **Fly.io** |
| **Containers** | Add a `Dockerfile` per app and a root `docker-compose.yml`; the deploy.sh logic maps almost 1:1 to a `docker compose up -d --build` |
| **Multiple environments** (staging + prod) | Two PM2 ecosystems on different ports, two nginx server blocks, two GitHub workflows (one per branch) |
