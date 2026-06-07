# libs/react-shared AGENTS.md

React component and hook library consumed by the Next.js app and docs app.

## Rules

- Keep components framework-light and reusable.
- Do not import app route modules from this library.
- Prefer existing UI primitives before adding new ones.
- Keep user-facing text outside shared primitives unless it is passed in by the caller or sourced from i18n.

## Verification

```bash
pnpm typecheck:next
pnpm build:next
```
