# snabbdom-helpers

[![Greenkeeper badge](https://badges.greenkeeper.io/krainboltgreene/snabbdom-helpers.svg)](https://greenkeeper.io/)

[![Quality](http://img.shields.io/codeclimate/github/krainboltgreene/snabbdom-helpers.svg?style=flat-square)](https://codeclimate.com/github/krainboltgreene/snabbdom-helpers)
[![Coverage](http://img.shields.io/codeclimate/coverage/github/krainboltgreene/snabbdom-helpers.svg?style=flat-square)](https://codeclimate.com/github/krainboltgreene/snabbdom-helpers)
[![Build](http://img.shields.io/travis-ci/krainboltgreene/snabbdom-helpers.svg?style=flat-square)](https://travis-ci.org/krainboltgreene/snabbdom-helpers)
[![Releases](http://img.shields.io/github/release/krainboltgreene/snabbdom-helpers.svg?style=flat-square)](http://github.com/krainboltgreene/snabbdom-helpers/releases)
[![License](http://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](http://opensource.org/licenses/MIT)

A set of functions that maps to the entire list of the W3C DOM elements. Each function returns a [snabbdom]() object.

Here's how you use it (`patch` and `vdom` comes from `snabbdom`):

``` javascript
import {article} from "snabbdom-helpers"
import {h1} from "snabbdom-helpers"
import {p} from "snabbdom-helpers"

// ... snabbdom setup ...

const newVirtualDom = article({
  data: {id: "1"},
  inner: [
    h1({
      style: {color: "blue"},
      inner: "Hello"
    }),
    p({selector: ".red.body", inner: "World!"})
  ]
})

patch(vdom, newVirtualDom)
```

It should output (minus white-spacing):

``` html
<article data-id="1">
  <h1 style="color: blue;">Hello</h1>
  <p class="red body">
    World!
  </p>
</article>
```


## installing

To install just grab from npm:

```
$ npm install --save snabbdom-helpers
```

Add it into your project (with `require()` and `import ... from "snabbdom-helpers"`).


# contributing

  1. Read the [Code of Conduct](/CONDUCT.md)
  2. Fork it
  3. Create your feature branch (`git checkout -b my-new-feature`)
  4. Commit your changes (`git commit -am 'Add some feature'`)
  5. Push to the branch (`git push origin my-new-feature`)
  6. Create new Pull Request
