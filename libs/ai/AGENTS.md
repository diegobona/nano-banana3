# libs/ai AGENTS.md

Shared AI integration library for the Next.js app.

## Responsibilities

- Provider configuration and normalization.
- Chat, image, video, and 3D generation helpers.
- Provider task creation, polling, timeout, and result parsing.
- Credit cost helpers when AI usage maps to credits.

## Rules

- Keep provider/domain logic here, not in app route handlers.
- Route handlers should validate, authorize, charge/refund, and call this library.
- Do not leak provider secrets in logs or responses.
- Keep provider-specific options behind shared option types.

## Verification

```bash
pnpm typecheck:next
pnpm build:next
```
