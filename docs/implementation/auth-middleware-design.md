# Auth Middleware Design

The production app uses Next.js middleware for page/API protection.

## Key File

```text
apps/next-app/middlewares/authMiddleware.ts
```

## Responsibilities

- Redirect authenticated users away from sign-in/sign-up pages.
- Redirect unauthenticated users away from protected pages.
- Return `401` for protected API routes without a session.

## Adding Protected Routes

Add a route entry to `protectedRoutes` with:

- `pattern`
- `type`: `page` or `api`
- `requiresAuth`
- `isAuthRoute` when applicable

For admin or resource-level authorization, also use `libs/permissions` in the route handler or a dedicated shared helper.
