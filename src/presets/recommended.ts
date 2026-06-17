import { commonComments } from "../common/comments.js"
import { commonIgnores } from "../common/ignores.js"
import { commonJavascript } from "../common/javascript.js"
import { commonSorting } from "../common/sorting.js"
import { commonStylistic } from "../common/stylistic.js"
import { typescriptSorting } from "../typescript/sorting.js"
import { typescriptStrict } from "../typescript/strict.js"

export const recommended = [
	...commonIgnores,
	...commonJavascript,
	...typescriptStrict,
	...commonStylistic,
	...commonSorting,
	...typescriptSorting,
	...commonComments,
]
