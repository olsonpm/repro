# Reproduce Fibble Error

When using
- node version 20.19.4
  - v22 and v24 work fine
- mocha version 11.7.1
  - v10 works fine
- npm v11.5.2

### to reproduce

```sh
❯ npm ci
  ...
❯ npx mocha test.js

  my module
    1) "before each" hook for "contains the stubbed stuff"

  0 passing (5ms)
  1 failing

  1) my module
       "before each" hook for "contains the stubbed stuff":
     TypeError [ERR_UNSUPPORTED_RESOLVE_REQUEST]: Failed to resolve module specifier "./mod.js" from "__PARENT_URL_PLACEHOLDER__": Invalid relative URL or base scheme is not hierarchical.
```
