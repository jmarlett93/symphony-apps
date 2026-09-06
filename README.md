# symphony-apps

Nx monorepo for Symphony businesses.

## Prerequisites

- Node.js 22
- Corepack

## Local development

```bash
corepack enable
pnpm install --frozen-lockfile
pnpm serve
```

The Angular 21 application is available at `http://localhost:4200`.

## Quality checks

```bash
pnpm boundaries
pnpm format:check
pnpm lint
pnpm test
pnpm build
```

Projects use one `scope:*` tag and one `type:*` tag. The dependency rules and
planned workspace structure are documented in
[`architecture/ARCHITECTURE.md`](architecture/ARCHITECTURE.md#7-nx-workspace-layout-and-boundaries).
