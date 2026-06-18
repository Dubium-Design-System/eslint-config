import process from "node:process"
import tseslint from "typescript-eslint"

export const typescriptSemantic = [
	...tseslint.configs.recommendedTypeChecked,
	{
		name: "@dubium/eslint-config/typescript/semantic/setup",
		files: ["**/*.{ts,tsx,mts,cts}"],
		languageOptions: {
			parser: tseslint.parser,
			parserOptions: {
				projectService: true,
				tsconfigRootDir: process.cwd(),
			},
		},
	},
	{
		name: "@dubium/eslint-config/typescript/semantic/rules",
		files: ["**/*.{ts,tsx,mts,cts}"],
		rules: {
			/**
			 * RU: Отключаем core-правило для TypeScript, потому что TS-версия учитывает типы, index signatures и private/protected members.
			 * EN: Disable the core rule for TypeScript because the TS version understands types, index signatures, and private/protected members.
			 *
			 * Docs: https://eslint.org/docs/latest/rules/dot-notation
			 */
			"dot-notation": "off",

			/**
			 * RU: Предупреждает, если вместо bracket notation можно безопасно использовать dot notation.
			 * EN: Warns when dot notation can be safely used instead of bracket notation.
			 *
			 * Docs: https://typescript-eslint.io/rules/dot-notation/
			 */
			"@typescript-eslint/dot-notation": [
				"warn",
				{
					allowKeywords: true,
					allowPrivateClassPropertyAccess: false,
					allowProtectedClassPropertyAccess: false,
					allowIndexSignaturePropertyAccess: false,
				},
			],

			/**
			 * RU: Отключаем core-правило для TypeScript, потому что используется TS-aware версия.
			 * EN: Disable the core rule for TypeScript because the TS-aware version is used instead.
			 *
			 * Docs: https://eslint.org/docs/latest/rules/no-loop-func
			 */
			"no-loop-func": "off",

			/**
			 * RU: Запрещает функции внутри циклов, если они небезопасно замыкаются на изменяемые переменные внешней области.
			 * EN: Disallows functions inside loops when they unsafely close over modified variables from the outer scope.
			 *
			 * Docs: https://typescript-eslint.io/rules/no-loop-func/
			 */
			"@typescript-eslint/no-loop-func": "error",

			/**
			 * RU: Отключаем core-правило для TypeScript, потому что TS-версия корректнее обрабатывает TypeScript-синтаксис.
			 * EN: Disable the core rule for TypeScript because the TS version handles TypeScript syntax more correctly.
			 *
			 * Docs: https://eslint.org/docs/latest/rules/no-shadow
			 */
			"no-shadow": "off",

			/**
			 * RU: Запрещает перекрывать переменные из внешней области видимости.
			 * EN: Disallows shadowing variables declared in an outer scope.
			 *
			 * Docs: https://typescript-eslint.io/rules/no-shadow/
			 */
			"@typescript-eslint/no-shadow": [
				"error",
				{
					hoist: "functions-and-types",
					ignoreTypeValueShadow: true,
					ignoreFunctionTypeParameterNameValueShadow: true,
				},
			],

			/**
			 * RU: Отключаем core-правило для TypeScript, потому что используется @typescript-eslint/only-throw-error.
			 * EN: Disable the core rule for TypeScript because @typescript-eslint/only-throw-error is used instead.
			 *
			 * Docs: https://eslint.org/docs/latest/rules/no-throw-literal
			 */
			"no-throw-literal": "off",

			/**
			 * RU: Запрещает выбрасывать не-Error значения, используя TypeScript-типы для более точной проверки.
			 * EN: Disallows throwing non-Error values using TypeScript types for more precise checking.
			 *
			 * Docs: https://typescript-eslint.io/rules/only-throw-error/
			 */
			"@typescript-eslint/only-throw-error": "error",

			/**
			 * RU: Отключаем core-правило для TypeScript, потому что TS-версия корректнее обрабатывает TypeScript-синтаксис.
			 * EN: Disable the core rule for TypeScript because the TS version handles TypeScript syntax more correctly.
			 *
			 * Docs: https://eslint.org/docs/latest/rules/no-unused-expressions
			 */
			"no-unused-expressions": "off",

			/**
			 * RU: Запрещает выражения без эффекта, которые обычно являются забытым вызовом функции или ошибкой в логике.
			 * EN: Disallows expressions with no effect, which are usually a forgotten function call or a logic bug.
			 *
			 * Docs: https://typescript-eslint.io/rules/no-unused-expressions/
			 */
			"@typescript-eslint/no-unused-expressions": [
				"error",
				{
					allowShortCircuit: false,
					allowTernary: false,
					allowTaggedTemplates: false,
				},
			],

			/**
			 * RU: Отключаем core-правило для TypeScript, потому что TS-версия учитывает типы возвращаемого значения.
			 * EN: Disable the core rule for TypeScript because the TS version understands return types.
			 *
			 * Docs: https://eslint.org/docs/latest/rules/require-await
			 */
			"require-await": "off",

			/**
			 * RU: Запрещает async-функции без await, если async не нужен по типам.
			 * EN: Disallows async functions without await when async is not needed by types.
			 *
			 * Docs: https://typescript-eslint.io/rules/require-await/
			 */
			"@typescript-eslint/require-await": "error",

			/**
			 * RU: Предупреждает об await на значениях, которые не являются thenable.
			 * EN: Warns about awaiting values that are not thenable.
			 *
			 * Docs: https://typescript-eslint.io/rules/await-thenable/
			 */
			"@typescript-eslint/await-thenable": "warn",

			/**
			 * RU: Запрещает неявное приведение объектов к строке через default toString.
			 * EN: Disallows implicit object-to-string conversion through default toString.
			 *
			 * Docs: https://typescript-eslint.io/rules/no-base-to-string/
			 */
			"@typescript-eslint/no-base-to-string": "error",

			/**
			 * RU: Запрещает выражения void-типа в местах, где они делают чтение кода неоднозначным.
			 * EN: Disallows void-typed expressions in places where they make code ambiguous.
			 *
			 * Docs: https://typescript-eslint.io/rules/no-confusing-void-expression/
			 */
			"@typescript-eslint/no-confusing-void-expression": [
				"error",
				{
					ignoreArrowShorthand: true,
					ignoreVoidOperator: true,
				},
			],

			/**
			 * RU: Запрещает лишние сравнения boolean-значений с true/false.
			 * EN: Disallows unnecessary comparisons of boolean values with true/false.
			 *
			 * Docs: https://typescript-eslint.io/rules/no-unnecessary-boolean-literal-compare/
			 */
			"@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",

			/**
			 * RU: Предупреждает о лишних условиях, которые TypeScript считает всегда истинными или ложными.
			 * EN: Warns about unnecessary conditions that TypeScript considers always true or false.
			 *
			 * Docs: https://typescript-eslint.io/rules/no-unnecessary-condition/
			 */
			"@typescript-eslint/no-unnecessary-condition": "warn",

			/**
			 * RU: Запрещает передавать unsafe значения в аргументы функций.
			 * EN: Disallows passing unsafe values as function arguments.
			 *
			 * Docs: https://typescript-eslint.io/rules/no-unsafe-argument/
			 */
			"@typescript-eslint/no-unsafe-argument": "error",

			/**
			 * RU: Предупреждает о присваивании unsafe значений.
			 * EN: Warns about assigning unsafe values.
			 *
			 * Docs: https://typescript-eslint.io/rules/no-unsafe-assignment/
			 */
			"@typescript-eslint/no-unsafe-assignment": "warn",

			/**
			 * RU: Предупреждает о вызовах unsafe значений как функций.
			 * EN: Warns about calling unsafe values as functions.
			 *
			 * Docs: https://typescript-eslint.io/rules/no-unsafe-call/
			 */
			"@typescript-eslint/no-unsafe-call": "warn",

			/**
			 * RU: Запрещает небезопасное сравнение enum values.
			 * EN: Disallows unsafe enum value comparisons.
			 *
			 * Docs: https://typescript-eslint.io/rules/no-unsafe-enum-comparison/
			 */
			"@typescript-eslint/no-unsafe-enum-comparison": "error",

			/**
			 * RU: Запрещает доступ к свойствам unsafe значений.
			 * EN: Disallows member access on unsafe values.
			 *
			 * Docs: https://typescript-eslint.io/rules/no-unsafe-member-access/
			 */
			"@typescript-eslint/no-unsafe-member-access": "error",

			/**
			 * RU: Запрещает возвращать unsafe значения из функций.
			 * EN: Disallows returning unsafe values from functions.
			 *
			 * Docs: https://typescript-eslint.io/rules/no-unsafe-return/
			 */
			"@typescript-eslint/no-unsafe-return": "error",

			/**
			 * RU: Предпочитает ?? вместо || там, где нужно различать null/undefined и falsy-значения.
			 * EN: Prefers ?? over || where null/undefined must be distinguished from other falsy values.
			 *
			 * Docs: https://typescript-eslint.io/rules/prefer-nullish-coalescing/
			 */
			"@typescript-eslint/prefer-nullish-coalescing": "warn",

			/**
			 * RU: Предпочитает optional chaining вместо длинных цепочек проверок.
			 * EN: Prefers optional chaining instead of long guard chains.
			 *
			 * Docs: https://typescript-eslint.io/rules/prefer-optional-chain/
			 */
			"@typescript-eslint/prefer-optional-chain": "warn",
		},
	},
]
