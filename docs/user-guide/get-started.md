# Getting Started

## Requirements

- Node.js 22+
- pnpm 9.4.0 via Corepack
- PostgreSQL for local database-backed flows

## Install

```bash
corepack enable
corepack pnpm install
```

## Environment

Copy the example file and fill in local values:

```bash
copy env.example .env
```

## Development

Start the production app:

```bash
pnpm dev:next
```

The app runs at `http://localhost:7001`.

Start the docs app:

```bash
pnpm dev:docs
```

## Verification

```bash
pnpm typecheck:next
pnpm build:next
pnpm test:e2e
```
