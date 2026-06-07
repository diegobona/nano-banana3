# libs/storage AGENTS.md

Shared storage abstraction for the Next.js app.

## Rules

- Reuse this library for uploads, signed URLs, and provider switching.
- Enforce file constraints before downstream provider calls.
- Keep provider credentials in environment/config, not in app code.
