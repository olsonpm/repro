import Content from './content'
import ky from 'ky'

const delayBeforeRenderMs = 1000
const kyOptions = getKyOptions()

export default async function Home({ searchParams }) {
  const { useKy } = await searchParams

  const { signal } = new AbortController()
  const cacheBust = getRandomInt(10000)
  const url = `http://localhost:1234/?${cacheBust}`
  let data

  if (useKy === 'true') {
    data = await ky.get(url, { ...kyOptions, signal }).text()
  } else {
    let res
    res = await fetch(url, { signal })
    console.log('res.status: ' + res.status)

    if (!res.ok) {
      console.log('retrying fetch')
      res = await fetch(url, { signal })

      console.log('res.status: ' + res.status)
    }

    data = await res.text()
  }

  console.log('data: ' + data)

  return <Content />;
}

function getKyOptions() {
  return {
    retry: {
      limit: 1,
    },
    hooks: {
      beforeRetry: [({ retryCount }) => {
        console.log(`retryCount: ${retryCount}`)
      }]
    }
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
