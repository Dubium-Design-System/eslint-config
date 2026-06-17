# @dubium/eslint-config

Opinionated ESLint flat config для TypeScript, React, NestJS и Node.js проектов.

## Установка

```bash
npm install -D @dubium/eslint-config eslint typescript
```

Минимальные версии:

```txt
Node.js     >=22.13.0
ESLint      >=10.5.0 <11
TypeScript  >=6.0.3 <7
```

## Быстрый старт

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

 // Для src/**/*.tsx, где есть window/document/fetch/etc.
 ...browserRuntime,

 // Для vite.config.ts, scripts, node:* imports.
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

## Экспорты

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

## Runtime-конфиги

Runtime-глобалы вынесены отдельно от framework-конфигов:

```txt
reactCore       — только React/JSX rules
browserRuntime  — browser globals
nodeRuntime     — Node.js globals и node rules
vitestRuntime   — Vitest globals
jestRuntime     — Jest globals и Jest test rules
```

Так React не привязан жёстко к browser runtime: его можно использовать для SPA, SSR, тестов и отдельных JSX-пакетов.

## Сортировка

Сортировка построена на `eslint-plugin-perfectionist`.

Внутри пакета есть свой стандарт:

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

Если нужен другой стиль сортировки, можно не подключать `commonSorting` / `typescriptSorting` и использовать presets самого `eslint-plugin-perfectionist`:

```txt
recommended-alphabetical
recommended-natural
recommended-line-length
recommended-custom
```

## Принципы

```txt
1. Нет export *.
2. Нет default export во внутренних модулях.
3. Общие правила отделены от runtime/framework правил.
4. React не смешан с browser globals.
5. Type-aware TypeScript rules лежат в semantic/strict слоях.
6. Deprecated/нестабильные правила не включаются без причины.
```
