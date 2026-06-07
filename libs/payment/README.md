# Payment Library

Shared payment logic for the Next.js app.

Pixal3D v1 currently exposes Stripe checkout through `libs/payment/index.ts`.
Some provider implementations may remain in `libs/payment/providers` for future work, but app wiring is Next-only.

## Key Files

- `libs/payment/index.ts`
- `libs/payment/providers/stripe.ts`
- `apps/next-app/app/api/payment/initiate/route.ts`
- `apps/next-app/app/api/payment/webhook/stripe/route.ts`
- `apps/next-app/app/api/payment/verify/stripe/route.ts`
