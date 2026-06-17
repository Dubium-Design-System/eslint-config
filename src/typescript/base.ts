import tseslint from "typescript-eslint"

export const typescriptBase = [
	...tseslint.configs.recommended,
	{
		name: "@dubium/eslint-config/typescript/base",
		files: [ "**/*.{ts,tsx,mts,cts}" ],
		languageOptions: {
			parser: tseslint.parser,
		},
		rules: {
			/**
			 * RU: Отключаем core-правило для TypeScript, потому что TS-версия лучше понимает optional/default параметры.
			 * EN: Disable the core rule for TypeScript because the TS version better understands optional/default parameters.
			 *
			 * Docs: https://eslint.org/docs/latest/rules/default-param-last
			 */
			"default-param-last": "off",

			/**
			 * RU: Требует размещать параметры со значением по умолчанию после обязательных параметров с учётом TypeScript-синтаксиса.
			 * EN: Requires default parameters to be placed after required parameters with TypeScript syntax awareness.
			 *
			 * Docs: https://typescript-eslint.io/rules/default-param-last/
			 */
			"@typescript-eslint/default-param-last": "error",

			/**
			 * RU: Отключаем core-правило для TypeScript, потому что TS-версия дополнительно понимает generic Array constructor.
			 * EN: Disable the core rule for TypeScript because the TS version also understands generic Array constructors.
			 *
			 * Docs: https://eslint.org/docs/latest/rules/no-array-constructor
			 */
			"no-array-constructor": "off",

			/**
			 * RU: Запрещает Array constructor, чтобы вместо неоднозначного Array(...) использовать литерал массива [].
			 * EN: Disallows the Array constructor so array literals [] are used instead of ambiguous Array(...).
			 *
			 * Docs: https://typescript-eslint.io/rules/no-array-constructor/
			 */
			"@typescript-eslint/no-array-constructor": "error",

			/**
			 * RU: Отключаем core-правило для TypeScript, потому что TS-версия корректнее обрабатывает TypeScript-специфичный синтаксис.
			 * EN: Disable the core rule for TypeScript because the TS version handles TypeScript-specific syntax more correctly.
			 *
			 * Docs: https://eslint.org/docs/latest/rules/no-empty-function
			 */
			"no-empty-function": "off",

			/**
			 * RU: Запрещает пустые функции, чтобы заглушки и незавершённая логика были явно описаны комментарием.
			 * EN: Disallows empty functions so stubs and unfinished logic are explicitly described with a comment.
			 *
			 * Docs: https://typescript-eslint.io/rules/no-empty-function/
			 */
			"@typescript-eslint/no-empty-function": "error",

			/**
			 * RU: Отключаем core-правило, потому что импорты в TypeScript уже контролируются consistent-type-imports и TS-aware правилами.
			 * EN: Disable the core rule because TypeScript imports are already handled by consistent-type-imports and TS-aware rules.
			 *
			 * Docs: https://eslint.org/docs/latest/rules/no-duplicate-imports
			 */
			"no-duplicate-imports": "off",

			/**
			 * RU: Отключаем core-правило для TypeScript, потому что TS-версия из recommended config корректнее обрабатывает декларации типов.
			 * EN: Disable the core rule for TypeScript because the TS-aware recommended rule handles type declarations more correctly.
			 *
			 * Docs: https://eslint.org/docs/latest/rules/no-redeclare
			 */
			"no-redeclare": "off",

			/**
			 * RU: Отключаем no-undef для TypeScript, потому что проверку неизвестных имён выполняет TypeScript compiler.
			 * EN: Disable no-undef for TypeScript because unknown names are checked by the TypeScript compiler.
			 *
			 * Docs: https://eslint.org/docs/latest/rules/no-undef
			 */
			"no-undef": "off",

			/**
			 * RU: Отключаем core-правило для TypeScript, потому что используется @typescript-eslint/no-unused-vars.
			 * EN: Disable the core rule for TypeScript because @typescript-eslint/no-unused-vars is used instead.
			 *
			 * Docs: https://eslint.org/docs/latest/rules/no-unused-vars
			 */
			"no-unused-vars": "off",

			/**
			 * RU: Отключаем core-правило для TypeScript, потому что TS-версия и compiler корректнее учитывают type/value namespaces.
			 * EN: Disable the core rule for TypeScript because TS-aware rules and the compiler better handle type/value namespaces.
			 *
			 * Docs: https://eslint.org/docs/latest/rules/no-use-before-define
			 */
			"no-use-before-define": "off",

			/**
			 * RU: Требует Record вместо index signature для единообразного описания словарей.
			 * EN: Requires Record instead of index signatures for consistent dictionary types.
			 *
			 * Docs: https://typescript-eslint.io/rules/consistent-indexed-object-style/
			 */
			"@typescript-eslint/consistent-indexed-object-style": [
				"error",
				"record",
			],

			/**
			 * RU: Требует type-only imports для типов, чтобы runtime imports оставались явными.
			 * EN: Requires type-only imports for types so runtime imports stay explicit.
			 *
			 * Docs: https://typescript-eslint.io/rules/consistent-type-imports/
			 */
			"@typescript-eslint/consistent-type-imports": [
				"error",
				{
					fixStyle: "separate-type-imports",
					prefer: "type-imports",
				},
			],

			/**
			 * RU: Предупреждает об any, чтобы типизация оставалась явной, но не блокировала разработку.
			 * EN: Warns about any so typing stays explicit without blocking development.
			 *
			 * Docs: https://typescript-eslint.io/rules/no-explicit-any/
			 */
			"@typescript-eslint/no-explicit-any": "warn",

			/**
			 * RU: Запрещает явно писать типы, которые TypeScript может безопасно вывести сам.
			 * EN: Disallows explicit types that TypeScript can safely infer by itself.
			 *
			 * Docs: https://typescript-eslint.io/rules/no-inferrable-types/
			 */
			"@typescript-eslint/no-inferrable-types": "error",

			/**
			 * RU: Запрещает лишнее ограничение generic-параметра через unknown/any.
			 * EN: Disallows unnecessary generic constraints such as unknown/any.
			 *
			 * Docs: https://typescript-eslint.io/rules/no-unnecessary-type-constraint/
			 */
			"@typescript-eslint/no-unnecessary-type-constraint": "error",

			/**
			 * RU: Запрещает небезопасное слияние деклараций class/interface.
			 * EN: Disallows unsafe class/interface declaration merging.
			 *
			 * Docs: https://typescript-eslint.io/rules/no-unsafe-declaration-merging/
			 */
			"@typescript-eslint/no-unsafe-declaration-merging": "error",

			/**
			 * RU: Предупреждает о неиспользуемых переменных, разрешая имена с _ для намеренно неиспользуемых значений.
			 * EN: Warns about unused variables while allowing _ names for intentionally unused values.
			 *
			 * Docs: https://typescript-eslint.io/rules/no-unused-vars/
			 */
			"@typescript-eslint/no-unused-vars": [
				"warn",
				{
					argsIgnorePattern: "^_",
					caughtErrorsIgnorePattern: "^_",
					varsIgnorePattern: "^_",
				},
			],

			/**
			 * RU: Требует as const вместо ручного literal type assertion.
			 * EN: Requires as const instead of manual literal type assertions.
			 *
			 * Docs: https://typescript-eslint.io/rules/prefer-as-const/
			 */
			"@typescript-eslint/prefer-as-const": "error",
		},
	},
	{
		name: "@dubium/eslint-config/typescript/base/declarations",
		files: [ "**/*.d.ts" ],
		rules: {
			/**
			 * RU: Отключает требование interface в .d.ts, потому что declaration files часто отражают внешний API.
			 * EN: Disables the interface requirement in .d.ts files because declaration files often mirror external APIs.
			 *
			 * Docs: https://typescript-eslint.io/rules/consistent-type-definitions/
			 */
			"@typescript-eslint/consistent-type-definitions": "off",

			/**
			 * RU: Разрешает пустые object types в .d.ts, где они могут быть частью declaration merging или внешнего API.
			 * EN: Allows empty object types in .d.ts where they may be part of declaration merging or external APIs.
			 *
			 * Docs: https://typescript-eslint.io/rules/no-empty-object-type/
			 */
			"@typescript-eslint/no-empty-object-type": "off",

			/**
			 * RU: Разрешает any в .d.ts, потому что declaration files могут описывать внешние или динамические API.
			 * EN: Allows any in .d.ts because declaration files may describe external or dynamic APIs.
			 *
			 * Docs: https://typescript-eslint.io/rules/no-explicit-any/
			 */
			"@typescript-eslint/no-explicit-any": "off",
		},
	},
]
