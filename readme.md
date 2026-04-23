# Reproduce memoized response

1. Clone

```sh
$ git clone -b ky-next-memoized git@github.com:olsonpm/repro.git
$ cd repro
```

2. In one tab, start the express api

```sh
$ cd express-api
$ npm ci && npm run serve
```

3. In a second tab, start the next.js app

```sh
$ cd my-app
$ npm ci && npm run dev
```

4. In a third tab, run the following curl script

```sh
# this returns the response status
$ curl -s -o /dev/null -w "%{http_code}" 'http://localhost:3000/'
```

- confirm it returns 200
- confirm the console output of the next.js server shows:

```sh
res.status: 500
retrying fetch
res.status: 200
```

<details>
<summary>What this means</summary>

It means our fetch call isn't being memoized since the second call reaches our
express server, which alternates between 500 and 200 responses.

</details>

5. Now let's use ky instead of fetch

```sh
$ curl -s -o /dev/null -w "%{http_code}" 'http://localhost:3000/?useKy=true'
```

- confirm it returns 500
- confirm the console output of the next.js server shows

```sh
retryCount: 1
Error [HTTPError]: Request failed with status code 500...
...
```

<details>
<summary>What this means</summary>

It means our ky call **is** being memoized since the second call never reaches
our express server.  If it did, then the retry response would be 200.

</details>
