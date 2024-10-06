declare function testInfer<A extends Array<any>>(
  arr: A
): A extends Array<infer V> ? V : unknown

export default testInfer
