import nodePlugin from "eslint-plugin-n"
import globals from "globals"

export const nodeRuntime = [
	{
		name: "@dubium/eslint-config/node/runtime",
		files: [ "**/*.{js,mjs,cjs,ts,mts,cts}" ],

		languageOptions: {
			globals: {
				...globals.node,
			},
		},

		settings: {
			node: {
				version: ">=22.13.0",
			},
		},

		plugins: {
			n: nodePlugin,
		},

		rules: {
			/**
			 * RU: Требует обрабатывать error-аргумент в Node.js callback-функциях.
			 * EN: Requires handling the error argument in Node.js callback functions.
			 *
			 * Docs: https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/handle-callback-err.md
			 */
			"n/handle-callback-err": "error",

			/**
			 * RU: Запрещает передавать не-Error значения в error-first callbacks.
			 * EN: Disallows passing non-Error values to error-first callbacks.
			 *
			 * Docs: https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-callback-literal.md
			 */
			"n/no-callback-literal": "error",

			/**
			 * RU: Предупреждает об использовании deprecated Node.js API.
			 * EN: Warns about usage of deprecated Node.js APIs.
			 *
			 * Docs: https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-deprecated-api.md
			 */
			"n/no-deprecated-api": "warn",

			/**
			 * RU: Отключаем, потому что правило часто конфликтует с TypeScript path aliases, NodeNext и bundler resolution.
			 * EN: Disabled because this rule often conflicts with TypeScript path aliases, NodeNext, and bundler resolution.
			 *
			 * Docs: https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-missing-import.md
			 */
			"n/no-missing-import": "off",

			/**
			 * RU: Отключаем, потому что require-разрешение зависит от CommonJS-окружения, build output и package exports.
			 * EN: Disabled because require resolution depends on CommonJS runtime, build output, and package exports.
			 *
			 * Docs: https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-missing-require.md
			 */
			"n/no-missing-require": "off",

			/**
			 * RU: Предупреждает об использовании process.exit(), потому что резкое завершение процесса может пропустить cleanup.
			 * EN: Warns about process.exit() because abrupt process termination may skip cleanup.
			 *
			 * Docs: https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-process-exit.md
			 */
			"n/no-process-exit": "warn",

			/**
			 * RU: Отключаем, потому что в shareable config это правило часто даёт false positive на devDependencies, монорепы и build-time imports.
			 * EN: Disabled because in a shareable config this rule often gives false positives for devDependencies, monorepos, and build-time imports.
			 *
			 * Docs: https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-unpublished-import.md
			 */
			"n/no-unpublished-import": "off",

			/**
			 * RU: Отключаем по той же причине, что и no-unpublished-import, но для require().
			 * EN: Disabled for the same reason as no-unpublished-import, but for require().
			 *
			 * Docs: https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-unpublished-require.md
			 */
			"n/no-unpublished-require": "off",

			/**
			 * RU: Отключаем, потому что поддержку ECMAScript built-ins лучше контролировать через TypeScript target/lib и runtime policy.
			 * EN: Disabled because ECMAScript built-in support is better controlled through TypeScript target/lib and runtime policy.
			 *
			 * Docs: https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-unsupported-features/es-builtins.md
			 */
			"n/no-unsupported-features/es-builtins": "off",

			/**
			 * RU: Отключаем, потому что синтаксис уже контролируется TypeScript, parser и выбранным runtime.
			 * EN: Disabled because syntax is already controlled by TypeScript, parser, and the selected runtime.
			 *
			 * Docs: https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-unsupported-features/es-syntax.md
			 */
			"n/no-unsupported-features/es-syntax": "off",

			/**
			 * RU: Предупреждает об использовании Node.js built-ins, недоступных в заявленной версии Node.js.
			 * EN: Warns about Node.js built-ins unavailable in the configured Node.js version.
			 *
			 * Docs: https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-unsupported-features/node-builtins.md
			 */
			"n/no-unsupported-features/node-builtins": "warn",

			/**
			 * RU: Требует импортировать Buffer из node:buffer вместо использования глобального Buffer.
			 * EN: Requires importing Buffer from node:buffer instead of using the global Buffer.
			 *
			 * Docs: https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/prefer-global/buffer.md
			 */
			"n/prefer-global/buffer": [ "error", "never" ],

			/**
			 * RU: Разрешает использовать глобальный console без импорта из node:console.
			 * EN: Allows using the global console without importing it from node:console.
			 *
			 * Docs: https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/prefer-global/console.md
			 */
			"n/prefer-global/console": [ "error", "always" ],

			/**
			 * RU: Требует импортировать process из node:process вместо использования глобального process.
			 * EN: Requires importing process from node:process instead of using the global process.
			 *
			 * Docs: https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/prefer-global/process.md
			 */
			"n/prefer-global/process": [ "error", "never" ],

			/**
			 * RU: Требует использовать node: protocol при импорте встроенных Node.js модулей.
			 * EN: Requires using the node: protocol when importing Node.js built-in modules.
			 *
			 * Docs: https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/prefer-node-protocol.md
			 */
			"n/prefer-node-protocol": "error",
		},
	},

	{
		name: "@dubium/eslint-config/node/commonjs",
		files: [ "**/*.{cjs,cts}" ],

		languageOptions: {
			sourceType: "commonjs",
		},
	},
]
