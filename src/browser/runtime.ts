import globals from "globals"

export const browserRuntime = [
	{
		name: "@dubium/eslint-config/browser/runtime",
		files: ["**/*.{js,mjs,jsx,ts,tsx,mts}"],
		languageOptions: {
			globals: {
				...globals.browser,
			},
		},
	},
]
