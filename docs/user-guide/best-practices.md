# Best Practices

## Architecture

- Keep product code in `apps/next-app`.
- Put shared business logic in `libs/*`.
- Put static defaults and provider options in `config/*`.
- Keep API routes thin; route handlers should validate, authorize, orchestrate, and delegate.

## UI

- Use i18n keys for all user-facing text.
- Reuse `libs/react-shared` and existing UI primitives before adding new components.
- Keep pages and components focused on presentation and interaction.

## Auth and Permissions

- Protect user-facing routes in Next middleware.
- Protect sensitive APIs with session checks and role/permission checks.
- Keep permission rules centralized in `libs/permissions`.

## Credits and Payments

- Charge before provider execution when a feature consumes credits.
- Refund on provider failure.
- Use canonical transaction codes and metadata for reconciliation.

## Verification

```bash
pnpm typecheck:next
pnpm build:next
pnpm test:e2e -- <spec-file>
```
