# Traditional Server Deployment

This guide covers deploying `apps/next-app` to a Node.js server.

## Build

```bash
pnpm install --frozen-lockfile
pnpm build:next
```

## Start

```bash
pnpm start:next
```

The app listens on port `7001` by default.

## PM2 Example

```bash
pm2 start "pnpm start:next" --name "tinyship-next"
pm2 logs tinyship-next
pm2 restart tinyship-next
```

## Health Check

```text
http://localhost:7001/api/health
```
