# E2E Test Catalog

This catalog tracks Playwright flows for the Next.js app at `apps/next-app`.

## Implemented Specs

- `public-pages.spec.ts`: public page smoke tests.
- `auth-flow.spec.ts`: sign-up, sign-in, sign-out, and auth redirects.
- `access-control.spec.ts`: protected page and API access checks.
- `dashboard.spec.ts`: dashboard profile, credits, orders, and account panels.
- `pricing.spec.ts`: pricing page rendering and checkout entry points.
- `ai-features.spec.ts`: AI feature page smoke tests.
- `ai-chat.spec.ts`: AI chat interaction flow.
- `ai-image-generate.spec.ts`: AI image generation flow.
- `upload-page.spec.ts`: upload page flow.
- `blog.spec.ts`: blog listing/detail/admin flows.
- `admin-panel.spec.ts`: admin page flows.
- `admin-filters.spec.ts`: admin filter controls.
- `stripe-payment.spec.ts`: Stripe checkout flow.
- `paypal-payment.spec.ts`: PayPal flow, if enabled.
- `creem-payment.spec.ts`: Creem flow, if enabled.
- `profile-update.spec.ts`: profile update flow.
- `password-change.spec.ts`: password change flow.
- `i18n-switching.spec.ts`: locale switching.
- `my-assets.spec.ts`: generated asset history.

## Result Tracking

When adding or changing a flow, record:

- Date.
- App: Next.js.
- Spec file.
- Pass/fail count.
- Notes and required external services.
