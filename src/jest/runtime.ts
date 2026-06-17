import jestPlugin from "eslint-plugin-jest"
import globals from "globals"

export const jestRuntime = [
	{
		name: "@dubium/eslint-config/jest/runtime",
		files: [
			"**/*.{test,spec}.{js,mjs,cjs,jsx,ts,tsx,mts,cts}",
			"**/__tests__/**/*.{js,mjs,cjs,jsx,ts,tsx,mts,cts}",
		],
		languageOptions: {
			globals: {
				...globals.jest,
			},
		},
		plugins: {
			jest: jestPlugin,
		},
		rules: {
			/**
			 * RU: Запрещает сфокусированные тесты, чтобы .only не попадал в репозиторий.
			 * EN: Disallows focused tests so .only does not get committed.
			 *
			 * Docs: https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-focused-tests.md
			 */
			"jest/no-focused-tests": "error",

			/**
			 * RU: Предупреждает об отключённых тестах, чтобы .skip не оставался в коде незамеченным.
			 * EN: Warns about disabled tests so .skip does not stay unnoticed in the codebase.
			 *
			 * Docs: https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-disabled-tests.md
			 */
			"jest/no-disabled-tests": "warn",

			/**
			 * RU: Запрещает одинаковые названия тестов внутри одного describe-блока.
			 * EN: Disallows duplicate test titles within the same describe block.
			 *
			 * Docs: https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-identical-title.md
			 */
			"jest/no-identical-title": "error",

			/**
			 * RU: Предупреждает, если тест не содержит expect-вызов.
			 * EN: Warns when a test does not contain an expect call.
			 *
			 * Docs: https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/expect-expect.md
			 */
			"jest/expect-expect": "warn",

			/**
			 * RU: Запрещает условные expect, потому что такие проверки могут не выполниться.
			 * EN: Disallows conditional expect calls because such assertions may not run.
			 *
			 * Docs: https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-conditional-expect.md
			 */
			"jest/no-conditional-expect": "error",

			/**
			 * RU: Запрещает done callback, чтобы асинхронные тесты использовали Promise или async/await.
			 * EN: Disallows done callbacks so async tests use Promises or async/await.
			 *
			 * Docs: https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-done-callback.md
			 */
			"jest/no-done-callback": "error",

			/**
			 * RU: Требует корректные expect-вызовы.
			 * EN: Requires valid expect calls.
			 *
			 * Docs: https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/valid-expect.md
			 */
			"jest/valid-expect": "error",
		},
	},
]
