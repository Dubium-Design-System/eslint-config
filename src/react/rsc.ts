import { react19Recommended, react19Strict } from "./react19.js"

const reactFiles = ["**/*.{tsx}", "**/use*.{ts,mts,cts}"]

const reactRscRules = {
	/**
	 * RU: Проверяет корректность директив use client / use server и требует async для React Server Functions.
	 * EN: Validates use client / use server directives and requires async for React Server Functions.
	 *
	 * Docs: https://eslint-react.xyz/docs/rules/rsc-function-definition
	 */
	"@eslint-react/rsc-function-definition": "warn",
} as const

export const reactRscRecommended = [
	...react19Recommended,
	{
		name: "@dubium/eslint-config/react/rsc",
		files: reactFiles,
		rules: reactRscRules,
	},
]

export const reactRscStrict = [
	...react19Strict,
	{
		name: "@dubium/eslint-config/react/rsc-strict",
		files: reactFiles,
		rules: reactRscRules,
	},
]
