# libs/i18n AGENTS.md

Centralized locale library for the Next.js app and docs app.

## Rules

- Add new keys to `libs/i18n/locales/en.ts` first.
- Mirror the same key structure in `libs/i18n/locales/zh-CN.ts`.
- Do not hardcode user-facing text in pages/components.
- Keep locale object shapes type-safe via `libs/i18n/locales/types.ts`.

## Verification

```bash
pnpm typecheck:next
pnpm build:next
```
