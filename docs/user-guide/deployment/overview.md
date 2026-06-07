# Deployment Overview

This repository deploys a single production app: `apps/next-app`.

## Supported Paths

- Traditional Node.js hosting: see `traditional.md`.
- Docker deployment: see `docker.md`.
- Cloud/Vercel-style deployment: see `cloud.md`.
- Cloudflare deployment for Next.js: see `cloudflare-next-workers.md`.

## Basic Checks

```bash
pnpm build:next
pnpm typecheck:next
```

Health check:

```text
https://your-domain.com/api/health
```
