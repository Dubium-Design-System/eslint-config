import eslintJs from "@eslint/js"
import process from "node:process"

export const commonJavascript = [
	eslintJs.configs.recommended,
	{
		name: "@dubium/eslint-config/common/javascript",
		files: [ "**/*.{js,mjs,cjs,jsx,ts,tsx,mts,cts}" ],
		languageOptions: {
			ecmaVersion: "latest",
			sourceType: "module",
		},
		rules: {
			/**
			 * RU: Требует возврата значения в callback-функциях методов массивов.
			 * EN: Requires return values in callbacks of array methods.
			 *
			 * Docs: https://eslint.org/docs/latest/rules/array-callback-return
			 */
			"array-callback-return": "error",

			/**
			 * RU: Запрещает await внутри циклов, чтобы не создавать случайное последовательное выполнение async-операций.
			 * EN: Disallows await inside loops to avoid accidental sequential execution of async operations.
			 *
			 * Docs: https://eslint.org/docs/latest/rules/no-await-in-loop
			 */
			"no-await-in-loop": "error",

			/**
			 * RU: Запрещает возвращать значение из constructor, потому что constructor должен инициализировать экземпляр.
			 * EN: Disallows returning values from constructors because constructors should initialize instances.
			 *
			 * Docs: https://eslint.org/docs/latest/rules/no-constructor-return
			 */
			"no-constructor-return": "error",

			/**
			 * RU: Запрещает debugger в production и предупреждает о нём в development.
			 * EN: Disallows debugger in production and warns about it in development.
			 *
			 * Docs: https://eslint.org/docs/latest/rules/no-debugger
			 */
			"no-debugger":
				process.env.NODE_ENV === "production" ? "error" : "warn",

			/**
			 * RU: Запрещает дублирование импортов из одного модуля.
			 * EN: Disallows duplicate imports from the same module.
			 *
			 * Docs: https://eslint.org/docs/latest/rules/no-duplicate-imports
			 */
			"no-duplicate-imports": "error",

			/**
			 * RU: Запрещает объявления функций и переменных внутри блоков.
			 * EN: Disallows function or variable declarations in nested blocks.
			 *
			 * Docs: https://eslint.org/docs/latest/rules/no-inner-declarations
			 */
			"no-inner-declarations": "error",

			/**
			 * RU: Запрещает возврат значений в executor Promise.
			 * EN: Disallows return values from Promise executors.
			 *
			 * Docs: https://eslint.org/docs/latest/rules/no-promise-executor-return
			 */
			"no-promise-executor-return": "error",

			/**
			 * RU: Запрещает сравнение переменной с самой собой.
			 * EN: Disallows comparing a variable with itself.
			 *
			 * Docs: https://eslint.org/docs/latest/rules/no-self-compare
			 */
			"no-self-compare": "error",

			/**
			 * RU: Запрещает использование необъявленных переменных.
			 * EN: Disallows usage of undeclared variables.
			 *
			 * Docs: https://eslint.org/docs/latest/rules/no-undef
			 */
			"no-undef": "error",

			/**
			 * RU: Запрещает неизменяемые условия в циклах.
			 * EN: Disallows unmodified loop conditions.
			 *
			 * Docs: https://eslint.org/docs/latest/rules/no-unmodified-loop-condition
			 */
			"no-unmodified-loop-condition": "error",

			/**
			 * RU: Запрещает недостижимые итерации циклов.
			 * EN: Disallows loops that can have only one iteration.
			 *
			 * Docs: https://eslint.org/docs/latest/rules/no-unreachable-loop
			 */
			"no-unreachable-loop": "error",

			/**
			 * RU: Запрещает использование переменных до объявления.
			 * EN: Disallows using variables before they are defined.
			 *
			 * Docs: https://eslint.org/docs/latest/rules/no-use-before-define
			 */
			"no-use-before-define": "error",

			/**
			 * RU: Предупреждает о возможных race conditions при async-обновлениях.
			 * EN: Warns about possible race conditions in async updates.
			 *
			 * Docs: https://eslint.org/docs/latest/rules/require-atomic-updates
			 */
			"require-atomic-updates": "error",

			/**
			 * RU: Запрещает setter без getter, потому что write-only accessor делает API класса или объекта неочевидным.
			 * EN: Disallows setters without getters because write-only accessors make class or object APIs unclear.
			 *
			 * Docs: https://eslint.org/docs/latest/rules/accessor-pairs
			 */
			"accessor-pairs": [
				"warn",
				{
					setWithoutGet: true,
					getWithoutSet: false,
					enforceForClassMembers: true,
					enforceForTSTypes: false,
				},
			],

			/**
			 * RU: Требует краткое тело arrow-функции там, где block body и return не нужны.
			 * EN: Requires concise arrow function bodies when a block body and return statement are unnecessary.
			 *
			 * Docs: https://eslint.org/docs/latest/rules/arrow-body-style
			 */
			"arrow-body-style": [
				"warn",
				"as-needed",
				{
					requireReturnForObjectLiteral: false,
				},
			],

			/**
			 * RU: Предупреждает о функциях со слишком большим количеством ветвлений, чтобы вовремя выносить сложную логику в отдельные функции.
			 * EN: Warns about functions with too many branches so complex logic can be extracted into smaller functions.
			 *
			 * Docs: https://eslint.org/docs/latest/rules/complexity
			 */
			complexity: [
				"warn",
				{
					max: 10,
				},
			],

			/**
			 * RU: Требует, чтобы функция либо всегда возвращала значение, либо не возвращала его ни в одной ветке.
			 * EN: Requires functions to either always return a value or never return a value in any branch.
			 *
			 * Docs: https://eslint.org/docs/latest/rules/consistent-return
			 */
			"consistent-return": "error",

			/**
			 * RU: Требует фигурные скобки для всех управляющих конструкций, чтобы избежать ошибок при добавлении новых строк в if/else/for/while.
			 * EN: Requires curly braces for all control statements to avoid bugs when adding new lines to if/else/for/while bodies.
			 *
			 * Docs: https://eslint.org/docs/latest/rules/curly
			 */
			curly: [ "error", "all" ],

			/**
			 * RU: Предупреждает, если switch не содержит default-ветку или явный комментарий no default.
			 * EN: Warns when a switch statement has no default branch or an explicit no default comment.
			 *
			 * Docs: https://eslint.org/docs/latest/rules/default-case
			 */
			"default-case": "warn",

			/**
			 * RU: Требует размещать default-ветку последней, чтобы switch читался сверху вниз от конкретных случаев к fallback.
			 * EN: Requires the default case to be last so switch statements read from specific cases to fallback.
			 *
			 * Docs: https://eslint.org/docs/latest/rules/default-case-last
			 */
			"default-case-last": "error",

			/**
			 * RU: Требует размещать параметры со значением по умолчанию после обязательных параметров, чтобы вызовы функций не требовали передачи undefined.
			 * EN: Requires default parameters to be placed after required parameters so function calls do not need explicit undefined arguments.
			 *
			 * Docs: https://eslint.org/docs/latest/rules/default-param-last
			 */
			"default-param-last": "error",

			/**
			 * RU: Запрещает нестрогое сравнение, чтобы избежать неявного приведения типов.
			 * EN: Disallows loose equality to avoid implicit type coercion.
			 *
			 * Docs: https://eslint.org/docs/latest/rules/eqeqeq
			 */
			eqeqeq: "error",

			/**
			 * RU: Требует держать getter и setter одного свойства рядом и располагать getter перед setter.
			 * EN: Requires getter and setter for the same property to be grouped together, with the getter placed before the setter.
			 *
			 * Docs: https://eslint.org/docs/latest/rules/grouped-accessor-pairs
			 */
			"grouped-accessor-pairs": [ "warn", "getBeforeSet" ],

			/**
			 * RU: Требует проверять собственность свойства внутри for...in, чтобы не обрабатывать свойства из prototype chain.
			 * EN: Requires checking property ownership inside for...in loops to avoid processing properties from the prototype chain.
			 *
			 * Docs: https://eslint.org/docs/latest/rules/guard-for-in
			 */
			"guard-for-in": "error",

			/**
			 * RU: Предупреждает, если выражение можно упростить через логические assignment-операторы: ||=, &&= или ??=.
			 * EN: Warns when an expression can be simplified with logical assignment operators: ||=, &&=, or ??=.
			 *
			 * Docs: https://eslint.org/docs/latest/rules/logical-assignment-operators
			 */
			"logical-assignment-operators": "warn",

			/**
			 * RU: Ограничивает файл одним классом, чтобы не смешивать несколько ответственностей и не раздувать модуль.
			 * EN: Limits a file to a single class to avoid mixing multiple responsibilities and bloating the module.
			 *
			 * Docs: https://eslint.org/docs/latest/rules/max-classes-per-file
			 */
			"max-classes-per-file": [
				"error",
				{
					max: 1,
					ignoreExpressions: true,
				},
			],

			/**
			 * RU: Предупреждает о слишком глубокой вложенности блоков, чтобы код писался через early return и декомпозицию.
			 * EN: Warns about deeply nested blocks so code is written with early returns and decomposition.
			 *
			 * Docs: https://eslint.org/docs/latest/rules/max-depth
			 */
			"max-depth": [
				"warn",
				{
					max: 4,
				},
			],

			/**
			 * RU: Предупреждает, если файл становится слишком большим, чтобы вовремя разделять ответственность по модулям.
			 * EN: Warns when a file becomes too large so responsibilities can be split across modules in time.
			 *
			 * Docs: https://eslint.org/docs/latest/rules/max-lines
			 */
			"max-lines": [
				"warn",
				{
					max: 300,
					skipBlankLines: true,
					skipComments: true,
				},
			],

			/**
			 * RU: Предупреждает, если функция становится слишком большой, чтобы вовремя выносить части логики в отдельные функции.
			 * EN: Warns when a function becomes too large so parts of the logic can be extracted into smaller functions in time.
			 *
			 * Docs: https://eslint.org/docs/latest/rules/max-lines-per-function
			 */
			"max-lines-per-function": [
				"warn",
				{
					max: 80,
					skipBlankLines: true,
					skipComments: true,
					IIFEs: false,
				},
			],

			/**
			 * RU: Предупреждает о функциях со слишком большим количеством параметров, чтобы вместо длинного списка аргументов использовать объект параметров.
			 * EN: Warns about functions with too many parameters so a parameters object is used instead of a long argument list.
			 *
			 * Docs: https://eslint.org/docs/latest/rules/max-params
			 */
			"max-params": [
				"warn",
				{
					max: 4,
				},
			],

			/**
			 * RU: Предупреждает, если функция содержит слишком много инструкций, чтобы вовремя выносить шаги логики в отдельные функции.
			 * EN: Warns when a function contains too many statements so logic steps can be extracted into smaller functions in time.
			 *
			 * Docs: https://eslint.org/docs/latest/rules/max-statements
			 */
			"max-statements": [
				"warn",
				{
					max: 20,
				},
			],

			/**
			 * RU: Требует называть конструкторы с большой буквы и вызывать capitalized-функции через new.
			 * EN: Requires constructor names to start with an uppercase letter and capitalized functions to be called with new.
			 *
			 * Docs: https://eslint.org/docs/latest/rules/new-cap
			 */
			"new-cap": [
				"error",
				{
					newIsCap: true,
					capIsNew: true,
					properties: true,
				},
			],

			/**
			 * RU: Запрещает alert, confirm и prompt, потому что такие browser popup API обычно являются debug-кодом или плохим UI.
			 * EN: Disallows alert, confirm, and prompt because these browser popup APIs are usually debug code or poor UI.
			 *
			 * Docs: https://eslint.org/docs/latest/rules/no-alert
			 */
			"no-alert": "error",

			/**
			 * RU: Запрещает Array constructor, чтобы вместо неоднозначного Array(...) использовать литерал массива [].
			 * EN: Disallows the Array constructor so array literals [] are used instead of ambiguous Array(...).
			 *
			 * Docs: https://eslint.org/docs/latest/rules/no-array-constructor
			 */
			"no-array-constructor": "error",

			/**
			 * RU: Запрещает bitwise-операторы, потому что в обычном JS/TS-коде они чаще являются ошибкой или неочевидным трюком.
			 * EN: Disallows bitwise operators because in regular JS/TS code they are often mistakes or unclear tricks.
			 *
			 * Docs: https://eslint.org/docs/latest/rules/no-bitwise
			 */
			"no-bitwise": "error",

			/**
			 * RU: Запрещает arguments.caller и arguments.callee, потому что это устаревшие конструкции, мешающие оптимизациям и запрещённые в strict mode.
			 * EN: Disallows arguments.caller and arguments.callee because they are deprecated constructs that prevent optimizations and are forbidden in strict mode.
			 *
			 * Docs: https://eslint.org/docs/latest/rules/no-caller
			 */
			"no-caller": "error",

			/**
			 * RU: Запрещает console в production и предупреждает о нём в development.
			 * EN: Disallows console in production and warns about it in development.
			 *
			 * Docs: https://eslint.org/docs/latest/rules/no-console
			 */
			"no-console":
				process.env.NODE_ENV === "production" ? "error" : "warn",

			/**
			 * RU: Запрещает регулярные выражения, начинающиеся с =, потому что /= можно спутать с оператором деления с присваиванием.
			 * EN: Disallows regular expressions starting with = because /= can be confused with the division assignment operator.
			 *
			 * Docs: https://eslint.org/docs/latest/rules/no-div-regex
			 */
			"no-div-regex": "error",

			/**
			 * RU: Запрещает else после if с return, чтобы код писался через early return и оставался менее вложенным.
			 * EN: Disallows else after an if with return so code is written with early returns and stays less nested.
			 *
			 * Docs: https://eslint.org/docs/latest/rules/no-else-return
			 */
			"no-else-return": "error",

			/**
			 * RU: Запрещает пустые функции, чтобы заглушки и незавершённая логика были явно описаны комментарием.
			 * EN: Disallows empty functions so stubs and unfinished logic are explicitly described with a comment.
			 *
			 * Docs: https://eslint.org/docs/latest/rules/no-empty-function
			 */
			"no-empty-function": "error",

			/**
			 * RU: Запрещает eval(), потому что выполнение строк как кода опасно, медленно и ломает статический анализ.
			 * EN: Disallows eval() because executing strings as code is dangerous, slow, and breaks static analysis.
			 *
			 * Docs: https://eslint.org/docs/latest/rules/no-eval
			 */
			"no-eval": "error",

			/**
			 * RU: Запрещает расширять prototypes встроенных объектов, потому что такие изменения глобально влияют на всё приложение и могут конфликтовать с библиотеками или будущими стандартами.
			 * EN: Disallows extending built-in object prototypes because such changes affect the entire application globally and may conflict with libraries or future standards.
			 *
			 * Docs: https://eslint.org/docs/latest/rules/no-extend-native
			 */
			"no-extend-native": "error",

			/**
			 * RU: Предупреждает о неявных приведениях типов, чтобы преобразования были записаны явно и читались без JS-трюков.
			 * EN: Warns about implicit type coercions so conversions are explicit and readable without JavaScript tricks.
			 *
			 * Docs: https://eslint.org/docs/latest/rules/no-implicit-coercion
			 */
			"no-implicit-coercion": [
				"warn",
				{
					boolean: true,
					number: true,
					string: true,
					disallowTemplateShorthand: false,
					allow: [],
				},
			],

			/**
			 * RU: Запрещает неявный eval через строки в setTimeout, setInterval и execScript.
			 * EN: Disallows implied eval through strings passed to setTimeout, setInterval, and execScript.
			 *
			 * Docs: https://eslint.org/docs/latest/rules/no-implied-eval
			 */
			"no-implied-eval": "error",

			/**
			 * RU: Запрещает labels полностью, потому что labeled break/continue усложняют control flow и обычно заменяются выносом логики в функцию.
			 * EN: Disallows labels entirely because labeled break/continue complicate control flow and are usually replaced by extracting logic into a function.
			 *
			 * Docs: https://eslint.org/docs/latest/rules/no-labels
			 */
			"no-labels": "error",

			/**
			 * RU: Запрещает одинокий if внутри else, чтобы цепочки условий читались как else if.
			 * EN: Disallows a lonely if inside else so condition chains are written as else if.
			 *
			 * Docs: https://eslint.org/docs/latest/rules/no-lonely-if
			 */
			"no-lonely-if": "error",

			/**
			 * RU: Запрещает функции внутри циклов, если они небезопасно замыкаются на изменяемые переменные внешней области.
			 * EN: Disallows functions inside loops when they unsafely close over modified variables from the outer scope.
			 *
			 * Docs: https://eslint.org/docs/latest/rules/no-loop-func
			 */
			"no-loop-func": "error",

			/**
			 * RU: Запрещает цепочные присваивания, чтобы каждое присваивание было явным и читалось отдельно.
			 * EN: Disallows chained assignments so each assignment is explicit and read separately.
			 *
			 * Docs: https://eslint.org/docs/latest/rules/no-multi-assign
			 */
			"no-multi-assign": "error",

			/**
			 * RU: Запрещает многострочные строки через обратный слэш перед переносом, потому что такой синтаксис плохо читается и легко ломается форматированием.
			 * EN: Disallows multiline strings with a backslash before a newline because this syntax is hard to read and easy to break with formatting.
			 *
			 * Docs: https://eslint.org/docs/latest/rules/no-multi-str
			 */
			"no-multi-str": "error",

			/**
			 * RU: Запрещает вложенные ternary expressions, потому что такие условия быстро становятся нечитаемыми.
			 * EN: Disallows nested ternary expressions because such conditions quickly become hard to read.
			 *
			 * Docs: https://eslint.org/docs/latest/rules/no-nested-ternary
			 */
			"no-nested-ternary": "error",

			/**
			 * RU: Запрещает вызов new без использования результата, потому что создание объекта ради side effect делает код неочевидным.
			 * EN: Disallows new calls without using the result because creating objects only for side effects makes code unclear.
			 *
			 * Docs: https://eslint.org/docs/latest/rules/no-new
			 */
			"no-new": "error",

			/**
			 * RU: Запрещает Function constructor, потому что создание функций из строк опасно и ломает статический анализ.
			 * EN: Disallows the Function constructor because creating functions from strings is dangerous and breaks static analysis.
			 *
			 * Docs: https://eslint.org/docs/latest/rules/no-new-func
			 */
			"no-new-func": "error",

			/**
			 * RU: Запрещает создавать primitive wrappers через new String, new Number и new Boolean.
			 * EN: Disallows creating primitive wrappers with new String, new Number, and new Boolean.
			 *
			 * Docs: https://eslint.org/docs/latest/rules/no-new-wrappers
			 */
			"no-new-wrappers": "error",

			/**
			 * RU: Запрещает Object constructor без аргументов, потому что для пустого объекта нужно использовать литерал {}.
			 * EN: Disallows the Object constructor without arguments because empty objects should use the object literal {}.
			 *
			 * Docs: https://eslint.org/docs/latest/rules/no-object-constructor
			 */
			"no-object-constructor": "error",

			/**
			 * RU: Запрещает octal escape sequences в строках, потому что это устаревший и плохо читаемый синтаксис.
			 * EN: Disallows octal escape sequences in strings because this is obsolete and hard-to-read syntax.
			 *
			 * Docs: https://eslint.org/docs/latest/rules/no-octal-escape
			 */
			"no-octal-escape": "error",

			/**
			 * RU: Запрещает переназначать параметры функции и мутировать их свойства, чтобы входные данные функции оставались неизменяемыми.
			 * EN: Disallows reassigning function parameters and mutating their properties so function inputs stay immutable.
			 *
			 * Docs: https://eslint.org/docs/latest/rules/no-param-reassign
			 */
			"no-param-reassign": [
				"error",
				{
					props: true,
				},
			],

			/**
			 * RU: Запрещает default export, чтобы публичный API модулей был явным и импортировался через named exports.
			 * EN: Disallows default export so module public APIs stay explicit and are imported through named exports.
			 *
			 * Docs: https://eslint.org/docs/latest/rules/no-restricted-exports
			 */
			"no-restricted-exports": [
				"error",
				{
					restrictDefaultExports: {
						direct: true,
						named: true,
						defaultFrom: true,
						namedFrom: true,
						namespaceFrom: true,
					},
				},
			],

			/**
			 * RU: Запрещает нежелательные глобальные переменные, чтобы не использовать неявные browser/test globals.
			 *
			 * Docs: https://eslint.org/docs/latest/rules/no-restricted-globals
			 */
			/**
			 * RU: Запрещает нежелательные глобальные переменные, чтобы не использовать неявные browser/test globals.
			 * EN: Disallows unwanted global variables to avoid implicit browser/test globals.
			 *
			 * Docs: https://eslint.org/docs/latest/rules/no-restricted-globals
			 */
			"no-restricted-globals": [
				"error",
				{
					name: "event",
					message:
						"Используй локальный параметр event вместо глобальной переменной.",
				},
				{
					name: "fdescribe",
					message: "Не коммить сфокусированные тесты.",
				},
			],

			/**
			 * RU: Запрещает default imports из внутренних модулей, чтобы проектный код использовал named exports.
			 * EN: Disallows default imports from internal modules so project code uses named exports.
			 *
			 * Docs: https://eslint.org/docs/latest/rules/no-restricted-imports
			 */
			"no-restricted-imports": [
				"error",
				{
					patterns: [
						{
							group: [ "./*", "../*", "@dubium/*" ],
							importNamePattern: "^default$",
							message:
								"Во внутренних модулях используй named import вместо default import.",
						},
						{
							group: [ "@dubium/*/src/**", "@dubium/*/dist/**" ],
							message:
								"Импортируй пакет через публичный API, а не через src/dist.",
						},
					],
				},
			],

			/**
			 * RU: Запрещает присваивания внутри return, чтобы возврат значения не имел скрытых side effects.
			 * EN: Disallows assignments inside return statements so returning a value does not have hidden side effects.
			 *
			 * Docs: https://eslint.org/docs/latest/rules/no-return-assign
			 */
			"no-return-assign": [ "error", "always" ],

			/**
			 * RU: Запрещает javascript: URL, потому что такой код выполняется браузером как eval.
			 * EN: Disallows javascript: URLs because such code is evaluated by the browser like eval.
			 *
			 * Docs: https://eslint.org/docs/latest/rules/no-script-url
			 */
			"no-script-url": "error",

			/**
			 * RU: Запрещает comma operator, потому что он скрывает side effects и ухудшает читаемость выражений.
			 * EN: Disallows the comma operator because it hides side effects and makes expressions harder to read.
			 *
			 * Docs: https://eslint.org/docs/latest/rules/no-sequences
			 */
			"no-sequences": [
				"error",
				{
					allowInParentheses: false,
				},
			],

			/**
			 * RU: Запрещает выбрасывать не-Error значения, чтобы исключения имели stack trace и единый формат обработки.
			 * EN: Disallows throwing non-Error values so exceptions have stack traces and a consistent handling format.
			 *
			 * Docs: https://eslint.org/docs/latest/rules/no-throw-literal
			 */
			"no-throw-literal": "error",

			/**
			 * RU: Запрещает явную инициализацию переменной значением undefined, потому что переменная без значения уже имеет undefined.
			 * EN: Disallows explicitly initializing variables with undefined because unassigned variables are already undefined.
			 *
			 * Docs: https://eslint.org/docs/latest/rules/no-undef-init
			 */
			"no-undef-init": "error",

			/**
			 * RU: Запрещает лишние ternary expressions, когда условие можно записать проще.
			 * EN: Disallows unnecessary ternary expressions when the condition can be written more simply.
			 *
			 * Docs: https://eslint.org/docs/latest/rules/no-unneeded-ternary
			 */
			"no-unneeded-ternary": [
				"error",
				{
					defaultAssignment: false,
				},
			],

			/**
			 * RU: Запрещает лишний return без значения, который не влияет на поведение функции.
			 * EN: Disallows unnecessary return statements without a value that do not affect function behavior.
			 *
			 * Docs: https://eslint.org/docs/latest/rules/no-useless-return
			 */
			"no-useless-return": "error",

			/**
			 * RU: Запрещает var, потому что let и const имеют блочную область видимости и безопаснее для современного JS/TS.
			 * EN: Disallows var because let and const have block scope and are safer for modern JS/TS.
			 *
			 * Docs: https://eslint.org/docs/latest/rules/no-var
			 */
			"no-var": "error",

			/**
			 * RU: Запрещает void в выражениях, но разрешает отдельный void statement для явного игнорирования результата Promise.
			 * EN: Disallows void in expressions but allows standalone void statements to explicitly ignore Promise results.
			 *
			 * Docs: https://eslint.org/docs/latest/rules/no-void
			 */
			"no-void": [
				"error",
				{
					allowAsStatement: true,
				},
			],

			/**
			 * RU: Предупреждает о TODO/FIXME/XXX комментариях, чтобы временные задачи не оставались в коде незамеченными.
			 * EN: Warns about TODO/FIXME/XXX comments so temporary tasks do not stay unnoticed in the codebase.
			 *
			 * Docs: https://eslint.org/docs/latest/rules/no-warning-comments
			 */
			"no-warning-comments": [
				"warn",
				{
					terms: [ "todo", "fixme", "xxx" ],
					location: "start",
				},
			],

			/**
			 * RU: Требует shorthand-синтаксис для свойств и методов объектов, чтобы убрать лишнее дублирование имён.
			 * EN: Requires shorthand syntax for object properties and methods to remove unnecessary name duplication.
			 *
			 * Docs: https://eslint.org/docs/latest/rules/object-shorthand
			 */
			"object-shorthand": [
				"error",
				"always",
				{
					avoidQuotes: true,
				},
			],

			/**
			 * RU: Требует сокращённые assignment-операторы, чтобы не дублировать одну и ту же переменную в выражении присваивания.
			 * EN: Requires assignment operator shorthand to avoid repeating the same variable in an assignment expression.
			 *
			 * Docs: https://eslint.org/docs/latest/rules/operator-assignment
			 */
			"operator-assignment": [ "error", "always" ],

			/**
			 * RU: Требует arrow functions для callback-функций, чтобы код был короче и не требовал ручного bind(this).
			 * EN: Requires arrow functions for callbacks so code is shorter and does not need manual bind(this).
			 *
			 * Docs: https://eslint.org/docs/latest/rules/prefer-arrow-callback
			 */
			"prefer-arrow-callback": [
				"error",
				{
					allowNamedFunctions: false,
					allowUnboundThis: true,
				},
			],

			/**
			 * RU: Требует const для переменных, которые не переназначаются после инициализации.
			 * EN: Requires const for variables that are not reassigned after initialization.
			 *
			 * Docs: https://eslint.org/docs/latest/rules/prefer-const
			 */
			"prefer-const": [
				"error",
				{
					destructuring: "all",
					ignoreReadBeforeAssign: true,
				},
			],

			/**
			 * RU: Предупреждает, если свойство объекта можно получить через destructuring.
			 * EN: Warns when an object property can be extracted with destructuring.
			 *
			 * Docs: https://eslint.org/docs/latest/rules/prefer-destructuring
			 */
			"prefer-destructuring": [
				"warn",
				{
					VariableDeclarator: {
						array: false,
						object: true,
					},
					AssignmentExpression: {
						array: false,
						object: false,
					},
				},
				{
					enforceForRenamedProperties: false,
				},
			],

			/**
			 * RU: Требует оператор возведения в степень ** вместо Math.pow(), чтобы выражения были короче и читались как формула.
			 * EN: Requires the exponentiation operator ** instead of Math.pow() so expressions are shorter and read like formulas.
			 *
			 * Docs: https://eslint.org/docs/latest/rules/prefer-exponentiation-operator
			 */
			"prefer-exponentiation-operator": "error",

			/**
			 * RU: Предупреждает о capture groups без имени, чтобы результат RegExp читался через понятные имена, а не через числовые индексы.
			 * EN: Warns about unnamed capture groups so RegExp results are read through meaningful names instead of numeric indexes.
			 *
			 * Docs: https://eslint.org/docs/latest/rules/prefer-named-capture-group
			 */
			"prefer-named-capture-group": "warn",

			/**
			 * RU: Требует numeric literals вместо parseInt для binary, octal и hexadecimal чисел.
			 * EN: Requires numeric literals instead of parseInt for binary, octal, and hexadecimal numbers.
			 *
			 * Docs: https://eslint.org/docs/latest/rules/prefer-numeric-literals
			 */
			"prefer-numeric-literals": "error",

			/**
			 * RU: Требует object spread вместо Object.assign(), когда создаётся новый объект.
			 * EN: Requires object spread instead of Object.assign() when creating a new object.
			 *
			 * Docs: https://eslint.org/docs/latest/rules/prefer-object-spread
			 */
			"prefer-object-spread": "error",

			/**
			 * RU: Требует отклонять Promise только Error-объектами, чтобы ошибки имели stack trace и единый формат обработки.
			 * EN: Requires rejecting Promises only with Error objects so errors have stack traces and a consistent handling format.
			 *
			 * Docs: https://eslint.org/docs/latest/rules/prefer-promise-reject-errors
			 */
			"prefer-promise-reject-errors": [
				"error",
				{
					allowEmptyReject: false,
				},
			],

			/**
			 * RU: Требует regex literals вместо RegExp constructor со статическими строками.
			 * EN: Requires regex literals instead of the RegExp constructor with static strings.
			 *
			 * Docs: https://eslint.org/docs/latest/rules/prefer-regex-literals
			 */
			"prefer-regex-literals": "error",

			/**
			 * RU: Требует rest parameters вместо устаревшего arguments.
			 * EN: Requires rest parameters instead of the obsolete arguments object.
			 *
			 * Docs: https://eslint.org/docs/latest/rules/prefer-rest-params
			 */
			"prefer-rest-params": "error",

			/**
			 * RU: Требует spread syntax вместо .apply(), когда не нужно явно задавать this.
			 * EN: Requires spread syntax instead of .apply() when this does not need to be specified explicitly.
			 *
			 * Docs: https://eslint.org/docs/latest/rules/prefer-spread
			 */
			"prefer-spread": "error",

			/**
			 * RU: Требует template literals вместо конкатенации строк, чтобы строки с переменными читались проще.
			 * EN: Requires template literals instead of string concatenation so strings with variables are easier to read.
			 *
			 * Docs: https://eslint.org/docs/latest/rules/prefer-template
			 */
			"prefer-template": "error",

			/**
			 * RU: Требует явно указывать radix в parseInt(), чтобы основание системы счисления было очевидным.
			 * EN: Requires an explicit radix in parseInt() so the numeric base is clear.
			 *
			 * Docs: https://eslint.org/docs/latest/rules/radix
			 */
			radix: [ "error", "always" ],

			/**
			 * RU: Предупреждает, если RegExp не использует Unicode-флаг u, чтобы регулярные выражения корректнее работали с Unicode.
			 * EN: Warns when RegExp does not use the Unicode u flag so regular expressions handle Unicode more correctly.
			 *
			 * Docs: https://eslint.org/docs/latest/rules/require-unicode-regexp
			 */
			"require-unicode-regexp": [
				"warn",
				{
					requireFlag: "u",
				},
			],

			/**
			 * RU: Требует описание при создании Symbol, чтобы символы было проще отличать при отладке.
			 * EN: Requires descriptions when creating Symbols so they are easier to identify during debugging.
			 *
			 * Docs: https://eslint.org/docs/latest/rules/symbol-description
			 */
			"symbol-description": "error",

			/**
			 * RU: Запрещает Yoda conditions, чтобы сравнения читались в естественном порядке: переменная слева, значение справа.
			 * EN: Disallows Yoda conditions so comparisons read naturally: variable on the left, value on the right.
			 *
			 * Docs: https://eslint.org/docs/latest/rules/yoda
			 */
			yoda: [ "error", "never" ],

			/**
			 * RU: Запрещает Unicode BOM в начале файла, потому что для UTF-8 он не нужен и может создавать проблемы с инструментами.
			 * EN: Disallows Unicode BOM at the beginning of files because UTF-8 does not need it and it may cause tooling issues.
			 *
			 * Docs: https://eslint.org/docs/latest/rules/unicode-bom
			 */
			"unicode-bom": [ "error", "never" ],
		},
	},
]
