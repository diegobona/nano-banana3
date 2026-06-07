# libs/auth AGENTS.md

Shared Better Auth setup for the Next.js app.

## Rules

- Keep provider configuration in `config/auth.ts` and `libs/auth/auth.ts`.
- Keep route handlers thin.
- Protect pages and APIs through Next middleware or route-level session checks.
- Do not expose secrets to the client.

## Key Files

- `libs/auth/auth.ts`
- `libs/auth/authClient.ts`
- `apps/next-app/app/api/auth/[...all]/route.ts`
- `apps/next-app/middlewares/authMiddleware.ts`
