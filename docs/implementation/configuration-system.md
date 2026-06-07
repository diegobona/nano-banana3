# Configuration System

The project uses a single configuration system for the Next.js app and docs app.

## Files

- `config.ts`: top-level app configuration.
- `config/*`: domain-specific config modules.
- `env.example`: documented environment variables.

## Next Integration

`apps/next-app/next.config.ts` loads the repository root `.env` file and enables imports from shared libraries.

Application code imports:

```ts
import { config } from '@config'
```

## Guidelines

- Add env vars only when a new external integration genuinely needs one.
- Use `config/utils.ts` helpers for environment access.
- Do not duplicate provider defaults in app routes.
- Keep build-time defaults safe and runtime secrets in `.env`.
