import { esLint as cmEslint } from '@codemirror/lang-javascript'
import { linter } from '@codemirror/lint'
import jsEslint from '@eslint/js'
import { Linter } from 'eslint-linter-browserify'

const eslintConfig = [jsEslint.configs.recommended]
const linterInstance = new Linter()
const eslintExtension = linter(cmEslint(linterInstance, eslintConfig))

export default eslintExtension
