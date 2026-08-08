## Biome jsconfig import alias not supported

### Steps

1. Setup

```sh
$ git clone -b biome-jsconfig-import-alias git@github.com:olsonpm/repro.git
$ cd repro
$ pnpm install --frozen-lockfile
```

2. Check

```sh
$ pnpm biome check src/index.js

src/index.js:8:18 lint/correctness/noUnresolvedImports ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ The import specifier @/test-js cannot be resolved: module not found

     6 │  * GitHub repo.
     7 │  */
   > 8 │ import test from "@/test-js.js";
       │                  ^^^^^^^^^^^^^^
     9 │
    10 │ console.log(test);

  ℹ Make sure the specifier is correct and your project is set up correctly.
```
