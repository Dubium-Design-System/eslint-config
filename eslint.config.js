import eslintConfigPrettier from "eslint-config-prettier"
import eslintPluginPrettier from "eslint-plugin-prettier"
import { defineConfig } from "eslint/config"

import { nodeRuntime, recommendedFast } from "./dist/index.js"

export default defineConfig([
	...recommendedFast,
	...nodeRuntime,
	{
		plugins: {
			prettier: eslintPluginPrettier,
		},
		rules: {
			"prettier/prettier": "error",
		},
	},
	{
		files: ["eslint.config.{js,mjs,ts,mts}"],
		rules: {
			"no-restricted-exports": "off",
		},
	},
	eslintConfigPrettier,
])
