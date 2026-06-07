# Docker Deployment Quick Guide

This repository now ships a single production app: `apps/next-app`.

## Docker Compose

```bash
docker compose --profile next up -d
docker compose logs -f
docker compose down
```

## Manual Docker Build

Run from the repository root:

```bash
docker build -t tinyship-next -f apps/next-app/Dockerfile .

docker run -d \
  --name tinyship-next \
  -p 7001:7001 \
  --env-file .env \
  --restart unless-stopped \
  tinyship-next
```

## Notes

- The build context must be the repository root.
- Runtime secrets should be provided through `.env`.
- In Docker, do not use `localhost` for a database running on the host. Use `host.docker.internal` on Docker Desktop, or a reachable host/network address on Linux.
