// implement the JavaScript 'String.trim()' function in the type system

import { Equal, Expect } from '@type-challenges/utils'

type spaces = ' ' | '\n' | '\t'

type Trim<S extends string> = S extends `${spaces}${infer R}` ? Trim<R> : S extends `${infer R}${spaces}` ? Trim<R> : S

// test cases
type cases = [
    Expect<Equal<Trim<'str'>, 'str'>>,
    Expect<Equal<Trim<' str'>, 'str'>>,
    Expect<Equal<Trim<'      str'>, 'str'>>,
    Expect<Equal<Trim<'str '>, 'str'>>,
    Expect<Equal<Trim<'      str      '>, 'str'>>,
    Expect<Equal<Trim<'\n\t foo bar \t'>, 'foo bar'>>,
]