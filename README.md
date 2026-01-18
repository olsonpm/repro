# Turborepo Bug Reproduction

Steps

```sh
> git clone -b turborepo-update-notifier git@github.com:olsonpm/repro.git
> cd  repro
> pnpm install --frozen-lockfile
> pnpm turbo build
# confirm update notifier still shows even though turbo.json has
# `"noUpdateNotifier": true`
```
