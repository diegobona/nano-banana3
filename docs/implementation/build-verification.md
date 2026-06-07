# Build Verification

This repository is Next-only for the production app.

## CI

CI installs dependencies, builds `apps/next-app`, and verifies the Next Docker image.

## Local Commands

```bash
pnpm typecheck:next
pnpm build:next
pnpm test
pnpm test:e2e
```

Use `pnpm build` to run all workspace build tasks.

## Rule of Thumb

Before handing off feature work, run the relevant typecheck, build, browser verification, and E2E spec for the Next app.
