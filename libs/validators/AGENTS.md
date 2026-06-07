# libs/validators AGENTS.md

Shared Zod validation library for the Next.js app.

## Rules

- Keep reusable schemas and validator factories here.
- Prefer typed schemas over ad hoc request parsing.
- Error messages should be compatible with i18n display in the app.

## Verification

```bash
pnpm typecheck:next
pnpm test
```
