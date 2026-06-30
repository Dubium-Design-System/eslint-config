import eslintReactPlugin from "@eslint-react/eslint-plugin"
import reactRefreshPlugin from "eslint-plugin-react-refresh"

const reactFiles = ["**/*.{tsx}", "**/use*.{ts,mts,cts}"]
const reactPluginFiles = ["**/*.{jsx,tsx}", "**/use*.{ts,mts,cts}"]
const reactJsxFiles = ["**/*.{jsx,tsx}"]

const reactCommonRules = {
	/**
	 * RU: Предупреждает об использовании try/catch как замены Error Boundary для ошибок React-рендера.
	 * EN: Warns about using try/catch as a replacement for Error Boundary when handling React render errors.
	 *
	 * Docs: https://eslint-react.xyz/docs/rules/error-boundaries
	 */
	"@eslint-react/error-boundaries": "warn",

	/**
	 * RU: Запрещает напрямую изменять props, state и другие immutable-значения.
	 * EN: Disallows directly mutating props, state, and other immutable values.
	 *
	 * Docs: https://eslint-react.xyz/docs/rules/immutability
	 */
	"@eslint-react/immutability": "warn",

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
	 * RU: Запрещает использовать createRef в function components; вместо него нужно использовать useRef.
	 * EN: Disallows createRef in function components; use useRef instead.
	 *
	 * Docs: https://eslint-react.xyz/docs/rules/no-create-ref
	 */
	"@eslint-react/no-create-ref": "error",

	/**
	 * RU: Запрещает напрямую изменять React state; обновления должны идти через setState или setter из useState.
	 * EN: Disallows directly mutating React state; updates must go through setState or a useState setter.
	 *
	 * Docs: https://eslint-react.xyz/docs/rules/no-direct-mutation-state
	 */
	"@eslint-react/no-direct-mutation-state": "error",

	/**
	 * RU: Предупреждает о потенциальной утечке значений при условном рендеринге через &&.
	 * EN: Warns about potentially leaked values in conditional rendering with &&.
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
	 * RU: Предупреждает об отсутствии displayName у React Context.
	 * EN: Warns about missing React Context displayName.
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
	 * RU: Предупреждает о lazy-компонентах, объявленных внутри компонентов или хуков.
	 * EN: Warns about lazy components declared inside components or hooks.
	 *
	 * Docs: https://eslint-react.xyz/docs/rules/no-nested-lazy-component-declarations
	 */
	"@eslint-react/no-nested-lazy-component-declarations": "warn",

	/**
	 * RU: Требует, чтобы функции с префиксом use действительно вызывали React Hook или другой custom hook.
	 * EN: Requires functions with the use prefix to actually call a React Hook or another custom hook.
	 *
	 * Docs: https://eslint-react.xyz/docs/rules/no-unnecessary-use-prefix
	 */
	"@eslint-react/no-unnecessary-use-prefix": "warn",

	/**
	 * RU: Предупреждает о нестабильных value в Context.Provider, чтобы не вызывать лишние ререндеры consumers.
	 * EN: Warns about unstable Context.Provider values to avoid unnecessary consumer re-renders.
	 *
	 * Docs: https://eslint-react.xyz/docs/rules/no-unstable-context-value
	 */
	"@eslint-react/no-unstable-context-value": "warn",

	/**
	 * RU: Предупреждает о вызове impure-функций во время render.
	 * EN: Warns about calling impure functions during render.
	 *
	 * Docs: https://eslint-react.xyz/docs/rules/purity
	 */
	"@eslint-react/purity": "warn",

	/**
	 * RU: Предупреждает о чтении или изменении ref.current во время render.
	 * EN: Warns about reading or writing ref.current during render.
	 *
	 * Docs: https://eslint-react.xyz/docs/rules/refs
	 */
	"@eslint-react/refs": "warn",

	/**
	 * RU: Предупреждает о синхронном setState в useEffect, если значение можно вычислить во время render.
	 * EN: Warns about synchronous setState in useEffect when the value can be computed during render.
	 *
	 * Docs: https://eslint-react.xyz/docs/rules/set-state-in-effect
	 */
	"@eslint-react/set-state-in-effect": "warn",

	/**
	 * RU: Запрещает вызывать setState во время render.
	 * EN: Disallows calling setState during render.
	 *
	 * Docs: https://eslint-react.xyz/docs/rules/set-state-in-render
	 */
	"@eslint-react/set-state-in-render": "error",

	/**
	 * RU: Предупреждает о динамическом создании компонентов во время render.
	 * EN: Warns about dynamically creating components during render.
	 *
	 * Docs: https://eslint-react.xyz/docs/rules/static-components
	 */
	"@eslint-react/static-components": "warn",

	/**
	 * RU: Требует, чтобы callback внутри useMemo возвращал значение.
	 * EN: Requires the callback inside useMemo to return a value.
	 *
	 * Docs: https://eslint-react.xyz/docs/rules/use-memo
	 */
	"@eslint-react/use-memo": "error",

	/**
	 * RU: Требует корректно деструктурировать useState и называть setter симметрично значению.
	 * EN: Requires useState to be properly destructured and the setter to be named symmetrically with the value.
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
	 * RU: Требует очищать addEventListener в компонентах и хуках.
	 * EN: Requires addEventListener cleanup in components and hooks.
	 *
	 * Docs: https://eslint-react.xyz/docs/rules/web-api-no-leaked-event-listener
	 */
	"@eslint-react/web-api-no-leaked-event-listener": "warn",

	/**
	 * RU: Требует отменять fetch в компонентах и хуках через AbortController.
	 * EN: Requires fetch cancellation in components and hooks with AbortController.
	 *
	 * Docs: https://eslint-react.xyz/docs/rules/web-api-no-leaked-fetch
	 */
	"@eslint-react/web-api-no-leaked-fetch": "warn",

	/**
	 * RU: Требует отключать IntersectionObserver в компонентах и хуках.
	 * EN: Requires disconnecting IntersectionObserver in components and hooks.
	 *
	 * Docs: https://eslint-react.xyz/docs/rules/web-api-no-leaked-intersection-observer
	 */
	"@eslint-react/web-api-no-leaked-intersection-observer": "warn",

	/**
	 * RU: Требует очищать setInterval в компонентах и хуках.
	 * EN: Requires clearing setInterval in components and hooks.
	 *
	 * Docs: https://eslint-react.xyz/docs/rules/web-api-no-leaked-interval
	 */
	"@eslint-react/web-api-no-leaked-interval": "warn",

	/**
	 * RU: Требует отключать ResizeObserver в компонентах и хуках.
	 * EN: Requires disconnecting ResizeObserver in components and hooks.
	 *
	 * Docs: https://eslint-react.xyz/docs/rules/web-api-no-leaked-resize-observer
	 */
	"@eslint-react/web-api-no-leaked-resize-observer": "warn",

	/**
	 * RU: Требует очищать setTimeout в компонентах и хуках.
	 * EN: Requires clearing setTimeout in components and hooks.
	 *
	 * Docs: https://eslint-react.xyz/docs/rules/web-api-no-leaked-timeout
	 */
	"@eslint-react/web-api-no-leaked-timeout": "warn",

	/**
	 * RU: Требует называть React Context в PascalCase с суффиксом Context.
	 * EN: Requires React Context names to use PascalCase with the Context suffix.
	 *
	 * Docs: https://eslint-react.xyz/docs/rules/naming-convention-context-name
	 */
	"@eslint-react/naming-convention-context-name": "warn",

	/**
	 * RU: Требует называть результат useId как id или с суффиксом Id.
	 * EN: Requires useId results to be named id or with the Id suffix.
	 *
	 * Docs: https://eslint-react.xyz/docs/rules/naming-convention-id-name
	 */
	"@eslint-react/naming-convention-id-name": "warn",

	/**
	 * RU: Требует называть результат useRef как ref или с суффиксом Ref.
	 * EN: Requires useRef results to be named ref or with the Ref suffix.
	 *
	 * Docs: https://eslint-react.xyz/docs/rules/naming-convention-ref-name
	 */
	"@eslint-react/naming-convention-ref-name": "warn",
} as const

const reactDomRuntimeRules = {
	/**
	 * RU: Запрещает использовать legacy API findDOMNode; для доступа к DOM-элементам нужно использовать refs.
	 * EN: Disallows the legacy findDOMNode API; use refs to access DOM elements instead.
	 *
	 * Docs: https://eslint-react.xyz/docs/rules/dom-no-find-dom-node
	 */
	"@eslint-react/dom-no-find-dom-node": "error",

	/**
	 * RU: Предупреждает об использовании flushSync, потому что он принудительно синхронизирует React-обновления.
	 * EN: Warns about using flushSync because it forces React updates to flush synchronously.
	 *
	 * Docs: https://eslint-react.xyz/docs/rules/dom-no-flush-sync
	 */
	"@eslint-react/dom-no-flush-sync": "warn",

	/**
	 * RU: Запрещает legacy API ReactDOM.hydrate; в React 18+ нужно использовать hydrateRoot.
	 * EN: Disallows the legacy ReactDOM.hydrate API; use hydrateRoot in React 18+ instead.
	 *
	 * Docs: https://eslint-react.xyz/docs/rules/dom-no-hydrate
	 */
	"@eslint-react/dom-no-hydrate": "error",

	/**
	 * RU: Запрещает legacy API ReactDOM.render; в React 18+ нужно использовать createRoot.
	 * EN: Disallows the legacy ReactDOM.render API; use createRoot in React 18+ instead.
	 *
	 * Docs: https://eslint-react.xyz/docs/rules/dom-no-render
	 */
	"@eslint-react/dom-no-render": "error",

	/**
	 * RU: Запрещает использовать возвращаемое значение и callback ReactDOM.render.
	 * EN: Disallows using the return value and callback of ReactDOM.render.
	 *
	 * Docs: https://eslint-react.xyz/docs/rules/dom-no-render-return-value
	 */
	"@eslint-react/dom-no-render-return-value": "error",
} as const

const reactJsxRules = {
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
	"@eslint-react/dom-no-missing-button-type": "warn",

	/**
	 * RU: Предупреждает об iframe без sandbox.
	 * EN: Warns about iframes without sandbox.
	 *
	 * Docs: https://eslint-react.xyz/docs/rules/dom-no-missing-iframe-sandbox
	 */
	"@eslint-react/dom-no-missing-iframe-sandbox": "warn",

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
	 * RU: Запрещает небезопасную комбинацию allow-scripts и allow-same-origin в iframe sandbox.
	 * EN: Disallows the unsafe allow-scripts and allow-same-origin combination in iframe sandbox.
	 *
	 * Docs: https://eslint-react.xyz/docs/rules/dom-no-unsafe-iframe-sandbox
	 */
	"@eslint-react/dom-no-unsafe-iframe-sandbox": "error",

	/**
	 * RU: Предупреждает о target="_blank" без безопасного rel.
	 * EN: Warns about target="_blank" without a safe rel value.
	 *
	 * Docs: https://eslint-react.xyz/docs/rules/dom-no-unsafe-target-blank
	 */
	"@eslint-react/dom-no-unsafe-target-blank": "warn",

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
	 * Docs: https://eslint-react.xyz/docs/rules/jsx-no-children-prop
	 */
	"@eslint-react/jsx-no-children-prop": "warn",

	/**
	 * RU: Запрещает одновременно передавать children prop и вложенные children.
	 * EN: Disallows passing a children prop together with nested children.
	 *
	 * Docs: https://eslint-react.xyz/docs/rules/jsx-no-children-prop-with-children
	 */
	"@eslint-react/jsx-no-children-prop-with-children": "error",

	/**
	 * RU: Запрещает JS-комментарии как текстовые узлы внутри JSX.
	 * EN: Disallows JS comments as text nodes inside JSX.
	 *
	 * Docs: https://eslint-react.xyz/docs/rules/jsx-no-comment-textnodes
	 */
	"@eslint-react/jsx-no-comment-textnodes": "error",

	/**
	 * RU: Запрещает ставить key после spread props, чтобы не вызывать неоптимальный JSX transform.
	 * EN: Disallows placing key after spread props to avoid deoptimized JSX transform.
	 *
	 * Docs: https://eslint-react.xyz/docs/rules/jsx-no-key-after-spread
	 */
	"@eslint-react/jsx-no-key-after-spread": "error",

	/**
	 * RU: Запрещает случайный символ $ перед JSX-выражением.
	 * EN: Disallows accidental $ before JSX expressions.
	 *
	 * Docs: https://eslint-react.xyz/docs/rules/jsx-no-leaked-dollar
	 */
	"@eslint-react/jsx-no-leaked-dollar": "error",

	/**
	 * RU: Запрещает случайный символ ; внутри JSX.
	 * EN: Disallows accidental ; inside JSX.
	 *
	 * Docs: https://eslint-react.xyz/docs/rules/jsx-no-leaked-semicolon
	 */
	"@eslint-react/jsx-no-leaked-semicolon": "error",

	/**
	 * RU: Запрещает JSX namespace syntax, так как React не поддерживает namespaced JSX-элементы.
	 * EN: Disallows JSX namespace syntax because React does not support namespaced JSX elements.
	 *
	 * Docs: https://eslint-react.xyz/docs/rules/jsx-no-namespace
	 */
	"@eslint-react/jsx-no-namespace": "error",

	/**
	 * RU: Предупреждает о лишних React Fragment, которые не группируют несколько элементов и не имеют key.
	 * EN: Warns about unnecessary React Fragments that do not group multiple elements and do not have a key.
	 *
	 * Docs: https://eslint-react.xyz/docs/rules/jsx-no-useless-fragment
	 */
	"@eslint-react/jsx-no-useless-fragment": "warn",
} as const

export const reactCore = [
	{
		name: "@dubium/eslint-config/react/plugin",
		files: reactPluginFiles,
		plugins: {
			"@eslint-react": eslintReactPlugin,
		},
	},
	{
		name: "@dubium/eslint-config/react/core",
		files: reactFiles,
		rules: {
			...reactCommonRules,
			...reactDomRuntimeRules,
		},
	},
	{
		name: "@dubium/eslint-config/react/jsx",
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
			...reactJsxRules,

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
			 * RU: Разрешает прямой default export в React-файлах для React.lazy, но запрещает default re-export.
			 * EN: Allows direct default exports in React files for React.lazy, but disallows default re-exports.
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

			/**
			 * RU: Запрещает wildcard-экспорт `export * from "..."`, чтобы публичный API модуля был явным и контролируемым.
			 * EN: Disallows wildcard exports `export * from "..."` to keep the module public API explicit and controlled.
			 *
			 * Docs: https://eslint.org/docs/latest/rules/no-restricted-syntax
			 */
			"no-restricted-syntax": [
				"error",
				{
					selector: "ExportAllDeclaration",
					message: "Не используй export *. Экспортируй сущности явно через named exports.",
				},
				{
					selector: "JSXExpressionContainer > LogicalExpression[operator='&&']",
					message:
						"Не используй && для условного рендера в JSX. Используй тернарный оператор: condition ? <Component /> : null.",
				},
			],
		},
	},
]
