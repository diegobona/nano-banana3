# Nano Banana Image Generation Migration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Convert the current Pixal3D image-to-3D website into an AI image generation website powered by the Nano Banana API, while preserving existing auth, credits, payments, routing, and asset history as much as possible.

**Architecture:** Keep the Next.js app and existing SaaS shell. First change user-facing UI from 3D/GLB language to image generation, then adapt the existing generation API and history store to return image results instead of GLB model results. Reuse `libs/ai/image.ts`, `config/aiImage.ts`, `libs/credits`, `libs/auth`, and the current history table where practical.

**Tech Stack:** Next.js App Router, React, TypeScript, Drizzle/Postgres, Better Auth, existing credit service, fal.ai Nano Banana Pro API (`fal-ai/nano-banana-pro`), Playwright/Vitest.

---

## Guiding Principles

- Keep the root app route and current SaaS structure.
- Change user-facing behavior before deep backend renames.
- Reuse existing auth, credit, payment, i18n, and My Assets flows.
- Avoid database migrations in the first pass unless a hard schema mismatch blocks image generation.
- Preserve old 3D internals temporarily if renaming them would add risk without user-visible benefit.
- Do not call the real Nano Banana API in automated tests; mock `fetch`.

## Current Code Map

- Home generator UI: `apps/next-app/app/[lang]/(root)/page.tsx`
- 3D generation API: `apps/next-app/app/api/3d-generate/route.ts`
- 3D status API: `apps/next-app/app/api/3d-generate/status/route.ts`
- 3D provider layer: `libs/ai/3d.ts`
- Existing image provider layer: `libs/ai/image.ts`
- Image config with Nano Banana listed: `config/aiImage.ts`
- Credit pricing config: `config/credits.ts`
- History persistence: `libs/ai/3d-task-store.ts`
- History schema: `libs/database/schema/pixal3d-generation.ts`
- My Assets page: `apps/next-app/app/[lang]/(root)/my-assets/page.tsx`
- My Assets grid: `apps/next-app/components/my-assets-grid.tsx`
- GLB preview dialog: `apps/next-app/components/glb-preview-dialog.tsx`
- User-facing copy: `libs/i18n/locales/en.ts`, `libs/i18n/locales/zh-CN.ts`
- Frontend helper tests: `tests/unit/ui/*pixal3d*`, `tests/unit/ai/*3d*`
- E2E catalog/specs: `tests/e2e/TEST-CATALOG.md`, `tests/e2e/specs/*`

## Target User Flow

1. User lands on `/`.
2. User enters a prompt and optionally uploads/reference-selects an image.
3. User chooses simple image options such as aspect ratio, output count, and resolution.
4. User clicks generate.
5. Credits are consumed.
6. Nano Banana returns generated image URL(s).
7. The page displays the image result with open/download actions.
8. My Assets shows generated image history, including processing, success, and failure states.

## API Contract V1

Keep the frontend small by introducing a new image-oriented endpoint while allowing old internals to remain:

```ts
POST /api/image-generate
{
  prompt: string;
  imageUrl?: string;
  aspectRatio?: "1:1" | "4:3" | "3:4" | "16:9" | "9:16";
  resolution?: "1K" | "2K" | "4K";
  numImages?: number;
}

Response:
{
  success: true;
  data: {
    taskId: string;
    status: "processing" | "succeeded";
    provider: "fal";
    model: "fal-ai/nano-banana-pro";
    imageUrl?: string;
    images?: string[];
  };
  credits?: { consumed: number; remaining?: number };
}
```

If the Nano Banana call is synchronous in our chosen HTTP path, return `succeeded` immediately and still persist a completed history record. If it is asynchronous, keep polling with `/api/image-generate/status?taskId=...`.

## Task 0: Restore Local Tooling Before Implementation

**Files:**
- No source changes.

- [ ] Run dependency install because `node_modules` was intentionally deleted.

```powershell
corepack pnpm install
```

- [ ] Confirm the app can start before edits.

```powershell
corepack pnpm dev:next
```

Expected: Next dev server starts on `http://localhost:7001`.

## Task 1: Frontend Copy And UI Surface, No Backend Changes Yet

**Files:**
- Modify: `libs/i18n/locales/en.ts`
- Modify: `libs/i18n/locales/zh-CN.ts`
- Modify: `apps/next-app/app/[lang]/(root)/page.tsx`
- Modify: `apps/next-app/lib/pixal3d-progress.ts`
- Modify: existing unit tests under `tests/unit/ui/`

- [x] Replace user-facing Pixal3D/image-to-3D/GLB copy with Nano Banana/image generation copy.
- [x] Keep the `pixal3d` i18n namespace temporarily to avoid a large rename.
- [x] Replace the hero promise with image-generation language.
- [x] Remove or hide 3D-only controls:
  - texture size
  - mesh scale
  - remesh
  - decimation target
  - topology/mesh progress steps
- [x] Add simple image controls:
  - aspect ratio
  - resolution
  - output count, default 1
- [x] Replace GLB preview dialog usage with an inline image result preview.
- [x] Replace `generatedModelUrl` UI behavior with `generatedImageUrl` behavior.
- [x] Keep the upload/reference image flow if it still makes sense for Nano Banana image editing.
- [x] Remove `@google/model-viewer` runtime import from the home page only after the UI no longer uses it.

Verification:

```powershell
corepack pnpm --filter @tinyship/next-app typecheck
```

Expected: TypeScript passes after UI-only refactor.

## Task 2: Frontend Generate Flow Points To Image Endpoint

**Files:**
- Modify: `apps/next-app/app/[lang]/(root)/page.tsx`
- Modify: `apps/next-app/lib/pixal3d-generation-errors.ts`
- Modify: `apps/next-app/lib/pixal3d-generate-disabled-reason.ts`
- Test: update related `tests/unit/ui/*`

- [ ] Change the POST target from `/api/3d-generate` to `/api/image-generate`.
- [ ] Change status polling from `/api/3d-generate/status` to `/api/image-generate/status`.
- [ ] Update response types to accept `imageUrl` / `images`.
- [ ] Keep old task state names (`processing`, `succeeded`, `failed`) to reduce churn.
- [ ] Update progress labels from mesh/GLB steps to image generation steps:
  - preparing prompt
  - sending to Nano Banana
  - generating image
  - finalizing result
- [ ] Ensure the UI can display mocked successful image responses.

Temporary backend bridge:

- [ ] If `/api/image-generate` is not implemented yet, add a local mock behind a feature flag or return a static image in development only. Remove this bridge in Task 5.

Verification:

```powershell
corepack pnpm --filter @tinyship/next-app typecheck
```

Expected: frontend compiles against the new image response shape.

## Task 3: My Assets Frontend Becomes Image History

**Files:**
- Modify: `apps/next-app/app/[lang]/(root)/my-assets/page.tsx`
- Modify: `apps/next-app/components/my-assets-grid.tsx`
- Modify: `apps/next-app/lib/my-assets-status-updates.ts`
- Modify: `libs/i18n/locales/en.ts`
- Modify: `libs/i18n/locales/zh-CN.ts`
- Test: `tests/unit/ui/my-assets-status-updates.test.ts`
- Test: `tests/unit/next/my-assets-credit-usage-copy.test.ts`

- [ ] Replace GLB card tile with generated image thumbnail.
- [ ] Replace `Preview 3D Model` with open/download image actions.
- [ ] Remove `resolution` and `textureSize` labels if they are still 3D-specific; replace with aspect ratio / resolution.
- [ ] Update status polling to `/api/image-generate/status`.
- [ ] Map legacy result data safely:

```ts
const imageUrl = item.imageUrl ?? item.result?.imageUrl ?? item.result?.thumbnailUrl;
```

- [ ] Do not delete `GlbPreviewDialog` yet; just stop using it from image-generation screens.

Verification:

```powershell
corepack pnpm --filter @tinyship/next-app typecheck
```

Expected: My Assets compiles and no longer depends on GLB preview for new image history.

## Task 4: Configure Nano Banana As The Primary Image Model

**Files:**
- Modify: `config/aiImage.ts`
- Modify: `config/credits.ts`
- Modify: `env.example`
- Modify: `libs/i18n/locales/en.ts`
- Modify: `libs/i18n/locales/zh-CN.ts`
- Test: add/update `tests/unit/ai/image.test.ts`

- [ ] Set image default provider/model:

```ts
defaultProvider: "fal",
defaultModels: {
  fal: "fal-ai/nano-banana-pro",
  ...
}
```

- [ ] Keep other image providers in config only if they are still needed; otherwise leave them untouched but unused.
- [ ] Add/confirm env var docs:

```text
FAL_API_KEY=
FAL_BASE_URL=https://fal.run
```

- [ ] Add credit pricing under `fixedConsumption.aiImage`.
- [ ] Use `TransactionTypeCode.AI_IMAGE_GENERATION`.
- [ ] Add/confirm dashboard credit descriptions for image generation.

Verification:

```powershell
corepack pnpm test -- tests/unit/ai/image.test.ts
```

Expected: Nano Banana pricing/model selection tests pass with mocked config.

## Task 5: Add Nano Banana Provider Adapter

**Files:**
- Modify: `libs/ai/image.ts`, or create: `libs/ai/nano-banana.ts`
- Modify: `libs/ai/types.ts`
- Test: `tests/unit/ai/image.test.ts`

- [ ] Add a small Nano Banana request builder.
- [ ] Use official fal model id `fal-ai/nano-banana-pro`.
- [ ] Support these V1 options only:
  - `prompt`
  - optional `imageUrl`
  - `aspectRatio`
  - `resolution`
  - `numImages`
- [ ] Do not expose advanced Nano Banana options until the basic flow is stable.
- [ ] Mock `global.fetch` in tests.
- [ ] Validate that provider response is normalized to:

```ts
{
  imageUrl: string;
  images?: string[];
  provider: "fal";
  model: "fal-ai/nano-banana-pro";
}
```

Verification:

```powershell
corepack pnpm test -- tests/unit/ai/image.test.ts
```

Expected: request builder sends the expected model/options and maps provider image output correctly.

## Task 6: Implement Image Generation API And Status API

**Files:**
- Create or replace: `apps/next-app/app/api/image-generate/route.ts`
- Create: `apps/next-app/app/api/image-generate/status/route.ts`
- Modify: `libs/ai/3d-task-store.ts`, or create: `libs/ai/image-task-store.ts`
- Test: add/update `tests/unit/ai/image-api-route.test.ts`

- [ ] Prefer creating `libs/ai/image-task-store.ts` as a wrapper around the current persistence table.
- [ ] Keep `pixal3d_generation` table for V1 to avoid a migration.
- [ ] Store image result JSON in the existing `result` jsonb column:

```ts
{
  imageUrl: string;
  images?: string[];
  provider: "fal";
  model: "fal-ai/nano-banana-pro";
  format: "png" | "jpeg" | "webp"
}
```

- [ ] For existing required numeric fields:
  - map `resolution: "1K" | "2K" | "4K"` to `1024 | 2048 | 4096`
  - set `textureSize` equal to the mapped resolution for compatibility
- [ ] Preserve auth behavior: signed-in users only for paid generation.
- [ ] Preserve insufficient credit response shape.
- [ ] Refund consumed credits if provider submission fails after charge.
- [ ] Return a stable image API response matching Task 2.

Verification:

```powershell
corepack pnpm test -- tests/unit/ai/image-api-route.test.ts
```

Expected: route handles success, invalid prompt, unauthenticated, insufficient credits, provider failure, and refund path.

## Task 7: Decommission 3D-Specific Public Features

**Files:**
- Modify/delete if unused:
  - `apps/next-app/app/api/3d-generate/route.ts`
  - `apps/next-app/app/api/3d-generate/status/route.ts`
  - `apps/next-app/app/api/hf-pixal3d-instance/route.ts`
  - `apps/next-app/components/glb-preview-dialog.tsx`
  - `apps/next-app/types/model-viewer.d.ts`
  - `libs/ai/3d.ts`
  - `libs/ai/3d-entitlements.ts`
  - `libs/ai/hf-pixal3d-instance.ts`
  - `config/ai3d.ts`

- [ ] Do not delete these in the first backend pass.
- [ ] After image flow works, run `rg "3d-generate|GlbPreview|model-viewer|ai3d|Pixal3D|GLB"` and remove truly unused public-path code.
- [ ] Keep old database table/schema until a separate migration is explicitly planned.
- [ ] Remove `@google/model-viewer` from `apps/next-app/package.json` only after no code imports it.
- [ ] Remove 3D tests or rewrite them to image tests.

Verification:

```powershell
corepack pnpm --filter @tinyship/next-app typecheck
```

Expected: no public code references removed 3D modules.

## Task 8: Update SEO, Docs, Tests, And E2E Catalog

**Files:**
- Modify: `libs/i18n/locales/en.ts`
- Modify: `libs/i18n/locales/zh-CN.ts`
- Modify: `README.md`, `README_EN.md`, `README_CN.md`
- Modify: `docs/user-guide/ai/image.md`
- Delete or rewrite: `docs/user-guide/ai/3d.md`
- Modify: `tests/e2e/TEST-CATALOG.md`
- Modify/create: `tests/e2e/specs/nano-banana-image-generate.spec.ts`

- [ ] Update metadata title/description/keywords.
- [ ] Update pricing/dashboard/credits descriptions from model generation to image generation.
- [ ] Update docs to describe Nano Banana image generation.
- [ ] E2E should verify:
  - signed-out user sees sign-in/subscription guidance
  - signed-in user with credits can submit image generation
  - insufficient credits blocks generation
  - My Assets shows generated image after completion
- [ ] Use mocked/stubbed provider path for CI-style tests; real provider test should be manual/local only.

Verification:

```powershell
corepack pnpm test:e2e -- tests/e2e/specs/nano-banana-image-generate.spec.ts
```

Expected: local E2E passes against the running Next app.

## Task 9: Final Verification

**Files:**
- No source changes unless verification finds issues.

- [ ] Run typecheck.

```powershell
corepack pnpm --filter @tinyship/next-app typecheck
```

- [ ] Run build.

```powershell
corepack pnpm --filter @tinyship/next-app build
```

- [ ] Run focused unit tests.

```powershell
corepack pnpm test -- tests/unit/ai/image.test.ts tests/unit/ai/image-api-route.test.ts
```

- [ ] Start local app.

```powershell
corepack pnpm dev:next
```

- [ ] Browser-check the key flow at `http://localhost:7001`.
- [ ] Record remaining warnings and follow-up cleanup.

## Open Decisions Before Coding

- Exact Nano Banana API path: use fal direct HTTP via `https://fal.run/fal-ai/nano-banana-pro` unless real API-key testing shows queue polling is required.
- Whether reference image upload is required for V1 or prompt-only is enough.
- Credit cost per generation and whether 2K/4K costs differ.
- Whether to keep legacy 3D history visible or hide it after the product switch.
- Whether to rename internal `pixal3d` namespaces/table in a later cleanup migration.
