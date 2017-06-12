/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type */

import {test} from "tap"
import {a} from "./"
import toHTML from "snabbdom-to-html"
import plugins from "snabbdom-to-html/init"
import modules from "snabbdom-to-html/modules"

const toHTMLWithPlugins = plugins([
  modules.class,
  modules.props,
  modules.attributes,
  modules.style
])


test("selector", ({similar, end}) => {
  similar(a({selector: ".value"}), {sel: "a.value"})
  end()
})

test("inner", ({similar, end}) => {
  similar(a({inner: "test"}), {text: "test"})
  end()
})

test("aria", ({similar, end}) => {
  similar(a({aria: {id: "1"}}), {data: {attrs: {"aria-id": "1"}}})
  end()
})

test("data", ({similar, end}) => {
  similar(a({data: {id: "1"}}), {data: {attrs: {"data-id": "1"}}})
  end()
})


test("full", ({similar, end}) => {
  similar(
    a({
      "selector": "#a.b.c",
      "inner": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {x: "x"},
      "attrs": {y: "y"},
      "data": {
        id: "1",
        name: "Kurtis"
      },
      "dataset": {ds: "ds"},
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false
      },
      "key": "key",
      "hook": {insert: () => null},
    }),
    {
      sel: "a#a.b.c",
      data: {
        "attrs": {
          "y": "y",
          "x": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
          "data-ds": "ds",
        },
        "props": {title: "x"},
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false
        },
        "key": "key"
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key"
    }
  )
  end()
})

test("html", ({equal, end}) => {
  equal(
    toHTML(a({
      "selector": "#a.b.c",
      "inner": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {x: "x"},
      "attrs": {y: "y"},
      "data": {
        id: "1",
        name: "Kurtis"
      },
      "dataset": {ds: "ds"},
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false
      },
      "hook": {insert: () => null},
    })),
    "<a id=\"a\" class=\"b c active\" y=\"y\" x=\"x\" data-name=\"Kurtis\" data-id=\"1\" aria-role=\"navigation\" data-ds=\"ds\" title=\"x\" href=\"/a\" style=\"border: 1px\">test</a>"
  )
  end()
})

test("html with plugins", ({equal, end}) => {
  equal(
    toHTMLWithPlugins(a({
      "selector": "#a.b.c",
      "inner": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {x: "x"},
      "attrs": {y: "y"},
      "data": {
        id: "1",
        name: "Kurtis"
      },
      "dataset": {ds: "ds"},
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false
      },
      "hook": {insert: () => null},
    })),
    "<a id=\"a\" class=\"b c active\" title=\"x\" href=\"/a\" y=\"y\" x=\"x\" data-name=\"Kurtis\" data-id=\"1\" aria-role=\"navigation\" data-ds=\"ds\" style=\"border: 1px\">test</a>"
  )
  end()
})
