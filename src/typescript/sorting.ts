import perfectionistPlugin from "eslint-plugin-perfectionist"

export const typescriptSorting = [
	{
		name: "@dubium/eslint-config/typescript/sorting",
		files: ["**/*.{ts,tsx,mts,cts}"],
		plugins: {
			perfectionist: perfectionistPlugin,
		},
		rules: {
			/**
			 * RU: Предупреждает о нестабильном порядке enum members.
			 * EN: Warns about unstable enum member ordering.
			 *
			 * Docs: https://perfectionist.dev/rules/sort-enums
			 */
			"perfectionist/sort-enums": "warn",

			/**
			 * RU: Предупреждает о нестабильном порядке members в interfaces.
			 * EN: Warns about unstable member ordering in interfaces.
			 *
			 * Docs: https://perfectionist.dev/rules/sort-interfaces
			 */
			"perfectionist/sort-interfaces": "warn",

			/**
			 * RU: Предупреждает о нестабильном порядке intersection types.
			 * EN: Warns about unstable intersection type ordering.
			 *
			 * Docs: https://perfectionist.dev/rules/sort-intersection-types
			 */
			"perfectionist/sort-intersection-types": "warn",

			/**
			 * RU: Предупреждает о нестабильном порядке свойств в object types.
			 * EN: Warns about unstable property ordering in object types.
			 *
			 * Docs: https://perfectionist.dev/rules/sort-object-types
			 */
			"perfectionist/sort-object-types": "warn",

			/**
			 * RU: Предупреждает о нестабильном порядке union types.
			 * EN: Warns about unstable union type ordering.
			 *
			 * Docs: https://perfectionist.dev/rules/sort-union-types
			 */
			"perfectionist/sort-union-types": "warn",
		},
	},
]
