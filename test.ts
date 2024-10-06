import { expect, test } from 'tstyche'

type TestInfer = <A extends Array<any>>(
  arr: A
) => A extends Array<infer V> ? V : unknown

test('error with identical types', () => {
  expect<TestInfer>().type.toBe<
    <A extends Array<any>>(arr: A) => A extends Array<infer V> ? V : unknown
  >()
})
