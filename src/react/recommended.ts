import { recommended } from "../presets/recommended.js"
import { reactCore } from "./core.js"
import { reactStylistic } from "./stylistic.js"

export const reactRecommended = [
	...recommended,
	...reactCore,
	...reactStylistic,
]
