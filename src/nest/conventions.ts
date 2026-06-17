export const nestConventions = [
	{
		name: "@dubium/eslint-config/nest/conventions",
		files: [ "**/*.{ts,mts,cts}" ],
		rules: {
			/**
			 * RU: Требует interface для описания объектных TypeScript-типов в NestJS-коде.
			 * EN: Requires interface for object-like TypeScript types in NestJS code.
			 *
			 * Docs: https://typescript-eslint.io/rules/consistent-type-definitions/
			 */
			"@typescript-eslint/consistent-type-definitions": [
				"error",
				"interface",
			],

			/**
			 * RU: Не требует явно указывать public/private/protected у members, чтобы не перегружать NestJS-классы лишним шумом.
			 * EN: Does not require explicit public/private/protected modifiers to avoid noisy NestJS classes.
			 *
			 * Docs: https://typescript-eslint.io/rules/explicit-member-accessibility/
			 */
			"@typescript-eslint/explicit-member-accessibility": "off",

			/**
			 * RU: Предупреждает о нестабильном порядке members класса.
			 * EN: Warns about unstable class member ordering.
			 *
			 * Docs: https://typescript-eslint.io/rules/member-ordering/
			 */
			"@typescript-eslint/member-ordering": "warn",

			/**
			 * RU: Контролирует naming convention для NestJS/TypeScript-сущностей.
			 * EN: Enforces naming conventions for NestJS/TypeScript entities.
			 *
			 * Docs: https://typescript-eslint.io/rules/naming-convention/
			 */
			"@typescript-eslint/naming-convention": [
				"warn",
				{
					format: [ "camelCase", "PascalCase", "UPPER_CASE" ],
					leadingUnderscore: "allow",
					selector: "variableLike",
				},
				{
					format: [ "PascalCase" ],
					selector: "typeLike",
				},
				{
					custom: {
						match: false,
						regex: "^I[A-Z]",
					},
					format: [ "PascalCase" ],
					selector: "interface",
				},
			],
		},
	},
	{
		name: "@dubium/eslint-config/nest/dto",
		files: [
			"**/*.dto.ts",
			"**/*.input.ts",
			"**/*.request.ts",
			"**/*.response.ts",
		],
		rules: {
			/**
			 * RU: Разрешает DTO/input/response классы без методов, потому что они описывают контракт данных.
			 * EN: Allows DTO/input/response classes without methods because they describe data contracts.
			 *
			 * Docs: https://typescript-eslint.io/rules/no-extraneous-class/
			 */
			"@typescript-eslint/no-extraneous-class": "off",
		},
	},
	{
		name: "@dubium/eslint-config/nest/tests",
		files: [ "**/*.spec.ts", "**/*.test.ts", "**/test/**/*.ts" ],
		rules: {
			/**
			 * RU: Разрешает any в NestJS-тестах для mock/spies и частичных тестовых объектов.
			 * EN: Allows any in NestJS tests for mocks, spies, and partial test objects.
			 *
			 * Docs: https://typescript-eslint.io/rules/no-explicit-any/
			 */
			"@typescript-eslint/no-explicit-any": "off",

			/**
			 * RU: Разрешает unsafe assignment в NestJS-тестах, где часто используются mocks и testing module.
			 * EN: Allows unsafe assignments in NestJS tests where mocks and testing modules are common.
			 *
			 * Docs: https://typescript-eslint.io/rules/no-unsafe-assignment/
			 */
			"@typescript-eslint/no-unsafe-assignment": "off",

			/**
			 * RU: Разрешает unsafe calls в NestJS-тестах для mock-функций и динамических тестовых helpers.
			 * EN: Allows unsafe calls in NestJS tests for mock functions and dynamic test helpers.
			 *
			 * Docs: https://typescript-eslint.io/rules/no-unsafe-call/
			 */
			"@typescript-eslint/no-unsafe-call": "off",

			/**
			 * RU: Разрешает unsafe member access в NestJS-тестах для mock-объектов и partial fixtures.
			 * EN: Allows unsafe member access in NestJS tests for mock objects and partial fixtures.
			 *
			 * Docs: https://typescript-eslint.io/rules/no-unsafe-member-access/
			 */
			"@typescript-eslint/no-unsafe-member-access": "off",
		},
	},
]
