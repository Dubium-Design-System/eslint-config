import { nestRecommended } from "./recommended.js"

export const nestStrict = [
	...nestRecommended,
	{
		name: "@dubium/eslint-config/nest-strict",
		files: ["**/*.{ts,mts,cts}"],
		rules: {
			/**
			 * RU: Предупреждает, если публичные функции не имеют явного return type.
			 * EN: Warns when public functions do not have an explicit return type.
			 *
			 * Docs: https://typescript-eslint.io/rules/explicit-function-return-type/
			 */
			"@typescript-eslint/explicit-function-return-type": [
				"warn",
				{
					allowExpressions: true,
					allowTypedFunctionExpressions: true,
				},
			],

			/**
			 * RU: В strict-режиме требует стабильный порядок members класса.
			 * EN: In strict mode, requires stable class member ordering.
			 *
			 * Docs: https://typescript-eslint.io/rules/member-ordering/
			 */
			"@typescript-eslint/member-ordering": "error",

			/**
			 * RU: В strict-режиме запрещает any в NestJS-коде.
			 * EN: In strict mode, disallows any in NestJS code.
			 *
			 * Docs: https://typescript-eslint.io/rules/no-explicit-any/
			 */
			"@typescript-eslint/no-explicit-any": "error",

			/**
			 * RU: В strict-режиме запрещает unsafe assignment.
			 * EN: In strict mode, disallows unsafe assignments.
			 *
			 * Docs: https://typescript-eslint.io/rules/no-unsafe-assignment/
			 */
			"@typescript-eslint/no-unsafe-assignment": "error",

			/**
			 * RU: В strict-режиме запрещает unsafe calls.
			 * EN: In strict mode, disallows unsafe calls.
			 *
			 * Docs: https://typescript-eslint.io/rules/no-unsafe-call/
			 */
			"@typescript-eslint/no-unsafe-call": "error",
		},
	},
	{
		name: "@dubium/eslint-config/nest-strict/tests",
		files: ["**/*.spec.ts", "**/*.test.ts", "**/test/**/*.ts"],
		rules: {
			/**
			 * RU: Разрешает any в strict NestJS-тестах для mock/spies и partial fixtures.
			 * EN: Allows any in strict NestJS tests for mocks, spies, and partial fixtures.
			 *
			 * Docs: https://typescript-eslint.io/rules/no-explicit-any/
			 */
			"@typescript-eslint/no-explicit-any": "off",

			/**
			 * RU: Разрешает unsafe assignment в strict NestJS-тестах.
			 * EN: Allows unsafe assignments in strict NestJS tests.
			 *
			 * Docs: https://typescript-eslint.io/rules/no-unsafe-assignment/
			 */
			"@typescript-eslint/no-unsafe-assignment": "off",

			/**
			 * RU: Разрешает unsafe calls в strict NestJS-тестах.
			 * EN: Allows unsafe calls in strict NestJS tests.
			 *
			 * Docs: https://typescript-eslint.io/rules/no-unsafe-call/
			 */
			"@typescript-eslint/no-unsafe-call": "off",
		},
	},
]
