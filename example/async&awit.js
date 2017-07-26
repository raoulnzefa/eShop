import env from '../src/constant/env'

const sleep = (msg = 'hello es7') => (
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(`hello ${msg}`)
    }, 1000)
  })
)

const startPromise = () => sleep('2017').then(year => {
  return sleep('dog').then(type => {
    console.log(year, type, 'startPromise')
  })
})

const startAsync = async () => {
  const year = await sleep('2017')
  const type = await sleep('dog')
  console.log(year, type, 'startAsync')
}

if (env.debug) {
  startPromise()
  startAsync()
}

export default {}
