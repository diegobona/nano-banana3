# Pixal3D

Pixal3D 是一个基于 Next.js 的 SaaS 应用，核心能力包括 AI 图片转 3D 模型、积分、支付、认证和资产历史。

## 应用

- `apps/next-app`: 生产用 Next.js 应用。

## 共享库

- `libs/ai`: AI 对话、图片、视频和 3D provider 逻辑。
- `libs/auth`: Better Auth 配置。
- `libs/database`: Drizzle schema 和数据库工具。
- `libs/credits`: 积分余额和交易生命周期。
- `libs/payment`: 支付 provider 与订阅/积分对账。
- `libs/i18n`: 共享多语言文案。
- `libs/react-shared`: 可复用 React UI 和 hooks。

## 常用命令

```bash
pnpm dev:next
pnpm build:next
pnpm typecheck:next
pnpm test:e2e
```

## 开发规则

共享业务逻辑优先放在 `libs/*` 或 `config/*`，再接入 `apps/next-app`。
