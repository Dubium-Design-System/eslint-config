import { reactRecommended } from "./recommended.js"
import { reactStrict } from "./strict.js"

const reactFiles = ["**/*.{tsx}", "**/use*.{ts,mts,cts}"]

const react19RecommendedRules = {
	/**
	 * RU: Предлагает использовать React 19-синтаксис <Context> вместо <Context.Provider>.
	 * EN: Suggests using the React 19 <Context> syntax instead of <Context.Provider>.
	 *
	 * Docs: https://eslint-react.xyz/docs/rules/no-context-provider
	 */
	"@eslint-react/no-context-provider": "warn",

	/**
	 * RU: Предлагает отказаться от forwardRef в React 19, где ref можно передавать как обычный prop.
	 * EN: Suggests avoiding forwardRef in React 19, where ref can be passed as a regular prop.
	 *
	 * Docs: https://eslint-react.xyz/docs/rules/no-forward-ref
	 */
	"@eslint-react/no-forward-ref": "warn",

	/**
	 * RU: Предлагает использовать React 19 API use(Context) вместо useContext(Context).
	 * EN: Suggests using the React 19 use(Context) API instead of useContext(Context).
	 *
	 * Docs: https://eslint-react.xyz/docs/rules/no-use-context
	 */
	"@eslint-react/no-use-context": "warn",

	/**
	 * RU: Запрещает deprecated useFormState из react-dom; в React 19 нужно использовать useActionState из react.
	 * EN: Disallows deprecated useFormState from react-dom; in React 19, use useActionState from react instead.
	 *
	 * Docs: https://eslint-react.xyz/docs/rules/dom-no-use-form-state
	 */
	"@eslint-react/dom-no-use-form-state": "error",
} as const

const react19StrictRules = {
	/**
	 * RU: В React 19 strict-режиме запрещает <Context.Provider> вместо <Context>.
	 * EN: In React 19 strict mode, disallows <Context.Provider> instead of <Context>.
	 *
	 * Docs: https://eslint-react.xyz/docs/rules/no-context-provider
	 */
	"@eslint-react/no-context-provider": "error",

	/**
	 * RU: В React 19 strict-режиме запрещает forwardRef.
	 * EN: In React 19 strict mode, disallows forwardRef.
	 *
	 * Docs: https://eslint-react.xyz/docs/rules/no-forward-ref
	 */
	"@eslint-react/no-forward-ref": "error",

	/**
	 * RU: В React 19 strict-режиме запрещает useContext вместо use(Context).
	 * EN: In React 19 strict mode, disallows useContext instead of use(Context).
	 *
	 * Docs: https://eslint-react.xyz/docs/rules/no-use-context
	 */
	"@eslint-react/no-use-context": "error",
} as const

export const react19Recommended = [
	...reactRecommended,
	{
		name: "@dubium/eslint-config/react/react19",
		files: reactFiles,
		rules: react19RecommendedRules,
	},
]

export const react19Strict = [
	...reactStrict,
	{
		name: "@dubium/eslint-config/react/react19-strict",
		files: reactFiles,
		rules: {
			...react19RecommendedRules,
			...react19StrictRules,
		},
	},
]
