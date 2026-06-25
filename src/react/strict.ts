import { reactRecommended } from "./recommended.js"

const reactFiles = ["**/*.{tsx}", "**/use*.{ts,mts,cts}"]
const reactJsxFiles = ["**/*.{jsx,tsx}"]

const reactStrictRules = {
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
	 * RU: Предупреждает о мутации глобальных значений во время render.
	 * EN: Warns about mutating global values during render.
	 *
	 * Docs: https://eslint-react.xyz/docs/rules/globals
	 */
	"@eslint-react/globals": "warn",

	/**
	 * RU: Предупреждает о чтении this.state внутри this.setState.
	 * EN: Warns about reading this.state inside this.setState.
	 *
	 * Docs: https://eslint-react.xyz/docs/rules/no-access-state-in-setstate
	 */
	"@eslint-react/no-access-state-in-setstate": "warn",

	/**
	 * RU: Предупреждает о class components в новом коде.
	 * EN: Warns about class components in new code.
	 *
	 * Docs: https://eslint-react.xyz/docs/rules/no-class-component
	 */
	"@eslint-react/no-class-component": "warn",

	/**
	 * RU: Предупреждает об устаревшем componentWillMount.
	 * EN: Warns about deprecated componentWillMount.
	 *
	 * Docs: https://eslint-react.xyz/docs/rules/no-component-will-mount
	 */
	"@eslint-react/no-component-will-mount": "warn",

	/**
	 * RU: Предупреждает об устаревшем componentWillReceiveProps.
	 * EN: Warns about deprecated componentWillReceiveProps.
	 *
	 * Docs: https://eslint-react.xyz/docs/rules/no-component-will-receive-props
	 */
	"@eslint-react/no-component-will-receive-props": "warn",

	/**
	 * RU: Предупреждает об устаревшем componentWillUpdate.
	 * EN: Warns about deprecated componentWillUpdate.
	 *
	 * Docs: https://eslint-react.xyz/docs/rules/no-component-will-update
	 */
	"@eslint-react/no-component-will-update": "warn",

	/**
	 * RU: Предупреждает о повторяющихся key у соседних элементов.
	 * EN: Warns about duplicate keys on sibling elements.
	 *
	 * Docs: https://eslint-react.xyz/docs/rules/no-duplicate-key
	 */
	"@eslint-react/no-duplicate-key": "warn",

	/**
	 * RU: Предупреждает о скрытой передаче children через spread props.
	 * EN: Warns about hidden children passing through spread props.
	 *
	 * Docs: https://eslint-react.xyz/docs/rules/no-implicit-children
	 */
	"@eslint-react/no-implicit-children": "warn",

	/**
	 * RU: Предупреждает о скрытой передаче key через spread props.
	 * EN: Warns about hidden key passing through spread props.
	 *
	 * Docs: https://eslint-react.xyz/docs/rules/no-implicit-key
	 */
	"@eslint-react/no-implicit-key": "warn",

	/**
	 * RU: Предупреждает о скрытой передаче ref через spread props.
	 * EN: Warns about hidden ref passing through spread props.
	 *
	 * Docs: https://eslint-react.xyz/docs/rules/no-implicit-ref
	 */
	"@eslint-react/no-implicit-ref": "warn",

	/**
	 * RU: Запрещает некорректное использование dev-only API captureOwnerStack.
	 * EN: Disallows incorrect usage of the dev-only captureOwnerStack API.
	 *
	 * Docs: https://eslint-react.xyz/docs/rules/no-misused-capture-owner-stack
	 */
	"@eslint-react/no-misused-capture-owner-stack": "error",

	/**
	 * RU: В strict-режиме запрещает объявлять компоненты внутри компонентов.
	 * EN: In strict mode, disallows declaring components inside components.
	 *
	 * Docs: https://eslint-react.xyz/docs/rules/no-nested-component-definitions
	 */
	"@eslint-react/no-nested-component-definitions": "error",

	/**
	 * RU: В strict-режиме запрещает объявлять lazy-компоненты внутри компонентов или хуков.
	 * EN: In strict mode, disallows declaring lazy components inside components or hooks.
	 *
	 * Docs: https://eslint-react.xyz/docs/rules/no-nested-lazy-component-declarations
	 */
	"@eslint-react/no-nested-lazy-component-declarations": "error",

	/**
	 * RU: Предупреждает о setState в componentDidMount.
	 * EN: Warns about setState in componentDidMount.
	 *
	 * Docs: https://eslint-react.xyz/docs/rules/no-set-state-in-component-did-mount
	 */
	"@eslint-react/no-set-state-in-component-did-mount": "warn",

	/**
	 * RU: Предупреждает о setState в componentDidUpdate.
	 * EN: Warns about setState in componentDidUpdate.
	 *
	 * Docs: https://eslint-react.xyz/docs/rules/no-set-state-in-component-did-update
	 */
	"@eslint-react/no-set-state-in-component-did-update": "warn",

	/**
	 * RU: Предупреждает о setState в componentWillUpdate.
	 * EN: Warns about setState in componentWillUpdate.
	 *
	 * Docs: https://eslint-react.xyz/docs/rules/no-set-state-in-component-will-update
	 */
	"@eslint-react/no-set-state-in-component-will-update": "warn",

	/**
	 * RU: Предупреждает о небезопасном UNSAFE_componentWillMount.
	 * EN: Warns about unsafe UNSAFE_componentWillMount.
	 *
	 * Docs: https://eslint-react.xyz/docs/rules/no-unsafe-component-will-mount
	 */
	"@eslint-react/no-unsafe-component-will-mount": "warn",

	/**
	 * RU: Предупреждает о небезопасном UNSAFE_componentWillReceiveProps.
	 * EN: Warns about unsafe UNSAFE_componentWillReceiveProps.
	 *
	 * Docs: https://eslint-react.xyz/docs/rules/no-unsafe-component-will-receive-props
	 */
	"@eslint-react/no-unsafe-component-will-receive-props": "warn",

	/**
	 * RU: Предупреждает о небезопасном UNSAFE_componentWillUpdate.
	 * EN: Warns about unsafe UNSAFE_componentWillUpdate.
	 *
	 * Docs: https://eslint-react.xyz/docs/rules/no-unsafe-component-will-update
	 */
	"@eslint-react/no-unsafe-component-will-update": "warn",

	/**
	 * RU: Предупреждает о нестабильных default props в деструктуризации.
	 * EN: Warns about unstable default props in destructuring.
	 *
	 * Docs: https://eslint-react.xyz/docs/rules/no-unstable-default-props
	 */
	"@eslint-react/no-unstable-default-props": "warn",

	/**
	 * RU: Предупреждает о неиспользуемых методах и свойствах class components.
	 * EN: Warns about unused class component methods and properties.
	 *
	 * Docs: https://eslint-react.xyz/docs/rules/no-unused-class-component-members
	 */
	"@eslint-react/no-unused-class-component-members": "warn",

	/**
	 * RU: Предупреждает о props, которые описаны в типе компонента, но не используются внутри компонента.
	 * EN: Warns about props defined in the component type but not used inside the component.
	 *
	 * Docs: https://eslint-react.xyz/docs/rules/no-unused-props
	 */
	"@eslint-react/no-unused-props": "warn",

	/**
	 * RU: Предупреждает о state, значение которого объявлено, но нигде не используется.
	 * EN: Warns about state values that are declared but never used.
	 *
	 * Docs: https://eslint-react.xyz/docs/rules/no-unused-state
	 */
	"@eslint-react/no-unused-state": "warn",

	/**
	 * RU: В strict-режиме запрещает чтение или изменение ref.current во время render.
	 * EN: In strict mode, disallows reading or writing ref.current during render.
	 *
	 * Docs: https://eslint-react.xyz/docs/rules/refs
	 */
	"@eslint-react/refs": "error",

	/**
	 * RU: В strict-режиме запрещает динамическое создание компонентов во время render.
	 * EN: In strict mode, disallows dynamically creating components during render.
	 *
	 * Docs: https://eslint-react.xyz/docs/rules/static-components
	 */
	"@eslint-react/static-components": "error",

	/**
	 * RU: Предупреждает о синтаксисе, который React Compiler не может безопасно анализировать.
	 * EN: Warns about syntax that React Compiler cannot safely analyze.
	 *
	 * Docs: https://eslint-react.xyz/docs/rules/unsupported-syntax
	 */
	"@eslint-react/unsupported-syntax": "warn",

	/**
	 * RU: В strict-режиме требует очищать addEventListener в компонентах и хуках.
	 * EN: In strict mode, requires addEventListener cleanup in components and hooks.
	 *
	 * Docs: https://eslint-react.xyz/docs/rules/web-api-no-leaked-event-listener
	 */
	"@eslint-react/web-api-no-leaked-event-listener": "error",

	/**
	 * RU: В strict-режиме требует отменять fetch в компонентах и хуках.
	 * EN: In strict mode, requires fetch cancellation in components and hooks.
	 *
	 * Docs: https://eslint-react.xyz/docs/rules/web-api-no-leaked-fetch
	 */
	"@eslint-react/web-api-no-leaked-fetch": "error",

	/**
	 * RU: В strict-режиме требует отключать IntersectionObserver в компонентах и хуках.
	 * EN: In strict mode, requires disconnecting IntersectionObserver in components and hooks.
	 *
	 * Docs: https://eslint-react.xyz/docs/rules/web-api-no-leaked-intersection-observer
	 */
	"@eslint-react/web-api-no-leaked-intersection-observer": "error",

	/**
	 * RU: В strict-режиме требует очищать setInterval в компонентах и хуках.
	 * EN: In strict mode, requires clearing setInterval in components and hooks.
	 *
	 * Docs: https://eslint-react.xyz/docs/rules/web-api-no-leaked-interval
	 */
	"@eslint-react/web-api-no-leaked-interval": "error",

	/**
	 * RU: В strict-режиме требует отключать ResizeObserver в компонентах и хуках.
	 * EN: In strict mode, requires disconnecting ResizeObserver in components and hooks.
	 *
	 * Docs: https://eslint-react.xyz/docs/rules/web-api-no-leaked-resize-observer
	 */
	"@eslint-react/web-api-no-leaked-resize-observer": "error",

	/**
	 * RU: В strict-режиме требует очищать setTimeout в компонентах и хуках.
	 * EN: In strict mode, requires clearing setTimeout in components and hooks.
	 *
	 * Docs: https://eslint-react.xyz/docs/rules/web-api-no-leaked-timeout
	 */
	"@eslint-react/web-api-no-leaked-timeout": "error",

	/**
	 * RU: В strict-режиме требует называть React Context в PascalCase с суффиксом Context.
	 * EN: In strict mode, requires React Context names to use PascalCase with the Context suffix.
	 *
	 * Docs: https://eslint-react.xyz/docs/rules/naming-convention-context-name
	 */
	"@eslint-react/naming-convention-context-name": "error",

	/**
	 * RU: В strict-режиме требует называть результат useId как id или с суффиксом Id.
	 * EN: In strict mode, requires useId results to be named id or with the Id suffix.
	 *
	 * Docs: https://eslint-react.xyz/docs/rules/naming-convention-id-name
	 */
	"@eslint-react/naming-convention-id-name": "error",

	/**
	 * RU: В strict-режиме требует называть результат useRef как ref или с суффиксом Ref.
	 * EN: In strict mode, requires useRef results to be named ref or with the Ref suffix.
	 *
	 * Docs: https://eslint-react.xyz/docs/rules/naming-convention-ref-name
	 */
	"@eslint-react/naming-convention-ref-name": "error",
} as const

const reactStrictJsxRules = {
	/**
	 * RU: В strict-режиме запрещает dangerouslySetInnerHTML.
	 * EN: In strict mode, disallows dangerouslySetInnerHTML.
	 *
	 * Docs: https://eslint-react.xyz/docs/rules/dom-no-dangerously-set-innerhtml
	 */
	"@eslint-react/dom-no-dangerously-set-innerhtml": "error",

	/**
	 * RU: В strict-режиме требует явно указывать type у button.
	 * EN: In strict mode, requires explicit button type.
	 *
	 * Docs: https://eslint-react.xyz/docs/rules/dom-no-missing-button-type
	 */
	"@eslint-react/dom-no-missing-button-type": "error",

	/**
	 * RU: В strict-режиме требует sandbox у iframe.
	 * EN: In strict mode, requires sandbox on iframes.
	 *
	 * Docs: https://eslint-react.xyz/docs/rules/dom-no-missing-iframe-sandbox
	 */
	"@eslint-react/dom-no-missing-iframe-sandbox": "error",

	/**
	 * RU: В strict-режиме запрещает target="_blank" без безопасного rel.
	 * EN: In strict mode, disallows target="_blank" without a safe rel value.
	 *
	 * Docs: https://eslint-react.xyz/docs/rules/dom-no-unsafe-target-blank
	 */
	"@eslint-react/dom-no-unsafe-target-blank": "error",

	/**
	 * RU: В strict-режиме запрещает передавать children как prop.
	 * EN: In strict mode, disallows passing children as a prop.
	 *
	 * Docs: https://eslint-react.xyz/docs/rules/jsx-no-children-prop
	 */
	"@eslint-react/jsx-no-children-prop": "error",

	/**
	 * RU: В strict-режиме запрещает лишние React Fragment.
	 * EN: In strict mode, disallows unnecessary React Fragments.
	 *
	 * Docs: https://eslint-react.xyz/docs/rules/jsx-no-useless-fragment
	 */
	"@eslint-react/jsx-no-useless-fragment": "error",
} as const

export const reactStrict = [
	...reactRecommended,
	{
		name: "@dubium/eslint-config/react/strict",
		files: reactFiles,
		rules: reactStrictRules,
	},
	{
		name: "@dubium/eslint-config/react/strict-jsx",
		files: reactJsxFiles,
		rules: reactStrictJsxRules,
	},
]
