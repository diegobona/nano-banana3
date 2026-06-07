# libs/email AGENTS.md

Shared email service and templates for the Next.js app.

## Rules

- Keep provider logic and template rendering in this library.
- Do not load runtime-only secrets in client code.
- Compile templates with `pnpm email:compile` when template output changes.
