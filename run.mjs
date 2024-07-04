import quibble from 'quibble'
import dep1 from './dep1.mjs'
import dep2 from './dep2.mjs'

await quibble.esm('./dep1.mjs', {}, { mockDep1: true })

const dep2After = await import('./dep2.mjs')

console.log('dep2 === dep2After: ' + (dep2 === dep2After))
