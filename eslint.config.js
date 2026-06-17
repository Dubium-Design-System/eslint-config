import { defineConfig } from "eslint/config"

import { nodeRuntime, recommendedFast } from "./dist/index.js"

export default defineConfig([
	...recommendedFast,
	...nodeRuntime,
	{
		files: [ "eslint.config.{js,mjs,ts,mts}" ],
		rules: {
			"no-restricted-exports": "off",
		},
	},
])
