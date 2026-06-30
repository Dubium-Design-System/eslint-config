import { typescriptBase } from "./base.js"
import { typescriptSemantic } from "./semantic.js"

export const typescriptStrict = [
	...typescriptBase,
	...typescriptSemantic,
	{
		name: "@dubium/eslint-config/typescript/strict/rules",
		files: ["**/*.{ts,tsx,mts,cts}"],
		rules: {
			/**
			 * RU: В strict-режиме ограничивает вложенность сильнее, чтобы функции оставались плоскими и читаемыми.
			 * EN: In strict mode, limits nesting more aggressively so functions stay flat and readable.
			 *
			 * Docs: https://eslint.org/docs/latest/rules/max-depth
			 */
			"max-depth": [
				"error",
				{
					max: 3,
				},
			],

			/**
			 * RU: В strict-режиме getter/setter должны быть сгруппированы строго.
			 * EN: In strict mode, getter/setter pairs must be grouped strictly.
			 *
			 * Docs: https://eslint.org/docs/latest/rules/grouped-accessor-pairs
			 */
			"grouped-accessor-pairs": ["error", "getBeforeSet"],

			/**
			 * RU: Требует фигурные скобки для всех управляющих конструкций, чтобы избежать ошибок при добавлении новых строк в if/else/for/while.
			 * EN: Requires curly braces for all control statements to avoid bugs when adding new lines to if/else/for/while bodies.
			 *
			 * Docs: https://eslint.org/docs/latest/rules/curly
			 */
			curly: ["error", "all"],

			/**
			 * RU: В strict-режиме предупреждает о слишком глубокой вложенности callback-функций, чтобы не допускать callback hell.
			 * EN: In strict mode, warns about deeply nested callback functions to avoid callback hell.
			 *
			 * Docs: https://eslint.org/docs/latest/rules/max-nested-callbacks
			 */
			"max-nested-callbacks": [
				"warn",
				{
					max: 3,
				},
			],
		},
	},
]
