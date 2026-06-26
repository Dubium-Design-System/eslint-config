# @dubium/eslint-config

**Language:** English | [Русский](https://github.com/Dubium-Design-System/eslint-config/blob/main/README-RU.md)

Opinionated ESLint flat config for TypeScript, React, NestJS, Node.js, and browser projects.

The package is built as a set of composable presets. Framework rules, runtime globals, test globals, and formatter compatibility are intentionally separated, so each project can opt in only to what it actually uses.

## Requirements

```txt
Node.js     >=22.13.0
ESLint      >=10.5.0 <11
TypeScript  >=6.0.3 <7
```

This package is ESM-only and supports only ESLint flat config.

## Installation

```bash
npm install -D @dubium/eslint-config eslint typescript
```

If the project uses Prettier, install Prettier compatibility separately:

```bash
npm install -D eslint-config-prettier prettier
```

If you want Prettier violations to be reported as ESLint errors, also install `eslint-plugin-prettier`:

```bash
npm install -D eslint-config-prettier eslint-plugin-prettier prettier
```

## Quick start

### React strict

```js
import { defineConfig } from "eslint/config"

import { reactStrict } from "@dubium/eslint-config"

export default defineConfig([...reactStrict])
```

### React strict + Prettier

```js
import { defineConfig } from "eslint/config"

import { reactStrict } from "@dubium/eslint-config"

import eslintConfigPrettier from "eslint-config-prettier"

export default defineConfig([
 ...reactStrict,

 // Keep last when the project is formatted by Prettier.
 eslintConfigPrettier,
])
```

### NestJS strict

```js
import { defineConfig } from "eslint/config"

import { nestStrict } from "@dubium/eslint-config"

export default defineConfig([...nestStrict])
```

### TypeScript recommended

```js
import { defineConfig } from "eslint/config"

import { recommended } from "@dubium/eslint-config"

export default defineConfig([...recommended])
```

### TypeScript fast recommended

Use this preset when type-aware linting is too expensive or the project does not have a stable TypeScript project setup yet.

```js
import { defineConfig } from "eslint/config"

import { recommendedFast } from "@dubium/eslint-config"

export default defineConfig([...recommendedFast])
```

## Optional runtime presets

Runtime presets are not included in React/Nest presets automatically. Add them only when the project needs their globals or runtime-specific rules.

```js
import { defineConfig } from "eslint/config"

import { browserRuntime, reactStrict, vitestRuntime } from "@dubium/eslint-config"

import eslintConfigPrettier from "eslint-config-prettier"

export default defineConfig([
 ...reactStrict,
 ...browserRuntime,
 ...vitestRuntime,
 eslintConfigPrettier,
])
```

Available runtime presets:

| Preset | Purpose |
|---|---|
| `browserRuntime` | Browser globals such as `window`, `document`, `localStorage`, `HTMLElement`. |
| `nodeRuntime` | Node.js globals and Node-specific rules from `eslint-plugin-n`. |
| `vitestRuntime` | Vitest globals for `*.test.*`, `*.spec.*`, `test/**`, and `tests/**`. |
| `jestRuntime` | Jest globals and Jest test rules. |

## Config files

Base rules disallow default exports in regular TypeScript/JavaScript modules. Config files commonly use `export default`, so if your lint command checks the project root with `eslint .`, add a small local override:

```js
import { defineConfig } from "eslint/config"

import { reactStrict } from "@dubium/eslint-config"

import eslintConfigPrettier from "eslint-config-prettier"

export default defineConfig([
 ...reactStrict,

 {
  files: [
   "eslint.config.{js,mjs,cjs,ts,mts,cts}",
   "*.config.{js,mjs,cjs,ts,mts,cts}",
  ],
  rules: {
   "no-restricted-exports": "off",
  },
 },

 eslintConfigPrettier,
])
```

Keep this override local. The package does not force a specific bundler, runtime, or config file structure.

## Prettier

Prettier is intentionally not bundled into the presets.

Recommended setup: use ESLint for code quality and Prettier as a separate formatter.

```bash
npm install -D eslint-config-prettier prettier
```

```js
import { defineConfig } from "eslint/config"

import { reactStrict } from "@dubium/eslint-config"

import eslintConfigPrettier from "eslint-config-prettier"

export default defineConfig([
 ...reactStrict,

 // Keep last when the project is formatted by Prettier.
 eslintConfigPrettier,
])
```

Recommended scripts:

```json
{
 "scripts": {
  "lint": "eslint .",
  "format": "prettier --write .",
  "format:check": "prettier --check ."
 }
}
```

If you explicitly want Prettier violations to be reported as ESLint errors, use `eslint-plugin-prettier/recommended`:

```bash
npm install -D eslint-config-prettier eslint-plugin-prettier prettier
```

```js
import { defineConfig } from "eslint/config"

import { reactStrict } from "@dubium/eslint-config"

import prettierRecommended from "eslint-plugin-prettier/recommended"

export default defineConfig([
 ...reactStrict,

 // Enables eslint-plugin-prettier and eslint-config-prettier.
 // Keep last.
 prettierRecommended,
])
```

For most projects, `eslint-config-prettier` plus a separate `prettier --write .` script is the preferred setup.

## Presets

### Base presets

| Preset | Description |
|---|---|
| `recommendedFast` | Fast TypeScript/JavaScript config without type-aware semantic rules. |
| `recommended` | Main TypeScript/JavaScript config with type-aware semantic rules. |
| `legacy` | Softer migration preset based on `recommendedFast`. |

### TypeScript layers

| Preset | Description |
|---|---|
| `typescriptBase` | TypeScript parser and syntax-aware rules. |
| `typescriptSemantic` | Type-aware rules using TypeScript project service. |
| `typescriptSorting` | TypeScript-specific sorting rules. |
| `typescriptStrict` | `typescriptBase` + `typescriptSemantic` + additional strict limits. |

### React presets

| Preset | Description |
|---|---|
| `reactRecommended` | `recommended` + React core rules + React hooks + React stylistic rules. |
| `reactStrict` | `reactRecommended` with stricter React rules. |
| `reactCore` | React/JSX correctness rules. |
| `reactHooks` | React Hooks rules for hook files and component files. |
| `reactStylistic` | React stylistic rules, including JSX prop sorting. |

`reactHooks` is available from the React subpath:

```js
import { reactHooks } from "@dubium/eslint-config/react"
```

### NestJS presets

| Preset | Description |
|---|---|
| `nestRecommended` | Recommended TypeScript rules + NestJS conventions. |
| `nestStrict` | Stricter NestJS preset. |
| `nestConventions` | NestJS naming and structure conventions. |

### Common layers

| Preset | Description |
|---|---|
| `commonIgnores` | Default ignored folders and generated outputs. |
| `commonJavascript` | JavaScript correctness rules and module restrictions. |
| `commonStylistic` | Stylistic rules from `@stylistic/eslint-plugin`. |
| `commonSorting` | Import/export sorting via `eslint-plugin-perfectionist`. |
| `commonComments` | ESLint disable/comment discipline. |

## Import paths

Most users can import from the root package:

```js
import { reactStrict, browserRuntime, vitestRuntime } from "@dubium/eslint-config"
```

Subpath imports are also available:

```js
import { reactStrict } from "@dubium/eslint-config/react"
import { browserRuntime } from "@dubium/eslint-config/browser"
import { nodeRuntime } from "@dubium/eslint-config/node"
import { vitestRuntime } from "@dubium/eslint-config/vitest"
import { jestRuntime } from "@dubium/eslint-config/jest"
import { nestStrict } from "@dubium/eslint-config/nest"
```

More granular subpaths are available for advanced composition:

```js
import { reactHooks } from "@dubium/eslint-config/react/hooks"
import { typescriptSemantic } from "@dubium/eslint-config/typescript/semantic"
import { commonSorting } from "@dubium/eslint-config/common/sorting"
```

## Rules and conventions

The config intentionally enforces several project conventions:

- no `export *` from public API files;
- no default exports in regular TypeScript/JavaScript modules;
- direct default export is allowed in React files for `React.lazy(() => import(...))` compatibility;
- default re-exports are still restricted;
- type-only imports are required for types;
- sorting is handled by `eslint-plugin-perfectionist`;
- React Fast Refresh safety is checked with `eslint-plugin-react-refresh`;
- React Hooks are checked separately from JSX/browser runtime;
- browser, Node.js, Vitest, and Jest globals are opt-in runtime layers.

## Sorting

Sorting is based on `eslint-plugin-perfectionist`.

Included sorting layers:

```txt
commonSorting:
  sort-imports
  sort-named-imports
  sort-exports
  sort-named-exports
  sort-import-attributes
  sort-export-attributes

typescriptSorting:
  sort-enums
  sort-interfaces
  sort-object-types
  sort-union-types
  sort-intersection-types

reactStylistic:
  sort-jsx-props
```

If a project needs a different sorting style, use lower-level layers instead of ready-made presets or override the corresponding rules locally.

## License

MIT
