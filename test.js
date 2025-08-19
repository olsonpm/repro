import { describe, beforeEach, it } from 'mocha'
import { expect } from 'chai'
import { replace, reset } from 'fibble'

describe('my module', function () {
  let subject

  beforeEach(async () => {
    await replace('./mod.js', { default: 'replaced mod' })
    subject = (await import('./mod.js')).default
  })

  afterEach(reset) // clear all replacements

  it('contains the stubbed stuff', function () {
    expect(subject).to.equal('replaced mod')
  })
})
