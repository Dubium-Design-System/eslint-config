import stylisticPlugin from "@stylistic/eslint-plugin"

export const commonStylistic = [
	{
		name: "@dubium/eslint-config/common/stylistic",
		files: ["**/*.{js,mjs,cjs,jsx,ts,tsx,mts,cts}"],
		plugins: {
			"@stylistic": stylisticPlugin,
		},
		rules: {
			/**
			 * RU: Требует пробелы внутри квадратных скобок массива.
			 * EN: Requires spaces inside array brackets.
			 *
			 * Docs: https://eslint.style/rules/array-bracket-spacing
			 */
			"@stylistic/array-bracket-spacing": ["error", "always"],

			/**
			 * RU: Требует скобки вокруг параметров arrow-функций.
			 * EN: Requires parentheses around arrow function parameters.
			 *
			 * Docs: https://eslint.style/rules/arrow-parens
			 */
			"@stylistic/arrow-parens": ["error", "always"],

			/**
			 * RU: Требует пробелы до и после стрелки в arrow-функциях.
			 * EN: Requires spaces before and after the arrow in arrow functions.
			 *
			 * Docs: https://eslint.style/rules/arrow-spacing
			 */
			"@stylistic/arrow-spacing": [
				"error",
				{
					after: true,
					before: true,
				},
			],

			/**
			 * RU: Требует пробелы внутри однострочных блоков.
			 * EN: Requires spaces inside single-line blocks.
			 *
			 * Docs: https://eslint.style/rules/block-spacing
			 */
			"@stylistic/block-spacing": ["error", "always"],

			/**
			 * RU: Требует 1TBS-стиль фигурных скобок.
			 * EN: Requires one true brace style.
			 *
			 * Docs: https://eslint.style/rules/brace-style
			 */
			"@stylistic/brace-style": [
				"error",
				"1tbs",
				{
					allowSingleLine: true,
				},
			],

			/**
			 * RU: Требует trailing comma в многострочных структурах.
			 * EN: Requires trailing commas in multiline structures.
			 *
			 * Docs: https://eslint.style/rules/comma-dangle
			 */
			"@stylistic/comma-dangle": ["error", "always-multiline"],

			/**
			 * RU: Требует пробел после запятой и запрещает пробел перед запятой.
			 * EN: Requires a space after commas and disallows a space before commas.
			 *
			 * Docs: https://eslint.style/rules/comma-spacing
			 */
			"@stylistic/comma-spacing": [
				"error",
				{
					after: true,
					before: false,
				},
			],

			/**
			 * RU: Требует ставить запятую в конце текущей строки.
			 * EN: Requires commas at the end of the current line.
			 *
			 * Docs: https://eslint.style/rules/comma-style
			 */
			"@stylistic/comma-style": ["error", "last"],

			/**
			 * RU: Запрещает пробелы внутри computed property brackets.
			 * EN: Disallows spaces inside computed property brackets.
			 *
			 * Docs: https://eslint.style/rules/computed-property-spacing
			 */
			"@stylistic/computed-property-spacing": ["error", "never"],

			/**
			 * RU: Требует переносить точку вместе со свойством при цепочках вызовов.
			 * EN: Requires the dot to be placed with the property in member chains.
			 *
			 * Docs: https://eslint.style/rules/dot-location
			 */
			"@stylistic/dot-location": ["error", "property"],

			/**
			 * RU: Требует пустую строку в конце файла.
			 * EN: Requires a newline at the end of files.
			 *
			 * Docs: https://eslint.style/rules/eol-last
			 */
			"@stylistic/eol-last": ["error", "always"],

			/**
			 * RU: Запрещает пробел между именем функции и скобками вызова.
			 * EN: Disallows spacing between a function name and its call parentheses.
			 *
			 * Docs: https://eslint.style/rules/function-call-spacing
			 */
			"@stylistic/function-call-spacing": ["error", "never"],

			/**
			 * RU: Требует табы для отступов.
			 * EN: Requires tabs for indentation.
			 *
			 * Docs: https://eslint.style/rules/indent
			 */
			"@stylistic/indent": [
				"error",
				"tab",
				{
					SwitchCase: 1,
				},
			],

			/**
			 * RU: Требует единый стиль пробелов вокруг двоеточия в объектах.
			 * EN: Requires consistent spacing around colons in object literals.
			 *
			 * Docs: https://eslint.style/rules/key-spacing
			 */
			"@stylistic/key-spacing": [
				"error",
				{
					afterColon: true,
					beforeColon: false,
				},
			],

			/**
			 * RU: Требует пробелы вокруг ключевых слов.
			 * EN: Requires spaces around keywords.
			 *
			 * Docs: https://eslint.style/rules/keyword-spacing
			 */
			"@stylistic/keyword-spacing": [
				"error",
				{
					after: true,
					before: true,
				},
			],

			/**
			 * RU: Требует пустую строку между members класса.
			 * EN: Requires blank lines between class members.
			 *
			 * Docs: https://eslint.style/rules/lines-between-class-members
			 */
			"@stylistic/lines-between-class-members": [
				"error",
				"always",
				{
					exceptAfterSingleLine: true,
				},
			],

			/**
			 * RU: Предупреждает о строках длиннее 120 символов.
			 * EN: Warns about lines longer than 120 characters.
			 *
			 * Docs: https://eslint.style/rules/max-len
			 */
			"@stylistic/max-len": [
				"warn",
				{
					code: 120,
					ignoreComments: true,
					ignoreStrings: true,
					ignoreTemplateLiterals: true,
					ignoreRegExpLiterals: true,
				},
			],

			/**
			 * RU: Требует скобки при вызове конструктора без аргументов.
			 * EN: Requires parentheses when invoking a constructor with no arguments.
			 *
			 * Docs: https://eslint.style/rules/new-parens
			 */
			"@stylistic/new-parens": "error",

			/**
			 * RU: Запрещает лишние точки с запятой.
			 * EN: Disallows unnecessary semicolons.
			 *
			 * Docs: https://eslint.style/rules/no-extra-semi
			 */
			"@stylistic/no-extra-semi": "error",

			/**
			 * RU: Запрещает floating decimals вроде .5 и 2.
			 * EN: Disallows floating decimals such as .5 and 2.
			 *
			 * Docs: https://eslint.style/rules/no-floating-decimal
			 */
			"@stylistic/no-floating-decimal": "error",

			/**
			 * RU: Запрещает смешивать пробелы и табы в отступах.
			 * EN: Disallows mixed spaces and tabs for indentation.
			 *
			 * Docs: https://eslint.style/rules/no-mixed-spaces-and-tabs
			 */
			"@stylistic/no-mixed-spaces-and-tabs": "error",

			/**
			 * RU: Запрещает лишние пробелы.
			 * EN: Disallows unnecessary multiple spaces.
			 *
			 * Docs: https://eslint.style/rules/no-multi-spaces
			 */
			"@stylistic/no-multi-spaces": "error",

			/**
			 * RU: Ограничивает количество пустых строк.
			 * EN: Limits the number of empty lines.
			 *
			 * Docs: https://eslint.style/rules/no-multiple-empty-lines
			 */
			"@stylistic/no-multiple-empty-lines": [
				"error",
				{
					max: 1,
					maxBOF: 0,
					maxEOF: 0,
				},
			],

			/**
			 * RU: Не запрещаем табы, потому что таб используется как основной символ отступа.
			 * EN: Do not disallow tabs because tabs are used as the primary indentation character.
			 *
			 * Docs: https://eslint.style/rules/no-tabs
			 */
			"@stylistic/no-tabs": "off",

			/**
			 * RU: Запрещает пробелы в конце строк.
			 * EN: Disallows trailing whitespace at the end of lines.
			 *
			 * Docs: https://eslint.style/rules/no-trailing-spaces
			 */
			"@stylistic/no-trailing-spaces": "error",

			/**
			 * RU: Запрещает пробел перед обращением к свойству.
			 * EN: Disallows whitespace before property access.
			 *
			 * Docs: https://eslint.style/rules/no-whitespace-before-property
			 */
			"@stylistic/no-whitespace-before-property": "error",

			/**
			 * RU: Требует пробелы внутри фигурных скобок объекта.
			 * EN: Requires spaces inside object curly braces.
			 *
			 * Docs: https://eslint.style/rules/object-curly-spacing
			 */
			"@stylistic/object-curly-spacing": ["error", "always"],

			/**
			 * RU: Требует переносить оператор на следующую строку вместе с правой частью выражения.
			 * EN: Requires operators to be placed before the right side of the expression on a new line.
			 *
			 * Docs: https://eslint.style/rules/operator-linebreak
			 */
			"@stylistic/operator-linebreak": ["error", "before"],

			/**
			 * RU: Запрещает пустые строки внутри блоков.
			 * EN: Disallows blank lines inside blocks.
			 *
			 * Docs: https://eslint.style/rules/padded-blocks
			 */
			"@stylistic/padded-blocks": ["error", "never"],

			/**
			 * RU: Требует кавычки у свойств объекта только там, где они нужны.
			 * EN: Requires quotes around object properties only when needed.
			 *
			 * Docs: https://eslint.style/rules/quote-props
			 */
			"@stylistic/quote-props": ["error", "as-needed"],

			/**
			 * RU: Требует двойные кавычки для строк.
			 * EN: Requires double quotes for strings.
			 *
			 * Docs: https://eslint.style/rules/quotes
			 */
			"@stylistic/quotes": [
				"error",
				"double",
				{
					allowTemplateLiterals: "always",
					avoidEscape: true,
				},
			],

			/**
			 * RU: Запрещает пробел между spread/rest оператором и выражением.
			 * EN: Disallows spacing between spread/rest operators and their expressions.
			 *
			 * Docs: https://eslint.style/rules/rest-spread-spacing
			 */
			"@stylistic/rest-spread-spacing": ["error", "never"],

			/**
			 * RU: Запрещает точки с запятой.
			 * EN: Disallows semicolons.
			 *
			 * Docs: https://eslint.style/rules/semi
			 */
			"@stylistic/semi": ["error", "never"],

			/**
			 * RU: Требует единый стиль пробелов вокруг точки с запятой, если она встречается.
			 * EN: Requires consistent spacing around semicolons when they appear.
			 *
			 * Docs: https://eslint.style/rules/semi-spacing
			 */
			"@stylistic/semi-spacing": [
				"error",
				{
					after: true,
					before: false,
				},
			],

			/**
			 * RU: Требует ставить точку с запятой в конце statement, если она встречается.
			 * EN: Requires semicolons to appear at the end of statements when they appear.
			 *
			 * Docs: https://eslint.style/rules/semi-style
			 */
			"@stylistic/semi-style": ["error", "last"],

			/**
			 * RU: Требует пробел перед блоком.
			 * EN: Requires a space before blocks.
			 *
			 * Docs: https://eslint.style/rules/space-before-blocks
			 */
			"@stylistic/space-before-blocks": ["error", "always"],

			/**
			 * RU: Требует единый стиль пробела перед скобками функции.
			 * EN: Requires consistent spacing before function parentheses.
			 *
			 * Docs: https://eslint.style/rules/space-before-function-paren
			 */
			"@stylistic/space-before-function-paren": [
				"error",
				{
					anonymous: "always",
					asyncArrow: "always",
					named: "never",
				},
			],

			/**
			 * RU: Запрещает пробелы внутри круглых скобок.
			 * EN: Disallows spaces inside parentheses.
			 *
			 * Docs: https://eslint.style/rules/space-in-parens
			 */
			"@stylistic/space-in-parens": ["error", "never"],

			/**
			 * RU: Требует пробелы вокруг инфиксных операторов.
			 * EN: Requires spaces around infix operators.
			 *
			 * Docs: https://eslint.style/rules/space-infix-ops
			 */
			"@stylistic/space-infix-ops": "error",

			/**
			 * RU: Требует единый стиль пробелов вокруг unary operators.
			 * EN: Requires consistent spacing around unary operators.
			 *
			 * Docs: https://eslint.style/rules/space-unary-ops
			 */
			"@stylistic/space-unary-ops": [
				"error",
				{
					nonwords: false,
					words: true,
				},
			],

			/**
			 * RU: Требует пробел после начала комментария.
			 * EN: Requires a space after the start of a comment.
			 *
			 * Docs: https://eslint.style/rules/spaced-comment
			 */
			"@stylistic/spaced-comment": [
				"error",
				"always",
				{
					block: {
						balanced: true,
					},
				},
			],

			/**
			 * RU: Требует единый стиль пробелов вокруг двоеточия в switch case.
			 * EN: Requires consistent spacing around colons in switch cases.
			 *
			 * Docs: https://eslint.style/rules/switch-colon-spacing
			 */
			"@stylistic/switch-colon-spacing": [
				"error",
				{
					after: true,
					before: false,
				},
			],

			/**
			 * RU: Запрещает пробелы внутри template literal placeholders.
			 * EN: Disallows spaces inside template literal placeholders.
			 *
			 * Docs: https://eslint.style/rules/template-curly-spacing
			 */
			"@stylistic/template-curly-spacing": ["error", "never"],

			/**
			 * RU: Запрещает пробел между template tag и template literal.
			 * EN: Disallows spacing between a template tag and its template literal.
			 *
			 * Docs: https://eslint.style/rules/template-tag-spacing
			 */
			"@stylistic/template-tag-spacing": ["error", "never"],
		},
	},
]
