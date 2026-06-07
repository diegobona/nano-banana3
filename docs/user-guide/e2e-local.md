# Local E2E Testing

E2E tests target the Next.js app on port `7001`.

## Start the App

```bash
pnpm dev:next
```

## Run Tests

```bash
pnpm test:e2e
pnpm test:e2e -- --headed
pnpm test:e2e -- --grep "Pricing"
```

For Stripe flows, run webhook forwarding in another terminal:

```bash
stripe listen --forward-to localhost:7001/api/payment/webhook/stripe
```

## Notes

- Keep only one dev server on port `7001`.
- Use API helpers for authenticated setup.
- Update `tests/e2e/TEST-CATALOG.md` when adding or changing flows.
