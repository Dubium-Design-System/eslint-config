import { nodeRuntime } from "../node/runtime.js"
import { recommended } from "../presets/recommended.js"
import { nestConventions } from "./conventions.js"

export const nestRecommended = [
	...recommended,
	...nodeRuntime,
	...nestConventions,
]
