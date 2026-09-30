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

# Agent Lore

These are the default instructions for work in this repository and any repository where this lore is installed.

## Working style

- Use functional, declarative TypeScript and JavaScript.
- Isolate side effects at the edges of the system.
- Prefer the standard library, native platform features, and existing dependencies before adding code or dependencies.
- Reuse existing helpers and patterns after tracing the real flow.
- Keep diffs small, boring, and focused. Delete unnecessary code instead of adding abstractions.
- Fix shared root causes rather than patching only the reported caller.
- Match the repository's existing framework and architecture; do not introduce React or JSX/TSX.

## Frontend defaults

- Prefer latest Angular, Angular Material, and Tailwind.
- This repository currently uses Angular 21; preserve the versions declared in `package.json` and its lockfile.
- Use semantic HTML and accessible controls, labels, names, focus states, and keyboard behavior.
- Prefer standalone Angular components, signals, `inject()`, `OnPush`, and separate HTML templates.
- Prefer Angular control flow (`@if`, `@for`) over structural directives.
- Use Material components and tokens where they fit; use Tailwind for the remaining styling.

## Validation and safety

- Validate inputs at trust boundaries.
- Never read, print, commit, or expose secrets from `.env*`, credentials, secret, key, or certificate files.
- Preserve data and user changes; avoid destructive commands unless explicitly requested.
- Test public behavior and error paths. Non-trivial logic leaves one runnable check; trivial one-liners need no test.
- Run the narrowest relevant formatter, linter, type check, build, or test after changes.

## Planning and delivery

- For ambiguous or multi-step work, write a short plan before editing.
- Before implementation, identify the files and callers affected.
- After implementation, review the diff for scope, regressions, accessibility, and unnecessary complexity.
- If a deliberate simplification has a known ceiling, mark it with `ponytail:` and name the upgrade path.

## User preferences

The repository owner prefers concise, practical answers; functional declarative TypeScript/JavaScript; isolated side effects; latest Angular with Angular Material and Tailwind; accessible HTML; and no React.js or JSX/TSX.

## Skills

Load only the skill relevant to the current task. Skills live in `.agents/skills/` and are copied from the reusable skills found in `cursus-ui-apps`.

## Cursor rules

Portable, file-scoped conventions live in `.cursor/rules/`. Use the functional TypeScript, file naming, and module design rules where they fit; adapt them to the target repository's existing conventions.
