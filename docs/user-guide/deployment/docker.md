# Docker Deployment

Docker deployment targets `apps/next-app`.

## Compose

```bash
docker compose --profile next up -d
docker compose logs -f
docker compose down
```

## Manual Build

```bash
docker build -t tinyship-next -f apps/next-app/Dockerfile .

docker run -d \
  --name tinyship-next \
  -p 7001:7001 \
  --env-file .env \
  --restart unless-stopped \
  tinyship-next
```

## Database

Inside a Docker container, `localhost` points to the container itself. Use a reachable database host such as `host.docker.internal` on Docker Desktop.
