import { recommended } from "../presets/recommended.js"
import { reactCore } from "./core.js"
import { reactHooks } from "./hooks.js"
import { reactStylistic } from "./stylistic.js"

export const reactRecommended = [...recommended, ...reactCore, reactHooks, ...reactStylistic]
