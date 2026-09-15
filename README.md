# BreakTimerr

Nx monorepo for BreakTimerr.

## Prerequisites

- Node.js 22
- Corepack

## Local development

```bash
corepack enable
pnpm install --frozen-lockfile
pnpm serve
pnpm serve:api
```

The Angular 21 application is available at `http://localhost:2211`.
The Hapi API listens on `http://localhost:2212` (`GET /health/live`, `GET /v1`).
Backend apps and libraries package with esbuild; `tsc --noEmit` remains typecheck-only.

## Quality checks

```bash
pnpm boundaries
pnpm format:check
pnpm lint
pnpm test
pnpm build
pnpm e2e:smoke
```

Projects use one `scope:*` tag and one `type:*` tag. The dependency rules and
planned workspace structure are documented in
[`architecture/ARCHITECTURE.md`](architecture/ARCHITECTURE.md#7-nx-workspace-layout-and-boundaries).

Pull requests run these checks through GitHub Actions. Nx limits lint,
type-check, unit-test, and build work to affected projects, while taxonomy,
formatting, and the Chromium shell smoke test always run.
