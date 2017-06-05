/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type */

import {test} from "tap"
import {a} from "./"

test(({similar, end}) => {
  similar(a({selector: ".value"}), {sel: "a.value"})
  end()
})

test(({similar, end}) => {
  similar(a({inner: "test"}), {text: "test"})
  end()
})

test(({similar, end}) => {
  similar(a({aria: {id: "1"}}), {data: {aria: {id: "1"}}})
  end()
})
