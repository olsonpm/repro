import { expect, test } from 'tstyche'
import testInfer from './test-infer.mjs'

test('error with identical types', () => {
  expect(testInfer).type.toBe<
    <A extends Array<any>>(arr: A) => A extends Array<infer V> ? V : unknown
  >()
})
