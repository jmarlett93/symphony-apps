<!-- nx configuration start-->
<!-- Leave the start & end comments to automatically receive updates. -->

# General Guidelines for working with Nx

- When running tasks (for example build, lint, test, e2e, etc.), always prefer running the task through `nx` (i.e. `nx run`, `nx run-many`, `nx affected`) instead of using the underlying tooling directly
- You have access to the Nx MCP server and its tools, use them to help the user
- When answering questions about the repository, use the `nx_workspace` tool first to gain an understanding of the workspace architecture where applicable.
- When working in individual projects, use the `nx_project_details` mcp tool to analyze and understand the specific project structure and dependencies
- For questions around nx configuration, best practices or if you're unsure, use the `nx_docs` tool to get relevant, up-to-date docs. Always use this instead of assuming things about nx configuration
- If the user needs help with an Nx configuration or project graph error, use the `nx_workspace` tool to get any errors

<!-- nx configuration end-->

## Node packaging (esbuild)

Backend and shared Node apps/libraries must package with `@nx/esbuild:esbuild`, same style as cursus-ui-apps:

- **Executor:** `@nx/esbuild:esbuild` only — never `@nx/js:tsc`, webpack, or Vite for Node build targets
- **Shape:** `platform: "node"`, `format: ["cjs"]`, `bundle: true`, `generatePackageJson: true`
- **Apps** (e.g. `apps/api`): `thirdParty: true`, `externalDependencies: "none"`, production/development configurations; `serve` via `@nx/js:node` watching the esbuild build
- **Libs:** keep runtime peers external under `esbuildOptions.external` (e.g. `@hapi/hapi`, `zod`); set `packageJson` to the lib's `package.json`
- **Scaffolding:** prefer `nx g @nx/js:library --bundler=esbuild` and `nx g @nx/node:application --bundler=esbuild` (workspace generator defaults already set this)
- **Typecheck:** `tsc --noEmit` stays a separate target; do not use tsc as the package build
- **Enforcement:** `pnpm boundaries` fails if a Node (`scope:backend` / `scope:shared` / non-web `type:app`) build target is not `@nx/esbuild:esbuild`

Angular frontend projects keep `@angular/build` / `@nx/angular` — this rule does not apply to them.
