### reproduction of unexpected behavior .type.toBe when using infer

to reproduce

```
$ git clone git@github.com:olsonpm/repro.git
$ cd repro
$ git checkout tstyche-infer-issue
$ npm ci
$ npx tstyche
# the following error will appear
```

> Error: Type '<A extends Array<any>>(arr: A) => A extends (infer V)[] ? V : unknown' is not identical to type '<A extends Array<any>>(arr: A) => A extends (infer V)[] ? V : unknown'.

note: the type outputs are exactly the same, copied below

> <A extends Array<any>>(arr: A) => A extends (infer V)[] ? V : unknown
