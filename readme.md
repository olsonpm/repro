## Reproduce alias incompatibility

It looks like `eslint-plugin-import-x` aims to support v2 of the legacy resolver.

This branch shows [eslint-import-resolver-alias](https://github.com/johvin/eslint-import-resolver-alias)
working with `eslint-plugin-import` but not `eslint-plugin-import-x`

```sh
$ npm ci
$ npm run lint
> eslint -c eslint.config-import.mjs dir/a.mjs

$ npm run lint-x
> eslint -c eslint.config-import-x.mjs dir/a.mjs

/path/to/repro/dir/a.mjs
  1:15  error  Unable to resolve path to module '@/b.mjs'  import-x/no-unresolved

✖ 1 problem (1 error, 0 warnings)
```
