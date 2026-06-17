export const commonIgnores = [
	{
		name: "@dubium/eslint-config/common/ignores",
		ignores: [
			"**/.cache/**",
			"**/.next/**",
			"**/.turbo/**",
			"**/.vite/**",

			"**/build/**",
			"**/coverage/**",
			"**/dist/**",
			"**/node_modules/**",
			"**/storybook-static/**",

			"**/generated/prisma/**",
			"**/src/generated/prisma/**",
			"**/prisma/generated/**",

			"**/*.d.ts.map",
			"**/*.min.*",
		],
	},
]
