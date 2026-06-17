# @dubium/eslint-config

Opinionated ESLint flat config for TypeScript, React, NestJS, and Node.js projects.

## Install

```bash
npm install -D @dubium/eslint-config eslint typescript
```

Minimum versions:

```txt
Node.js     >=22.13.0
ESLint      >=10.5.0 <11
TypeScript  >=6.0.3 <7
```

## Quick start

### TypeScript / Node / NestJS

```js
import { defineConfig } from "eslint/config"
import { nestStrict } from "@dubium/eslint-config/nest"

export default defineConfig([
 ...nestStrict,
])
```

### React + Vite

```js
import { defineConfig } from "eslint/config"
import {
 browserRuntime,
 nodeRuntime,
 reactRecommended,
} from "@dubium/eslint-config"

export default defineConfig([
 ...reactRecommended,
 ...browserRuntime,
 ...nodeRuntime,
])
```

### React + Vite + Vitest

```js
import { defineConfig } from "eslint/config"
import {
 browserRuntime,
 nodeRuntime,
 reactRecommended,
 vitestRuntime,
} from "@dubium/eslint-config"

export default defineConfig([
 ...reactRecommended,
 ...browserRuntime,
 ...nodeRuntime,
 ...vitestRuntime,
])
```

### NestJS + Jest

```js
import { defineConfig } from "eslint/config"
import {
 jestRuntime,
 nestStrict,
 nodeRuntime,
} from "@dubium/eslint-config"

export default defineConfig([
 ...nestStrict,
 ...nodeRuntime,
 ...jestRuntime,
])
```

### React + Jest

```js
import { defineConfig } from "eslint/config"
import {
 browserRuntime,
 jestRuntime,
 reactRecommended,
} from "@dubium/eslint-config"

export default defineConfig([
 ...reactRecommended,
 ...browserRuntime,
 ...jestRuntime,
])
```

## Exports

```txt
commonComments
commonIgnores
commonJavascript
commonSorting
commonStylistic

typescriptBase
typescriptSemantic
typescriptSorting
typescriptStrict

browserRuntime
nodeRuntime
vitestRuntime
jestRuntime

reactCore
reactStylistic
reactRecommended
reactStrict

nestConventions
nestRecommended
nestStrict

recommended
recommendedFast
legacy
```

## Runtime configs

Runtime globals are separated from framework configs:

```txt
reactCore       — React/JSX rules only
browserRuntime  — browser globals
nodeRuntime     — Node.js globals and Node rules
vitestRuntime   — Vitest globals
jestRuntime     — Jest globals and Jest test rules
```

## Sorting

Sorting is based on `eslint-plugin-perfectionist`.

The package provides its own sorting standard. If another sorting style is required, skip `commonSorting` / `typescriptSorting` and use one of the `eslint-plugin-perfectionist` presets:

```txt
recommended-alphabetical
recommended-natural
recommended-line-length
recommended-custom
```

## Principles

```txt
1. No export *.
2. No default export in internal modules.
3. Common rules are separated from runtime/framework rules.
4. React is not mixed with browser globals.
5. Type-aware TypeScript rules live in semantic/strict layers.
6. Deprecated/unstable rules are not enabled without a reason.
```
