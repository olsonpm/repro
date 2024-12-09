import minimalExtensions from './minimal-extensions.mjs'
import { javascript } from '@codemirror/lang-javascript'
import { EditorView } from '@codemirror/view'
import eslintExtension from './eslint-extension'

const editorContainer = document.getElementById('editor-container')

new EditorView({
  extensions: [...minimalExtensions, javascript(), eslintExtension],
  doc: `const someRealLongVariableNameToShowTheIssue_someRealLongVariableNameToShowTheIssue = 'some string with spaces to make the issue more obvious'`,
  parent: editorContainer,
})
