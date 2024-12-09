import { EditorView, minimalSetup } from 'codemirror'

const theme = EditorView.theme({
  '&': {
    fontSize: '20px',
  },
  '&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground':
    {
      backgroundColor: 'rgb(0 0 0 / 30%)',
    },
})

new EditorView({
  extensions: [...minimalSetup, theme],
  doc: `// line 1\n// line 2\n// line 3`,
  parent: document.body
})
