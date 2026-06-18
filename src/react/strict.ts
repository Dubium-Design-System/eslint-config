import { reactRecommended } from "./recommended.js"

export const reactStrict = [
	...reactRecommended,
	{
		name: "@dubium/eslint-config/react-strict",
		files: ["**/*.{jsx,tsx}"],
		rules: {
			/**
			 * RU: В strict-режиме запрещает dangerouslySetInnerHTML.
			 * EN: In strict mode, disallows dangerouslySetInnerHTML.
			 *
			 * Docs: https://eslint-react.xyz/docs/rules/dom-no-dangerously-set-innerhtml
			 */
			"@eslint-react/dom-no-dangerously-set-innerhtml": "error",

			/**
			 * RU: В strict-режиме запрещает index как key.
			 * EN: In strict mode, disallows array indexes as keys.
			 *
			 * Docs: https://eslint-react.xyz/docs/rules/no-array-index-key
			 */
			"@eslint-react/no-array-index-key": "error",

			/**
			 * RU: В strict-режиме запрещает cloneElement.
			 * EN: In strict mode, disallows cloneElement.
			 *
			 * Docs: https://eslint-react.xyz/docs/rules/no-clone-element
			 */
			"@eslint-react/no-clone-element": "error",

			/**
			 * RU: В strict-режиме запрещает объявлять компоненты внутри компонентов.
			 * EN: In strict mode, disallows declaring components inside components.
			 *
			 * Docs: https://eslint-react.xyz/docs/rules/no-nested-component-definitions
			 */
			"@eslint-react/no-nested-component-definitions": "error",

			/**
			 * RU: В strict-режиме требует стабильный порядок JSX props.
			 * EN: In strict mode, requires stable JSX prop ordering.
			 *
			 * Docs: https://perfectionist.dev/rules/sort-jsx-props
			 */
			"perfectionist/sort-jsx-props": "error",
		},
	},
]
