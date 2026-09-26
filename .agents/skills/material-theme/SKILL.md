---
name: material-theme
description: Apply and adjust Angular Material M3 theme tokens for this project (quaestor-ui-app). Covers form-field, select, button, chips, and other component overrides using mat.*-overrides() mixins in styles.scss. Use when the user mentions Material theming, token overrides, outlined field colors, component styling, or wants to adjust how Angular Material components look.
---

# Angular Material Theming — Quaestor UI App

## Project theme files

- **Main entry**: `apps/quaestor-ui-app/src/styles.scss`
- **Palette/variables**: `apps/quaestor-ui-app/src/_variables.scss` (imported as `$_palettes`, `$primary-palette`, etc.)
- **M3 theme definition**: `apps/quaestor-ui-app/src/quaestor-m3-V4-theme.scss`
- **Tailwind config**: `apps/quaestor-ui-app/src/tailwind.css`

All component overrides live inside the `html, body { @include mat.theme(...) { ... } }` block in `styles.scss`.

## Override pattern

```scss
@include mat.form-field-overrides((
  outlined-outline-color: oklch(87.2% 0.01 258.338), // gray-300
));

@include mat.select-overrides((
  enabled-trigger-text-color: oklch(87.2% 0.01 258.338),
));
```

Use `mat.{component}-overrides()` — never override raw CSS variables directly unless a token doesn't exist.

## Tailwind color references (oklch)

| Tailwind | oklch |
|---|---|
| gray-300 | `oklch(87.2% 0.01 258.338)` |
| gray-400 | `oklch(70.7% 0.015 261.32)` |
| gray-500 | `oklch(55.1% 0.027 264.364)` |
| theme-red | `oklch(0.3838 0.1541 19.85)` (defined as `--color-theme-red`) |

Palette map values: `map.get($_palettes, primary, 50)`, `map.get($_palettes, neutral, 92)`, etc.

## form-field-overrides tokens (outlined)

| Token | Controls |
|---|---|
| `outlined-outline-color` | Border at rest |
| `outlined-focus-outline-color` | Border when focused (default: primary) |
| `outlined-hover-outline-color` | Border on hover (default: on-surface) |
| `outlined-label-text-color` | Floating/resting label at rest |
| `outlined-focus-label-text-color` | Label when focused |
| `outlined-hover-label-text-color` | Label on hover |
| `outlined-input-text-color` | Typed text inside control |
| `outlined-input-text-placeholder-color` | Placeholder text |
| `outlined-outline-width` | Border width at rest (default: 1px) |
| `outlined-focus-outline-width` | Border width when focused (default: 2px) |
| `outlined-container-shape` | Border radius |
| `outlined-label-text-size` | Label font size |
| `outlined-caret-color` | Cursor caret |
| `outlined-disabled-outline-color` | Border when disabled |
| `outlined-disabled-label-text-color` | Label when disabled |
| `outlined-disabled-input-text-color` | Text when disabled |
| `outlined-error-outline-color` | Border in error state |
| `outlined-error-label-text-color` | Label in error state |
| `outlined-error-focus-outline-color` | Border focused+error |
| `outlined-error-focus-label-text-color` | Label focused+error |
| `outlined-error-hover-outline-color` | Border hover+error |
| `outlined-error-hover-label-text-color` | Label hover+error |

## form-field-overrides tokens (shared/other)

| Token | Controls |
|---|---|
| `container-height` | Control height (currently 40px) |
| `container-text-size` | Input font size (currently 15px) |
| `enabled-select-arrow-color` | Select dropdown chevron at rest |
| `focus-select-arrow-color` | Select chevron when focused |
| `leading-icon-color` | Prefix icon color |
| `trailing-icon-color` | Suffix icon color |
| `focus-state-layer-opacity` | Focus ripple opacity (currently 0) |
| `hover-state-layer-opacity` | Hover ripple opacity (currently 0.01) |
| `error-text-color` | Error message text |
| `filled-container-color` | Fill variant background |

## select-overrides tokens

| Token | Controls |
|---|---|
| `enabled-trigger-text-color` | Selected value text at rest |
| `placeholder-text-color` | Placeholder text when nothing selected |
| `enabled-arrow-color` | Dropdown arrow at rest |
| `focused-arrow-color` | Arrow when focused (default: primary) |
| `disabled-trigger-text-color` | Text when disabled |
| `panel-background-color` | Options dropdown panel bg |
| `trigger-text-size` | Trigger font size (currently 15px) |

## Current de-emphasis pattern (gray-300 at rest)

The app intentionally de-emphasizes outlined controls at rest with a two-tone approach:

- **Outline border** → gray-300 (`oklch(87.2% 0.01 258.338)`): `outlined-outline-color`
- **Label/placeholder/trigger text** → gray-500 (`oklch(55.1% 0.027 264.364)`): `outlined-label-text-color`, `outlined-input-text-placeholder-color`, `enabled-select-arrow-color` (form-field), `enabled-trigger-text-color`, `placeholder-text-color` (select)

Focus/hover states are left at their M3 defaults so controls still respond clearly to interaction.

## Reference docs

- Form field tokens: https://material.angular.io/components/form-field/styling
- Select tokens: https://material.angular.io/components/select/styling
- Full component list: https://material.angular.io/components/categories
