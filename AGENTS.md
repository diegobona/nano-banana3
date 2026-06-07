# AGENTS.md

## Purpose

Default feature-delivery checklist for this repository.

## Scope

- Primary production app: `apps/next-app` (Next.js, React, App Router).
- Docs app: `apps/docs-app` (Next.js documentation site).
- Shared capability and business logic should live in `libs/*` and `config/*`, then be wired into `apps/next-app`.
- React-specific shared components and hooks live in `libs/react-shared`.

## Golden Rules

1. No hardcoded user-facing strings in pages/components; use i18n keys.
2. API routes are thin adapters; core logic belongs to shared libraries.
3. Any user-accessed API/page must be checked for auth and permission consistency.
4. If a feature consumes credits/money, ensure charge/refund path and transaction labels are complete.
5. Always finish with typecheck + build verification.
6. A feature is not done until the relevant Next.js E2E tests pass.

## Development Workflow

Each feature follows five phases:

1. **Spec**: Write acceptance scenarios in `tests/e2e/TEST-CATALOG.md` in plain language.
2. **Code**: Implement shared logic first (`libs/*`, `config/*`), then wire it into `apps/next-app`.
3. **Verify**: Use the browser to walk through the key user flow on the running Next app.
4. **Test**: Write Playwright E2E specs based on the real DOM.
5. **Green**: Run the related E2E spec and record results in `tests/e2e/TEST-CATALOG.md`.

## New Feature Checklist

### 0) Requirement framing

- [ ] Confirm feature goal, supported providers/modes, and non-goals.
- [ ] Identify if this is UI only / API only / full-stack / provider integration.
- [ ] Write acceptance scenarios in `tests/e2e/TEST-CATALOG.md`.

### 1) Architecture placement

- [ ] Put provider/domain logic in `libs/*`.
- [ ] Put static options and defaults in `config/*`.
- [ ] Keep Next route handlers (`apps/next-app/app/api/**/route.ts`) as orchestration only.
- [ ] Reuse existing abstractions before adding new env vars or config keys.

### 2) API design

- [ ] Validate request input.
- [ ] Normalize provider-specific parameters into shared option types.
- [ ] Implement failure-safe flow: creation, polling, timeout, clear errors.
- [ ] Keep response shapes stable.
- [ ] Log useful debug context without leaking secrets.

### 3) Permissions and auth

- [ ] Add/verify protected page routes in Next middleware.
- [ ] Add/verify protected API routes in Next middleware or route-level auth checks.
- [ ] Ensure API has reliable user resolution.
- [ ] Compare with an existing protected feature such as 3D generation.

### 4) i18n and UI text

- [ ] Add keys in `libs/i18n/locales/en.ts`.
- [ ] Mirror key structure in `libs/i18n/locales/zh-CN.ts`.
- [ ] Verify new UI text uses translation keys only.

### 5) Credits and billing safety

- [ ] Define/adjust cost mapping in `config/credits.ts`.
- [ ] Use canonical transaction codes from `libs/credits/utils.ts`.
- [ ] Add dashboard credit description translations for new transaction codes.
- [ ] Consume credits before execution when needed; refund on provider failure.
- [ ] Include metadata for reconciliation.

### 6) Upload/storage constraints

- [ ] Reuse `libs/storage`.
- [ ] Enforce documented size, MIME, dimension, and count constraints.
- [ ] Prefer URL-based downstream API inputs where providers accept URLs.

### 7) Environment variables

- [ ] Add only truly new env vars to `env.example`.
- [ ] Reuse existing env names where possible.
- [ ] Validate base URL/origin handling carefully.
- [ ] Remove obsolete env vars and dead fallback logic.

### 8) Documentation

- [ ] Update implementation docs under `docs/implementation/*` for new API behavior.
- [ ] Update user docs under `docs/user-guide/*` when user-visible behavior changes.

### 9) Verification before handoff

- [ ] Run Next typecheck: `pnpm --filter @tinyship/next-app typecheck`
- [ ] Run Next build: `pnpm --filter @tinyship/next-app build`
- [ ] Use the browser to walk through the key user flow.

### 10) E2E tests

- [ ] Write Playwright E2E specs in `tests/e2e/specs/`.
- [ ] Run related E2E: `pnpm test:e2e -- <spec-file>`
- [ ] Update `tests/e2e/TEST-CATALOG.md` results table.

## Key Project References

- Structure guideline: `.cursor/rules/project-structure.mdc`
- i18n conventions: `libs/i18n/AGENTS.md`
- AI provider implementation patterns: `libs/ai/AGENTS.md`
- Credits lifecycle: `libs/credits/AGENTS.md`
- Permissions model: `libs/permissions/AGENTS.md`
- Auth middleware design: `docs/implementation/auth-middleware-design.md`
- Build verification notes: `docs/implementation/build-verification.md`
- Storage upload guide: `docs/user-guide/storage.md`
- Credits user guide: `docs/user-guide/credits.md`
- E2E test conventions: `tests/e2e/AGENTS.md`
- E2E test catalog: `tests/e2e/TEST-CATALOG.md`
