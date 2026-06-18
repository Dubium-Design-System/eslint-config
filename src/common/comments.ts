import eslintCommentsPlugin from "@eslint-community/eslint-plugin-eslint-comments"

export const commonComments = [
	{
		name: "@dubium/eslint-config/common/comments",
		files: ["**/*.{js,mjs,cjs,jsx,ts,tsx,mts,cts}"],
		plugins: {
			"eslint-comments": eslintCommentsPlugin,
		},
		rules: {
			/**
			 * RU: Требует, чтобы eslint-disable и eslint-enable использовались парно.
			 * EN: Requires eslint-disable and eslint-enable comments to be used as pairs.
			 *
			 * Docs: https://eslint-community.github.io/eslint-plugin-eslint-comments/rules/disable-enable-pair.html
			 */
			"eslint-comments/disable-enable-pair": "error",

			/**
			 * RU: Запрещает одним eslint-enable включать обратно сразу несколько отдельных eslint-disable.
			 * EN: Disallows using one eslint-enable comment to re-enable multiple separate eslint-disable comments.
			 *
			 * Docs: https://eslint-community.github.io/eslint-plugin-eslint-comments/rules/no-aggregating-enable.html
			 */
			"eslint-comments/no-aggregating-enable": "error",

			/**
			 * RU: Запрещает повторно отключать одно и то же правило в одном eslint-disable комментарии.
			 * EN: Disallows disabling the same rule more than once in a single eslint-disable comment.
			 *
			 * Docs: https://eslint-community.github.io/eslint-plugin-eslint-comments/rules/no-duplicate-disable.html
			 */
			"eslint-comments/no-duplicate-disable": "error",

			/**
			 * RU: Предупреждает, если ESLint отключается без указания конкретных правил.
			 * EN: Warns when ESLint is disabled without specifying exact rule names.
			 *
			 * Docs: https://eslint-community.github.io/eslint-plugin-eslint-comments/rules/no-unlimited-disable.html
			 */
			"eslint-comments/no-unlimited-disable": "warn",

			/**
			 * RU: Запрещает лишние eslint-enable комментарии, которые не включают обратно ни одно отключённое правило.
			 * EN: Disallows unnecessary eslint-enable comments that do not re-enable any disabled rule.
			 *
			 * Docs: https://eslint-community.github.io/eslint-plugin-eslint-comments/rules/no-unused-enable.html
			 */
			"eslint-comments/no-unused-enable": "error",

			/**
			 * RU: Не используем по умолчанию, потому что запрет отключения конкретных правил должен быть проектным решением.
			 * EN: Not enabled by default because forbidding disables for specific rules should be a project-level decision.
			 *
			 * Docs: https://eslint-community.github.io/eslint-plugin-eslint-comments/rules/no-restricted-disable.html
			 */
			"eslint-comments/no-restricted-disable": "off",

			/**
			 * RU: Не используем по умолчанию, потому что полный запрет ESLint directive comments слишком жёсткий для обычных проектов.
			 * EN: Not enabled by default because fully forbidding ESLint directive comments is too strict for regular projects.
			 *
			 * Docs: https://eslint-community.github.io/eslint-plugin-eslint-comments/rules/no-use.html
			 */
			"eslint-comments/no-use": "off",

			/**
			 * RU: Предупреждает, если disable-комментарий не содержит описание причины, чтобы отключение правила было понятно на code review.
			 * EN: Warns when a disable comment does not include a reason so the disable is clear during code review.
			 *
			 * Docs: https://eslint-community.github.io/eslint-plugin-eslint-comments/rules/require-description.html
			 */
			"eslint-comments/require-description": "warn",
		},
	},
]
