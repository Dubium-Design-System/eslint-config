import type { Linter } from "eslint"

import eslintReactPlugin from "@eslint-react/eslint-plugin"
import reactRefreshPlugin from "eslint-plugin-react-refresh"

const reactFiles = ["**/*.{js,mjs,cjs,jsx,ts,tsx,mts,cts}"]
const reactJsxFiles = ["**/*.{jsx,tsx}"]

const reactRecommendedConfig =
	eslintReactPlugin.configs["recommended-typescript"] ?? eslintReactPlugin.configs.recommended

const reactRecommendedConfigs = (
	Array.isArray(reactRecommendedConfig) ? reactRecommendedConfig : [reactRecommendedConfig]
) as Linter.Config[]

const normalizedReactRecommendedConfigs = reactRecommendedConfigs.map((config): Linter.Config => {
	const normalizedConfig: Linter.Config = { ...config }
	const rules = { ...normalizedConfig.rules }

	delete normalizedConfig.plugins
	delete rules["@eslint-react/use-state"]

	normalizedConfig.files ??= reactJsxFiles
	normalizedConfig.rules = rules

	return normalizedConfig
})

export const reactCore = [
	{
		name: "@dubium/eslint-config/react/plugin",
		files: reactFiles,
		plugins: {
			"@eslint-react": eslintReactPlugin,
		},
	},

	...normalizedReactRecommendedConfigs,

	{
		name: "@dubium/eslint-config/react/core",
		files: reactJsxFiles,
		languageOptions: {
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
			},
		},
		plugins: {
			"react-refresh": reactRefreshPlugin,
		},
		rules: {
			/**
			 * RU: Предупреждает об использовании dangerouslySetInnerHTML, потому что HTML-вставки требуют отдельной проверки безопасности.
			 * EN: Warns about dangerouslySetInnerHTML because HTML injection needs a separate security review.
			 *
			 * Docs: https://eslint-react.xyz/docs/rules/dom-no-dangerously-set-innerhtml
			 */
			"@eslint-react/dom-no-dangerously-set-innerhtml": "warn",

			/**
			 * RU: Запрещает одновременно использовать dangerouslySetInnerHTML и children.
			 * EN: Disallows using dangerouslySetInnerHTML together with children.
			 *
			 * Docs: https://eslint-react.xyz/docs/rules/dom-no-dangerously-set-innerhtml-with-children
			 */
			"@eslint-react/dom-no-dangerously-set-innerhtml-with-children": "error",

			/**
			 * RU: Требует явно указывать type у button, чтобы избежать случайного submit.
			 * EN: Requires explicit button type to avoid accidental form submission.
			 *
			 * Docs: https://eslint-react.xyz/docs/rules/dom-no-missing-button-type
			 */
			"@eslint-react/dom-no-missing-button-type": "error",

			/**
			 * RU: Требует sandbox у iframe, чтобы снизить риск небезопасного embedded-контента.
			 * EN: Requires sandbox on iframes to reduce risks from unsafe embedded content.
			 *
			 * Docs: https://eslint-react.xyz/docs/rules/dom-no-missing-iframe-sandbox
			 */
			"@eslint-react/dom-no-missing-iframe-sandbox": "error",

			/**
			 * RU: Запрещает использовать результат ReactDOM.render.
			 * EN: Disallows using the return value of ReactDOM.render.
			 *
			 * Docs: https://eslint-react.xyz/docs/rules/dom-no-render-return-value
			 */
			"@eslint-react/dom-no-render-return-value": "error",

			/**
			 * RU: Запрещает javascript: URL в JSX DOM-свойствах.
			 * EN: Disallows javascript: URLs in JSX DOM properties.
			 *
			 * Docs: https://eslint-react.xyz/docs/rules/dom-no-script-url
			 */
			"@eslint-react/dom-no-script-url": "error",

			/**
			 * RU: Запрещает строковое значение style, потому что React ожидает объект стилей.
			 * EN: Disallows string style values because React expects a style object.
			 *
			 * Docs: https://eslint-react.xyz/docs/rules/dom-no-string-style-prop
			 */
			"@eslint-react/dom-no-string-style-prop": "error",

			/**
			 * RU: Запрещает неизвестные DOM-свойства в JSX.
			 * EN: Disallows unknown DOM properties in JSX.
			 *
			 * Docs: https://eslint-react.xyz/docs/rules/dom-no-unknown-property
			 */
			"@eslint-react/dom-no-unknown-property": "error",

			/**
			 * RU: Запрещает target="_blank" без безопасного rel.
			 * EN: Disallows target="_blank" without a safe rel value.
			 *
			 * Docs: https://eslint-react.xyz/docs/rules/dom-no-unsafe-target-blank
			 */
			"@eslint-react/dom-no-unsafe-target-blank": "error",

			/**
			 * RU: Запрещает children у void DOM-элементов.
			 * EN: Disallows children on void DOM elements.
			 *
			 * Docs: https://eslint-react.xyz/docs/rules/dom-no-void-elements-with-children
			 */
			"@eslint-react/dom-no-void-elements-with-children": "error",

			/**
			 * RU: Предупреждает об использовании children как обычного prop.
			 * EN: Warns about passing children as a regular prop.
			 *
			 * Docs: https://eslint-react.xyz/docs/rules/no-children-prop
			 */
			"@eslint-react/jsx-no-children-prop": "warn",

			/**
			 * RU: Запрещает одновременно передавать children prop и вложенные children.
			 * EN: Disallows passing a children prop together with nested children.
			 *
			 * Docs: https://eslint-react.xyz/docs/rules/no-children-prop-with-children
			 */
			"@eslint-react/jsx-no-children-prop-with-children": "error",

			/**
			 * RU: Запрещает текстовые комментарии, которые React может отрендерить как DOM text nodes.
			 * EN: Disallows comment text that React can render as DOM text nodes.
			 *
			 * Docs: https://eslint-react.xyz/docs/rules/no-comment-textnodes
			 */
			"@eslint-react/jsx-no-comment-textnodes": "error",

			/**
			 * RU: Запрещает key после spread props, чтобы key не терялся визуально в списке props.
			 * EN: Disallows key after spread props so key is not visually hidden in the props list.
			 *
			 * Docs: https://eslint-react.xyz/docs/rules/no-key-after-spread
			 */
			"@eslint-react/jsx-no-key-after-spread": "error",

			/**
			 * RU: Предупреждает о случайной утечке символа $ в JSX.
			 * EN: Warns about accidentally leaked $ characters in JSX.
			 *
			 * Docs: https://eslint-react.xyz/docs/rules/no-leaked-dollar
			 */
			"@eslint-react/jsx-no-leaked-dollar": "warn",

			/**
			 * RU: Предупреждает о случайной утечке точки с запятой в JSX.
			 * EN: Warns about accidentally leaked semicolons in JSX.
			 *
			 * Docs: https://eslint-react.xyz/docs/rules/no-leaked-semicolon
			 */
			"@eslint-react/jsx-no-leaked-semicolon": "warn",

			/**
			 * RU: Запрещает JSX namespace syntax.
			 * EN: Disallows JSX namespace syntax.
			 *
			 * Docs: https://eslint-react.xyz/docs/rules/no-namespace
			 */
			"@eslint-react/jsx-no-namespace": "error",

			/**
			 * RU: Предупреждает о лишних React fragments.
			 * EN: Warns about unnecessary React fragments.
			 *
			 * Docs: https://eslint-react.xyz/docs/rules/no-useless-fragment
			 */
			"@eslint-react/jsx-no-useless-fragment": "warn",

			/**
			 * RU: Предупреждает об index как key, потому что такие ключи нестабильны при перестановке элементов.
			 * EN: Warns about using array indexes as keys because such keys are unstable when items are reordered.
			 *
			 * Docs: https://eslint-react.xyz/docs/rules/no-array-index-key
			 */
			"@eslint-react/no-array-index-key": "warn",

			/**
			 * RU: Предупреждает о прямом использовании Children.count.
			 * EN: Warns about direct usage of Children.count.
			 *
			 * Docs: https://eslint-react.xyz/docs/rules/no-children-count
			 */
			"@eslint-react/no-children-count": "warn",

			/**
			 * RU: Предупреждает о прямом использовании Children.forEach.
			 * EN: Warns about direct usage of Children.forEach.
			 *
			 * Docs: https://eslint-react.xyz/docs/rules/no-children-for-each
			 */
			"@eslint-react/no-children-for-each": "warn",

			/**
			 * RU: Предупреждает о прямом использовании Children.map.
			 * EN: Warns about direct usage of Children.map.
			 *
			 * Docs: https://eslint-react.xyz/docs/rules/no-children-map
			 */
			"@eslint-react/no-children-map": "warn",

			/**
			 * RU: Предупреждает о прямом использовании Children.only.
			 * EN: Warns about direct usage of Children.only.
			 *
			 * Docs: https://eslint-react.xyz/docs/rules/no-children-only
			 */
			"@eslint-react/no-children-only": "warn",

			/**
			 * RU: Предупреждает о прямом использовании Children.toArray.
			 * EN: Warns about direct usage of Children.toArray.
			 *
			 * Docs: https://eslint-react.xyz/docs/rules/no-children-to-array
			 */
			"@eslint-react/no-children-to-array": "warn",

			/**
			 * RU: Предупреждает об использовании cloneElement, потому что он усложняет поток данных.
			 * EN: Warns about cloneElement because it makes data flow harder to follow.
			 *
			 * Docs: https://eslint-react.xyz/docs/rules/no-clone-element
			 */
			"@eslint-react/no-clone-element": "warn",

			/**
			 * RU: Запрещает дублирующиеся key в JSX-списках.
			 * EN: Disallows duplicate keys in JSX lists.
			 *
			 * Docs: https://eslint-react.xyz/docs/rules/no-duplicate-key
			 */
			"@eslint-react/no-duplicate-key": "error",

			/**
			 * RU: Предупреждает о потенциальной утечке значений при условном рендеринге.
			 * EN: Warns about potentially leaked values in conditional rendering.
			 *
			 * Docs: https://eslint-react.xyz/docs/rules/no-leaked-conditional-rendering
			 */
			"@eslint-react/no-leaked-conditional-rendering": "warn",

			/**
			 * RU: Предупреждает об отсутствии displayName у компонента.
			 * EN: Warns about missing component displayName.
			 *
			 * Docs: https://eslint-react.xyz/docs/rules/no-missing-component-display-name
			 */
			"@eslint-react/no-missing-component-display-name": "warn",

			/**
			 * RU: Предупреждает об отсутствии displayName у context.
			 * EN: Warns about missing context displayName.
			 *
			 * Docs: https://eslint-react.xyz/docs/rules/no-missing-context-display-name
			 */
			"@eslint-react/no-missing-context-display-name": "warn",

			/**
			 * RU: Запрещает элементы списка без key.
			 * EN: Disallows list elements without keys.
			 *
			 * Docs: https://eslint-react.xyz/docs/rules/no-missing-key
			 */
			"@eslint-react/no-missing-key": "error",

			/**
			 * RU: Предупреждает о компонентах, объявленных внутри других компонентов.
			 * EN: Warns about components declared inside other components.
			 *
			 * Docs: https://eslint-react.xyz/docs/rules/no-nested-component-definitions
			 */
			"@eslint-react/no-nested-component-definitions": "warn",

			/**
			 * RU: Запрещает нестабильные значения Provider context.
			 * EN: Disallows unstable Provider context values.
			 *
			 * Docs: https://eslint-react.xyz/docs/rules/no-unstable-context-value
			 */
			"@eslint-react/no-unstable-context-value": "error",

			/**
			 * RU: Требует правильное именование пары состояния и setter у useState.
			 * EN: Requires proper naming for useState value and setter pairs.
			 *
			 * Docs: https://eslint-react.xyz/docs/rules/use-state
			 */
			"@eslint-react/use-state": [
				"error",
				{
					enforceAssignment: true,
					enforceLazyInitialization: true,
					enforceSetterName: true,
				},
			],

			/**
			 * RU: Предупреждает, если Fast Refresh может сломаться из-за экспорта не-компонентов из component-файла.
			 * EN: Warns when Fast Refresh can break because non-components are exported from component files.
			 *
			 * Docs: https://github.com/ArnaudBarre/eslint-plugin-react-refresh#only-export-components
			 */
			"react-refresh/only-export-components": [
				"warn",
				{
					allowConstantExport: true,
					extraHOCs: ["observer"],
				},
			],

			/**
			 * RU: Разрешает прямой default export в React-файлах,
			 * потому что React.lazy(() => import("./Component")) ожидает default export.
			 *
			 * При этом запрещает default re-export через barrel-файлы,
			 * чтобы публичный API оставался явным и не появлялись бессмысленные default-прокладки.
			 *
			 * EN: Allows direct default export in React files because
			 * React.lazy(() => import("./Component")) expects a default export.
			 *
			 * Still disallows default re-exports from barrel files so public APIs stay explicit
			 * and meaningless default proxy exports are avoided.
			 *
			 * Docs: https://eslint.org/docs/latest/rules/no-restricted-exports
			 */
			"no-restricted-exports": [
				"error",
				{
					restrictDefaultExports: {
						direct: false,
						named: true,
						defaultFrom: true,
						namedFrom: true,
						namespaceFrom: true,
					},
				},
			],
		},
	},
	{
		files: ["**/*.{tsx,jsx}"],
		rules: {
			/**
			 * RU: Для React-файлов лимит выше, потому что JSX и хуки естественно увеличивают тело функции.
			 * EN: Uses a higher limit for React files because JSX and hooks naturally increase function body size.
			 */
			"max-lines-per-function": [
				"warn",
				{
					max: 160,
					skipBlankLines: true,
					skipComments: true,
					IIFEs: false,
				},
			],
		},
	},
]
