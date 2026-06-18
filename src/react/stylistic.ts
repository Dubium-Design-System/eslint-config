import stylisticPlugin from "@stylistic/eslint-plugin"
import perfectionistPlugin from "eslint-plugin-perfectionist"

export const reactStylistic = [
	{
		name: "@dubium/eslint-config/react/stylistic",
		files: ["**/*.{jsx,tsx}"],
		plugins: {
			"@stylistic": stylisticPlugin,
			perfectionist: perfectionistPlugin,
		},
		rules: {
			/**
			 * RU: Требует оборачивать многострочные JSX-выражения в скобки.
			 * EN: Requires multiline JSX expressions to be wrapped in parentheses.
			 *
			 * Docs: https://eslint.style/rules/jsx-wrap-multilines
			 */
			"@stylistic/jsx-wrap-multilines": [
				"error",
				{
					arrow: "parens-new-line",
					assignment: "parens-new-line",
					condition: "parens-new-line",
					declaration: "parens-new-line",
					logical: "parens-new-line",
					prop: "ignore",
					return: "parens-new-line",
				},
			],

			/**
			 * RU: Предупреждает о нестабильном порядке JSX props.
			 * EN: Warns about unstable JSX prop ordering.
			 *
			 * Docs: https://perfectionist.dev/rules/sort-jsx-props
			 */
			"perfectionist/sort-jsx-props": "warn",
		},
	},
]
