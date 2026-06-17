import globals from "globals"

export const vitestRuntime = [
	{
		name: "@dubium/eslint-config/vitest/runtime",
		files: [
			"**/*.{test,spec}.{js,mjs,cjs,jsx,ts,tsx,mts,cts}",
			"**/test/**/*.{js,mjs,cjs,jsx,ts,tsx,mts,cts}",
			"**/tests/**/*.{js,mjs,cjs,jsx,ts,tsx,mts,cts}",
		],
		languageOptions: {
			globals: {
				...globals.vitest,
			},
		},
	},
]
