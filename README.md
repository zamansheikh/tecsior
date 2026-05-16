# Programmer Nexus

Senior engineering studio — marketing site + admin console.

## Monorepo layout

```
.
├── frontend/         Next.js 16 (App Router) marketing + admin UI
├── backend/          NestJS 11 REST API
├── design-system/    Source design (HTML/JSX prototype) — reference only
└── public/           (moved into frontend/public)
```

## Quick start

```bash
# frontend
cd frontend && npm install && npm run dev
# → http://localhost:3000

# backend (in a second terminal)
cd backend && npm install && npm run start:dev
# → http://localhost:4000
```

## Stack

**Frontend** — Next.js 16, React 19, TypeScript 5.7, Tailwind CSS v4, lucide-react.
**Backend** — NestJS 11, Node 24 LTS, class-validator, Resend for email.

## Environment

Copy `.env.example` files in each app and fill in values. Root `.env.local` from the previous site holds the Resend key — copy `RESEND_API_KEY` and `CONTACT_EMAIL` into `backend/.env`.
