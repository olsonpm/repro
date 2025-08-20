import importPlugin from 'eslint-plugin-import';
import js from '@eslint/js';
import globals from 'globals';

export default [
  js.configs.recommended,
  importPlugin.flatConfigs.recommended,
  {
    languageOptions: {
      globals: globals.node,
    },
    settings: {
      'import/resolver': {
        alias: {
          map: [
            ['@', './aliased-dir']
          ],
          extensions: ['.mjs']
        },
      }
    }
  }
]
