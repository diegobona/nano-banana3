# Basic Configuration

Configuration is centralized in `config.ts` and `config/*`.

## App Configuration

- App name, logo, base URL, theme, i18n, payment URLs: `config.ts`
- Auth: `config/auth.ts`
- Payment plans/providers: `config/payment.ts`
- Credits: `config/credits.ts`
- AI providers: `config/ai*.ts`
- Storage: `config/storage.ts`

## Public Assets

Place production public assets in:

```text
apps/next-app/public/
apps/docs-app/public/
```

## Environment

Add new environment variables only when needed, document them in `env.example`, and prefer existing names over aliases.
