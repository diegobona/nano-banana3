# Pixal3D

Pixal3D is a Next.js SaaS application for AI image-to-3D model generation, credits, payments, authentication, and asset history.

## Apps

- `apps/next-app`: production Next.js app.

## Shared Libraries

- `libs/ai`: AI chat, image, video, and 3D provider logic.
- `libs/auth`: Better Auth setup.
- `libs/database`: Drizzle schema and database helpers.
- `libs/credits`: credit balance and transaction lifecycle.
- `libs/payment`: payment providers and subscription/credit reconciliation.
- `libs/i18n`: shared locale data.
- `libs/react-shared`: reusable React UI and hooks.

## Commands

```bash
pnpm dev:next
pnpm build:next
pnpm typecheck:next
pnpm test:e2e
```

## Development Rule

Put shared business logic in `libs/*` or `config/*`, then wire it into `apps/next-app`.
