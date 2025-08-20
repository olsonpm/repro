import importX from 'eslint-plugin-import-x';
import js from '@eslint/js';
import globals from 'globals';

export default [
  js.configs.recommended,
  importX.flatConfigs.recommended,
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
      },
    }
  }
]
