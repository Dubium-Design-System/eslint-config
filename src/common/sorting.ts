import perfectionistPlugin from "eslint-plugin-perfectionist"

export const commonSorting = [
	{
		name: "@dubium/eslint-config/common/sorting",
		files: [ "**/*.{js,mjs,cjs,jsx,ts,tsx,mts,cts}" ],
		plugins: {
			perfectionist: perfectionistPlugin,
		},
		rules: {
			/**
			 * RU: Сортирует import declarations, чтобы импорты были стабильными и не создавали лишние diff.
			 * EN: Sorts import declarations so imports stay stable and do not create unnecessary diffs.
			 *
			 * Docs: https://perfectionist.dev/rules/sort-imports
			 */
			"perfectionist/sort-imports": "error",

			/**
			 * RU: Сортирует named imports внутри import, чтобы порядок импортируемых сущностей был стабильным.
			 * EN: Sorts named imports inside import declarations so imported members stay stable.
			 *
			 * Docs: https://perfectionist.dev/rules/sort-named-imports
			 */
			"perfectionist/sort-named-imports": "error",

			/**
			 * RU: Сортирует export declarations, чтобы публичный API файла был стабильным.
			 * EN: Sorts export declarations so the file public API stays stable.
			 *
			 * Docs: https://perfectionist.dev/rules/sort-exports
			 */
			"perfectionist/sort-exports": "error",

			/**
			 * RU: Сортирует named exports внутри export, чтобы порядок экспортируемых сущностей был стабильным.
			 * EN: Sorts named exports inside export declarations so exported members stay stable.
			 *
			 * Docs: https://perfectionist.dev/rules/sort-named-exports
			 */
			"perfectionist/sort-named-exports": "error",

			/**
			 * RU: Сортирует import attributes, если они используются в проекте.
			 * EN: Sorts import attributes when they are used in the project.
			 *
			 * Docs: https://perfectionist.dev/rules/sort-import-attributes
			 */
			"perfectionist/sort-import-attributes": "error",

			/**
			 * RU: Сортирует export attributes, если они используются в проекте.
			 * EN: Sorts export attributes when they are used in the project.
			 *
			 * Docs: https://perfectionist.dev/rules/sort-export-attributes
			 */
			"perfectionist/sort-export-attributes": "error",
		},
	},
]
