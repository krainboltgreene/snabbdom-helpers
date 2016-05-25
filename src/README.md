# src/index.js

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
}) // <p id="article1"></p>
p({
  selector: ".round"
}) // <p class="round"></p>
p({
  selector: "#user1.profile.outward"
}) // <p id="user1" class="profile outward"></p>
```

Content is either a String (of text) or an Array of Nodes and/or String:



``` javascript
import {p} from "snabbdom-helpers"

article({
  content: "I'm fun!"
}) // <article>I'm fun!</article>
article({
  content: [
    h1({content: "Hello"})
    "world"
  ]
}) // <article><h1>Hello</h1>world</article>
```

Some *tags* have no content, they are called [void elements](https://www.w3.org/TR/html-markup/syntax.html#syntax-elements). For example:

``` javascript
import {img} from "snabbdom-helpers"

img() // <img>
```

If you give a void element any content it will throw an error:

``` javascript
import {meta} from "snabbdom-helpers"

meta({content: "Hello!"}) // Error: No content is allowed on void element like <meta>
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
}) // <video data-id="1" aria-title="A Sad Movie" src="https://cdn.movies.com/m/1" loop></video>
```

Because `snabbdom-helpers` relies on `snabbdom` you can also use it's special style and event syntax systems.
