import { commonComments } from "../common/comments.js"
import { commonIgnores } from "../common/ignores.js"
import { commonJavascript } from "../common/javascript.js"
import { commonSorting } from "../common/sorting.js"
import { commonStylistic } from "../common/stylistic.js"
import { typescriptBase } from "../typescript/base.js"
import { typescriptSorting } from "../typescript/sorting.js"

export const recommendedFast = [
	...commonIgnores,
	...commonJavascript,
	...typescriptBase,
	...commonStylistic,
	...commonSorting,
	...typescriptSorting,
	...commonComments,
]
