# libs/permissions AGENTS.md

CASL-based permission library for the Next.js app.

## Rules

- Keep roles, subjects, actions, and ability rules centralized here.
- Use permission checks for admin and resource-level APIs.
- Keep authentication separate from authorization: auth resolves the user, permissions decide access.

## Verification

```bash
pnpm typecheck:next
pnpm test:api
```
