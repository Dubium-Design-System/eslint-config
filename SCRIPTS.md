# Scripts

Краткое описание npm-скриптов проекта `@dubium/eslint-config`.

## Основные команды

### `npm run clean`

Удаляет временные и собранные файлы:

```bash
rimraf dist *.tgz
```

Использовать, когда нужно очистить проект перед новой сборкой.

Обычно вручную запускать не нужно, потому что `clean` автоматически вызывается перед упаковкой пакета через `prepack`.

---

### `npm run build`

Собирает TypeScript-код в папку `dist`:

```bash
tsc -p tsconfig.build.json
```

Использовать перед проверкой пакета или если нужно вручную убедиться, что проект собирается без ошибок.

---

### `npm run prepack`

Запускает очистку, сборку и self-lint:

```bash
npm run clean && npm run build && npm run lint
```

Эта команда автоматически выполняется перед:

```bash
npm pack
npm publish
```

Вручную обычно не запускается.

---

## Проверка пакета перед публикацией

### `npm run pack:check`

Показывает, какие файлы попадут в npm-пакет:

```bash
npm pack --dry-run
```

Использовать перед публикацией, чтобы проверить, что в пакет попадут только нужные файлы: `dist`, `README.md`, `LICENSE`, `package.json` и т.п.

---

### `npm run pack:local`

Создаёт локальный `.tgz` архив пакета:

```bash
npm pack
```

Использовать, когда нужно протестировать пакет в другом проекте без публикации в npm.

Пример:

```bash
npm run pack:local
```

После этого в другом проекте:

```bash
npm i -D ../path/to/dubium-eslint-config-2.0.0-alpha.0.tgz
```

---

### `npm run lint:inspect`

Открывает инспектор итоговой ESLint-конфигурации:

```bash
eslint --inspect-config
```

Использовать, когда нужно посмотреть, какие правила реально применяются в проекте.

---

## Версионирование

Важно: команды `version:*` меняют версию в `package.json` и создают git tag.

Перед запуском `npm version` git должен быть чистым:

```bash
git status
```

Если есть изменения, их нужно закоммитить:

```bash
git add .
git commit -m "chore: prepare release"
```

---

### `npm run version:alpha`

Поднимает следующую alpha-версию:

```bash
npm version prerelease --preid=alpha
```

Пример:

```txt
2.0.0-alpha.0 -> 2.0.0-alpha.1
```

Использовать для ранних экспериментальных версий.

---

### `npm run version:beta`

Поднимает следующую beta-версию:

```bash
npm version prerelease --preid=beta
```

Пример:

```txt
2.0.0-beta.0 -> 2.0.0-beta.1
```

Использовать, когда пакет уже можно тестировать в реальных проектах.

---

### `npm run version:patch`

Поднимает patch-версию:

```bash
npm version patch
```

Пример:

```txt
2.0.0 -> 2.0.1
```

Использовать для исправлений без изменения API и поведения конфига.

Примеры:

- исправили README;
- исправили typo;
- починили export path;
- исправили ошибку в настройке правила.

---

### `npm run version:minor`

Поднимает minor-версию:

```bash
npm version minor
```

Пример:

```txt
2.0.0 -> 2.1.0
```

Использовать для совместимых улучшений.

Примеры:

- добавили новый preset;
- добавили новый export;
- добавили новое правило в `warn`;
- добавили новый legacy-конфиг.

---

### `npm run version:major`

Поднимает major-версию:

```bash
npm version major
```

Пример:

```txt
2.0.0 -> 3.0.0
```

Использовать для breaking changes.

Примеры:

- изменили минимальную версию Node.js;
- изменили минимальную версию ESLint;
- удалили export;
- переименовали preset;
- перевели важное правило с `warn` на `error`;
- добавили новое обязательное `error`-правило в основной preset.

---

## Публикация

### `npm run publish:alpha`

Публикует текущую версию в npm с тегом `alpha`:

```bash
npm publish --access=public --tag alpha
```

Установка в другом проекте:

```bash
npm i -D @dubium/eslint-config@alpha
```

Использовать для ранней проверки пакета.

---

### `npm run publish:beta`

Публикует текущую версию в npm с тегом `beta`:

```bash
npm publish --access=public --tag beta
```

Установка в другом проекте:

```bash
npm i -D @dubium/eslint-config@beta
```

Использовать для тестирования в реальных проектах перед стабильным релизом.

---

### `npm run publish:next`

Публикует текущую версию в npm с тегом `next`:

```bash
npm publish --access=public --tag next
```

Установка в другом проекте:

```bash
npm i -D @dubium/eslint-config@next
```

Использовать для экспериментального канала, если нужно отдельно от `alpha` и `beta`.

---

### `npm run publish:release`

Публикует текущую версию как стабильную:

```bash
npm publish --access=public --tag latest
```

Установка в другом проекте:

```bash
npm i -D @dubium/eslint-config
```

Использовать только после проверки alpha/beta-версий.

---

## Полные release-команды

### `npm run release:alpha`

Сначала поднимает alpha-версию, потом публикует её с тегом `alpha`:

```bash
npm run version:alpha && npm run publish:alpha
```

Использовать для следующих alpha-версий.

Для самой первой alpha лучше явно указать версию:

```bash
npm version 2.0.0-alpha.0
npm run publish:alpha
```

---

### `npm run release:beta`

Сначала поднимает beta-версию, потом публикует её с тегом `beta`:

```bash
npm run version:beta && npm run publish:beta
```

Использовать для следующих beta-версий.

Для первой beta лучше явно указать версию:

```bash
npm version 2.0.0-beta.0
npm run publish:beta
```

---

### `npm run release:patch`

Поднимает patch-версию и публикует стабильный релиз:

```bash
npm run version:patch && npm run publish:release
```

Использовать для небольших исправлений стабильной версии.

---

### `npm run release:minor`

Поднимает minor-версию и публикует стабильный релиз:

```bash
npm run version:minor && npm run publish:release
```

Использовать для совместимых улучшений стабильной версии.

---

### `npm run release:major`

Поднимает major-версию и публикует стабильный релиз:

```bash
npm run version:major && npm run publish:release
```

Использовать для breaking changes.

Для крупных изменений лучше сначала выпускать `alpha` и `beta`, а не сразу `major`.

---

## Проверка npm-тегов

### `npm run tags`

Показывает npm-теги пакета:

```bash
npm dist-tag ls @dubium/eslint-config
```

Пример результата:

```txt
latest: 1.0.15
alpha: 2.0.0-alpha.2
beta: 2.0.0-beta.1
next: 2.0.0-beta.1
```

Использовать после публикации, чтобы убедиться, что версия попала в правильный канал.

---

## Рекомендуемый workflow

### Первая alpha

```bash
git status
git add .
git commit -m "chore: prepare eslint config v2"
npm version 2.0.0-alpha.0
npm run publish:alpha
npm run tags
```

### Следующая alpha

```bash
npm run release:alpha
npm run tags
```

### Первая beta

```bash
npm version 2.0.0-beta.0
npm run publish:beta
npm run tags
```

### Следующая beta

```bash
npm run release:beta
npm run tags
```

### Стабильный релиз

```bash
npm version 2.0.0
npm run publish:release
npm run tags
```

---

## Главное правило

Prerelease-версии нельзя публиковать без тега.

Неправильно:

```bash
npm publish
```

Правильно:

```bash
npm run publish:alpha
npm run publish:beta
npm run publish:next
```

Стабильный релиз публикуется через:

```bash
npm run publish:release
```

## Последовательный релиз

```bash
npm run build
npm run lint
npm run pack:check

git status
git add .
git commit -m "fix: prepare beta release"

npm version prerelease --preid beta

npm publish --access public --tag beta

git push --follow-tags
```

## Релиз

```bash
npm run build
npm run lint
npm run pack:check

git status
git add .
git commit -m "chore: release 2.0.1"

npm version 2.0.1

npm publish --access public --tag latest

git push --follow-tags
```
