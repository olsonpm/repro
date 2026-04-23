import express from 'express'

const app = express()
const port = 1234

let i = 0

app.get('/', (_req, res) => {
  const isEven = i % 2 === 0
  if (isEven) res.status(500).end()
  else res.status(200).send('success')

  i += 1
})

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})
