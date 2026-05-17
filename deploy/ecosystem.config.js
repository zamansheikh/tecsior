/**
 * PM2 process map for the Tecsior VPS deploy.
 *
 * Each app's working directory is set to its package root so .env / .env.local
 * are picked up automatically (NestJS ConfigModule reads cwd/.env; Next.js
 * reads cwd/.env.local).
 *
 * Run from the repo root:
 *   pm2 start  deploy/ecosystem.config.js           # first time
 *   pm2 reload deploy/ecosystem.config.js           # zero-downtime restart
 *   pm2 save                                         # persist for boot
 */
module.exports = {
  apps: [
    {
      name: "tecsior-backend",
      cwd: "./backend",
      script: "dist/main.js",
      instances: 1,
      exec_mode: "fork",
      max_memory_restart: "500M",
      autorestart: true,
      watch: false,
      env: {
        NODE_ENV: "production",
      },
      out_file: "/var/log/tecsior/backend.out.log",
      error_file: "/var/log/tecsior/backend.err.log",
      merge_logs: true,
      time: true,
    },
    {
      name: "tecsior-frontend",
      cwd: "./frontend",
      script: "node_modules/next/dist/bin/next",
      args: "start --port 6000",
      instances: 1,
      exec_mode: "fork",
      max_memory_restart: "500M",
      autorestart: true,
      watch: false,
      env: {
        NODE_ENV: "production",
        PORT: "6000",
      },
      out_file: "/var/log/tecsior/frontend.out.log",
      error_file: "/var/log/tecsior/frontend.err.log",
      merge_logs: true,
      time: true,
    },
  ],
};
