# Auth Overview

Authentication is implemented with Better Auth and wired into the Next.js app.

## Key Files

- Shared auth setup: `libs/auth/auth.ts`
- Next auth route: `apps/next-app/app/api/auth/[...all]/route.ts`
- Next route protection: `apps/next-app/middlewares/authMiddleware.ts`
- Shared auth client helpers: `libs/auth/authClient.ts`

## Development Rules

- Protect user-only pages in Next middleware.
- Protect sensitive API routes with session checks.
- Keep provider setup in shared auth/config files.
- Keep user-facing text in i18n locales.
