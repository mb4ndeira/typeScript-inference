// implement the JavaScript 'Array.includes()' function in the type system

import { Equal, Expect } from '@type-challenges/utils'

type Includes<T extends readonly any[], U> = 
    T extends [infer F, ...infer R] ? 
        Equal<U, F> extends true ? // test the equality of the first array position infered type (F) and the second argument type (U)
            true : Includes<R, U> // recurse, test the rest of the array (R) for the second argument (U)
                : false

// test cases
type cases = [
    Expect<Equal <Includes<['mars', 'venus'], 'mars'>, true>>,
    Expect<Equal<Includes<['jupiter', 'saturn'], 'mercury'>, false>>,
    Expect<Equal <Includes<[1, 2, 3], 3>, true>>,
    Expect<Equal <Includes<[1, 2, 3], 7>, false>>
]