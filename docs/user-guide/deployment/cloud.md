# Cloud Deployment

Cloud deployment targets `apps/next-app`.

## Vercel

Use the repository root as the project root and configure:

```text
Build command: pnpm build:next
Output: apps/next-app/.next
```

Set runtime environment variables in the hosting dashboard.

## Other Node Hosts

Use:

```bash
pnpm install --frozen-lockfile
pnpm build:next
pnpm start:next
```

## Health Check

```text
https://your-domain.com/api/health
```
