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
			 * RU: В strict-режиме раньше предупреждает о слишком больших функциях.
			 * EN: In strict mode, warns earlier about oversized functions.
			 *
			 * Docs: https://eslint.org/docs/latest/rules/max-lines-per-function
			 */
			"max-lines-per-function": [
				"warn",
				{
					max: 50,
					skipBlankLines: true,
					skipComments: true,
					IIFEs: false,
				},
			],

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

			/**
			 * RU: В strict-режиме раньше предупреждает о функциях с большим количеством инструкций.
			 * EN: In strict mode, warns earlier about functions with many statements.
			 *
			 * Docs: https://eslint.org/docs/latest/rules/max-statements
			 */
			"max-statements": [
				"warn",
				{
					max: 15,
				},
			],
		},
	},
]
