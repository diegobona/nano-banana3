# E2E Test Guidelines

Conventions, architecture, and instructions for writing and running Playwright tests for `apps/next-app`.

For the detailed catalog of test flows, see `TEST-CATALOG.md`.

## Prerequisites

```bash
npm install -g playwright @playwright/test
npx playwright install chromium
```

## Running Tests

Start the Next.js app on port `7001`:

```bash
pnpm dev:next
```

For Stripe payment tests, also start webhook forwarding in another terminal:

```bash
stripe listen --forward-to localhost:7001/api/payment/webhook/stripe
```

Then run:

```bash
pnpm test:e2e
pnpm test:e2e:ui
pnpm test:e2e -- --headed
pnpm test:e2e -- --grep "Stripe"
```

## File Structure

```text
tests/e2e/
  playwright.config.ts
  global-teardown.ts
  AGENTS.md
  TEST-CATALOG.md
  helpers/
    constants.ts
    auth.ts
    credits.ts
  specs/
    *.spec.ts
```

## Selector Priority

1. `data-testid` attributes
2. HTML element IDs
3. ARIA roles
4. Element type + attributes
5. CSS class patterns only when no better selector exists

## Authentication Strategy

- Tests that need a logged-in user should use API helpers to set session cookies.
- Tests that verify auth itself should use UI form interactions.
- Auth helpers include retry handling for Better Auth rate limiting.

## Test Data

- Test emails use `e2e-...@example.com`.
- `global-teardown.ts` deletes test users after the run.
- Set `E2E_SKIP_CLEANUP=true` to keep test data for inspection.

## API Helpers vs E2E Tests

Helpers under `tests/e2e/helpers` are test setup utilities. API contract checks belong in `tests/api`.

## AI Credits

Use `seedCredits(userId, amount)` from `helpers/credits.ts` when an AI flow needs credits.

## Payment Sandbox Credentials

Do not hardcode sandbox credentials in specs. Provide them through environment variables.

## Adding a New Test

1. Create `tests/e2e/specs/<flow-name>.spec.ts`.
2. Import helpers from `tests/e2e/helpers`.
3. Use stable selectors.
4. Update `TEST-CATALOG.md`.
5. Run the relevant spec against `pnpm dev:next`.
