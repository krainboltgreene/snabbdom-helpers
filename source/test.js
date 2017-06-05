/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type */

import {test} from "tap"
import {a} from "./"

test(({same, end}) => {
  same(a({selector: ".value"}), {sel: "a.value"})
  end()
})

test(({same, end}) => {
  same(a({selector: ".value"}), {text: "test"})
  end()
})

test(({same, end}) => {
  same(a({inner: "test"}), {text: "test"})
  end()
})

test(({same, end}) => {
  same(a({aria: {id: "1"}}), {data: {aria: {id: "1"}}})
  end()
})
