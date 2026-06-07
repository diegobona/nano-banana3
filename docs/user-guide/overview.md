# User Guide Overview

This project now uses a Next.js-only application architecture.

## Applications

- `apps/next-app`: production Next.js app.
- `apps/docs-app`: documentation site, also built with Next.js.

## Shared Code

- `libs/*`: shared domain logic, integrations, services, database, auth, credits, i18n, storage, and UI helpers.
- `libs/react-shared`: React components and hooks shared by the Next app and docs where useful.
- `config/*` and `config.ts`: centralized application configuration.

## Common Commands

```bash
pnpm dev:next
pnpm build:next
pnpm typecheck:next
pnpm test:e2e
```

## Development Flow

1. Put business logic in `libs/*` or `config/*`.
2. Wire it into `apps/next-app`.
3. Add i18n keys for user-facing text.
4. Verify auth, permissions, credits, and payment behavior where applicable.
5. Run typecheck, build, and relevant E2E tests.
