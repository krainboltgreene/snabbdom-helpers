# snabbdom-helpers

A set of functions that map the entire list of the W3C DOM elements. Each function returns a [snabbdom]() vnode object.

![Version][BADGE_VERSION]
![Tests][BADGE_TRAVIS]
![Stability][BADGE_STABILITY]
![Dependencies][BADGE_DEPENDENCY]


## using

This export will return a list of functions, where each function was created from a partially applied curry. Each function represents a tag in the list of W3C allowed tags, including deprecated, and experimental.

Each tag takes an optional object as an argument. If no value is given it functions like so:

``` javascript
import {main} from "snabbdom-helpers"

main() // <main></main>
```

To give values to these tags simply pass them as keys on the object, where certain keys are special like `selector`. Selector allows you to easily define the DOM selector of the element, with the CSS id and class syntax:

``` javascript
import {p} from "snabbdom-helpers"

p({
  selector: "#article1"
})
```

``` html
<p id="article1"></p>
```

``` javascript
import {p} from "snabbdom-helpers"

p({
  selector: ".round"
})
```

``` html
<p class="round"></p>
```

``` javascript
import {p} from "snabbdom-helpers"

p({
  selector: "#user1.profile.outward"
})
```

``` html
<p id="user1" class="profile outward"></p>
```

Content is either a String (of text) or an Array of Nodes and/or String:

``` javascript
import {p} from "snabbdom-helpers"

p({
  children: "I'm fun!"
})
```

``` html
<p>I'm fun!</p>
```

``` javascript
import {article} from "snabbdom-helpers"
import {h1} from "snabbdom-helpers"

article({
  children: [
    h1({children: "Hello"})
    "world"
  ]
})
```

``` html
<article><h1>Hello</h1>world</article>
```

Some *tags* have no content, they are called [void elements](https://www.w3.org/TR/html-markup/syntax.html#syntax-elements). For example:

``` javascript
import {img} from "snabbdom-helpers"

img()
```

``` html
<img>
```

If you give a empty tag any children it will throw an error:

``` javascript
import {meta} from "snabbdom-helpers"

meta({children: "Hello!"}) // new Error("Empty tag cannot semantically have children")
```

Finally you can give any other attributes to your element:

``` javascript
import {video} from "snabbdom-helpers"

video({
  data: {
    id: "1"
  },
  aria: {
    title: "A Sad Movie"
  },
  src: "https://cdn.movies.com/m/1",
  loop: true
})
```

``` html
<video data-id="1" aria-title="A Sad Movie" src="https://cdn.movies.com/m/1" loop></video>
```

Because `snabbdom-helpers` relies on `snabbdom` you can also use it's special style and event syntax systems.

Here's a large example:

``` javascript
import {article} from "snabbdom-helpers"
import {h1} from "snabbdom-helpers"
import {p} from "snabbdom-helpers"

export default function view () {
  return article({
    data: {id: "1"},
    aria: {role: "navigation"},
    children: [
      h1({
        style: {color: "blue"},
        children: "Hello"
      }),
      p({selector: ".red.body", children: "World!"})
    ]
  })
}
```

It should output (minus white-spacing):

``` html
<article data-id="1" aria-role="navigation">
  <h1 style="color: blue;">Hello</h1>
  <p class="red body">
    World!
  </p>
</article>
```


# contributing

  1. Read the [Code of Conduct](/CONDUCT.md)
  2. Fork it
  3. Create your feature branch (`git checkout -b my-new-feature`)
  4. Commit your changes (`git commit -am 'Add some feature'`)
  5. Push to the branch (`git push origin my-new-feature`)
  6. Create new Pull Request


[BADGE_TRAVIS]: https://img.shields.io/travis/krainboltgreene/hsdk.js.svg?maxAge=2592000&style=flat-square
[BADGE_VERSION]: https://img.shields.io/npm/v/hsdk.svg?maxAge=2592000&style=flat-square
[BADGE_STABILITY]: https://img.shields.io/badge/stability-strong-green.svg?maxAge=2592000&style=flat-square
[BADGE_DEPENDENCY]: https://img.shields.io/david/krainboltgreene/hsdk.js.svg?maxAge=2592000&style=flat-square
