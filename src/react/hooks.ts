const reactFiles = ["**/*.{js,mjs,cjs,jsx,ts,tsx,mts,cts}"]

const reactHooksRules = {
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
} as const

export const reactHooks = [
	{
		name: "@dubium/eslint-config/react/hooks",
		files: reactFiles,
		rules: reactHooksRules,
	},
]
