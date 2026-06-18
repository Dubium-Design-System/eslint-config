import { recommendedFast } from "./recommended-fast.js"

export const legacy = [
	...recommendedFast,
	{
		name: "@dubium/eslint-config/legacy",
		files: ["**/*.{js,mjs,cjs,jsx,ts,tsx,mts,cts}"],
		rules: {
			/**
			 * RU: В legacy-коде разрешает any, чтобы не блокировать постепенную типизацию.
			 * EN: Allows any in legacy code to avoid blocking gradual typing.
			 *
			 * Docs: https://typescript-eslint.io/rules/no-explicit-any/
			 */
			"@typescript-eslint/no-explicit-any": "off",

			/**
			 * RU: В legacy-коде снижает строгость для явно указанных выводимых типов.
			 * EN: Lowers strictness for explicitly written inferrable types in legacy code.
			 *
			 * Docs: https://typescript-eslint.io/rules/no-inferrable-types/
			 */
			"@typescript-eslint/no-inferrable-types": "warn",

			/**
			 * RU: В legacy-коде предупреждает о неиспользуемых переменных вместо ошибки.
			 * EN: Warns about unused variables instead of failing legacy code.
			 *
			 * Docs: https://typescript-eslint.io/rules/no-unused-vars/
			 */
			"@typescript-eslint/no-unused-vars": "warn",

			/**
			 * RU: Отключает ограничение длины строк в legacy-коде, чтобы не блокировать постепенную миграцию.
			 * EN: Disables max line length in legacy code to avoid blocking gradual migration.
			 *
			 * Docs: https://eslint.style/rules/max-len
			 */
			"@stylistic/max-len": "off",

			/**
			 * RU: Отключает обязательное описание eslint-disable в legacy-коде.
			 * EN: Disables mandatory eslint-disable descriptions in legacy code.
			 *
			 * Docs: https://eslint-community.github.io/eslint-plugin-eslint-comments/rules/require-description.html
			 */
			"eslint-comments/require-description": "off",

			/**
			 * RU: В legacy-коде оставляет console как предупреждение.
			 * EN: Keeps console usage as a warning in legacy code.
			 *
			 * Docs: https://eslint.org/docs/latest/rules/no-console
			 */
			"no-console": "warn",

			/**
			 * RU: В legacy-коде допускает более крупные функции, чтобы не блокировать постепенную миграцию.
			 * EN: Allows larger functions in legacy code to avoid blocking gradual migration.
			 *
			 * Docs: https://eslint.org/docs/latest/rules/max-lines-per-function
			 */
			"max-lines-per-function": [
				"warn",
				{
					max: 120,
					skipBlankLines: true,
					skipComments: true,
					IIFEs: false,
				},
			],
		},
	},
]
