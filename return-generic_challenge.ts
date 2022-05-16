// implement the built-in 'ReturnType<T>' generic without using it

import { Equal, Expect } from '@type-challenges/utils'

type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : never

// test cases
type cases = [
    Expect<Equal<string, MyReturnType<()=> string>>>,
    Expect<Equal<123, MyReturnType<()=> 123>>>
]



