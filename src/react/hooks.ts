import eslintReactPlugin from "@eslint-react/eslint-plugin"

export const reactHooks = {
	name: "@dubium/eslint-config/react/hooks",
	files: ["**/*.{js,mjs,cjs,jsx,ts,tsx,mts,cts}"],
	plugins: {
		"@eslint-react": eslintReactPlugin,
	},
	rules: {
		/**
		 * RU: Запрещает нарушение Rules of Hooks.
		 * EN: Disallows violations of the Rules of Hooks.
		 *
		 * Docs: https://eslint-react.xyz/docs/rules/rules-of-hooks
		 */
		"@eslint-react/rules-of-hooks": "error",

		/**
		 * RU: Предупреждает о неполном списке зависимостей React Hooks.
		 * EN: Warns about incomplete dependency lists in React Hooks.
		 *
		 * Docs: https://eslint-react.xyz/docs/rules/exhaustive-deps
		 */
		"@eslint-react/exhaustive-deps": "warn",
	},
}
