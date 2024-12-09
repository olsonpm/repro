import { highlightSpecialChars, drawSelection, keymap } from '@codemirror/view';
export { EditorView } from '@codemirror/view';
import { syntaxHighlighting, defaultHighlightStyle } from '@codemirror/language';
import { history, defaultKeymap, historyKeymap } from '@codemirror/commands';

const minimalExtensions = [
  highlightSpecialChars(),
  history(),
  drawSelection(),
  syntaxHighlighting(defaultHighlightStyle, { fallback: true }),
  keymap.of([
      ...defaultKeymap,
      ...historyKeymap,
  ])
]

export default minimalExtensions
