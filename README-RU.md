# @dubium/eslint-config

**Язык:** [English](./README.md) | Русский

Opinionated ESLint flat config для TypeScript, React, NestJS, Node.js и browser-проектов.

Пакет сделан как набор composable presets. Framework-правила, runtime globals, тестовые globals и совместимость с форматтерами разделены намеренно, чтобы каждый проект подключал только то, что действительно использует.

## Требования

```txt
Node.js     >=22.13.0
ESLint      >=10.5.0 <11
TypeScript  >=6.0.3 <7
```

Пакет ESM-only и поддерживает только ESLint flat config.

## Установка

```bash
npm install -D @dubium/eslint-config eslint typescript
```

Для текущего alpha-релиза:

```bash
npm install -D @dubium/eslint-config@alpha eslint typescript
```

Если проект использует Prettier, совместимость с Prettier подключается отдельно:

```bash
npm install -D eslint-config-prettier prettier
```

Если нужно показывать Prettier-ошибки как ESLint-ошибки, дополнительно установи `eslint-plugin-prettier`:

```bash
npm install -D eslint-config-prettier eslint-plugin-prettier prettier
```

## Быстрый старт

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

 // Должен быть последним, если проект форматируется через Prettier.
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

Используй этот preset, если type-aware linting слишком тяжёлый или в проекте пока нет стабильной TypeScript project setup.

```js
import { defineConfig } from "eslint/config"

import { recommendedFast } from "@dubium/eslint-config"

export default defineConfig([...recommendedFast])
```

## Опциональные runtime presets

Runtime presets не включаются в React/Nest presets автоматически. Подключай их только тогда, когда проекту нужны соответствующие globals или runtime-specific правила.

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

Доступные runtime presets:

| Preset | Назначение |
|---|---|
| `browserRuntime` | Browser globals: `window`, `document`, `localStorage`, `HTMLElement`. |
| `nodeRuntime` | Node.js globals и Node-specific правила из `eslint-plugin-n`. |
| `vitestRuntime` | Vitest globals для `*.test.*`, `*.spec.*`, `test/**` и `tests/**`. |
| `jestRuntime` | Jest globals и Jest test rules. |

## Config-файлы

Base-правила запрещают default export в обычных TypeScript/JavaScript модулях. Конфигурационные файлы часто используют `export default`, поэтому если lint-команда проверяет корень проекта через `eslint .`, добавь небольшой локальный override:

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

Этот override должен оставаться локальным. Пакет не навязывает конкретный bundler, runtime или структуру config-файлов.

## Prettier

Prettier намеренно не встроен в presets.

Рекомендуемый вариант — использовать ESLint для качества кода, а Prettier запускать отдельным форматтером.

```bash
npm install -D eslint-config-prettier prettier
```

```js
import { defineConfig } from "eslint/config"

import { reactStrict } from "@dubium/eslint-config"

import eslintConfigPrettier from "eslint-config-prettier"

export default defineConfig([
 ...reactStrict,

 // Должен быть последним, если проект форматируется через Prettier.
 eslintConfigPrettier,
])
```

Рекомендуемые scripts:

```json
{
 "scripts": {
  "lint": "eslint .",
  "format": "prettier --write .",
  "format:check": "prettier --check ."
 }
}
```

Если нужно, чтобы Prettier-ошибки отображались как ESLint-ошибки, используй `eslint-plugin-prettier/recommended`:

```bash
npm install -D eslint-config-prettier eslint-plugin-prettier prettier
```

```js
import { defineConfig } from "eslint/config"

import { reactStrict } from "@dubium/eslint-config"

import prettierRecommended from "eslint-plugin-prettier/recommended"

export default defineConfig([
 ...reactStrict,

 // Подключает eslint-plugin-prettier и eslint-config-prettier.
 // Должен быть последним.
 prettierRecommended,
])
```

Для большинства проектов лучше использовать `eslint-config-prettier` и отдельный script `prettier --write .`.

## Presets

### Base presets

| Preset | Описание |
|---|---|
| `recommendedFast` | Быстрый TypeScript/JavaScript config без type-aware semantic rules. |
| `recommended` | Основной TypeScript/JavaScript config с type-aware semantic rules. |
| `legacy` | Более мягкий migration preset на базе `recommendedFast`. |

### TypeScript layers

| Preset | Описание |
|---|---|
| `typescriptBase` | TypeScript parser и syntax-aware правила. |
| `typescriptSemantic` | Type-aware правила через TypeScript project service. |
| `typescriptSorting` | TypeScript-specific sorting rules. |
| `typescriptStrict` | `typescriptBase` + `typescriptSemantic` + дополнительные strict-ограничения. |

### React presets

| Preset | Описание |
|---|---|
| `reactRecommended` | `recommended` + React core rules + React hooks + React stylistic rules. |
| `reactStrict` | `reactRecommended` с более строгими React-правилами. |
| `reactCore` | React/JSX correctness rules. |
| `reactHooks` | React Hooks rules для hook-файлов и component-файлов. |
| `reactStylistic` | React stylistic rules, включая сортировку JSX props. |

`reactHooks` доступен из React subpath:

```js
import { reactHooks } from "@dubium/eslint-config/react"
```

### NestJS presets

| Preset | Описание |
|---|---|
| `nestRecommended` | Recommended TypeScript rules + NestJS conventions. |
| `nestStrict` | Более строгий NestJS preset. |
| `nestConventions` | NestJS naming и structure conventions. |

### Common layers

| Preset | Описание |
|---|---|
| `commonIgnores` | Стандартные ignored folders и generated outputs. |
| `commonJavascript` | JavaScript correctness rules и module restrictions. |
| `commonStylistic` | Stylistic rules из `@stylistic/eslint-plugin`. |
| `commonSorting` | Import/export sorting через `eslint-plugin-perfectionist`. |
| `commonComments` | Дисциплина `eslint-disable` и ESLint comments. |

## Import paths

В большинстве случаев достаточно root import:

```js
import { reactStrict, browserRuntime, vitestRuntime } from "@dubium/eslint-config"
```

Также доступны subpath imports:

```js
import { reactStrict } from "@dubium/eslint-config/react"
import { browserRuntime } from "@dubium/eslint-config/browser"
import { nodeRuntime } from "@dubium/eslint-config/node"
import { vitestRuntime } from "@dubium/eslint-config/vitest"
import { jestRuntime } from "@dubium/eslint-config/jest"
import { nestStrict } from "@dubium/eslint-config/nest"
```

Для advanced composition доступны более точечные subpath imports:

```js
import { reactHooks } from "@dubium/eslint-config/react/hooks"
import { typescriptSemantic } from "@dubium/eslint-config/typescript/semantic"
import { commonSorting } from "@dubium/eslint-config/common/sorting"
```

## Правила и соглашения

Конфиг намеренно закрепляет несколько проектных соглашений:

- нет `export *` из public API файлов;
- нет default export в обычных TypeScript/JavaScript модулях;
- direct default export разрешён в React-файлах для совместимости с `React.lazy(() => import(...))`;
- default re-export всё равно ограничен;
- для типов требуются type-only imports;
- сортировка выполняется через `eslint-plugin-perfectionist`;
- безопасность React Fast Refresh проверяется через `eslint-plugin-react-refresh`;
- React hooks проверяются отдельно от JSX/browser runtime;
- browser, Node.js, Vitest и Jest globals подключаются отдельными runtime-слоями.

## Сортировка

Сортировка построена на `eslint-plugin-perfectionist`.

Подключённые sorting layers:

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

Если проекту нужен другой стиль сортировки, используй более низкоуровневые layers вместо готовых presets или переопредели соответствующие правила локально.

## Лицензия

MIT
