/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type, no-undefined, max-lines */
/* istanbul ignore file */
import {test} from "tap"
import toHTML from "snabbdom-to-html"
import plugins from "snabbdom-to-html/init"
import modules from "snabbdom-to-html/modules"

import {a} from "./"
import {abbr} from "./"
import {address} from "./"
import {article} from "./"
import {aside} from "./"
import {audio} from "./"
import {b} from "./"
import {bdi} from "./"
import {bdo} from "./"
import {bgsound} from "./"
import {blockquote} from "./"
import {body} from "./"
import {button} from "./"
import {canvas} from "./"
import {caption} from "./"
import {cite} from "./"
import {code} from "./"
import {colgroup} from "./"
import {data} from "./"
import {datalist} from "./"
import {dd} from "./"
import {del} from "./"
import {details} from "./"
import {dfn} from "./"
import {dir} from "./"
import {div} from "./"
import {dl} from "./"
import {dt} from "./"
import {em} from "./"
import {fieldset} from "./"
import {figcaption} from "./"
import {figure} from "./"
import {footer} from "./"
import {form} from "./"
import {h1} from "./"
import {h2} from "./"
import {h3} from "./"
import {h4} from "./"
import {h5} from "./"
import {h6} from "./"
import {head} from "./"
import {header} from "./"
import {hgroup} from "./"
import {html} from "./"
import {i} from "./"
import {iframe} from "./"
import {ins} from "./"
import {kbd} from "./"
import {label} from "./"
import {legend} from "./"
import {li} from "./"
import {main} from "./"
import {map} from "./"
import {mark} from "./"
import {menu} from "./"
import {menuitem} from "./"
import {meter} from "./"
import {nav} from "./"
import {nobr} from "./"
import {noframes} from "./"
import {noscript} from "./"
import {object} from "./"
import {ol} from "./"
import {optgroup} from "./"
import {option} from "./"
import {output} from "./"
import {p} from "./"
import {picture} from "./"
import {pre} from "./"
import {progress} from "./"
import {q} from "./"
import {rp} from "./"
import {rt} from "./"
import {rtc} from "./"
import {ruby} from "./"
import {s} from "./"
import {samp} from "./"
import {script} from "./"
import {section} from "./"
import {select} from "./"
import {small} from "./"
import {span} from "./"
import {strong} from "./"
import {style} from "./"
import {sub} from "./"
import {summary} from "./"
import {sup} from "./"
import {table} from "./"
import {tbody} from "./"
import {td} from "./"
import {template} from "./"
import {textarea} from "./"
import {tfoot} from "./"
import {th} from "./"
import {thead} from "./"
import {time} from "./"
import {title} from "./"
import {tr} from "./"
import {u} from "./"
import {ul} from "./"
import {_var} from "./"
import {video} from "./"
import {area} from "./"
import {base} from "./"
import {br} from "./"
import {col} from "./"
import {embed} from "./"
import {hr} from "./"
import {img} from "./"
import {input} from "./"
import {link} from "./"
import {meta} from "./"
import {param} from "./"
import {source} from "./"
import {track} from "./"
import {wbr} from "./"

const toHTMLWithPlugins = plugins([
  modules.class,
  modules.props,
  modules.attributes,
  modules.style,
])

test("empty", ({same, end}) => {
  same(
    a(),
    {
      children: undefined,
      data: {
        "attrs": {},
        "class": {},
        "hook": {},
        "on": {},
        "props": {},
        "style": {},
      },
      elm: undefined,
      key: undefined,
      sel: "a",
      text: undefined,
    }
  )
  end()
})

test("selector", ({similar, end}) => {
  similar(a({selector: ".value"}), {sel: "a.value"})
  end()
})

test("children string", ({similar, end}) => {
  similar(a({children: "test"}), {text: "test"})
  end()
})

test("children array string", ({similar, end}) => {
  similar(a({children: ["test"]}), {children: [{text: "test"}]})
  end()
})

test("children function", ({similar, end}) => {
  similar(a({children: Function}), {children: [Function]})
  end()
})

test("children array function", ({similar, end}) => {
  similar(a({children: [Function]}), {children: [Function]})
  end()
})

test("aria", ({similar, end}) => {
  similar(a({aria: {id: "1"}}), {data: {attrs: {"aria-id": "1"}}})
  end()
})

test("data", ({similar, end}) => {
  similar(
    a({
      data: {
        id: "1",
        attributes: {NAME: "test"},
      },
    }),
    {
      data: {
        attrs: {
          "data-id": "1",
          "data-attributes-name": "test",
        },
      },
    }
  )
  end()
})

test("full without functions", ({same, end}) => {
  same(
    a({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
    }),
    {
      sel: "a#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {
          title: "x",
          href: "/a",
        },
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "hook": {},
        "on": {},
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("full", ({similar, end}) => {
  similar(
    a({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
      "hook": {insert: () => null},
    }),
    {
      sel: "a#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {title: "x"},
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("html", ({equal, end}) => {
  equal(
    toHTML(a({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        attributes: {NAME: "Kurtis Rainbolt-Greene"},
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<a id=\"b\" class=\"c d active\" yyy=\"y\" xxx=\"x\" data-id=\"1\" data-attributes-name=\"Kurtis Rainbolt-Greene\" aria-role=\"navigation\" title=\"x\" href=\"/a\" style=\"border: 1px\">test</a>"
  )
  end()
})

test("html with plugins", ({equal, end}) => {
  equal(
    toHTMLWithPlugins(a({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<a id=\"b\" class=\"c d active\" title=\"x\" href=\"/a\" yyy=\"y\" xxx=\"x\" data-name=\"Kurtis\" data-id=\"1\" aria-role=\"navigation\" style=\"border: 1px\">test</a>"
  )
  end()
})

test("empty", ({same, end}) => {
  same(
    abbr(),
    {
      children: undefined,
      data: {
        "attrs": {},
        "class": {},
        "hook": {},
        "on": {},
        "props": {},
        "style": {},
      },
      elm: undefined,
      key: undefined,
      sel: "abbr",
      text: undefined,
    }
  )
  end()
})

test("selector", ({similar, end}) => {
  similar(abbr({selector: ".value"}), {sel: "abbr.value"})
  end()
})

test("children string", ({similar, end}) => {
  similar(abbr({children: "test"}), {text: "test"})
  end()
})

test("children array string", ({similar, end}) => {
  similar(abbr({children: ["test"]}), {children: [{text: "test"}]})
  end()
})

test("children function", ({similar, end}) => {
  similar(abbr({children: Function}), {children: [Function]})
  end()
})

test("children array function", ({similar, end}) => {
  similar(abbr({children: [Function]}), {children: [Function]})
  end()
})

test("aria", ({similar, end}) => {
  similar(abbr({aria: {id: "1"}}), {data: {attrs: {"aria-id": "1"}}})
  end()
})

test("data", ({similar, end}) => {
  similar(
    abbr({
      data: {
        id: "1",
        attributes: {NAME: "test"},
      },
    }),
    {
      data: {
        attrs: {
          "data-id": "1",
          "data-attributes-name": "test",
        },
      },
    }
  )
  end()
})

test("full without functions", ({same, end}) => {
  same(
    abbr({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
    }),
    {
      sel: "abbr#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {
          title: "x",
          href: "/a",
        },
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "hook": {},
        "on": {},
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("full", ({similar, end}) => {
  similar(
    abbr({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
      "hook": {insert: () => null},
    }),
    {
      sel: "abbr#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {title: "x"},
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("html", ({equal, end}) => {
  equal(
    toHTML(abbr({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        attributes: {NAME: "Kurtis Rainbolt-Greene"},
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<abbr id=\"b\" class=\"c d active\" yyy=\"y\" xxx=\"x\" data-id=\"1\" data-attributes-name=\"Kurtis Rainbolt-Greene\" aria-role=\"navigation\" title=\"x\" href=\"/a\" style=\"border: 1px\">test</abbr>"
  )
  end()
})

test("html with plugins", ({equal, end}) => {
  equal(
    toHTMLWithPlugins(abbr({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<abbr id=\"b\" class=\"c d active\" title=\"x\" href=\"/a\" yyy=\"y\" xxx=\"x\" data-name=\"Kurtis\" data-id=\"1\" aria-role=\"navigation\" style=\"border: 1px\">test</abbr>"
  )
  end()
})

test("empty", ({same, end}) => {
  same(
    address(),
    {
      children: undefined,
      data: {
        "attrs": {},
        "class": {},
        "hook": {},
        "on": {},
        "props": {},
        "style": {},
      },
      elm: undefined,
      key: undefined,
      sel: "address",
      text: undefined,
    }
  )
  end()
})

test("selector", ({similar, end}) => {
  similar(address({selector: ".value"}), {sel: "address.value"})
  end()
})

test("children string", ({similar, end}) => {
  similar(address({children: "test"}), {text: "test"})
  end()
})

test("children array string", ({similar, end}) => {
  similar(address({children: ["test"]}), {children: [{text: "test"}]})
  end()
})

test("children function", ({similar, end}) => {
  similar(address({children: Function}), {children: [Function]})
  end()
})

test("children array function", ({similar, end}) => {
  similar(address({children: [Function]}), {children: [Function]})
  end()
})

test("aria", ({similar, end}) => {
  similar(address({aria: {id: "1"}}), {data: {attrs: {"aria-id": "1"}}})
  end()
})

test("data", ({similar, end}) => {
  similar(
    address({
      data: {
        id: "1",
        attributes: {NAME: "test"},
      },
    }),
    {
      data: {
        attrs: {
          "data-id": "1",
          "data-attributes-name": "test",
        },
      },
    }
  )
  end()
})

test("full without functions", ({same, end}) => {
  same(
    address({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
    }),
    {
      sel: "address#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {
          title: "x",
          href: "/a",
        },
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "hook": {},
        "on": {},
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("full", ({similar, end}) => {
  similar(
    address({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
      "hook": {insert: () => null},
    }),
    {
      sel: "address#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {title: "x"},
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("html", ({equal, end}) => {
  equal(
    toHTML(address({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        attributes: {NAME: "Kurtis Rainbolt-Greene"},
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<address id=\"b\" class=\"c d active\" yyy=\"y\" xxx=\"x\" data-id=\"1\" data-attributes-name=\"Kurtis Rainbolt-Greene\" aria-role=\"navigation\" title=\"x\" href=\"/a\" style=\"border: 1px\">test</address>"
  )
  end()
})

test("html with plugins", ({equal, end}) => {
  equal(
    toHTMLWithPlugins(address({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<address id=\"b\" class=\"c d active\" title=\"x\" href=\"/a\" yyy=\"y\" xxx=\"x\" data-name=\"Kurtis\" data-id=\"1\" aria-role=\"navigation\" style=\"border: 1px\">test</address>"
  )
  end()
})

test("empty", ({same, end}) => {
  same(
    article(),
    {
      children: undefined,
      data: {
        "attrs": {},
        "class": {},
        "hook": {},
        "on": {},
        "props": {},
        "style": {},
      },
      elm: undefined,
      key: undefined,
      sel: "article",
      text: undefined,
    }
  )
  end()
})

test("selector", ({similar, end}) => {
  similar(article({selector: ".value"}), {sel: "article.value"})
  end()
})

test("children string", ({similar, end}) => {
  similar(article({children: "test"}), {text: "test"})
  end()
})

test("children array string", ({similar, end}) => {
  similar(article({children: ["test"]}), {children: [{text: "test"}]})
  end()
})

test("children function", ({similar, end}) => {
  similar(article({children: Function}), {children: [Function]})
  end()
})

test("children array function", ({similar, end}) => {
  similar(article({children: [Function]}), {children: [Function]})
  end()
})

test("aria", ({similar, end}) => {
  similar(article({aria: {id: "1"}}), {data: {attrs: {"aria-id": "1"}}})
  end()
})

test("data", ({similar, end}) => {
  similar(
    article({
      data: {
        id: "1",
        attributes: {NAME: "test"},
      },
    }),
    {
      data: {
        attrs: {
          "data-id": "1",
          "data-attributes-name": "test",
        },
      },
    }
  )
  end()
})

test("full without functions", ({same, end}) => {
  same(
    article({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
    }),
    {
      sel: "article#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {
          title: "x",
          href: "/a",
        },
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "hook": {},
        "on": {},
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("full", ({similar, end}) => {
  similar(
    article({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
      "hook": {insert: () => null},
    }),
    {
      sel: "article#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {title: "x"},
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("html", ({equal, end}) => {
  equal(
    toHTML(article({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        attributes: {NAME: "Kurtis Rainbolt-Greene"},
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<article id=\"b\" class=\"c d active\" yyy=\"y\" xxx=\"x\" data-id=\"1\" data-attributes-name=\"Kurtis Rainbolt-Greene\" aria-role=\"navigation\" title=\"x\" href=\"/a\" style=\"border: 1px\">test</article>"
  )
  end()
})

test("html with plugins", ({equal, end}) => {
  equal(
    toHTMLWithPlugins(article({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<article id=\"b\" class=\"c d active\" title=\"x\" href=\"/a\" yyy=\"y\" xxx=\"x\" data-name=\"Kurtis\" data-id=\"1\" aria-role=\"navigation\" style=\"border: 1px\">test</article>"
  )
  end()
})

test("empty", ({same, end}) => {
  same(
    aside(),
    {
      children: undefined,
      data: {
        "attrs": {},
        "class": {},
        "hook": {},
        "on": {},
        "props": {},
        "style": {},
      },
      elm: undefined,
      key: undefined,
      sel: "aside",
      text: undefined,
    }
  )
  end()
})

test("selector", ({similar, end}) => {
  similar(aside({selector: ".value"}), {sel: "aside.value"})
  end()
})

test("children string", ({similar, end}) => {
  similar(aside({children: "test"}), {text: "test"})
  end()
})

test("children array string", ({similar, end}) => {
  similar(aside({children: ["test"]}), {children: [{text: "test"}]})
  end()
})

test("children function", ({similar, end}) => {
  similar(aside({children: Function}), {children: [Function]})
  end()
})

test("children array function", ({similar, end}) => {
  similar(aside({children: [Function]}), {children: [Function]})
  end()
})

test("aria", ({similar, end}) => {
  similar(aside({aria: {id: "1"}}), {data: {attrs: {"aria-id": "1"}}})
  end()
})

test("data", ({similar, end}) => {
  similar(
    aside({
      data: {
        id: "1",
        attributes: {NAME: "test"},
      },
    }),
    {
      data: {
        attrs: {
          "data-id": "1",
          "data-attributes-name": "test",
        },
      },
    }
  )
  end()
})

test("full without functions", ({same, end}) => {
  same(
    aside({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
    }),
    {
      sel: "aside#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {
          title: "x",
          href: "/a",
        },
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "hook": {},
        "on": {},
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("full", ({similar, end}) => {
  similar(
    aside({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
      "hook": {insert: () => null},
    }),
    {
      sel: "aside#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {title: "x"},
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("html", ({equal, end}) => {
  equal(
    toHTML(aside({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        attributes: {NAME: "Kurtis Rainbolt-Greene"},
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<aside id=\"b\" class=\"c d active\" yyy=\"y\" xxx=\"x\" data-id=\"1\" data-attributes-name=\"Kurtis Rainbolt-Greene\" aria-role=\"navigation\" title=\"x\" href=\"/a\" style=\"border: 1px\">test</aside>"
  )
  end()
})

test("html with plugins", ({equal, end}) => {
  equal(
    toHTMLWithPlugins(aside({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<aside id=\"b\" class=\"c d active\" title=\"x\" href=\"/a\" yyy=\"y\" xxx=\"x\" data-name=\"Kurtis\" data-id=\"1\" aria-role=\"navigation\" style=\"border: 1px\">test</aside>"
  )
  end()
})

test("empty", ({same, end}) => {
  same(
    audio(),
    {
      children: undefined,
      data: {
        "attrs": {},
        "class": {},
        "hook": {},
        "on": {},
        "props": {},
        "style": {},
      },
      elm: undefined,
      key: undefined,
      sel: "audio",
      text: undefined,
    }
  )
  end()
})

test("selector", ({similar, end}) => {
  similar(audio({selector: ".value"}), {sel: "audio.value"})
  end()
})

test("children string", ({similar, end}) => {
  similar(audio({children: "test"}), {text: "test"})
  end()
})

test("children array string", ({similar, end}) => {
  similar(audio({children: ["test"]}), {children: [{text: "test"}]})
  end()
})

test("children function", ({similar, end}) => {
  similar(audio({children: Function}), {children: [Function]})
  end()
})

test("children array function", ({similar, end}) => {
  similar(audio({children: [Function]}), {children: [Function]})
  end()
})

test("aria", ({similar, end}) => {
  similar(audio({aria: {id: "1"}}), {data: {attrs: {"aria-id": "1"}}})
  end()
})

test("data", ({similar, end}) => {
  similar(
    audio({
      data: {
        id: "1",
        attributes: {NAME: "test"},
      },
    }),
    {
      data: {
        attrs: {
          "data-id": "1",
          "data-attributes-name": "test",
        },
      },
    }
  )
  end()
})

test("full without functions", ({same, end}) => {
  same(
    audio({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
    }),
    {
      sel: "audio#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {
          title: "x",
          href: "/a",
        },
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "hook": {},
        "on": {},
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("full", ({similar, end}) => {
  similar(
    audio({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
      "hook": {insert: () => null},
    }),
    {
      sel: "audio#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {title: "x"},
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("html", ({equal, end}) => {
  equal(
    toHTML(audio({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        attributes: {NAME: "Kurtis Rainbolt-Greene"},
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<audio id=\"b\" class=\"c d active\" yyy=\"y\" xxx=\"x\" data-id=\"1\" data-attributes-name=\"Kurtis Rainbolt-Greene\" aria-role=\"navigation\" title=\"x\" href=\"/a\" style=\"border: 1px\">test</audio>"
  )
  end()
})

test("html with plugins", ({equal, end}) => {
  equal(
    toHTMLWithPlugins(audio({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<audio id=\"b\" class=\"c d active\" title=\"x\" href=\"/a\" yyy=\"y\" xxx=\"x\" data-name=\"Kurtis\" data-id=\"1\" aria-role=\"navigation\" style=\"border: 1px\">test</audio>"
  )
  end()
})

test("empty", ({same, end}) => {
  same(
    b(),
    {
      children: undefined,
      data: {
        "attrs": {},
        "class": {},
        "hook": {},
        "on": {},
        "props": {},
        "style": {},
      },
      elm: undefined,
      key: undefined,
      sel: "b",
      text: undefined,
    }
  )
  end()
})

test("selector", ({similar, end}) => {
  similar(b({selector: ".value"}), {sel: "b.value"})
  end()
})

test("children string", ({similar, end}) => {
  similar(b({children: "test"}), {text: "test"})
  end()
})

test("children array string", ({similar, end}) => {
  similar(b({children: ["test"]}), {children: [{text: "test"}]})
  end()
})

test("children function", ({similar, end}) => {
  similar(b({children: Function}), {children: [Function]})
  end()
})

test("children array function", ({similar, end}) => {
  similar(b({children: [Function]}), {children: [Function]})
  end()
})

test("aria", ({similar, end}) => {
  similar(b({aria: {id: "1"}}), {data: {attrs: {"aria-id": "1"}}})
  end()
})

test("data", ({similar, end}) => {
  similar(
    b({
      data: {
        id: "1",
        attributes: {NAME: "test"},
      },
    }),
    {
      data: {
        attrs: {
          "data-id": "1",
          "data-attributes-name": "test",
        },
      },
    }
  )
  end()
})

test("full without functions", ({same, end}) => {
  same(
    b({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
    }),
    {
      sel: "b#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {
          title: "x",
          href: "/a",
        },
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "hook": {},
        "on": {},
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("full", ({similar, end}) => {
  similar(
    b({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
      "hook": {insert: () => null},
    }),
    {
      sel: "b#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {title: "x"},
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("html", ({equal, end}) => {
  equal(
    toHTML(b({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        attributes: {NAME: "Kurtis Rainbolt-Greene"},
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<b id=\"b\" class=\"c d active\" yyy=\"y\" xxx=\"x\" data-id=\"1\" data-attributes-name=\"Kurtis Rainbolt-Greene\" aria-role=\"navigation\" title=\"x\" href=\"/a\" style=\"border: 1px\">test</b>"
  )
  end()
})

test("html with plugins", ({equal, end}) => {
  equal(
    toHTMLWithPlugins(b({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<b id=\"b\" class=\"c d active\" title=\"x\" href=\"/a\" yyy=\"y\" xxx=\"x\" data-name=\"Kurtis\" data-id=\"1\" aria-role=\"navigation\" style=\"border: 1px\">test</b>"
  )
  end()
})

test("empty", ({same, end}) => {
  same(
    bdi(),
    {
      children: undefined,
      data: {
        "attrs": {},
        "class": {},
        "hook": {},
        "on": {},
        "props": {},
        "style": {},
      },
      elm: undefined,
      key: undefined,
      sel: "bdi",
      text: undefined,
    }
  )
  end()
})

test("selector", ({similar, end}) => {
  similar(bdi({selector: ".value"}), {sel: "bdi.value"})
  end()
})

test("children string", ({similar, end}) => {
  similar(bdi({children: "test"}), {text: "test"})
  end()
})

test("children array string", ({similar, end}) => {
  similar(bdi({children: ["test"]}), {children: [{text: "test"}]})
  end()
})

test("children function", ({similar, end}) => {
  similar(bdi({children: Function}), {children: [Function]})
  end()
})

test("children array function", ({similar, end}) => {
  similar(bdi({children: [Function]}), {children: [Function]})
  end()
})

test("aria", ({similar, end}) => {
  similar(bdi({aria: {id: "1"}}), {data: {attrs: {"aria-id": "1"}}})
  end()
})

test("data", ({similar, end}) => {
  similar(
    bdi({
      data: {
        id: "1",
        attributes: {NAME: "test"},
      },
    }),
    {
      data: {
        attrs: {
          "data-id": "1",
          "data-attributes-name": "test",
        },
      },
    }
  )
  end()
})

test("full without functions", ({same, end}) => {
  same(
    bdi({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
    }),
    {
      sel: "bdi#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {
          title: "x",
          href: "/a",
        },
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "hook": {},
        "on": {},
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("full", ({similar, end}) => {
  similar(
    bdi({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
      "hook": {insert: () => null},
    }),
    {
      sel: "bdi#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {title: "x"},
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("html", ({equal, end}) => {
  equal(
    toHTML(bdi({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        attributes: {NAME: "Kurtis Rainbolt-Greene"},
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<bdi id=\"b\" class=\"c d active\" yyy=\"y\" xxx=\"x\" data-id=\"1\" data-attributes-name=\"Kurtis Rainbolt-Greene\" aria-role=\"navigation\" title=\"x\" href=\"/a\" style=\"border: 1px\">test</bdi>"
  )
  end()
})

test("html with plugins", ({equal, end}) => {
  equal(
    toHTMLWithPlugins(bdi({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<bdi id=\"b\" class=\"c d active\" title=\"x\" href=\"/a\" yyy=\"y\" xxx=\"x\" data-name=\"Kurtis\" data-id=\"1\" aria-role=\"navigation\" style=\"border: 1px\">test</bdi>"
  )
  end()
})

test("empty", ({same, end}) => {
  same(
    bdo(),
    {
      children: undefined,
      data: {
        "attrs": {},
        "class": {},
        "hook": {},
        "on": {},
        "props": {},
        "style": {},
      },
      elm: undefined,
      key: undefined,
      sel: "bdo",
      text: undefined,
    }
  )
  end()
})

test("selector", ({similar, end}) => {
  similar(bdo({selector: ".value"}), {sel: "bdo.value"})
  end()
})

test("children string", ({similar, end}) => {
  similar(bdo({children: "test"}), {text: "test"})
  end()
})

test("children array string", ({similar, end}) => {
  similar(bdo({children: ["test"]}), {children: [{text: "test"}]})
  end()
})

test("children function", ({similar, end}) => {
  similar(bdo({children: Function}), {children: [Function]})
  end()
})

test("children array function", ({similar, end}) => {
  similar(bdo({children: [Function]}), {children: [Function]})
  end()
})

test("aria", ({similar, end}) => {
  similar(bdo({aria: {id: "1"}}), {data: {attrs: {"aria-id": "1"}}})
  end()
})

test("data", ({similar, end}) => {
  similar(
    bdo({
      data: {
        id: "1",
        attributes: {NAME: "test"},
      },
    }),
    {
      data: {
        attrs: {
          "data-id": "1",
          "data-attributes-name": "test",
        },
      },
    }
  )
  end()
})

test("full without functions", ({same, end}) => {
  same(
    bdo({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
    }),
    {
      sel: "bdo#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {
          title: "x",
          href: "/a",
        },
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "hook": {},
        "on": {},
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("full", ({similar, end}) => {
  similar(
    bdo({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
      "hook": {insert: () => null},
    }),
    {
      sel: "bdo#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {title: "x"},
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("html", ({equal, end}) => {
  equal(
    toHTML(bdo({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        attributes: {NAME: "Kurtis Rainbolt-Greene"},
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<bdo id=\"b\" class=\"c d active\" yyy=\"y\" xxx=\"x\" data-id=\"1\" data-attributes-name=\"Kurtis Rainbolt-Greene\" aria-role=\"navigation\" title=\"x\" href=\"/a\" style=\"border: 1px\">test</bdo>"
  )
  end()
})

test("html with plugins", ({equal, end}) => {
  equal(
    toHTMLWithPlugins(bdo({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<bdo id=\"b\" class=\"c d active\" title=\"x\" href=\"/a\" yyy=\"y\" xxx=\"x\" data-name=\"Kurtis\" data-id=\"1\" aria-role=\"navigation\" style=\"border: 1px\">test</bdo>"
  )
  end()
})

test("empty", ({same, end}) => {
  same(
    bgsound(),
    {
      children: undefined,
      data: {
        "attrs": {},
        "class": {},
        "hook": {},
        "on": {},
        "props": {},
        "style": {},
      },
      elm: undefined,
      key: undefined,
      sel: "bgsound",
      text: undefined,
    }
  )
  end()
})

test("selector", ({similar, end}) => {
  similar(bgsound({selector: ".value"}), {sel: "bgsound.value"})
  end()
})

test("children string", ({similar, end}) => {
  similar(bgsound({children: "test"}), {text: "test"})
  end()
})

test("children array string", ({similar, end}) => {
  similar(bgsound({children: ["test"]}), {children: [{text: "test"}]})
  end()
})

test("children function", ({similar, end}) => {
  similar(bgsound({children: Function}), {children: [Function]})
  end()
})

test("children array function", ({similar, end}) => {
  similar(bgsound({children: [Function]}), {children: [Function]})
  end()
})

test("aria", ({similar, end}) => {
  similar(bgsound({aria: {id: "1"}}), {data: {attrs: {"aria-id": "1"}}})
  end()
})

test("data", ({similar, end}) => {
  similar(
    bgsound({
      data: {
        id: "1",
        attributes: {NAME: "test"},
      },
    }),
    {
      data: {
        attrs: {
          "data-id": "1",
          "data-attributes-name": "test",
        },
      },
    }
  )
  end()
})

test("full without functions", ({same, end}) => {
  same(
    bgsound({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
    }),
    {
      sel: "bgsound#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {
          title: "x",
          href: "/a",
        },
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "hook": {},
        "on": {},
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("full", ({similar, end}) => {
  similar(
    bgsound({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
      "hook": {insert: () => null},
    }),
    {
      sel: "bgsound#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {title: "x"},
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("html", ({equal, end}) => {
  equal(
    toHTML(bgsound({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        attributes: {NAME: "Kurtis Rainbolt-Greene"},
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<bgsound id=\"b\" class=\"c d active\" yyy=\"y\" xxx=\"x\" data-id=\"1\" data-attributes-name=\"Kurtis Rainbolt-Greene\" aria-role=\"navigation\" title=\"x\" href=\"/a\" style=\"border: 1px\">test</bgsound>"
  )
  end()
})

test("html with plugins", ({equal, end}) => {
  equal(
    toHTMLWithPlugins(bgsound({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<bgsound id=\"b\" class=\"c d active\" title=\"x\" href=\"/a\" yyy=\"y\" xxx=\"x\" data-name=\"Kurtis\" data-id=\"1\" aria-role=\"navigation\" style=\"border: 1px\">test</bgsound>"
  )
  end()
})

test("empty", ({same, end}) => {
  same(
    blockquote(),
    {
      children: undefined,
      data: {
        "attrs": {},
        "class": {},
        "hook": {},
        "on": {},
        "props": {},
        "style": {},
      },
      elm: undefined,
      key: undefined,
      sel: "blockquote",
      text: undefined,
    }
  )
  end()
})

test("selector", ({similar, end}) => {
  similar(blockquote({selector: ".value"}), {sel: "blockquote.value"})
  end()
})

test("children string", ({similar, end}) => {
  similar(blockquote({children: "test"}), {text: "test"})
  end()
})

test("children array string", ({similar, end}) => {
  similar(blockquote({children: ["test"]}), {children: [{text: "test"}]})
  end()
})

test("children function", ({similar, end}) => {
  similar(blockquote({children: Function}), {children: [Function]})
  end()
})

test("children array function", ({similar, end}) => {
  similar(blockquote({children: [Function]}), {children: [Function]})
  end()
})

test("aria", ({similar, end}) => {
  similar(blockquote({aria: {id: "1"}}), {data: {attrs: {"aria-id": "1"}}})
  end()
})

test("data", ({similar, end}) => {
  similar(
    blockquote({
      data: {
        id: "1",
        attributes: {NAME: "test"},
      },
    }),
    {
      data: {
        attrs: {
          "data-id": "1",
          "data-attributes-name": "test",
        },
      },
    }
  )
  end()
})

test("full without functions", ({same, end}) => {
  same(
    blockquote({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
    }),
    {
      sel: "blockquote#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {
          title: "x",
          href: "/a",
        },
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "hook": {},
        "on": {},
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("full", ({similar, end}) => {
  similar(
    blockquote({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
      "hook": {insert: () => null},
    }),
    {
      sel: "blockquote#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {title: "x"},
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("html", ({equal, end}) => {
  equal(
    toHTML(blockquote({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        attributes: {NAME: "Kurtis Rainbolt-Greene"},
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<blockquote id=\"b\" class=\"c d active\" yyy=\"y\" xxx=\"x\" data-id=\"1\" data-attributes-name=\"Kurtis Rainbolt-Greene\" aria-role=\"navigation\" title=\"x\" href=\"/a\" style=\"border: 1px\">test</blockquote>"
  )
  end()
})

test("html with plugins", ({equal, end}) => {
  equal(
    toHTMLWithPlugins(blockquote({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<blockquote id=\"b\" class=\"c d active\" title=\"x\" href=\"/a\" yyy=\"y\" xxx=\"x\" data-name=\"Kurtis\" data-id=\"1\" aria-role=\"navigation\" style=\"border: 1px\">test</blockquote>"
  )
  end()
})

test("empty", ({same, end}) => {
  same(
    body(),
    {
      children: undefined,
      data: {
        "attrs": {},
        "class": {},
        "hook": {},
        "on": {},
        "props": {},
        "style": {},
      },
      elm: undefined,
      key: undefined,
      sel: "body",
      text: undefined,
    }
  )
  end()
})

test("selector", ({similar, end}) => {
  similar(body({selector: ".value"}), {sel: "body.value"})
  end()
})

test("children string", ({similar, end}) => {
  similar(body({children: "test"}), {text: "test"})
  end()
})

test("children array string", ({similar, end}) => {
  similar(body({children: ["test"]}), {children: [{text: "test"}]})
  end()
})

test("children function", ({similar, end}) => {
  similar(body({children: Function}), {children: [Function]})
  end()
})

test("children array function", ({similar, end}) => {
  similar(body({children: [Function]}), {children: [Function]})
  end()
})

test("aria", ({similar, end}) => {
  similar(body({aria: {id: "1"}}), {data: {attrs: {"aria-id": "1"}}})
  end()
})

test("data", ({similar, end}) => {
  similar(
    body({
      data: {
        id: "1",
        attributes: {NAME: "test"},
      },
    }),
    {
      data: {
        attrs: {
          "data-id": "1",
          "data-attributes-name": "test",
        },
      },
    }
  )
  end()
})

test("full without functions", ({same, end}) => {
  same(
    body({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
    }),
    {
      sel: "body#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {
          title: "x",
          href: "/a",
        },
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "hook": {},
        "on": {},
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("full", ({similar, end}) => {
  similar(
    body({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
      "hook": {insert: () => null},
    }),
    {
      sel: "body#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {title: "x"},
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("html", ({equal, end}) => {
  equal(
    toHTML(body({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        attributes: {NAME: "Kurtis Rainbolt-Greene"},
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<body id=\"b\" class=\"c d active\" yyy=\"y\" xxx=\"x\" data-id=\"1\" data-attributes-name=\"Kurtis Rainbolt-Greene\" aria-role=\"navigation\" title=\"x\" href=\"/a\" style=\"border: 1px\">test</body>"
  )
  end()
})

test("html with plugins", ({equal, end}) => {
  equal(
    toHTMLWithPlugins(body({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<body id=\"b\" class=\"c d active\" title=\"x\" href=\"/a\" yyy=\"y\" xxx=\"x\" data-name=\"Kurtis\" data-id=\"1\" aria-role=\"navigation\" style=\"border: 1px\">test</body>"
  )
  end()
})

test("empty", ({same, end}) => {
  same(
    button(),
    {
      children: undefined,
      data: {
        "attrs": {},
        "class": {},
        "hook": {},
        "on": {},
        "props": {},
        "style": {},
      },
      elm: undefined,
      key: undefined,
      sel: "button",
      text: undefined,
    }
  )
  end()
})

test("selector", ({similar, end}) => {
  similar(button({selector: ".value"}), {sel: "button.value"})
  end()
})

test("children string", ({similar, end}) => {
  similar(button({children: "test"}), {text: "test"})
  end()
})

test("children array string", ({similar, end}) => {
  similar(button({children: ["test"]}), {children: [{text: "test"}]})
  end()
})

test("children function", ({similar, end}) => {
  similar(button({children: Function}), {children: [Function]})
  end()
})

test("children array function", ({similar, end}) => {
  similar(button({children: [Function]}), {children: [Function]})
  end()
})

test("aria", ({similar, end}) => {
  similar(button({aria: {id: "1"}}), {data: {attrs: {"aria-id": "1"}}})
  end()
})

test("data", ({similar, end}) => {
  similar(
    button({
      data: {
        id: "1",
        attributes: {NAME: "test"},
      },
    }),
    {
      data: {
        attrs: {
          "data-id": "1",
          "data-attributes-name": "test",
        },
      },
    }
  )
  end()
})

test("full without functions", ({same, end}) => {
  same(
    button({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
    }),
    {
      sel: "button#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {
          title: "x",
          href: "/a",
        },
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "hook": {},
        "on": {},
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("full", ({similar, end}) => {
  similar(
    button({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
      "hook": {insert: () => null},
    }),
    {
      sel: "button#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {title: "x"},
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("html", ({equal, end}) => {
  equal(
    toHTML(button({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        attributes: {NAME: "Kurtis Rainbolt-Greene"},
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<button id=\"b\" class=\"c d active\" yyy=\"y\" xxx=\"x\" data-id=\"1\" data-attributes-name=\"Kurtis Rainbolt-Greene\" aria-role=\"navigation\" title=\"x\" href=\"/a\" style=\"border: 1px\">test</button>"
  )
  end()
})

test("html with plugins", ({equal, end}) => {
  equal(
    toHTMLWithPlugins(button({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<button id=\"b\" class=\"c d active\" title=\"x\" href=\"/a\" yyy=\"y\" xxx=\"x\" data-name=\"Kurtis\" data-id=\"1\" aria-role=\"navigation\" style=\"border: 1px\">test</button>"
  )
  end()
})

test("empty", ({same, end}) => {
  same(
    canvas(),
    {
      children: undefined,
      data: {
        "attrs": {},
        "class": {},
        "hook": {},
        "on": {},
        "props": {},
        "style": {},
      },
      elm: undefined,
      key: undefined,
      sel: "canvas",
      text: undefined,
    }
  )
  end()
})

test("selector", ({similar, end}) => {
  similar(canvas({selector: ".value"}), {sel: "canvas.value"})
  end()
})

test("children string", ({similar, end}) => {
  similar(canvas({children: "test"}), {text: "test"})
  end()
})

test("children array string", ({similar, end}) => {
  similar(canvas({children: ["test"]}), {children: [{text: "test"}]})
  end()
})

test("children function", ({similar, end}) => {
  similar(canvas({children: Function}), {children: [Function]})
  end()
})

test("children array function", ({similar, end}) => {
  similar(canvas({children: [Function]}), {children: [Function]})
  end()
})

test("aria", ({similar, end}) => {
  similar(canvas({aria: {id: "1"}}), {data: {attrs: {"aria-id": "1"}}})
  end()
})

test("data", ({similar, end}) => {
  similar(
    canvas({
      data: {
        id: "1",
        attributes: {NAME: "test"},
      },
    }),
    {
      data: {
        attrs: {
          "data-id": "1",
          "data-attributes-name": "test",
        },
      },
    }
  )
  end()
})

test("full without functions", ({same, end}) => {
  same(
    canvas({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
    }),
    {
      sel: "canvas#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {
          title: "x",
          href: "/a",
        },
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "hook": {},
        "on": {},
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("full", ({similar, end}) => {
  similar(
    canvas({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
      "hook": {insert: () => null},
    }),
    {
      sel: "canvas#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {title: "x"},
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("html", ({equal, end}) => {
  equal(
    toHTML(canvas({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        attributes: {NAME: "Kurtis Rainbolt-Greene"},
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<canvas id=\"b\" class=\"c d active\" yyy=\"y\" xxx=\"x\" data-id=\"1\" data-attributes-name=\"Kurtis Rainbolt-Greene\" aria-role=\"navigation\" title=\"x\" href=\"/a\" style=\"border: 1px\">test</canvas>"
  )
  end()
})

test("html with plugins", ({equal, end}) => {
  equal(
    toHTMLWithPlugins(canvas({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<canvas id=\"b\" class=\"c d active\" title=\"x\" href=\"/a\" yyy=\"y\" xxx=\"x\" data-name=\"Kurtis\" data-id=\"1\" aria-role=\"navigation\" style=\"border: 1px\">test</canvas>"
  )
  end()
})

test("empty", ({same, end}) => {
  same(
    caption(),
    {
      children: undefined,
      data: {
        "attrs": {},
        "class": {},
        "hook": {},
        "on": {},
        "props": {},
        "style": {},
      },
      elm: undefined,
      key: undefined,
      sel: "caption",
      text: undefined,
    }
  )
  end()
})

test("selector", ({similar, end}) => {
  similar(caption({selector: ".value"}), {sel: "caption.value"})
  end()
})

test("children string", ({similar, end}) => {
  similar(caption({children: "test"}), {text: "test"})
  end()
})

test("children array string", ({similar, end}) => {
  similar(caption({children: ["test"]}), {children: [{text: "test"}]})
  end()
})

test("children function", ({similar, end}) => {
  similar(caption({children: Function}), {children: [Function]})
  end()
})

test("children array function", ({similar, end}) => {
  similar(caption({children: [Function]}), {children: [Function]})
  end()
})

test("aria", ({similar, end}) => {
  similar(caption({aria: {id: "1"}}), {data: {attrs: {"aria-id": "1"}}})
  end()
})

test("data", ({similar, end}) => {
  similar(
    caption({
      data: {
        id: "1",
        attributes: {NAME: "test"},
      },
    }),
    {
      data: {
        attrs: {
          "data-id": "1",
          "data-attributes-name": "test",
        },
      },
    }
  )
  end()
})

test("full without functions", ({same, end}) => {
  same(
    caption({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
    }),
    {
      sel: "caption#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {
          title: "x",
          href: "/a",
        },
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "hook": {},
        "on": {},
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("full", ({similar, end}) => {
  similar(
    caption({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
      "hook": {insert: () => null},
    }),
    {
      sel: "caption#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {title: "x"},
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("html", ({equal, end}) => {
  equal(
    toHTML(caption({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        attributes: {NAME: "Kurtis Rainbolt-Greene"},
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<caption id=\"b\" class=\"c d active\" yyy=\"y\" xxx=\"x\" data-id=\"1\" data-attributes-name=\"Kurtis Rainbolt-Greene\" aria-role=\"navigation\" title=\"x\" href=\"/a\" style=\"border: 1px\">test</caption>"
  )
  end()
})

test("html with plugins", ({equal, end}) => {
  equal(
    toHTMLWithPlugins(caption({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<caption id=\"b\" class=\"c d active\" title=\"x\" href=\"/a\" yyy=\"y\" xxx=\"x\" data-name=\"Kurtis\" data-id=\"1\" aria-role=\"navigation\" style=\"border: 1px\">test</caption>"
  )
  end()
})

test("empty", ({same, end}) => {
  same(
    cite(),
    {
      children: undefined,
      data: {
        "attrs": {},
        "class": {},
        "hook": {},
        "on": {},
        "props": {},
        "style": {},
      },
      elm: undefined,
      key: undefined,
      sel: "cite",
      text: undefined,
    }
  )
  end()
})

test("selector", ({similar, end}) => {
  similar(cite({selector: ".value"}), {sel: "cite.value"})
  end()
})

test("children string", ({similar, end}) => {
  similar(cite({children: "test"}), {text: "test"})
  end()
})

test("children array string", ({similar, end}) => {
  similar(cite({children: ["test"]}), {children: [{text: "test"}]})
  end()
})

test("children function", ({similar, end}) => {
  similar(cite({children: Function}), {children: [Function]})
  end()
})

test("children array function", ({similar, end}) => {
  similar(cite({children: [Function]}), {children: [Function]})
  end()
})

test("aria", ({similar, end}) => {
  similar(cite({aria: {id: "1"}}), {data: {attrs: {"aria-id": "1"}}})
  end()
})

test("data", ({similar, end}) => {
  similar(
    cite({
      data: {
        id: "1",
        attributes: {NAME: "test"},
      },
    }),
    {
      data: {
        attrs: {
          "data-id": "1",
          "data-attributes-name": "test",
        },
      },
    }
  )
  end()
})

test("full without functions", ({same, end}) => {
  same(
    cite({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
    }),
    {
      sel: "cite#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {
          title: "x",
          href: "/a",
        },
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "hook": {},
        "on": {},
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("full", ({similar, end}) => {
  similar(
    cite({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
      "hook": {insert: () => null},
    }),
    {
      sel: "cite#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {title: "x"},
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("html", ({equal, end}) => {
  equal(
    toHTML(cite({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        attributes: {NAME: "Kurtis Rainbolt-Greene"},
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<cite id=\"b\" class=\"c d active\" yyy=\"y\" xxx=\"x\" data-id=\"1\" data-attributes-name=\"Kurtis Rainbolt-Greene\" aria-role=\"navigation\" title=\"x\" href=\"/a\" style=\"border: 1px\">test</cite>"
  )
  end()
})

test("html with plugins", ({equal, end}) => {
  equal(
    toHTMLWithPlugins(cite({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<cite id=\"b\" class=\"c d active\" title=\"x\" href=\"/a\" yyy=\"y\" xxx=\"x\" data-name=\"Kurtis\" data-id=\"1\" aria-role=\"navigation\" style=\"border: 1px\">test</cite>"
  )
  end()
})

test("empty", ({same, end}) => {
  same(
    code(),
    {
      children: undefined,
      data: {
        "attrs": {},
        "class": {},
        "hook": {},
        "on": {},
        "props": {},
        "style": {},
      },
      elm: undefined,
      key: undefined,
      sel: "code",
      text: undefined,
    }
  )
  end()
})

test("selector", ({similar, end}) => {
  similar(code({selector: ".value"}), {sel: "code.value"})
  end()
})

test("children string", ({similar, end}) => {
  similar(code({children: "test"}), {text: "test"})
  end()
})

test("children array string", ({similar, end}) => {
  similar(code({children: ["test"]}), {children: [{text: "test"}]})
  end()
})

test("children function", ({similar, end}) => {
  similar(code({children: Function}), {children: [Function]})
  end()
})

test("children array function", ({similar, end}) => {
  similar(code({children: [Function]}), {children: [Function]})
  end()
})

test("aria", ({similar, end}) => {
  similar(code({aria: {id: "1"}}), {data: {attrs: {"aria-id": "1"}}})
  end()
})

test("data", ({similar, end}) => {
  similar(
    code({
      data: {
        id: "1",
        attributes: {NAME: "test"},
      },
    }),
    {
      data: {
        attrs: {
          "data-id": "1",
          "data-attributes-name": "test",
        },
      },
    }
  )
  end()
})

test("full without functions", ({same, end}) => {
  same(
    code({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
    }),
    {
      sel: "code#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {
          title: "x",
          href: "/a",
        },
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "hook": {},
        "on": {},
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("full", ({similar, end}) => {
  similar(
    code({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
      "hook": {insert: () => null},
    }),
    {
      sel: "code#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {title: "x"},
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("html", ({equal, end}) => {
  equal(
    toHTML(code({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        attributes: {NAME: "Kurtis Rainbolt-Greene"},
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<code id=\"b\" class=\"c d active\" yyy=\"y\" xxx=\"x\" data-id=\"1\" data-attributes-name=\"Kurtis Rainbolt-Greene\" aria-role=\"navigation\" title=\"x\" href=\"/a\" style=\"border: 1px\">test</code>"
  )
  end()
})

test("html with plugins", ({equal, end}) => {
  equal(
    toHTMLWithPlugins(code({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<code id=\"b\" class=\"c d active\" title=\"x\" href=\"/a\" yyy=\"y\" xxx=\"x\" data-name=\"Kurtis\" data-id=\"1\" aria-role=\"navigation\" style=\"border: 1px\">test</code>"
  )
  end()
})

test("empty", ({same, end}) => {
  same(
    colgroup(),
    {
      children: undefined,
      data: {
        "attrs": {},
        "class": {},
        "hook": {},
        "on": {},
        "props": {},
        "style": {},
      },
      elm: undefined,
      key: undefined,
      sel: "colgroup",
      text: undefined,
    }
  )
  end()
})

test("selector", ({similar, end}) => {
  similar(colgroup({selector: ".value"}), {sel: "colgroup.value"})
  end()
})

test("children string", ({similar, end}) => {
  similar(colgroup({children: "test"}), {text: "test"})
  end()
})

test("children array string", ({similar, end}) => {
  similar(colgroup({children: ["test"]}), {children: [{text: "test"}]})
  end()
})

test("children function", ({similar, end}) => {
  similar(colgroup({children: Function}), {children: [Function]})
  end()
})

test("children array function", ({similar, end}) => {
  similar(colgroup({children: [Function]}), {children: [Function]})
  end()
})

test("aria", ({similar, end}) => {
  similar(colgroup({aria: {id: "1"}}), {data: {attrs: {"aria-id": "1"}}})
  end()
})

test("data", ({similar, end}) => {
  similar(
    colgroup({
      data: {
        id: "1",
        attributes: {NAME: "test"},
      },
    }),
    {
      data: {
        attrs: {
          "data-id": "1",
          "data-attributes-name": "test",
        },
      },
    }
  )
  end()
})

test("full without functions", ({same, end}) => {
  same(
    colgroup({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
    }),
    {
      sel: "colgroup#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {
          title: "x",
          href: "/a",
        },
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "hook": {},
        "on": {},
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("full", ({similar, end}) => {
  similar(
    colgroup({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
      "hook": {insert: () => null},
    }),
    {
      sel: "colgroup#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {title: "x"},
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("html", ({equal, end}) => {
  equal(
    toHTML(colgroup({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        attributes: {NAME: "Kurtis Rainbolt-Greene"},
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<colgroup id=\"b\" class=\"c d active\" yyy=\"y\" xxx=\"x\" data-id=\"1\" data-attributes-name=\"Kurtis Rainbolt-Greene\" aria-role=\"navigation\" title=\"x\" href=\"/a\" style=\"border: 1px\">test</colgroup>"
  )
  end()
})

test("html with plugins", ({equal, end}) => {
  equal(
    toHTMLWithPlugins(colgroup({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<colgroup id=\"b\" class=\"c d active\" title=\"x\" href=\"/a\" yyy=\"y\" xxx=\"x\" data-name=\"Kurtis\" data-id=\"1\" aria-role=\"navigation\" style=\"border: 1px\">test</colgroup>"
  )
  end()
})

test("empty", ({same, end}) => {
  same(
    data(),
    {
      children: undefined,
      data: {
        "attrs": {},
        "class": {},
        "hook": {},
        "on": {},
        "props": {},
        "style": {},
      },
      elm: undefined,
      key: undefined,
      sel: "data",
      text: undefined,
    }
  )
  end()
})

test("selector", ({similar, end}) => {
  similar(data({selector: ".value"}), {sel: "data.value"})
  end()
})

test("children string", ({similar, end}) => {
  similar(data({children: "test"}), {text: "test"})
  end()
})

test("children array string", ({similar, end}) => {
  similar(data({children: ["test"]}), {children: [{text: "test"}]})
  end()
})

test("children function", ({similar, end}) => {
  similar(data({children: Function}), {children: [Function]})
  end()
})

test("children array function", ({similar, end}) => {
  similar(data({children: [Function]}), {children: [Function]})
  end()
})

test("aria", ({similar, end}) => {
  similar(data({aria: {id: "1"}}), {data: {attrs: {"aria-id": "1"}}})
  end()
})

test("data", ({similar, end}) => {
  similar(
    data({
      data: {
        id: "1",
        attributes: {NAME: "test"},
      },
    }),
    {
      data: {
        attrs: {
          "data-id": "1",
          "data-attributes-name": "test",
        },
      },
    }
  )
  end()
})

test("full without functions", ({same, end}) => {
  same(
    data({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
    }),
    {
      sel: "data#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {
          title: "x",
          href: "/a",
        },
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "hook": {},
        "on": {},
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("full", ({similar, end}) => {
  similar(
    data({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
      "hook": {insert: () => null},
    }),
    {
      sel: "data#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {title: "x"},
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("html", ({equal, end}) => {
  equal(
    toHTML(data({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        attributes: {NAME: "Kurtis Rainbolt-Greene"},
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<data id=\"b\" class=\"c d active\" yyy=\"y\" xxx=\"x\" data-id=\"1\" data-attributes-name=\"Kurtis Rainbolt-Greene\" aria-role=\"navigation\" title=\"x\" href=\"/a\" style=\"border: 1px\">test</data>"
  )
  end()
})

test("html with plugins", ({equal, end}) => {
  equal(
    toHTMLWithPlugins(data({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<data id=\"b\" class=\"c d active\" title=\"x\" href=\"/a\" yyy=\"y\" xxx=\"x\" data-name=\"Kurtis\" data-id=\"1\" aria-role=\"navigation\" style=\"border: 1px\">test</data>"
  )
  end()
})

test("empty", ({same, end}) => {
  same(
    datalist(),
    {
      children: undefined,
      data: {
        "attrs": {},
        "class": {},
        "hook": {},
        "on": {},
        "props": {},
        "style": {},
      },
      elm: undefined,
      key: undefined,
      sel: "datalist",
      text: undefined,
    }
  )
  end()
})

test("selector", ({similar, end}) => {
  similar(datalist({selector: ".value"}), {sel: "datalist.value"})
  end()
})

test("children string", ({similar, end}) => {
  similar(datalist({children: "test"}), {text: "test"})
  end()
})

test("children array string", ({similar, end}) => {
  similar(datalist({children: ["test"]}), {children: [{text: "test"}]})
  end()
})

test("children function", ({similar, end}) => {
  similar(datalist({children: Function}), {children: [Function]})
  end()
})

test("children array function", ({similar, end}) => {
  similar(datalist({children: [Function]}), {children: [Function]})
  end()
})

test("aria", ({similar, end}) => {
  similar(datalist({aria: {id: "1"}}), {data: {attrs: {"aria-id": "1"}}})
  end()
})

test("data", ({similar, end}) => {
  similar(
    datalist({
      data: {
        id: "1",
        attributes: {NAME: "test"},
      },
    }),
    {
      data: {
        attrs: {
          "data-id": "1",
          "data-attributes-name": "test",
        },
      },
    }
  )
  end()
})

test("full without functions", ({same, end}) => {
  same(
    datalist({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
    }),
    {
      sel: "datalist#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {
          title: "x",
          href: "/a",
        },
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "hook": {},
        "on": {},
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("full", ({similar, end}) => {
  similar(
    datalist({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
      "hook": {insert: () => null},
    }),
    {
      sel: "datalist#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {title: "x"},
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("html", ({equal, end}) => {
  equal(
    toHTML(datalist({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        attributes: {NAME: "Kurtis Rainbolt-Greene"},
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<datalist id=\"b\" class=\"c d active\" yyy=\"y\" xxx=\"x\" data-id=\"1\" data-attributes-name=\"Kurtis Rainbolt-Greene\" aria-role=\"navigation\" title=\"x\" href=\"/a\" style=\"border: 1px\">test</datalist>"
  )
  end()
})

test("html with plugins", ({equal, end}) => {
  equal(
    toHTMLWithPlugins(datalist({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<datalist id=\"b\" class=\"c d active\" title=\"x\" href=\"/a\" yyy=\"y\" xxx=\"x\" data-name=\"Kurtis\" data-id=\"1\" aria-role=\"navigation\" style=\"border: 1px\">test</datalist>"
  )
  end()
})

test("empty", ({same, end}) => {
  same(
    dd(),
    {
      children: undefined,
      data: {
        "attrs": {},
        "class": {},
        "hook": {},
        "on": {},
        "props": {},
        "style": {},
      },
      elm: undefined,
      key: undefined,
      sel: "dd",
      text: undefined,
    }
  )
  end()
})

test("selector", ({similar, end}) => {
  similar(dd({selector: ".value"}), {sel: "dd.value"})
  end()
})

test("children string", ({similar, end}) => {
  similar(dd({children: "test"}), {text: "test"})
  end()
})

test("children array string", ({similar, end}) => {
  similar(dd({children: ["test"]}), {children: [{text: "test"}]})
  end()
})

test("children function", ({similar, end}) => {
  similar(dd({children: Function}), {children: [Function]})
  end()
})

test("children array function", ({similar, end}) => {
  similar(dd({children: [Function]}), {children: [Function]})
  end()
})

test("aria", ({similar, end}) => {
  similar(dd({aria: {id: "1"}}), {data: {attrs: {"aria-id": "1"}}})
  end()
})

test("data", ({similar, end}) => {
  similar(
    dd({
      data: {
        id: "1",
        attributes: {NAME: "test"},
      },
    }),
    {
      data: {
        attrs: {
          "data-id": "1",
          "data-attributes-name": "test",
        },
      },
    }
  )
  end()
})

test("full without functions", ({same, end}) => {
  same(
    dd({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
    }),
    {
      sel: "dd#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {
          title: "x",
          href: "/a",
        },
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "hook": {},
        "on": {},
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("full", ({similar, end}) => {
  similar(
    dd({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
      "hook": {insert: () => null},
    }),
    {
      sel: "dd#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {title: "x"},
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("html", ({equal, end}) => {
  equal(
    toHTML(dd({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        attributes: {NAME: "Kurtis Rainbolt-Greene"},
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<dd id=\"b\" class=\"c d active\" yyy=\"y\" xxx=\"x\" data-id=\"1\" data-attributes-name=\"Kurtis Rainbolt-Greene\" aria-role=\"navigation\" title=\"x\" href=\"/a\" style=\"border: 1px\">test</dd>"
  )
  end()
})

test("html with plugins", ({equal, end}) => {
  equal(
    toHTMLWithPlugins(dd({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<dd id=\"b\" class=\"c d active\" title=\"x\" href=\"/a\" yyy=\"y\" xxx=\"x\" data-name=\"Kurtis\" data-id=\"1\" aria-role=\"navigation\" style=\"border: 1px\">test</dd>"
  )
  end()
})

test("empty", ({same, end}) => {
  same(
    del(),
    {
      children: undefined,
      data: {
        "attrs": {},
        "class": {},
        "hook": {},
        "on": {},
        "props": {},
        "style": {},
      },
      elm: undefined,
      key: undefined,
      sel: "del",
      text: undefined,
    }
  )
  end()
})

test("selector", ({similar, end}) => {
  similar(del({selector: ".value"}), {sel: "del.value"})
  end()
})

test("children string", ({similar, end}) => {
  similar(del({children: "test"}), {text: "test"})
  end()
})

test("children array string", ({similar, end}) => {
  similar(del({children: ["test"]}), {children: [{text: "test"}]})
  end()
})

test("children function", ({similar, end}) => {
  similar(del({children: Function}), {children: [Function]})
  end()
})

test("children array function", ({similar, end}) => {
  similar(del({children: [Function]}), {children: [Function]})
  end()
})

test("aria", ({similar, end}) => {
  similar(del({aria: {id: "1"}}), {data: {attrs: {"aria-id": "1"}}})
  end()
})

test("data", ({similar, end}) => {
  similar(
    del({
      data: {
        id: "1",
        attributes: {NAME: "test"},
      },
    }),
    {
      data: {
        attrs: {
          "data-id": "1",
          "data-attributes-name": "test",
        },
      },
    }
  )
  end()
})

test("full without functions", ({same, end}) => {
  same(
    del({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
    }),
    {
      sel: "del#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {
          title: "x",
          href: "/a",
        },
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "hook": {},
        "on": {},
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("full", ({similar, end}) => {
  similar(
    del({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
      "hook": {insert: () => null},
    }),
    {
      sel: "del#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {title: "x"},
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("html", ({equal, end}) => {
  equal(
    toHTML(del({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        attributes: {NAME: "Kurtis Rainbolt-Greene"},
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<del id=\"b\" class=\"c d active\" yyy=\"y\" xxx=\"x\" data-id=\"1\" data-attributes-name=\"Kurtis Rainbolt-Greene\" aria-role=\"navigation\" title=\"x\" href=\"/a\" style=\"border: 1px\">test</del>"
  )
  end()
})

test("html with plugins", ({equal, end}) => {
  equal(
    toHTMLWithPlugins(del({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<del id=\"b\" class=\"c d active\" title=\"x\" href=\"/a\" yyy=\"y\" xxx=\"x\" data-name=\"Kurtis\" data-id=\"1\" aria-role=\"navigation\" style=\"border: 1px\">test</del>"
  )
  end()
})

test("empty", ({same, end}) => {
  same(
    details(),
    {
      children: undefined,
      data: {
        "attrs": {},
        "class": {},
        "hook": {},
        "on": {},
        "props": {},
        "style": {},
      },
      elm: undefined,
      key: undefined,
      sel: "details",
      text: undefined,
    }
  )
  end()
})

test("selector", ({similar, end}) => {
  similar(details({selector: ".value"}), {sel: "details.value"})
  end()
})

test("children string", ({similar, end}) => {
  similar(details({children: "test"}), {text: "test"})
  end()
})

test("children array string", ({similar, end}) => {
  similar(details({children: ["test"]}), {children: [{text: "test"}]})
  end()
})

test("children function", ({similar, end}) => {
  similar(details({children: Function}), {children: [Function]})
  end()
})

test("children array function", ({similar, end}) => {
  similar(details({children: [Function]}), {children: [Function]})
  end()
})

test("aria", ({similar, end}) => {
  similar(details({aria: {id: "1"}}), {data: {attrs: {"aria-id": "1"}}})
  end()
})

test("data", ({similar, end}) => {
  similar(
    details({
      data: {
        id: "1",
        attributes: {NAME: "test"},
      },
    }),
    {
      data: {
        attrs: {
          "data-id": "1",
          "data-attributes-name": "test",
        },
      },
    }
  )
  end()
})

test("full without functions", ({same, end}) => {
  same(
    details({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
    }),
    {
      sel: "details#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {
          title: "x",
          href: "/a",
        },
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "hook": {},
        "on": {},
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("full", ({similar, end}) => {
  similar(
    details({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
      "hook": {insert: () => null},
    }),
    {
      sel: "details#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {title: "x"},
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("html", ({equal, end}) => {
  equal(
    toHTML(details({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        attributes: {NAME: "Kurtis Rainbolt-Greene"},
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<details id=\"b\" class=\"c d active\" yyy=\"y\" xxx=\"x\" data-id=\"1\" data-attributes-name=\"Kurtis Rainbolt-Greene\" aria-role=\"navigation\" title=\"x\" href=\"/a\" style=\"border: 1px\">test</details>"
  )
  end()
})

test("html with plugins", ({equal, end}) => {
  equal(
    toHTMLWithPlugins(details({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<details id=\"b\" class=\"c d active\" title=\"x\" href=\"/a\" yyy=\"y\" xxx=\"x\" data-name=\"Kurtis\" data-id=\"1\" aria-role=\"navigation\" style=\"border: 1px\">test</details>"
  )
  end()
})

test("empty", ({same, end}) => {
  same(
    dfn(),
    {
      children: undefined,
      data: {
        "attrs": {},
        "class": {},
        "hook": {},
        "on": {},
        "props": {},
        "style": {},
      },
      elm: undefined,
      key: undefined,
      sel: "dfn",
      text: undefined,
    }
  )
  end()
})

test("selector", ({similar, end}) => {
  similar(dfn({selector: ".value"}), {sel: "dfn.value"})
  end()
})

test("children string", ({similar, end}) => {
  similar(dfn({children: "test"}), {text: "test"})
  end()
})

test("children array string", ({similar, end}) => {
  similar(dfn({children: ["test"]}), {children: [{text: "test"}]})
  end()
})

test("children function", ({similar, end}) => {
  similar(dfn({children: Function}), {children: [Function]})
  end()
})

test("children array function", ({similar, end}) => {
  similar(dfn({children: [Function]}), {children: [Function]})
  end()
})

test("aria", ({similar, end}) => {
  similar(dfn({aria: {id: "1"}}), {data: {attrs: {"aria-id": "1"}}})
  end()
})

test("data", ({similar, end}) => {
  similar(
    dfn({
      data: {
        id: "1",
        attributes: {NAME: "test"},
      },
    }),
    {
      data: {
        attrs: {
          "data-id": "1",
          "data-attributes-name": "test",
        },
      },
    }
  )
  end()
})

test("full without functions", ({same, end}) => {
  same(
    dfn({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
    }),
    {
      sel: "dfn#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {
          title: "x",
          href: "/a",
        },
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "hook": {},
        "on": {},
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("full", ({similar, end}) => {
  similar(
    dfn({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
      "hook": {insert: () => null},
    }),
    {
      sel: "dfn#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {title: "x"},
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("html", ({equal, end}) => {
  equal(
    toHTML(dfn({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        attributes: {NAME: "Kurtis Rainbolt-Greene"},
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<dfn id=\"b\" class=\"c d active\" yyy=\"y\" xxx=\"x\" data-id=\"1\" data-attributes-name=\"Kurtis Rainbolt-Greene\" aria-role=\"navigation\" title=\"x\" href=\"/a\" style=\"border: 1px\">test</dfn>"
  )
  end()
})

test("html with plugins", ({equal, end}) => {
  equal(
    toHTMLWithPlugins(dfn({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<dfn id=\"b\" class=\"c d active\" title=\"x\" href=\"/a\" yyy=\"y\" xxx=\"x\" data-name=\"Kurtis\" data-id=\"1\" aria-role=\"navigation\" style=\"border: 1px\">test</dfn>"
  )
  end()
})

test("empty", ({same, end}) => {
  same(
    dir(),
    {
      children: undefined,
      data: {
        "attrs": {},
        "class": {},
        "hook": {},
        "on": {},
        "props": {},
        "style": {},
      },
      elm: undefined,
      key: undefined,
      sel: "dir",
      text: undefined,
    }
  )
  end()
})

test("selector", ({similar, end}) => {
  similar(dir({selector: ".value"}), {sel: "dir.value"})
  end()
})

test("children string", ({similar, end}) => {
  similar(dir({children: "test"}), {text: "test"})
  end()
})

test("children array string", ({similar, end}) => {
  similar(dir({children: ["test"]}), {children: [{text: "test"}]})
  end()
})

test("children function", ({similar, end}) => {
  similar(dir({children: Function}), {children: [Function]})
  end()
})

test("children array function", ({similar, end}) => {
  similar(dir({children: [Function]}), {children: [Function]})
  end()
})

test("aria", ({similar, end}) => {
  similar(dir({aria: {id: "1"}}), {data: {attrs: {"aria-id": "1"}}})
  end()
})

test("data", ({similar, end}) => {
  similar(
    dir({
      data: {
        id: "1",
        attributes: {NAME: "test"},
      },
    }),
    {
      data: {
        attrs: {
          "data-id": "1",
          "data-attributes-name": "test",
        },
      },
    }
  )
  end()
})

test("full without functions", ({same, end}) => {
  same(
    dir({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
    }),
    {
      sel: "dir#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {
          title: "x",
          href: "/a",
        },
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "hook": {},
        "on": {},
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("full", ({similar, end}) => {
  similar(
    dir({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
      "hook": {insert: () => null},
    }),
    {
      sel: "dir#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {title: "x"},
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("html", ({equal, end}) => {
  equal(
    toHTML(dir({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        attributes: {NAME: "Kurtis Rainbolt-Greene"},
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<dir id=\"b\" class=\"c d active\" yyy=\"y\" xxx=\"x\" data-id=\"1\" data-attributes-name=\"Kurtis Rainbolt-Greene\" aria-role=\"navigation\" title=\"x\" href=\"/a\" style=\"border: 1px\">test</dir>"
  )
  end()
})

test("html with plugins", ({equal, end}) => {
  equal(
    toHTMLWithPlugins(dir({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<dir id=\"b\" class=\"c d active\" title=\"x\" href=\"/a\" yyy=\"y\" xxx=\"x\" data-name=\"Kurtis\" data-id=\"1\" aria-role=\"navigation\" style=\"border: 1px\">test</dir>"
  )
  end()
})

test("empty", ({same, end}) => {
  same(
    div(),
    {
      children: undefined,
      data: {
        "attrs": {},
        "class": {},
        "hook": {},
        "on": {},
        "props": {},
        "style": {},
      },
      elm: undefined,
      key: undefined,
      sel: "div",
      text: undefined,
    }
  )
  end()
})

test("selector", ({similar, end}) => {
  similar(div({selector: ".value"}), {sel: "div.value"})
  end()
})

test("children string", ({similar, end}) => {
  similar(div({children: "test"}), {text: "test"})
  end()
})

test("children array string", ({similar, end}) => {
  similar(div({children: ["test"]}), {children: [{text: "test"}]})
  end()
})

test("children function", ({similar, end}) => {
  similar(div({children: Function}), {children: [Function]})
  end()
})

test("children array function", ({similar, end}) => {
  similar(div({children: [Function]}), {children: [Function]})
  end()
})

test("aria", ({similar, end}) => {
  similar(div({aria: {id: "1"}}), {data: {attrs: {"aria-id": "1"}}})
  end()
})

test("data", ({similar, end}) => {
  similar(
    div({
      data: {
        id: "1",
        attributes: {NAME: "test"},
      },
    }),
    {
      data: {
        attrs: {
          "data-id": "1",
          "data-attributes-name": "test",
        },
      },
    }
  )
  end()
})

test("full without functions", ({same, end}) => {
  same(
    div({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
    }),
    {
      sel: "div#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {
          title: "x",
          href: "/a",
        },
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "hook": {},
        "on": {},
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("full", ({similar, end}) => {
  similar(
    div({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
      "hook": {insert: () => null},
    }),
    {
      sel: "div#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {title: "x"},
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("html", ({equal, end}) => {
  equal(
    toHTML(div({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        attributes: {NAME: "Kurtis Rainbolt-Greene"},
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<div id=\"b\" class=\"c d active\" yyy=\"y\" xxx=\"x\" data-id=\"1\" data-attributes-name=\"Kurtis Rainbolt-Greene\" aria-role=\"navigation\" title=\"x\" href=\"/a\" style=\"border: 1px\">test</div>"
  )
  end()
})

test("html with plugins", ({equal, end}) => {
  equal(
    toHTMLWithPlugins(div({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<div id=\"b\" class=\"c d active\" title=\"x\" href=\"/a\" yyy=\"y\" xxx=\"x\" data-name=\"Kurtis\" data-id=\"1\" aria-role=\"navigation\" style=\"border: 1px\">test</div>"
  )
  end()
})

test("empty", ({same, end}) => {
  same(
    dl(),
    {
      children: undefined,
      data: {
        "attrs": {},
        "class": {},
        "hook": {},
        "on": {},
        "props": {},
        "style": {},
      },
      elm: undefined,
      key: undefined,
      sel: "dl",
      text: undefined,
    }
  )
  end()
})

test("selector", ({similar, end}) => {
  similar(dl({selector: ".value"}), {sel: "dl.value"})
  end()
})

test("children string", ({similar, end}) => {
  similar(dl({children: "test"}), {text: "test"})
  end()
})

test("children array string", ({similar, end}) => {
  similar(dl({children: ["test"]}), {children: [{text: "test"}]})
  end()
})

test("children function", ({similar, end}) => {
  similar(dl({children: Function}), {children: [Function]})
  end()
})

test("children array function", ({similar, end}) => {
  similar(dl({children: [Function]}), {children: [Function]})
  end()
})

test("aria", ({similar, end}) => {
  similar(dl({aria: {id: "1"}}), {data: {attrs: {"aria-id": "1"}}})
  end()
})

test("data", ({similar, end}) => {
  similar(
    dl({
      data: {
        id: "1",
        attributes: {NAME: "test"},
      },
    }),
    {
      data: {
        attrs: {
          "data-id": "1",
          "data-attributes-name": "test",
        },
      },
    }
  )
  end()
})

test("full without functions", ({same, end}) => {
  same(
    dl({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
    }),
    {
      sel: "dl#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {
          title: "x",
          href: "/a",
        },
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "hook": {},
        "on": {},
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("full", ({similar, end}) => {
  similar(
    dl({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
      "hook": {insert: () => null},
    }),
    {
      sel: "dl#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {title: "x"},
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("html", ({equal, end}) => {
  equal(
    toHTML(dl({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        attributes: {NAME: "Kurtis Rainbolt-Greene"},
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<dl id=\"b\" class=\"c d active\" yyy=\"y\" xxx=\"x\" data-id=\"1\" data-attributes-name=\"Kurtis Rainbolt-Greene\" aria-role=\"navigation\" title=\"x\" href=\"/a\" style=\"border: 1px\">test</dl>"
  )
  end()
})

test("html with plugins", ({equal, end}) => {
  equal(
    toHTMLWithPlugins(dl({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<dl id=\"b\" class=\"c d active\" title=\"x\" href=\"/a\" yyy=\"y\" xxx=\"x\" data-name=\"Kurtis\" data-id=\"1\" aria-role=\"navigation\" style=\"border: 1px\">test</dl>"
  )
  end()
})

test("empty", ({same, end}) => {
  same(
    dt(),
    {
      children: undefined,
      data: {
        "attrs": {},
        "class": {},
        "hook": {},
        "on": {},
        "props": {},
        "style": {},
      },
      elm: undefined,
      key: undefined,
      sel: "dt",
      text: undefined,
    }
  )
  end()
})

test("selector", ({similar, end}) => {
  similar(dt({selector: ".value"}), {sel: "dt.value"})
  end()
})

test("children string", ({similar, end}) => {
  similar(dt({children: "test"}), {text: "test"})
  end()
})

test("children array string", ({similar, end}) => {
  similar(dt({children: ["test"]}), {children: [{text: "test"}]})
  end()
})

test("children function", ({similar, end}) => {
  similar(dt({children: Function}), {children: [Function]})
  end()
})

test("children array function", ({similar, end}) => {
  similar(dt({children: [Function]}), {children: [Function]})
  end()
})

test("aria", ({similar, end}) => {
  similar(dt({aria: {id: "1"}}), {data: {attrs: {"aria-id": "1"}}})
  end()
})

test("data", ({similar, end}) => {
  similar(
    dt({
      data: {
        id: "1",
        attributes: {NAME: "test"},
      },
    }),
    {
      data: {
        attrs: {
          "data-id": "1",
          "data-attributes-name": "test",
        },
      },
    }
  )
  end()
})

test("full without functions", ({same, end}) => {
  same(
    dt({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
    }),
    {
      sel: "dt#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {
          title: "x",
          href: "/a",
        },
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "hook": {},
        "on": {},
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("full", ({similar, end}) => {
  similar(
    dt({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
      "hook": {insert: () => null},
    }),
    {
      sel: "dt#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {title: "x"},
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("html", ({equal, end}) => {
  equal(
    toHTML(dt({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        attributes: {NAME: "Kurtis Rainbolt-Greene"},
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<dt id=\"b\" class=\"c d active\" yyy=\"y\" xxx=\"x\" data-id=\"1\" data-attributes-name=\"Kurtis Rainbolt-Greene\" aria-role=\"navigation\" title=\"x\" href=\"/a\" style=\"border: 1px\">test</dt>"
  )
  end()
})

test("html with plugins", ({equal, end}) => {
  equal(
    toHTMLWithPlugins(dt({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<dt id=\"b\" class=\"c d active\" title=\"x\" href=\"/a\" yyy=\"y\" xxx=\"x\" data-name=\"Kurtis\" data-id=\"1\" aria-role=\"navigation\" style=\"border: 1px\">test</dt>"
  )
  end()
})

test("empty", ({same, end}) => {
  same(
    em(),
    {
      children: undefined,
      data: {
        "attrs": {},
        "class": {},
        "hook": {},
        "on": {},
        "props": {},
        "style": {},
      },
      elm: undefined,
      key: undefined,
      sel: "em",
      text: undefined,
    }
  )
  end()
})

test("selector", ({similar, end}) => {
  similar(em({selector: ".value"}), {sel: "em.value"})
  end()
})

test("children string", ({similar, end}) => {
  similar(em({children: "test"}), {text: "test"})
  end()
})

test("children array string", ({similar, end}) => {
  similar(em({children: ["test"]}), {children: [{text: "test"}]})
  end()
})

test("children function", ({similar, end}) => {
  similar(em({children: Function}), {children: [Function]})
  end()
})

test("children array function", ({similar, end}) => {
  similar(em({children: [Function]}), {children: [Function]})
  end()
})

test("aria", ({similar, end}) => {
  similar(em({aria: {id: "1"}}), {data: {attrs: {"aria-id": "1"}}})
  end()
})

test("data", ({similar, end}) => {
  similar(
    em({
      data: {
        id: "1",
        attributes: {NAME: "test"},
      },
    }),
    {
      data: {
        attrs: {
          "data-id": "1",
          "data-attributes-name": "test",
        },
      },
    }
  )
  end()
})

test("full without functions", ({same, end}) => {
  same(
    em({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
    }),
    {
      sel: "em#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {
          title: "x",
          href: "/a",
        },
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "hook": {},
        "on": {},
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("full", ({similar, end}) => {
  similar(
    em({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
      "hook": {insert: () => null},
    }),
    {
      sel: "em#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {title: "x"},
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("html", ({equal, end}) => {
  equal(
    toHTML(em({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        attributes: {NAME: "Kurtis Rainbolt-Greene"},
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<em id=\"b\" class=\"c d active\" yyy=\"y\" xxx=\"x\" data-id=\"1\" data-attributes-name=\"Kurtis Rainbolt-Greene\" aria-role=\"navigation\" title=\"x\" href=\"/a\" style=\"border: 1px\">test</em>"
  )
  end()
})

test("html with plugins", ({equal, end}) => {
  equal(
    toHTMLWithPlugins(em({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<em id=\"b\" class=\"c d active\" title=\"x\" href=\"/a\" yyy=\"y\" xxx=\"x\" data-name=\"Kurtis\" data-id=\"1\" aria-role=\"navigation\" style=\"border: 1px\">test</em>"
  )
  end()
})

test("empty", ({same, end}) => {
  same(
    fieldset(),
    {
      children: undefined,
      data: {
        "attrs": {},
        "class": {},
        "hook": {},
        "on": {},
        "props": {},
        "style": {},
      },
      elm: undefined,
      key: undefined,
      sel: "fieldset",
      text: undefined,
    }
  )
  end()
})

test("selector", ({similar, end}) => {
  similar(fieldset({selector: ".value"}), {sel: "fieldset.value"})
  end()
})

test("children string", ({similar, end}) => {
  similar(fieldset({children: "test"}), {text: "test"})
  end()
})

test("children array string", ({similar, end}) => {
  similar(fieldset({children: ["test"]}), {children: [{text: "test"}]})
  end()
})

test("children function", ({similar, end}) => {
  similar(fieldset({children: Function}), {children: [Function]})
  end()
})

test("children array function", ({similar, end}) => {
  similar(fieldset({children: [Function]}), {children: [Function]})
  end()
})

test("aria", ({similar, end}) => {
  similar(fieldset({aria: {id: "1"}}), {data: {attrs: {"aria-id": "1"}}})
  end()
})

test("data", ({similar, end}) => {
  similar(
    fieldset({
      data: {
        id: "1",
        attributes: {NAME: "test"},
      },
    }),
    {
      data: {
        attrs: {
          "data-id": "1",
          "data-attributes-name": "test",
        },
      },
    }
  )
  end()
})

test("full without functions", ({same, end}) => {
  same(
    fieldset({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
    }),
    {
      sel: "fieldset#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {
          title: "x",
          href: "/a",
        },
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "hook": {},
        "on": {},
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("full", ({similar, end}) => {
  similar(
    fieldset({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
      "hook": {insert: () => null},
    }),
    {
      sel: "fieldset#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {title: "x"},
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("html", ({equal, end}) => {
  equal(
    toHTML(fieldset({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        attributes: {NAME: "Kurtis Rainbolt-Greene"},
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<fieldset id=\"b\" class=\"c d active\" yyy=\"y\" xxx=\"x\" data-id=\"1\" data-attributes-name=\"Kurtis Rainbolt-Greene\" aria-role=\"navigation\" title=\"x\" href=\"/a\" style=\"border: 1px\">test</fieldset>"
  )
  end()
})

test("html with plugins", ({equal, end}) => {
  equal(
    toHTMLWithPlugins(fieldset({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<fieldset id=\"b\" class=\"c d active\" title=\"x\" href=\"/a\" yyy=\"y\" xxx=\"x\" data-name=\"Kurtis\" data-id=\"1\" aria-role=\"navigation\" style=\"border: 1px\">test</fieldset>"
  )
  end()
})

test("empty", ({same, end}) => {
  same(
    figcaption(),
    {
      children: undefined,
      data: {
        "attrs": {},
        "class": {},
        "hook": {},
        "on": {},
        "props": {},
        "style": {},
      },
      elm: undefined,
      key: undefined,
      sel: "figcaption",
      text: undefined,
    }
  )
  end()
})

test("selector", ({similar, end}) => {
  similar(figcaption({selector: ".value"}), {sel: "figcaption.value"})
  end()
})

test("children string", ({similar, end}) => {
  similar(figcaption({children: "test"}), {text: "test"})
  end()
})

test("children array string", ({similar, end}) => {
  similar(figcaption({children: ["test"]}), {children: [{text: "test"}]})
  end()
})

test("children function", ({similar, end}) => {
  similar(figcaption({children: Function}), {children: [Function]})
  end()
})

test("children array function", ({similar, end}) => {
  similar(figcaption({children: [Function]}), {children: [Function]})
  end()
})

test("aria", ({similar, end}) => {
  similar(figcaption({aria: {id: "1"}}), {data: {attrs: {"aria-id": "1"}}})
  end()
})

test("data", ({similar, end}) => {
  similar(
    figcaption({
      data: {
        id: "1",
        attributes: {NAME: "test"},
      },
    }),
    {
      data: {
        attrs: {
          "data-id": "1",
          "data-attributes-name": "test",
        },
      },
    }
  )
  end()
})

test("full without functions", ({same, end}) => {
  same(
    figcaption({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
    }),
    {
      sel: "figcaption#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {
          title: "x",
          href: "/a",
        },
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "hook": {},
        "on": {},
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("full", ({similar, end}) => {
  similar(
    figcaption({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
      "hook": {insert: () => null},
    }),
    {
      sel: "figcaption#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {title: "x"},
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("html", ({equal, end}) => {
  equal(
    toHTML(figcaption({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        attributes: {NAME: "Kurtis Rainbolt-Greene"},
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<figcaption id=\"b\" class=\"c d active\" yyy=\"y\" xxx=\"x\" data-id=\"1\" data-attributes-name=\"Kurtis Rainbolt-Greene\" aria-role=\"navigation\" title=\"x\" href=\"/a\" style=\"border: 1px\">test</figcaption>"
  )
  end()
})

test("html with plugins", ({equal, end}) => {
  equal(
    toHTMLWithPlugins(figcaption({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<figcaption id=\"b\" class=\"c d active\" title=\"x\" href=\"/a\" yyy=\"y\" xxx=\"x\" data-name=\"Kurtis\" data-id=\"1\" aria-role=\"navigation\" style=\"border: 1px\">test</figcaption>"
  )
  end()
})

test("empty", ({same, end}) => {
  same(
    figure(),
    {
      children: undefined,
      data: {
        "attrs": {},
        "class": {},
        "hook": {},
        "on": {},
        "props": {},
        "style": {},
      },
      elm: undefined,
      key: undefined,
      sel: "figure",
      text: undefined,
    }
  )
  end()
})

test("selector", ({similar, end}) => {
  similar(figure({selector: ".value"}), {sel: "figure.value"})
  end()
})

test("children string", ({similar, end}) => {
  similar(figure({children: "test"}), {text: "test"})
  end()
})

test("children array string", ({similar, end}) => {
  similar(figure({children: ["test"]}), {children: [{text: "test"}]})
  end()
})

test("children function", ({similar, end}) => {
  similar(figure({children: Function}), {children: [Function]})
  end()
})

test("children array function", ({similar, end}) => {
  similar(figure({children: [Function]}), {children: [Function]})
  end()
})

test("aria", ({similar, end}) => {
  similar(figure({aria: {id: "1"}}), {data: {attrs: {"aria-id": "1"}}})
  end()
})

test("data", ({similar, end}) => {
  similar(
    figure({
      data: {
        id: "1",
        attributes: {NAME: "test"},
      },
    }),
    {
      data: {
        attrs: {
          "data-id": "1",
          "data-attributes-name": "test",
        },
      },
    }
  )
  end()
})

test("full without functions", ({same, end}) => {
  same(
    figure({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
    }),
    {
      sel: "figure#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {
          title: "x",
          href: "/a",
        },
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "hook": {},
        "on": {},
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("full", ({similar, end}) => {
  similar(
    figure({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
      "hook": {insert: () => null},
    }),
    {
      sel: "figure#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {title: "x"},
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("html", ({equal, end}) => {
  equal(
    toHTML(figure({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        attributes: {NAME: "Kurtis Rainbolt-Greene"},
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<figure id=\"b\" class=\"c d active\" yyy=\"y\" xxx=\"x\" data-id=\"1\" data-attributes-name=\"Kurtis Rainbolt-Greene\" aria-role=\"navigation\" title=\"x\" href=\"/a\" style=\"border: 1px\">test</figure>"
  )
  end()
})

test("html with plugins", ({equal, end}) => {
  equal(
    toHTMLWithPlugins(figure({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<figure id=\"b\" class=\"c d active\" title=\"x\" href=\"/a\" yyy=\"y\" xxx=\"x\" data-name=\"Kurtis\" data-id=\"1\" aria-role=\"navigation\" style=\"border: 1px\">test</figure>"
  )
  end()
})

test("empty", ({same, end}) => {
  same(
    footer(),
    {
      children: undefined,
      data: {
        "attrs": {},
        "class": {},
        "hook": {},
        "on": {},
        "props": {},
        "style": {},
      },
      elm: undefined,
      key: undefined,
      sel: "footer",
      text: undefined,
    }
  )
  end()
})

test("selector", ({similar, end}) => {
  similar(footer({selector: ".value"}), {sel: "footer.value"})
  end()
})

test("children string", ({similar, end}) => {
  similar(footer({children: "test"}), {text: "test"})
  end()
})

test("children array string", ({similar, end}) => {
  similar(footer({children: ["test"]}), {children: [{text: "test"}]})
  end()
})

test("children function", ({similar, end}) => {
  similar(footer({children: Function}), {children: [Function]})
  end()
})

test("children array function", ({similar, end}) => {
  similar(footer({children: [Function]}), {children: [Function]})
  end()
})

test("aria", ({similar, end}) => {
  similar(footer({aria: {id: "1"}}), {data: {attrs: {"aria-id": "1"}}})
  end()
})

test("data", ({similar, end}) => {
  similar(
    footer({
      data: {
        id: "1",
        attributes: {NAME: "test"},
      },
    }),
    {
      data: {
        attrs: {
          "data-id": "1",
          "data-attributes-name": "test",
        },
      },
    }
  )
  end()
})

test("full without functions", ({same, end}) => {
  same(
    footer({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
    }),
    {
      sel: "footer#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {
          title: "x",
          href: "/a",
        },
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "hook": {},
        "on": {},
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("full", ({similar, end}) => {
  similar(
    footer({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
      "hook": {insert: () => null},
    }),
    {
      sel: "footer#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {title: "x"},
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("html", ({equal, end}) => {
  equal(
    toHTML(footer({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        attributes: {NAME: "Kurtis Rainbolt-Greene"},
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<footer id=\"b\" class=\"c d active\" yyy=\"y\" xxx=\"x\" data-id=\"1\" data-attributes-name=\"Kurtis Rainbolt-Greene\" aria-role=\"navigation\" title=\"x\" href=\"/a\" style=\"border: 1px\">test</footer>"
  )
  end()
})

test("html with plugins", ({equal, end}) => {
  equal(
    toHTMLWithPlugins(footer({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<footer id=\"b\" class=\"c d active\" title=\"x\" href=\"/a\" yyy=\"y\" xxx=\"x\" data-name=\"Kurtis\" data-id=\"1\" aria-role=\"navigation\" style=\"border: 1px\">test</footer>"
  )
  end()
})

test("empty", ({same, end}) => {
  same(
    form(),
    {
      children: undefined,
      data: {
        "attrs": {},
        "class": {},
        "hook": {},
        "on": {},
        "props": {},
        "style": {},
      },
      elm: undefined,
      key: undefined,
      sel: "form",
      text: undefined,
    }
  )
  end()
})

test("selector", ({similar, end}) => {
  similar(form({selector: ".value"}), {sel: "form.value"})
  end()
})

test("children string", ({similar, end}) => {
  similar(form({children: "test"}), {text: "test"})
  end()
})

test("children array string", ({similar, end}) => {
  similar(form({children: ["test"]}), {children: [{text: "test"}]})
  end()
})

test("children function", ({similar, end}) => {
  similar(form({children: Function}), {children: [Function]})
  end()
})

test("children array function", ({similar, end}) => {
  similar(form({children: [Function]}), {children: [Function]})
  end()
})

test("aria", ({similar, end}) => {
  similar(form({aria: {id: "1"}}), {data: {attrs: {"aria-id": "1"}}})
  end()
})

test("data", ({similar, end}) => {
  similar(
    form({
      data: {
        id: "1",
        attributes: {NAME: "test"},
      },
    }),
    {
      data: {
        attrs: {
          "data-id": "1",
          "data-attributes-name": "test",
        },
      },
    }
  )
  end()
})

test("full without functions", ({same, end}) => {
  same(
    form({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
    }),
    {
      sel: "form#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {
          title: "x",
          href: "/a",
        },
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "hook": {},
        "on": {},
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("full", ({similar, end}) => {
  similar(
    form({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
      "hook": {insert: () => null},
    }),
    {
      sel: "form#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {title: "x"},
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("html", ({equal, end}) => {
  equal(
    toHTML(form({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        attributes: {NAME: "Kurtis Rainbolt-Greene"},
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<form id=\"b\" class=\"c d active\" yyy=\"y\" xxx=\"x\" data-id=\"1\" data-attributes-name=\"Kurtis Rainbolt-Greene\" aria-role=\"navigation\" title=\"x\" href=\"/a\" style=\"border: 1px\">test</form>"
  )
  end()
})

test("html with plugins", ({equal, end}) => {
  equal(
    toHTMLWithPlugins(form({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<form id=\"b\" class=\"c d active\" title=\"x\" href=\"/a\" yyy=\"y\" xxx=\"x\" data-name=\"Kurtis\" data-id=\"1\" aria-role=\"navigation\" style=\"border: 1px\">test</form>"
  )
  end()
})

test("empty", ({same, end}) => {
  same(
    h1(),
    {
      children: undefined,
      data: {
        "attrs": {},
        "class": {},
        "hook": {},
        "on": {},
        "props": {},
        "style": {},
      },
      elm: undefined,
      key: undefined,
      sel: "h1",
      text: undefined,
    }
  )
  end()
})

test("selector", ({similar, end}) => {
  similar(h1({selector: ".value"}), {sel: "h1.value"})
  end()
})

test("children string", ({similar, end}) => {
  similar(h1({children: "test"}), {text: "test"})
  end()
})

test("children array string", ({similar, end}) => {
  similar(h1({children: ["test"]}), {children: [{text: "test"}]})
  end()
})

test("children function", ({similar, end}) => {
  similar(h1({children: Function}), {children: [Function]})
  end()
})

test("children array function", ({similar, end}) => {
  similar(h1({children: [Function]}), {children: [Function]})
  end()
})

test("aria", ({similar, end}) => {
  similar(h1({aria: {id: "1"}}), {data: {attrs: {"aria-id": "1"}}})
  end()
})

test("data", ({similar, end}) => {
  similar(
    h1({
      data: {
        id: "1",
        attributes: {NAME: "test"},
      },
    }),
    {
      data: {
        attrs: {
          "data-id": "1",
          "data-attributes-name": "test",
        },
      },
    }
  )
  end()
})

test("full without functions", ({same, end}) => {
  same(
    h1({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
    }),
    {
      sel: "h1#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {
          title: "x",
          href: "/a",
        },
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "hook": {},
        "on": {},
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("full", ({similar, end}) => {
  similar(
    h1({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
      "hook": {insert: () => null},
    }),
    {
      sel: "h1#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {title: "x"},
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("html", ({equal, end}) => {
  equal(
    toHTML(h1({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        attributes: {NAME: "Kurtis Rainbolt-Greene"},
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<h1 id=\"b\" class=\"c d active\" yyy=\"y\" xxx=\"x\" data-id=\"1\" data-attributes-name=\"Kurtis Rainbolt-Greene\" aria-role=\"navigation\" title=\"x\" href=\"/a\" style=\"border: 1px\">test</h1>"
  )
  end()
})

test("html with plugins", ({equal, end}) => {
  equal(
    toHTMLWithPlugins(h1({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<h1 id=\"b\" class=\"c d active\" title=\"x\" href=\"/a\" yyy=\"y\" xxx=\"x\" data-name=\"Kurtis\" data-id=\"1\" aria-role=\"navigation\" style=\"border: 1px\">test</h1>"
  )
  end()
})

test("empty", ({same, end}) => {
  same(
    h2(),
    {
      children: undefined,
      data: {
        "attrs": {},
        "class": {},
        "hook": {},
        "on": {},
        "props": {},
        "style": {},
      },
      elm: undefined,
      key: undefined,
      sel: "h2",
      text: undefined,
    }
  )
  end()
})

test("selector", ({similar, end}) => {
  similar(h2({selector: ".value"}), {sel: "h2.value"})
  end()
})

test("children string", ({similar, end}) => {
  similar(h2({children: "test"}), {text: "test"})
  end()
})

test("children array string", ({similar, end}) => {
  similar(h2({children: ["test"]}), {children: [{text: "test"}]})
  end()
})

test("children function", ({similar, end}) => {
  similar(h2({children: Function}), {children: [Function]})
  end()
})

test("children array function", ({similar, end}) => {
  similar(h2({children: [Function]}), {children: [Function]})
  end()
})

test("aria", ({similar, end}) => {
  similar(h2({aria: {id: "1"}}), {data: {attrs: {"aria-id": "1"}}})
  end()
})

test("data", ({similar, end}) => {
  similar(
    h2({
      data: {
        id: "1",
        attributes: {NAME: "test"},
      },
    }),
    {
      data: {
        attrs: {
          "data-id": "1",
          "data-attributes-name": "test",
        },
      },
    }
  )
  end()
})

test("full without functions", ({same, end}) => {
  same(
    h2({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
    }),
    {
      sel: "h2#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {
          title: "x",
          href: "/a",
        },
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "hook": {},
        "on": {},
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("full", ({similar, end}) => {
  similar(
    h2({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
      "hook": {insert: () => null},
    }),
    {
      sel: "h2#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {title: "x"},
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("html", ({equal, end}) => {
  equal(
    toHTML(h2({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        attributes: {NAME: "Kurtis Rainbolt-Greene"},
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<h2 id=\"b\" class=\"c d active\" yyy=\"y\" xxx=\"x\" data-id=\"1\" data-attributes-name=\"Kurtis Rainbolt-Greene\" aria-role=\"navigation\" title=\"x\" href=\"/a\" style=\"border: 1px\">test</h2>"
  )
  end()
})

test("html with plugins", ({equal, end}) => {
  equal(
    toHTMLWithPlugins(h2({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<h2 id=\"b\" class=\"c d active\" title=\"x\" href=\"/a\" yyy=\"y\" xxx=\"x\" data-name=\"Kurtis\" data-id=\"1\" aria-role=\"navigation\" style=\"border: 1px\">test</h2>"
  )
  end()
})

test("empty", ({same, end}) => {
  same(
    h3(),
    {
      children: undefined,
      data: {
        "attrs": {},
        "class": {},
        "hook": {},
        "on": {},
        "props": {},
        "style": {},
      },
      elm: undefined,
      key: undefined,
      sel: "h3",
      text: undefined,
    }
  )
  end()
})

test("selector", ({similar, end}) => {
  similar(h3({selector: ".value"}), {sel: "h3.value"})
  end()
})

test("children string", ({similar, end}) => {
  similar(h3({children: "test"}), {text: "test"})
  end()
})

test("children array string", ({similar, end}) => {
  similar(h3({children: ["test"]}), {children: [{text: "test"}]})
  end()
})

test("children function", ({similar, end}) => {
  similar(h3({children: Function}), {children: [Function]})
  end()
})

test("children array function", ({similar, end}) => {
  similar(h3({children: [Function]}), {children: [Function]})
  end()
})

test("aria", ({similar, end}) => {
  similar(h3({aria: {id: "1"}}), {data: {attrs: {"aria-id": "1"}}})
  end()
})

test("data", ({similar, end}) => {
  similar(
    h3({
      data: {
        id: "1",
        attributes: {NAME: "test"},
      },
    }),
    {
      data: {
        attrs: {
          "data-id": "1",
          "data-attributes-name": "test",
        },
      },
    }
  )
  end()
})

test("full without functions", ({same, end}) => {
  same(
    h3({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
    }),
    {
      sel: "h3#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {
          title: "x",
          href: "/a",
        },
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "hook": {},
        "on": {},
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("full", ({similar, end}) => {
  similar(
    h3({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
      "hook": {insert: () => null},
    }),
    {
      sel: "h3#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {title: "x"},
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("html", ({equal, end}) => {
  equal(
    toHTML(h3({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        attributes: {NAME: "Kurtis Rainbolt-Greene"},
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<h3 id=\"b\" class=\"c d active\" yyy=\"y\" xxx=\"x\" data-id=\"1\" data-attributes-name=\"Kurtis Rainbolt-Greene\" aria-role=\"navigation\" title=\"x\" href=\"/a\" style=\"border: 1px\">test</h3>"
  )
  end()
})

test("html with plugins", ({equal, end}) => {
  equal(
    toHTMLWithPlugins(h3({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<h3 id=\"b\" class=\"c d active\" title=\"x\" href=\"/a\" yyy=\"y\" xxx=\"x\" data-name=\"Kurtis\" data-id=\"1\" aria-role=\"navigation\" style=\"border: 1px\">test</h3>"
  )
  end()
})

test("empty", ({same, end}) => {
  same(
    h4(),
    {
      children: undefined,
      data: {
        "attrs": {},
        "class": {},
        "hook": {},
        "on": {},
        "props": {},
        "style": {},
      },
      elm: undefined,
      key: undefined,
      sel: "h4",
      text: undefined,
    }
  )
  end()
})

test("selector", ({similar, end}) => {
  similar(h4({selector: ".value"}), {sel: "h4.value"})
  end()
})

test("children string", ({similar, end}) => {
  similar(h4({children: "test"}), {text: "test"})
  end()
})

test("children array string", ({similar, end}) => {
  similar(h4({children: ["test"]}), {children: [{text: "test"}]})
  end()
})

test("children function", ({similar, end}) => {
  similar(h4({children: Function}), {children: [Function]})
  end()
})

test("children array function", ({similar, end}) => {
  similar(h4({children: [Function]}), {children: [Function]})
  end()
})

test("aria", ({similar, end}) => {
  similar(h4({aria: {id: "1"}}), {data: {attrs: {"aria-id": "1"}}})
  end()
})

test("data", ({similar, end}) => {
  similar(
    h4({
      data: {
        id: "1",
        attributes: {NAME: "test"},
      },
    }),
    {
      data: {
        attrs: {
          "data-id": "1",
          "data-attributes-name": "test",
        },
      },
    }
  )
  end()
})

test("full without functions", ({same, end}) => {
  same(
    h4({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
    }),
    {
      sel: "h4#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {
          title: "x",
          href: "/a",
        },
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "hook": {},
        "on": {},
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("full", ({similar, end}) => {
  similar(
    h4({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
      "hook": {insert: () => null},
    }),
    {
      sel: "h4#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {title: "x"},
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("html", ({equal, end}) => {
  equal(
    toHTML(h4({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        attributes: {NAME: "Kurtis Rainbolt-Greene"},
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<h4 id=\"b\" class=\"c d active\" yyy=\"y\" xxx=\"x\" data-id=\"1\" data-attributes-name=\"Kurtis Rainbolt-Greene\" aria-role=\"navigation\" title=\"x\" href=\"/a\" style=\"border: 1px\">test</h4>"
  )
  end()
})

test("html with plugins", ({equal, end}) => {
  equal(
    toHTMLWithPlugins(h4({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<h4 id=\"b\" class=\"c d active\" title=\"x\" href=\"/a\" yyy=\"y\" xxx=\"x\" data-name=\"Kurtis\" data-id=\"1\" aria-role=\"navigation\" style=\"border: 1px\">test</h4>"
  )
  end()
})

test("empty", ({same, end}) => {
  same(
    h5(),
    {
      children: undefined,
      data: {
        "attrs": {},
        "class": {},
        "hook": {},
        "on": {},
        "props": {},
        "style": {},
      },
      elm: undefined,
      key: undefined,
      sel: "h5",
      text: undefined,
    }
  )
  end()
})

test("selector", ({similar, end}) => {
  similar(h5({selector: ".value"}), {sel: "h5.value"})
  end()
})

test("children string", ({similar, end}) => {
  similar(h5({children: "test"}), {text: "test"})
  end()
})

test("children array string", ({similar, end}) => {
  similar(h5({children: ["test"]}), {children: [{text: "test"}]})
  end()
})

test("children function", ({similar, end}) => {
  similar(h5({children: Function}), {children: [Function]})
  end()
})

test("children array function", ({similar, end}) => {
  similar(h5({children: [Function]}), {children: [Function]})
  end()
})

test("aria", ({similar, end}) => {
  similar(h5({aria: {id: "1"}}), {data: {attrs: {"aria-id": "1"}}})
  end()
})

test("data", ({similar, end}) => {
  similar(
    h5({
      data: {
        id: "1",
        attributes: {NAME: "test"},
      },
    }),
    {
      data: {
        attrs: {
          "data-id": "1",
          "data-attributes-name": "test",
        },
      },
    }
  )
  end()
})

test("full without functions", ({same, end}) => {
  same(
    h5({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
    }),
    {
      sel: "h5#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {
          title: "x",
          href: "/a",
        },
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "hook": {},
        "on": {},
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("full", ({similar, end}) => {
  similar(
    h5({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
      "hook": {insert: () => null},
    }),
    {
      sel: "h5#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {title: "x"},
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("html", ({equal, end}) => {
  equal(
    toHTML(h5({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        attributes: {NAME: "Kurtis Rainbolt-Greene"},
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<h5 id=\"b\" class=\"c d active\" yyy=\"y\" xxx=\"x\" data-id=\"1\" data-attributes-name=\"Kurtis Rainbolt-Greene\" aria-role=\"navigation\" title=\"x\" href=\"/a\" style=\"border: 1px\">test</h5>"
  )
  end()
})

test("html with plugins", ({equal, end}) => {
  equal(
    toHTMLWithPlugins(h5({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<h5 id=\"b\" class=\"c d active\" title=\"x\" href=\"/a\" yyy=\"y\" xxx=\"x\" data-name=\"Kurtis\" data-id=\"1\" aria-role=\"navigation\" style=\"border: 1px\">test</h5>"
  )
  end()
})

test("empty", ({same, end}) => {
  same(
    h6(),
    {
      children: undefined,
      data: {
        "attrs": {},
        "class": {},
        "hook": {},
        "on": {},
        "props": {},
        "style": {},
      },
      elm: undefined,
      key: undefined,
      sel: "h6",
      text: undefined,
    }
  )
  end()
})

test("selector", ({similar, end}) => {
  similar(h6({selector: ".value"}), {sel: "h6.value"})
  end()
})

test("children string", ({similar, end}) => {
  similar(h6({children: "test"}), {text: "test"})
  end()
})

test("children array string", ({similar, end}) => {
  similar(h6({children: ["test"]}), {children: [{text: "test"}]})
  end()
})

test("children function", ({similar, end}) => {
  similar(h6({children: Function}), {children: [Function]})
  end()
})

test("children array function", ({similar, end}) => {
  similar(h6({children: [Function]}), {children: [Function]})
  end()
})

test("aria", ({similar, end}) => {
  similar(h6({aria: {id: "1"}}), {data: {attrs: {"aria-id": "1"}}})
  end()
})

test("data", ({similar, end}) => {
  similar(
    h6({
      data: {
        id: "1",
        attributes: {NAME: "test"},
      },
    }),
    {
      data: {
        attrs: {
          "data-id": "1",
          "data-attributes-name": "test",
        },
      },
    }
  )
  end()
})

test("full without functions", ({same, end}) => {
  same(
    h6({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
    }),
    {
      sel: "h6#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {
          title: "x",
          href: "/a",
        },
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "hook": {},
        "on": {},
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("full", ({similar, end}) => {
  similar(
    h6({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
      "hook": {insert: () => null},
    }),
    {
      sel: "h6#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {title: "x"},
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("html", ({equal, end}) => {
  equal(
    toHTML(h6({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        attributes: {NAME: "Kurtis Rainbolt-Greene"},
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<h6 id=\"b\" class=\"c d active\" yyy=\"y\" xxx=\"x\" data-id=\"1\" data-attributes-name=\"Kurtis Rainbolt-Greene\" aria-role=\"navigation\" title=\"x\" href=\"/a\" style=\"border: 1px\">test</h6>"
  )
  end()
})

test("html with plugins", ({equal, end}) => {
  equal(
    toHTMLWithPlugins(h6({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<h6 id=\"b\" class=\"c d active\" title=\"x\" href=\"/a\" yyy=\"y\" xxx=\"x\" data-name=\"Kurtis\" data-id=\"1\" aria-role=\"navigation\" style=\"border: 1px\">test</h6>"
  )
  end()
})

test("empty", ({same, end}) => {
  same(
    head(),
    {
      children: undefined,
      data: {
        "attrs": {},
        "class": {},
        "hook": {},
        "on": {},
        "props": {},
        "style": {},
      },
      elm: undefined,
      key: undefined,
      sel: "head",
      text: undefined,
    }
  )
  end()
})

test("selector", ({similar, end}) => {
  similar(head({selector: ".value"}), {sel: "head.value"})
  end()
})

test("children string", ({similar, end}) => {
  similar(head({children: "test"}), {text: "test"})
  end()
})

test("children array string", ({similar, end}) => {
  similar(head({children: ["test"]}), {children: [{text: "test"}]})
  end()
})

test("children function", ({similar, end}) => {
  similar(head({children: Function}), {children: [Function]})
  end()
})

test("children array function", ({similar, end}) => {
  similar(head({children: [Function]}), {children: [Function]})
  end()
})

test("aria", ({similar, end}) => {
  similar(head({aria: {id: "1"}}), {data: {attrs: {"aria-id": "1"}}})
  end()
})

test("data", ({similar, end}) => {
  similar(
    head({
      data: {
        id: "1",
        attributes: {NAME: "test"},
      },
    }),
    {
      data: {
        attrs: {
          "data-id": "1",
          "data-attributes-name": "test",
        },
      },
    }
  )
  end()
})

test("full without functions", ({same, end}) => {
  same(
    head({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
    }),
    {
      sel: "head#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {
          title: "x",
          href: "/a",
        },
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "hook": {},
        "on": {},
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("full", ({similar, end}) => {
  similar(
    head({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
      "hook": {insert: () => null},
    }),
    {
      sel: "head#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {title: "x"},
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("html", ({equal, end}) => {
  equal(
    toHTML(head({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        attributes: {NAME: "Kurtis Rainbolt-Greene"},
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<head id=\"b\" class=\"c d active\" yyy=\"y\" xxx=\"x\" data-id=\"1\" data-attributes-name=\"Kurtis Rainbolt-Greene\" aria-role=\"navigation\" title=\"x\" href=\"/a\" style=\"border: 1px\">test</head>"
  )
  end()
})

test("html with plugins", ({equal, end}) => {
  equal(
    toHTMLWithPlugins(head({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<head id=\"b\" class=\"c d active\" title=\"x\" href=\"/a\" yyy=\"y\" xxx=\"x\" data-name=\"Kurtis\" data-id=\"1\" aria-role=\"navigation\" style=\"border: 1px\">test</head>"
  )
  end()
})

test("empty", ({same, end}) => {
  same(
    header(),
    {
      children: undefined,
      data: {
        "attrs": {},
        "class": {},
        "hook": {},
        "on": {},
        "props": {},
        "style": {},
      },
      elm: undefined,
      key: undefined,
      sel: "header",
      text: undefined,
    }
  )
  end()
})

test("selector", ({similar, end}) => {
  similar(header({selector: ".value"}), {sel: "header.value"})
  end()
})

test("children string", ({similar, end}) => {
  similar(header({children: "test"}), {text: "test"})
  end()
})

test("children array string", ({similar, end}) => {
  similar(header({children: ["test"]}), {children: [{text: "test"}]})
  end()
})

test("children function", ({similar, end}) => {
  similar(header({children: Function}), {children: [Function]})
  end()
})

test("children array function", ({similar, end}) => {
  similar(header({children: [Function]}), {children: [Function]})
  end()
})

test("aria", ({similar, end}) => {
  similar(header({aria: {id: "1"}}), {data: {attrs: {"aria-id": "1"}}})
  end()
})

test("data", ({similar, end}) => {
  similar(
    header({
      data: {
        id: "1",
        attributes: {NAME: "test"},
      },
    }),
    {
      data: {
        attrs: {
          "data-id": "1",
          "data-attributes-name": "test",
        },
      },
    }
  )
  end()
})

test("full without functions", ({same, end}) => {
  same(
    header({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
    }),
    {
      sel: "header#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {
          title: "x",
          href: "/a",
        },
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "hook": {},
        "on": {},
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("full", ({similar, end}) => {
  similar(
    header({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
      "hook": {insert: () => null},
    }),
    {
      sel: "header#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {title: "x"},
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("html", ({equal, end}) => {
  equal(
    toHTML(header({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        attributes: {NAME: "Kurtis Rainbolt-Greene"},
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<header id=\"b\" class=\"c d active\" yyy=\"y\" xxx=\"x\" data-id=\"1\" data-attributes-name=\"Kurtis Rainbolt-Greene\" aria-role=\"navigation\" title=\"x\" href=\"/a\" style=\"border: 1px\">test</header>"
  )
  end()
})

test("html with plugins", ({equal, end}) => {
  equal(
    toHTMLWithPlugins(header({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<header id=\"b\" class=\"c d active\" title=\"x\" href=\"/a\" yyy=\"y\" xxx=\"x\" data-name=\"Kurtis\" data-id=\"1\" aria-role=\"navigation\" style=\"border: 1px\">test</header>"
  )
  end()
})

test("empty", ({same, end}) => {
  same(
    hgroup(),
    {
      children: undefined,
      data: {
        "attrs": {},
        "class": {},
        "hook": {},
        "on": {},
        "props": {},
        "style": {},
      },
      elm: undefined,
      key: undefined,
      sel: "hgroup",
      text: undefined,
    }
  )
  end()
})

test("selector", ({similar, end}) => {
  similar(hgroup({selector: ".value"}), {sel: "hgroup.value"})
  end()
})

test("children string", ({similar, end}) => {
  similar(hgroup({children: "test"}), {text: "test"})
  end()
})

test("children array string", ({similar, end}) => {
  similar(hgroup({children: ["test"]}), {children: [{text: "test"}]})
  end()
})

test("children function", ({similar, end}) => {
  similar(hgroup({children: Function}), {children: [Function]})
  end()
})

test("children array function", ({similar, end}) => {
  similar(hgroup({children: [Function]}), {children: [Function]})
  end()
})

test("aria", ({similar, end}) => {
  similar(hgroup({aria: {id: "1"}}), {data: {attrs: {"aria-id": "1"}}})
  end()
})

test("data", ({similar, end}) => {
  similar(
    hgroup({
      data: {
        id: "1",
        attributes: {NAME: "test"},
      },
    }),
    {
      data: {
        attrs: {
          "data-id": "1",
          "data-attributes-name": "test",
        },
      },
    }
  )
  end()
})

test("full without functions", ({same, end}) => {
  same(
    hgroup({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
    }),
    {
      sel: "hgroup#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {
          title: "x",
          href: "/a",
        },
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "hook": {},
        "on": {},
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("full", ({similar, end}) => {
  similar(
    hgroup({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
      "hook": {insert: () => null},
    }),
    {
      sel: "hgroup#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {title: "x"},
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("html", ({equal, end}) => {
  equal(
    toHTML(hgroup({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        attributes: {NAME: "Kurtis Rainbolt-Greene"},
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<hgroup id=\"b\" class=\"c d active\" yyy=\"y\" xxx=\"x\" data-id=\"1\" data-attributes-name=\"Kurtis Rainbolt-Greene\" aria-role=\"navigation\" title=\"x\" href=\"/a\" style=\"border: 1px\">test</hgroup>"
  )
  end()
})

test("html with plugins", ({equal, end}) => {
  equal(
    toHTMLWithPlugins(hgroup({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<hgroup id=\"b\" class=\"c d active\" title=\"x\" href=\"/a\" yyy=\"y\" xxx=\"x\" data-name=\"Kurtis\" data-id=\"1\" aria-role=\"navigation\" style=\"border: 1px\">test</hgroup>"
  )
  end()
})

test("empty", ({same, end}) => {
  same(
    html(),
    {
      children: undefined,
      data: {
        "attrs": {},
        "class": {},
        "hook": {},
        "on": {},
        "props": {},
        "style": {},
      },
      elm: undefined,
      key: undefined,
      sel: "html",
      text: undefined,
    }
  )
  end()
})

test("selector", ({similar, end}) => {
  similar(html({selector: ".value"}), {sel: "html.value"})
  end()
})

test("children string", ({similar, end}) => {
  similar(html({children: "test"}), {text: "test"})
  end()
})

test("children array string", ({similar, end}) => {
  similar(html({children: ["test"]}), {children: [{text: "test"}]})
  end()
})

test("children function", ({similar, end}) => {
  similar(html({children: Function}), {children: [Function]})
  end()
})

test("children array function", ({similar, end}) => {
  similar(html({children: [Function]}), {children: [Function]})
  end()
})

test("aria", ({similar, end}) => {
  similar(html({aria: {id: "1"}}), {data: {attrs: {"aria-id": "1"}}})
  end()
})

test("data", ({similar, end}) => {
  similar(
    html({
      data: {
        id: "1",
        attributes: {NAME: "test"},
      },
    }),
    {
      data: {
        attrs: {
          "data-id": "1",
          "data-attributes-name": "test",
        },
      },
    }
  )
  end()
})

test("full without functions", ({same, end}) => {
  same(
    html({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
    }),
    {
      sel: "html#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {
          title: "x",
          href: "/a",
        },
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "hook": {},
        "on": {},
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("full", ({similar, end}) => {
  similar(
    html({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
      "hook": {insert: () => null},
    }),
    {
      sel: "html#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {title: "x"},
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("html", ({equal, end}) => {
  equal(
    toHTML(html({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        attributes: {NAME: "Kurtis Rainbolt-Greene"},
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<html id=\"b\" class=\"c d active\" yyy=\"y\" xxx=\"x\" data-id=\"1\" data-attributes-name=\"Kurtis Rainbolt-Greene\" aria-role=\"navigation\" title=\"x\" href=\"/a\" style=\"border: 1px\">test</html>"
  )
  end()
})

test("html with plugins", ({equal, end}) => {
  equal(
    toHTMLWithPlugins(html({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<html id=\"b\" class=\"c d active\" title=\"x\" href=\"/a\" yyy=\"y\" xxx=\"x\" data-name=\"Kurtis\" data-id=\"1\" aria-role=\"navigation\" style=\"border: 1px\">test</html>"
  )
  end()
})

test("empty", ({same, end}) => {
  same(
    i(),
    {
      children: undefined,
      data: {
        "attrs": {},
        "class": {},
        "hook": {},
        "on": {},
        "props": {},
        "style": {},
      },
      elm: undefined,
      key: undefined,
      sel: "i",
      text: undefined,
    }
  )
  end()
})

test("selector", ({similar, end}) => {
  similar(i({selector: ".value"}), {sel: "i.value"})
  end()
})

test("children string", ({similar, end}) => {
  similar(i({children: "test"}), {text: "test"})
  end()
})

test("children array string", ({similar, end}) => {
  similar(i({children: ["test"]}), {children: [{text: "test"}]})
  end()
})

test("children function", ({similar, end}) => {
  similar(i({children: Function}), {children: [Function]})
  end()
})

test("children array function", ({similar, end}) => {
  similar(i({children: [Function]}), {children: [Function]})
  end()
})

test("aria", ({similar, end}) => {
  similar(i({aria: {id: "1"}}), {data: {attrs: {"aria-id": "1"}}})
  end()
})

test("data", ({similar, end}) => {
  similar(
    i({
      data: {
        id: "1",
        attributes: {NAME: "test"},
      },
    }),
    {
      data: {
        attrs: {
          "data-id": "1",
          "data-attributes-name": "test",
        },
      },
    }
  )
  end()
})

test("full without functions", ({same, end}) => {
  same(
    i({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
    }),
    {
      sel: "i#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {
          title: "x",
          href: "/a",
        },
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "hook": {},
        "on": {},
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("full", ({similar, end}) => {
  similar(
    i({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
      "hook": {insert: () => null},
    }),
    {
      sel: "i#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {title: "x"},
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("html", ({equal, end}) => {
  equal(
    toHTML(i({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        attributes: {NAME: "Kurtis Rainbolt-Greene"},
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<i id=\"b\" class=\"c d active\" yyy=\"y\" xxx=\"x\" data-id=\"1\" data-attributes-name=\"Kurtis Rainbolt-Greene\" aria-role=\"navigation\" title=\"x\" href=\"/a\" style=\"border: 1px\">test</i>"
  )
  end()
})

test("html with plugins", ({equal, end}) => {
  equal(
    toHTMLWithPlugins(i({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<i id=\"b\" class=\"c d active\" title=\"x\" href=\"/a\" yyy=\"y\" xxx=\"x\" data-name=\"Kurtis\" data-id=\"1\" aria-role=\"navigation\" style=\"border: 1px\">test</i>"
  )
  end()
})

test("empty", ({same, end}) => {
  same(
    iframe(),
    {
      children: undefined,
      data: {
        "attrs": {},
        "class": {},
        "hook": {},
        "on": {},
        "props": {},
        "style": {},
      },
      elm: undefined,
      key: undefined,
      sel: "iframe",
      text: undefined,
    }
  )
  end()
})

test("selector", ({similar, end}) => {
  similar(iframe({selector: ".value"}), {sel: "iframe.value"})
  end()
})

test("children string", ({similar, end}) => {
  similar(iframe({children: "test"}), {text: "test"})
  end()
})

test("children array string", ({similar, end}) => {
  similar(iframe({children: ["test"]}), {children: [{text: "test"}]})
  end()
})

test("children function", ({similar, end}) => {
  similar(iframe({children: Function}), {children: [Function]})
  end()
})

test("children array function", ({similar, end}) => {
  similar(iframe({children: [Function]}), {children: [Function]})
  end()
})

test("aria", ({similar, end}) => {
  similar(iframe({aria: {id: "1"}}), {data: {attrs: {"aria-id": "1"}}})
  end()
})

test("data", ({similar, end}) => {
  similar(
    iframe({
      data: {
        id: "1",
        attributes: {NAME: "test"},
      },
    }),
    {
      data: {
        attrs: {
          "data-id": "1",
          "data-attributes-name": "test",
        },
      },
    }
  )
  end()
})

test("full without functions", ({same, end}) => {
  same(
    iframe({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
    }),
    {
      sel: "iframe#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {
          title: "x",
          href: "/a",
        },
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "hook": {},
        "on": {},
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("full", ({similar, end}) => {
  similar(
    iframe({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
      "hook": {insert: () => null},
    }),
    {
      sel: "iframe#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {title: "x"},
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("html", ({equal, end}) => {
  equal(
    toHTML(iframe({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        attributes: {NAME: "Kurtis Rainbolt-Greene"},
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<iframe id=\"b\" class=\"c d active\" yyy=\"y\" xxx=\"x\" data-id=\"1\" data-attributes-name=\"Kurtis Rainbolt-Greene\" aria-role=\"navigation\" title=\"x\" href=\"/a\" style=\"border: 1px\">test</iframe>"
  )
  end()
})

test("html with plugins", ({equal, end}) => {
  equal(
    toHTMLWithPlugins(iframe({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<iframe id=\"b\" class=\"c d active\" title=\"x\" href=\"/a\" yyy=\"y\" xxx=\"x\" data-name=\"Kurtis\" data-id=\"1\" aria-role=\"navigation\" style=\"border: 1px\">test</iframe>"
  )
  end()
})

test("empty", ({same, end}) => {
  same(
    ins(),
    {
      children: undefined,
      data: {
        "attrs": {},
        "class": {},
        "hook": {},
        "on": {},
        "props": {},
        "style": {},
      },
      elm: undefined,
      key: undefined,
      sel: "ins",
      text: undefined,
    }
  )
  end()
})

test("selector", ({similar, end}) => {
  similar(ins({selector: ".value"}), {sel: "ins.value"})
  end()
})

test("children string", ({similar, end}) => {
  similar(ins({children: "test"}), {text: "test"})
  end()
})

test("children array string", ({similar, end}) => {
  similar(ins({children: ["test"]}), {children: [{text: "test"}]})
  end()
})

test("children function", ({similar, end}) => {
  similar(ins({children: Function}), {children: [Function]})
  end()
})

test("children array function", ({similar, end}) => {
  similar(ins({children: [Function]}), {children: [Function]})
  end()
})

test("aria", ({similar, end}) => {
  similar(ins({aria: {id: "1"}}), {data: {attrs: {"aria-id": "1"}}})
  end()
})

test("data", ({similar, end}) => {
  similar(
    ins({
      data: {
        id: "1",
        attributes: {NAME: "test"},
      },
    }),
    {
      data: {
        attrs: {
          "data-id": "1",
          "data-attributes-name": "test",
        },
      },
    }
  )
  end()
})

test("full without functions", ({same, end}) => {
  same(
    ins({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
    }),
    {
      sel: "ins#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {
          title: "x",
          href: "/a",
        },
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "hook": {},
        "on": {},
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("full", ({similar, end}) => {
  similar(
    ins({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
      "hook": {insert: () => null},
    }),
    {
      sel: "ins#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {title: "x"},
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("html", ({equal, end}) => {
  equal(
    toHTML(ins({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        attributes: {NAME: "Kurtis Rainbolt-Greene"},
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<ins id=\"b\" class=\"c d active\" yyy=\"y\" xxx=\"x\" data-id=\"1\" data-attributes-name=\"Kurtis Rainbolt-Greene\" aria-role=\"navigation\" title=\"x\" href=\"/a\" style=\"border: 1px\">test</ins>"
  )
  end()
})

test("html with plugins", ({equal, end}) => {
  equal(
    toHTMLWithPlugins(ins({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<ins id=\"b\" class=\"c d active\" title=\"x\" href=\"/a\" yyy=\"y\" xxx=\"x\" data-name=\"Kurtis\" data-id=\"1\" aria-role=\"navigation\" style=\"border: 1px\">test</ins>"
  )
  end()
})

test("empty", ({same, end}) => {
  same(
    kbd(),
    {
      children: undefined,
      data: {
        "attrs": {},
        "class": {},
        "hook": {},
        "on": {},
        "props": {},
        "style": {},
      },
      elm: undefined,
      key: undefined,
      sel: "kbd",
      text: undefined,
    }
  )
  end()
})

test("selector", ({similar, end}) => {
  similar(kbd({selector: ".value"}), {sel: "kbd.value"})
  end()
})

test("children string", ({similar, end}) => {
  similar(kbd({children: "test"}), {text: "test"})
  end()
})

test("children array string", ({similar, end}) => {
  similar(kbd({children: ["test"]}), {children: [{text: "test"}]})
  end()
})

test("children function", ({similar, end}) => {
  similar(kbd({children: Function}), {children: [Function]})
  end()
})

test("children array function", ({similar, end}) => {
  similar(kbd({children: [Function]}), {children: [Function]})
  end()
})

test("aria", ({similar, end}) => {
  similar(kbd({aria: {id: "1"}}), {data: {attrs: {"aria-id": "1"}}})
  end()
})

test("data", ({similar, end}) => {
  similar(
    kbd({
      data: {
        id: "1",
        attributes: {NAME: "test"},
      },
    }),
    {
      data: {
        attrs: {
          "data-id": "1",
          "data-attributes-name": "test",
        },
      },
    }
  )
  end()
})

test("full without functions", ({same, end}) => {
  same(
    kbd({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
    }),
    {
      sel: "kbd#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {
          title: "x",
          href: "/a",
        },
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "hook": {},
        "on": {},
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("full", ({similar, end}) => {
  similar(
    kbd({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
      "hook": {insert: () => null},
    }),
    {
      sel: "kbd#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {title: "x"},
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("html", ({equal, end}) => {
  equal(
    toHTML(kbd({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        attributes: {NAME: "Kurtis Rainbolt-Greene"},
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<kbd id=\"b\" class=\"c d active\" yyy=\"y\" xxx=\"x\" data-id=\"1\" data-attributes-name=\"Kurtis Rainbolt-Greene\" aria-role=\"navigation\" title=\"x\" href=\"/a\" style=\"border: 1px\">test</kbd>"
  )
  end()
})

test("html with plugins", ({equal, end}) => {
  equal(
    toHTMLWithPlugins(kbd({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<kbd id=\"b\" class=\"c d active\" title=\"x\" href=\"/a\" yyy=\"y\" xxx=\"x\" data-name=\"Kurtis\" data-id=\"1\" aria-role=\"navigation\" style=\"border: 1px\">test</kbd>"
  )
  end()
})

test("empty", ({same, end}) => {
  same(
    label(),
    {
      children: undefined,
      data: {
        "attrs": {},
        "class": {},
        "hook": {},
        "on": {},
        "props": {},
        "style": {},
      },
      elm: undefined,
      key: undefined,
      sel: "label",
      text: undefined,
    }
  )
  end()
})

test("selector", ({similar, end}) => {
  similar(label({selector: ".value"}), {sel: "label.value"})
  end()
})

test("children string", ({similar, end}) => {
  similar(label({children: "test"}), {text: "test"})
  end()
})

test("children array string", ({similar, end}) => {
  similar(label({children: ["test"]}), {children: [{text: "test"}]})
  end()
})

test("children function", ({similar, end}) => {
  similar(label({children: Function}), {children: [Function]})
  end()
})

test("children array function", ({similar, end}) => {
  similar(label({children: [Function]}), {children: [Function]})
  end()
})

test("aria", ({similar, end}) => {
  similar(label({aria: {id: "1"}}), {data: {attrs: {"aria-id": "1"}}})
  end()
})

test("data", ({similar, end}) => {
  similar(
    label({
      data: {
        id: "1",
        attributes: {NAME: "test"},
      },
    }),
    {
      data: {
        attrs: {
          "data-id": "1",
          "data-attributes-name": "test",
        },
      },
    }
  )
  end()
})

test("full without functions", ({same, end}) => {
  same(
    label({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
    }),
    {
      sel: "label#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {
          title: "x",
          href: "/a",
        },
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "hook": {},
        "on": {},
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("full", ({similar, end}) => {
  similar(
    label({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
      "hook": {insert: () => null},
    }),
    {
      sel: "label#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {title: "x"},
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("html", ({equal, end}) => {
  equal(
    toHTML(label({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        attributes: {NAME: "Kurtis Rainbolt-Greene"},
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<label id=\"b\" class=\"c d active\" yyy=\"y\" xxx=\"x\" data-id=\"1\" data-attributes-name=\"Kurtis Rainbolt-Greene\" aria-role=\"navigation\" title=\"x\" href=\"/a\" style=\"border: 1px\">test</label>"
  )
  end()
})

test("html with plugins", ({equal, end}) => {
  equal(
    toHTMLWithPlugins(label({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<label id=\"b\" class=\"c d active\" title=\"x\" href=\"/a\" yyy=\"y\" xxx=\"x\" data-name=\"Kurtis\" data-id=\"1\" aria-role=\"navigation\" style=\"border: 1px\">test</label>"
  )
  end()
})

test("empty", ({same, end}) => {
  same(
    legend(),
    {
      children: undefined,
      data: {
        "attrs": {},
        "class": {},
        "hook": {},
        "on": {},
        "props": {},
        "style": {},
      },
      elm: undefined,
      key: undefined,
      sel: "legend",
      text: undefined,
    }
  )
  end()
})

test("selector", ({similar, end}) => {
  similar(legend({selector: ".value"}), {sel: "legend.value"})
  end()
})

test("children string", ({similar, end}) => {
  similar(legend({children: "test"}), {text: "test"})
  end()
})

test("children array string", ({similar, end}) => {
  similar(legend({children: ["test"]}), {children: [{text: "test"}]})
  end()
})

test("children function", ({similar, end}) => {
  similar(legend({children: Function}), {children: [Function]})
  end()
})

test("children array function", ({similar, end}) => {
  similar(legend({children: [Function]}), {children: [Function]})
  end()
})

test("aria", ({similar, end}) => {
  similar(legend({aria: {id: "1"}}), {data: {attrs: {"aria-id": "1"}}})
  end()
})

test("data", ({similar, end}) => {
  similar(
    legend({
      data: {
        id: "1",
        attributes: {NAME: "test"},
      },
    }),
    {
      data: {
        attrs: {
          "data-id": "1",
          "data-attributes-name": "test",
        },
      },
    }
  )
  end()
})

test("full without functions", ({same, end}) => {
  same(
    legend({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
    }),
    {
      sel: "legend#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {
          title: "x",
          href: "/a",
        },
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "hook": {},
        "on": {},
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("full", ({similar, end}) => {
  similar(
    legend({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
      "hook": {insert: () => null},
    }),
    {
      sel: "legend#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {title: "x"},
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("html", ({equal, end}) => {
  equal(
    toHTML(legend({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        attributes: {NAME: "Kurtis Rainbolt-Greene"},
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<legend id=\"b\" class=\"c d active\" yyy=\"y\" xxx=\"x\" data-id=\"1\" data-attributes-name=\"Kurtis Rainbolt-Greene\" aria-role=\"navigation\" title=\"x\" href=\"/a\" style=\"border: 1px\">test</legend>"
  )
  end()
})

test("html with plugins", ({equal, end}) => {
  equal(
    toHTMLWithPlugins(legend({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<legend id=\"b\" class=\"c d active\" title=\"x\" href=\"/a\" yyy=\"y\" xxx=\"x\" data-name=\"Kurtis\" data-id=\"1\" aria-role=\"navigation\" style=\"border: 1px\">test</legend>"
  )
  end()
})

test("empty", ({same, end}) => {
  same(
    li(),
    {
      children: undefined,
      data: {
        "attrs": {},
        "class": {},
        "hook": {},
        "on": {},
        "props": {},
        "style": {},
      },
      elm: undefined,
      key: undefined,
      sel: "li",
      text: undefined,
    }
  )
  end()
})

test("selector", ({similar, end}) => {
  similar(li({selector: ".value"}), {sel: "li.value"})
  end()
})

test("children string", ({similar, end}) => {
  similar(li({children: "test"}), {text: "test"})
  end()
})

test("children array string", ({similar, end}) => {
  similar(li({children: ["test"]}), {children: [{text: "test"}]})
  end()
})

test("children function", ({similar, end}) => {
  similar(li({children: Function}), {children: [Function]})
  end()
})

test("children array function", ({similar, end}) => {
  similar(li({children: [Function]}), {children: [Function]})
  end()
})

test("aria", ({similar, end}) => {
  similar(li({aria: {id: "1"}}), {data: {attrs: {"aria-id": "1"}}})
  end()
})

test("data", ({similar, end}) => {
  similar(
    li({
      data: {
        id: "1",
        attributes: {NAME: "test"},
      },
    }),
    {
      data: {
        attrs: {
          "data-id": "1",
          "data-attributes-name": "test",
        },
      },
    }
  )
  end()
})

test("full without functions", ({same, end}) => {
  same(
    li({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
    }),
    {
      sel: "li#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {
          title: "x",
          href: "/a",
        },
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "hook": {},
        "on": {},
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("full", ({similar, end}) => {
  similar(
    li({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
      "hook": {insert: () => null},
    }),
    {
      sel: "li#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {title: "x"},
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("html", ({equal, end}) => {
  equal(
    toHTML(li({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        attributes: {NAME: "Kurtis Rainbolt-Greene"},
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<li id=\"b\" class=\"c d active\" yyy=\"y\" xxx=\"x\" data-id=\"1\" data-attributes-name=\"Kurtis Rainbolt-Greene\" aria-role=\"navigation\" title=\"x\" href=\"/a\" style=\"border: 1px\">test</li>"
  )
  end()
})

test("html with plugins", ({equal, end}) => {
  equal(
    toHTMLWithPlugins(li({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<li id=\"b\" class=\"c d active\" title=\"x\" href=\"/a\" yyy=\"y\" xxx=\"x\" data-name=\"Kurtis\" data-id=\"1\" aria-role=\"navigation\" style=\"border: 1px\">test</li>"
  )
  end()
})

test("empty", ({same, end}) => {
  same(
    main(),
    {
      children: undefined,
      data: {
        "attrs": {},
        "class": {},
        "hook": {},
        "on": {},
        "props": {},
        "style": {},
      },
      elm: undefined,
      key: undefined,
      sel: "main",
      text: undefined,
    }
  )
  end()
})

test("selector", ({similar, end}) => {
  similar(main({selector: ".value"}), {sel: "main.value"})
  end()
})

test("children string", ({similar, end}) => {
  similar(main({children: "test"}), {text: "test"})
  end()
})

test("children array string", ({similar, end}) => {
  similar(main({children: ["test"]}), {children: [{text: "test"}]})
  end()
})

test("children function", ({similar, end}) => {
  similar(main({children: Function}), {children: [Function]})
  end()
})

test("children array function", ({similar, end}) => {
  similar(main({children: [Function]}), {children: [Function]})
  end()
})

test("aria", ({similar, end}) => {
  similar(main({aria: {id: "1"}}), {data: {attrs: {"aria-id": "1"}}})
  end()
})

test("data", ({similar, end}) => {
  similar(
    main({
      data: {
        id: "1",
        attributes: {NAME: "test"},
      },
    }),
    {
      data: {
        attrs: {
          "data-id": "1",
          "data-attributes-name": "test",
        },
      },
    }
  )
  end()
})

test("full without functions", ({same, end}) => {
  same(
    main({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
    }),
    {
      sel: "main#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {
          title: "x",
          href: "/a",
        },
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "hook": {},
        "on": {},
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("full", ({similar, end}) => {
  similar(
    main({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
      "hook": {insert: () => null},
    }),
    {
      sel: "main#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {title: "x"},
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("html", ({equal, end}) => {
  equal(
    toHTML(main({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        attributes: {NAME: "Kurtis Rainbolt-Greene"},
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<main id=\"b\" class=\"c d active\" yyy=\"y\" xxx=\"x\" data-id=\"1\" data-attributes-name=\"Kurtis Rainbolt-Greene\" aria-role=\"navigation\" title=\"x\" href=\"/a\" style=\"border: 1px\">test</main>"
  )
  end()
})

test("html with plugins", ({equal, end}) => {
  equal(
    toHTMLWithPlugins(main({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<main id=\"b\" class=\"c d active\" title=\"x\" href=\"/a\" yyy=\"y\" xxx=\"x\" data-name=\"Kurtis\" data-id=\"1\" aria-role=\"navigation\" style=\"border: 1px\">test</main>"
  )
  end()
})

test("empty", ({same, end}) => {
  same(
    map(),
    {
      children: undefined,
      data: {
        "attrs": {},
        "class": {},
        "hook": {},
        "on": {},
        "props": {},
        "style": {},
      },
      elm: undefined,
      key: undefined,
      sel: "map",
      text: undefined,
    }
  )
  end()
})

test("selector", ({similar, end}) => {
  similar(map({selector: ".value"}), {sel: "map.value"})
  end()
})

test("children string", ({similar, end}) => {
  similar(map({children: "test"}), {text: "test"})
  end()
})

test("children array string", ({similar, end}) => {
  similar(map({children: ["test"]}), {children: [{text: "test"}]})
  end()
})

test("children function", ({similar, end}) => {
  similar(map({children: Function}), {children: [Function]})
  end()
})

test("children array function", ({similar, end}) => {
  similar(map({children: [Function]}), {children: [Function]})
  end()
})

test("aria", ({similar, end}) => {
  similar(map({aria: {id: "1"}}), {data: {attrs: {"aria-id": "1"}}})
  end()
})

test("data", ({similar, end}) => {
  similar(
    map({
      data: {
        id: "1",
        attributes: {NAME: "test"},
      },
    }),
    {
      data: {
        attrs: {
          "data-id": "1",
          "data-attributes-name": "test",
        },
      },
    }
  )
  end()
})

test("full without functions", ({same, end}) => {
  same(
    map({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
    }),
    {
      sel: "map#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {
          title: "x",
          href: "/a",
        },
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "hook": {},
        "on": {},
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("full", ({similar, end}) => {
  similar(
    map({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
      "hook": {insert: () => null},
    }),
    {
      sel: "map#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {title: "x"},
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("html", ({equal, end}) => {
  equal(
    toHTML(map({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        attributes: {NAME: "Kurtis Rainbolt-Greene"},
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<map id=\"b\" class=\"c d active\" yyy=\"y\" xxx=\"x\" data-id=\"1\" data-attributes-name=\"Kurtis Rainbolt-Greene\" aria-role=\"navigation\" title=\"x\" href=\"/a\" style=\"border: 1px\">test</map>"
  )
  end()
})

test("html with plugins", ({equal, end}) => {
  equal(
    toHTMLWithPlugins(map({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<map id=\"b\" class=\"c d active\" title=\"x\" href=\"/a\" yyy=\"y\" xxx=\"x\" data-name=\"Kurtis\" data-id=\"1\" aria-role=\"navigation\" style=\"border: 1px\">test</map>"
  )
  end()
})

test("empty", ({same, end}) => {
  same(
    mark(),
    {
      children: undefined,
      data: {
        "attrs": {},
        "class": {},
        "hook": {},
        "on": {},
        "props": {},
        "style": {},
      },
      elm: undefined,
      key: undefined,
      sel: "mark",
      text: undefined,
    }
  )
  end()
})

test("selector", ({similar, end}) => {
  similar(mark({selector: ".value"}), {sel: "mark.value"})
  end()
})

test("children string", ({similar, end}) => {
  similar(mark({children: "test"}), {text: "test"})
  end()
})

test("children array string", ({similar, end}) => {
  similar(mark({children: ["test"]}), {children: [{text: "test"}]})
  end()
})

test("children function", ({similar, end}) => {
  similar(mark({children: Function}), {children: [Function]})
  end()
})

test("children array function", ({similar, end}) => {
  similar(mark({children: [Function]}), {children: [Function]})
  end()
})

test("aria", ({similar, end}) => {
  similar(mark({aria: {id: "1"}}), {data: {attrs: {"aria-id": "1"}}})
  end()
})

test("data", ({similar, end}) => {
  similar(
    mark({
      data: {
        id: "1",
        attributes: {NAME: "test"},
      },
    }),
    {
      data: {
        attrs: {
          "data-id": "1",
          "data-attributes-name": "test",
        },
      },
    }
  )
  end()
})

test("full without functions", ({same, end}) => {
  same(
    mark({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
    }),
    {
      sel: "mark#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {
          title: "x",
          href: "/a",
        },
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "hook": {},
        "on": {},
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("full", ({similar, end}) => {
  similar(
    mark({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
      "hook": {insert: () => null},
    }),
    {
      sel: "mark#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {title: "x"},
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("html", ({equal, end}) => {
  equal(
    toHTML(mark({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        attributes: {NAME: "Kurtis Rainbolt-Greene"},
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<mark id=\"b\" class=\"c d active\" yyy=\"y\" xxx=\"x\" data-id=\"1\" data-attributes-name=\"Kurtis Rainbolt-Greene\" aria-role=\"navigation\" title=\"x\" href=\"/a\" style=\"border: 1px\">test</mark>"
  )
  end()
})

test("html with plugins", ({equal, end}) => {
  equal(
    toHTMLWithPlugins(mark({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<mark id=\"b\" class=\"c d active\" title=\"x\" href=\"/a\" yyy=\"y\" xxx=\"x\" data-name=\"Kurtis\" data-id=\"1\" aria-role=\"navigation\" style=\"border: 1px\">test</mark>"
  )
  end()
})

test("empty", ({same, end}) => {
  same(
    menu(),
    {
      children: undefined,
      data: {
        "attrs": {},
        "class": {},
        "hook": {},
        "on": {},
        "props": {},
        "style": {},
      },
      elm: undefined,
      key: undefined,
      sel: "menu",
      text: undefined,
    }
  )
  end()
})

test("selector", ({similar, end}) => {
  similar(menu({selector: ".value"}), {sel: "menu.value"})
  end()
})

test("children string", ({similar, end}) => {
  similar(menu({children: "test"}), {text: "test"})
  end()
})

test("children array string", ({similar, end}) => {
  similar(menu({children: ["test"]}), {children: [{text: "test"}]})
  end()
})

test("children function", ({similar, end}) => {
  similar(menu({children: Function}), {children: [Function]})
  end()
})

test("children array function", ({similar, end}) => {
  similar(menu({children: [Function]}), {children: [Function]})
  end()
})

test("aria", ({similar, end}) => {
  similar(menu({aria: {id: "1"}}), {data: {attrs: {"aria-id": "1"}}})
  end()
})

test("data", ({similar, end}) => {
  similar(
    menu({
      data: {
        id: "1",
        attributes: {NAME: "test"},
      },
    }),
    {
      data: {
        attrs: {
          "data-id": "1",
          "data-attributes-name": "test",
        },
      },
    }
  )
  end()
})

test("full without functions", ({same, end}) => {
  same(
    menu({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
    }),
    {
      sel: "menu#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {
          title: "x",
          href: "/a",
        },
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "hook": {},
        "on": {},
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("full", ({similar, end}) => {
  similar(
    menu({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
      "hook": {insert: () => null},
    }),
    {
      sel: "menu#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {title: "x"},
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("html", ({equal, end}) => {
  equal(
    toHTML(menu({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        attributes: {NAME: "Kurtis Rainbolt-Greene"},
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<menu id=\"b\" class=\"c d active\" yyy=\"y\" xxx=\"x\" data-id=\"1\" data-attributes-name=\"Kurtis Rainbolt-Greene\" aria-role=\"navigation\" title=\"x\" href=\"/a\" style=\"border: 1px\">test</menu>"
  )
  end()
})

test("html with plugins", ({equal, end}) => {
  equal(
    toHTMLWithPlugins(menu({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<menu id=\"b\" class=\"c d active\" title=\"x\" href=\"/a\" yyy=\"y\" xxx=\"x\" data-name=\"Kurtis\" data-id=\"1\" aria-role=\"navigation\" style=\"border: 1px\">test</menu>"
  )
  end()
})

test("empty", ({same, end}) => {
  same(
    menuitem(),
    {
      children: undefined,
      data: {
        "attrs": {},
        "class": {},
        "hook": {},
        "on": {},
        "props": {},
        "style": {},
      },
      elm: undefined,
      key: undefined,
      sel: "menuitem",
      text: undefined,
    }
  )
  end()
})

test("selector", ({similar, end}) => {
  similar(menuitem({selector: ".value"}), {sel: "menuitem.value"})
  end()
})

test("children string", ({similar, end}) => {
  similar(menuitem({children: "test"}), {text: "test"})
  end()
})

test("children array string", ({similar, end}) => {
  similar(menuitem({children: ["test"]}), {children: [{text: "test"}]})
  end()
})

test("children function", ({similar, end}) => {
  similar(menuitem({children: Function}), {children: [Function]})
  end()
})

test("children array function", ({similar, end}) => {
  similar(menuitem({children: [Function]}), {children: [Function]})
  end()
})

test("aria", ({similar, end}) => {
  similar(menuitem({aria: {id: "1"}}), {data: {attrs: {"aria-id": "1"}}})
  end()
})

test("data", ({similar, end}) => {
  similar(
    menuitem({
      data: {
        id: "1",
        attributes: {NAME: "test"},
      },
    }),
    {
      data: {
        attrs: {
          "data-id": "1",
          "data-attributes-name": "test",
        },
      },
    }
  )
  end()
})

test("full without functions", ({same, end}) => {
  same(
    menuitem({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
    }),
    {
      sel: "menuitem#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {
          title: "x",
          href: "/a",
        },
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "hook": {},
        "on": {},
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("full", ({similar, end}) => {
  similar(
    menuitem({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
      "hook": {insert: () => null},
    }),
    {
      sel: "menuitem#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {title: "x"},
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("html", ({equal, end}) => {
  equal(
    toHTML(menuitem({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        attributes: {NAME: "Kurtis Rainbolt-Greene"},
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<menuitem id=\"b\" class=\"c d active\" yyy=\"y\" xxx=\"x\" data-id=\"1\" data-attributes-name=\"Kurtis Rainbolt-Greene\" aria-role=\"navigation\" title=\"x\" href=\"/a\" style=\"border: 1px\">test</menuitem>"
  )
  end()
})

test("html with plugins", ({equal, end}) => {
  equal(
    toHTMLWithPlugins(menuitem({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<menuitem id=\"b\" class=\"c d active\" title=\"x\" href=\"/a\" yyy=\"y\" xxx=\"x\" data-name=\"Kurtis\" data-id=\"1\" aria-role=\"navigation\" style=\"border: 1px\">test</menuitem>"
  )
  end()
})

test("empty", ({same, end}) => {
  same(
    meter(),
    {
      children: undefined,
      data: {
        "attrs": {},
        "class": {},
        "hook": {},
        "on": {},
        "props": {},
        "style": {},
      },
      elm: undefined,
      key: undefined,
      sel: "meter",
      text: undefined,
    }
  )
  end()
})

test("selector", ({similar, end}) => {
  similar(meter({selector: ".value"}), {sel: "meter.value"})
  end()
})

test("children string", ({similar, end}) => {
  similar(meter({children: "test"}), {text: "test"})
  end()
})

test("children array string", ({similar, end}) => {
  similar(meter({children: ["test"]}), {children: [{text: "test"}]})
  end()
})

test("children function", ({similar, end}) => {
  similar(meter({children: Function}), {children: [Function]})
  end()
})

test("children array function", ({similar, end}) => {
  similar(meter({children: [Function]}), {children: [Function]})
  end()
})

test("aria", ({similar, end}) => {
  similar(meter({aria: {id: "1"}}), {data: {attrs: {"aria-id": "1"}}})
  end()
})

test("data", ({similar, end}) => {
  similar(
    meter({
      data: {
        id: "1",
        attributes: {NAME: "test"},
      },
    }),
    {
      data: {
        attrs: {
          "data-id": "1",
          "data-attributes-name": "test",
        },
      },
    }
  )
  end()
})

test("full without functions", ({same, end}) => {
  same(
    meter({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
    }),
    {
      sel: "meter#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {
          title: "x",
          href: "/a",
        },
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "hook": {},
        "on": {},
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("full", ({similar, end}) => {
  similar(
    meter({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
      "hook": {insert: () => null},
    }),
    {
      sel: "meter#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {title: "x"},
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("html", ({equal, end}) => {
  equal(
    toHTML(meter({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        attributes: {NAME: "Kurtis Rainbolt-Greene"},
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<meter id=\"b\" class=\"c d active\" yyy=\"y\" xxx=\"x\" data-id=\"1\" data-attributes-name=\"Kurtis Rainbolt-Greene\" aria-role=\"navigation\" title=\"x\" href=\"/a\" style=\"border: 1px\">test</meter>"
  )
  end()
})

test("html with plugins", ({equal, end}) => {
  equal(
    toHTMLWithPlugins(meter({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<meter id=\"b\" class=\"c d active\" title=\"x\" href=\"/a\" yyy=\"y\" xxx=\"x\" data-name=\"Kurtis\" data-id=\"1\" aria-role=\"navigation\" style=\"border: 1px\">test</meter>"
  )
  end()
})

test("empty", ({same, end}) => {
  same(
    nav(),
    {
      children: undefined,
      data: {
        "attrs": {},
        "class": {},
        "hook": {},
        "on": {},
        "props": {},
        "style": {},
      },
      elm: undefined,
      key: undefined,
      sel: "nav",
      text: undefined,
    }
  )
  end()
})

test("selector", ({similar, end}) => {
  similar(nav({selector: ".value"}), {sel: "nav.value"})
  end()
})

test("children string", ({similar, end}) => {
  similar(nav({children: "test"}), {text: "test"})
  end()
})

test("children array string", ({similar, end}) => {
  similar(nav({children: ["test"]}), {children: [{text: "test"}]})
  end()
})

test("children function", ({similar, end}) => {
  similar(nav({children: Function}), {children: [Function]})
  end()
})

test("children array function", ({similar, end}) => {
  similar(nav({children: [Function]}), {children: [Function]})
  end()
})

test("aria", ({similar, end}) => {
  similar(nav({aria: {id: "1"}}), {data: {attrs: {"aria-id": "1"}}})
  end()
})

test("data", ({similar, end}) => {
  similar(
    nav({
      data: {
        id: "1",
        attributes: {NAME: "test"},
      },
    }),
    {
      data: {
        attrs: {
          "data-id": "1",
          "data-attributes-name": "test",
        },
      },
    }
  )
  end()
})

test("full without functions", ({same, end}) => {
  same(
    nav({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
    }),
    {
      sel: "nav#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {
          title: "x",
          href: "/a",
        },
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "hook": {},
        "on": {},
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("full", ({similar, end}) => {
  similar(
    nav({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
      "hook": {insert: () => null},
    }),
    {
      sel: "nav#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {title: "x"},
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("html", ({equal, end}) => {
  equal(
    toHTML(nav({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        attributes: {NAME: "Kurtis Rainbolt-Greene"},
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<nav id=\"b\" class=\"c d active\" yyy=\"y\" xxx=\"x\" data-id=\"1\" data-attributes-name=\"Kurtis Rainbolt-Greene\" aria-role=\"navigation\" title=\"x\" href=\"/a\" style=\"border: 1px\">test</nav>"
  )
  end()
})

test("html with plugins", ({equal, end}) => {
  equal(
    toHTMLWithPlugins(nav({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<nav id=\"b\" class=\"c d active\" title=\"x\" href=\"/a\" yyy=\"y\" xxx=\"x\" data-name=\"Kurtis\" data-id=\"1\" aria-role=\"navigation\" style=\"border: 1px\">test</nav>"
  )
  end()
})

test("empty", ({same, end}) => {
  same(
    nobr(),
    {
      children: undefined,
      data: {
        "attrs": {},
        "class": {},
        "hook": {},
        "on": {},
        "props": {},
        "style": {},
      },
      elm: undefined,
      key: undefined,
      sel: "nobr",
      text: undefined,
    }
  )
  end()
})

test("selector", ({similar, end}) => {
  similar(nobr({selector: ".value"}), {sel: "nobr.value"})
  end()
})

test("children string", ({similar, end}) => {
  similar(nobr({children: "test"}), {text: "test"})
  end()
})

test("children array string", ({similar, end}) => {
  similar(nobr({children: ["test"]}), {children: [{text: "test"}]})
  end()
})

test("children function", ({similar, end}) => {
  similar(nobr({children: Function}), {children: [Function]})
  end()
})

test("children array function", ({similar, end}) => {
  similar(nobr({children: [Function]}), {children: [Function]})
  end()
})

test("aria", ({similar, end}) => {
  similar(nobr({aria: {id: "1"}}), {data: {attrs: {"aria-id": "1"}}})
  end()
})

test("data", ({similar, end}) => {
  similar(
    nobr({
      data: {
        id: "1",
        attributes: {NAME: "test"},
      },
    }),
    {
      data: {
        attrs: {
          "data-id": "1",
          "data-attributes-name": "test",
        },
      },
    }
  )
  end()
})

test("full without functions", ({same, end}) => {
  same(
    nobr({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
    }),
    {
      sel: "nobr#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {
          title: "x",
          href: "/a",
        },
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "hook": {},
        "on": {},
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("full", ({similar, end}) => {
  similar(
    nobr({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
      "hook": {insert: () => null},
    }),
    {
      sel: "nobr#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {title: "x"},
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("html", ({equal, end}) => {
  equal(
    toHTML(nobr({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        attributes: {NAME: "Kurtis Rainbolt-Greene"},
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<nobr id=\"b\" class=\"c d active\" yyy=\"y\" xxx=\"x\" data-id=\"1\" data-attributes-name=\"Kurtis Rainbolt-Greene\" aria-role=\"navigation\" title=\"x\" href=\"/a\" style=\"border: 1px\">test</nobr>"
  )
  end()
})

test("html with plugins", ({equal, end}) => {
  equal(
    toHTMLWithPlugins(nobr({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<nobr id=\"b\" class=\"c d active\" title=\"x\" href=\"/a\" yyy=\"y\" xxx=\"x\" data-name=\"Kurtis\" data-id=\"1\" aria-role=\"navigation\" style=\"border: 1px\">test</nobr>"
  )
  end()
})

test("empty", ({same, end}) => {
  same(
    noframes(),
    {
      children: undefined,
      data: {
        "attrs": {},
        "class": {},
        "hook": {},
        "on": {},
        "props": {},
        "style": {},
      },
      elm: undefined,
      key: undefined,
      sel: "noframes",
      text: undefined,
    }
  )
  end()
})

test("selector", ({similar, end}) => {
  similar(noframes({selector: ".value"}), {sel: "noframes.value"})
  end()
})

test("children string", ({similar, end}) => {
  similar(noframes({children: "test"}), {text: "test"})
  end()
})

test("children array string", ({similar, end}) => {
  similar(noframes({children: ["test"]}), {children: [{text: "test"}]})
  end()
})

test("children function", ({similar, end}) => {
  similar(noframes({children: Function}), {children: [Function]})
  end()
})

test("children array function", ({similar, end}) => {
  similar(noframes({children: [Function]}), {children: [Function]})
  end()
})

test("aria", ({similar, end}) => {
  similar(noframes({aria: {id: "1"}}), {data: {attrs: {"aria-id": "1"}}})
  end()
})

test("data", ({similar, end}) => {
  similar(
    noframes({
      data: {
        id: "1",
        attributes: {NAME: "test"},
      },
    }),
    {
      data: {
        attrs: {
          "data-id": "1",
          "data-attributes-name": "test",
        },
      },
    }
  )
  end()
})

test("full without functions", ({same, end}) => {
  same(
    noframes({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
    }),
    {
      sel: "noframes#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {
          title: "x",
          href: "/a",
        },
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "hook": {},
        "on": {},
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("full", ({similar, end}) => {
  similar(
    noframes({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
      "hook": {insert: () => null},
    }),
    {
      sel: "noframes#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {title: "x"},
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("html", ({equal, end}) => {
  equal(
    toHTML(noframes({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        attributes: {NAME: "Kurtis Rainbolt-Greene"},
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<noframes id=\"b\" class=\"c d active\" yyy=\"y\" xxx=\"x\" data-id=\"1\" data-attributes-name=\"Kurtis Rainbolt-Greene\" aria-role=\"navigation\" title=\"x\" href=\"/a\" style=\"border: 1px\">test</noframes>"
  )
  end()
})

test("html with plugins", ({equal, end}) => {
  equal(
    toHTMLWithPlugins(noframes({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<noframes id=\"b\" class=\"c d active\" title=\"x\" href=\"/a\" yyy=\"y\" xxx=\"x\" data-name=\"Kurtis\" data-id=\"1\" aria-role=\"navigation\" style=\"border: 1px\">test</noframes>"
  )
  end()
})

test("empty", ({same, end}) => {
  same(
    noscript(),
    {
      children: undefined,
      data: {
        "attrs": {},
        "class": {},
        "hook": {},
        "on": {},
        "props": {},
        "style": {},
      },
      elm: undefined,
      key: undefined,
      sel: "noscript",
      text: undefined,
    }
  )
  end()
})

test("selector", ({similar, end}) => {
  similar(noscript({selector: ".value"}), {sel: "noscript.value"})
  end()
})

test("children string", ({similar, end}) => {
  similar(noscript({children: "test"}), {text: "test"})
  end()
})

test("children array string", ({similar, end}) => {
  similar(noscript({children: ["test"]}), {children: [{text: "test"}]})
  end()
})

test("children function", ({similar, end}) => {
  similar(noscript({children: Function}), {children: [Function]})
  end()
})

test("children array function", ({similar, end}) => {
  similar(noscript({children: [Function]}), {children: [Function]})
  end()
})

test("aria", ({similar, end}) => {
  similar(noscript({aria: {id: "1"}}), {data: {attrs: {"aria-id": "1"}}})
  end()
})

test("data", ({similar, end}) => {
  similar(
    noscript({
      data: {
        id: "1",
        attributes: {NAME: "test"},
      },
    }),
    {
      data: {
        attrs: {
          "data-id": "1",
          "data-attributes-name": "test",
        },
      },
    }
  )
  end()
})

test("full without functions", ({same, end}) => {
  same(
    noscript({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
    }),
    {
      sel: "noscript#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {
          title: "x",
          href: "/a",
        },
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "hook": {},
        "on": {},
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("full", ({similar, end}) => {
  similar(
    noscript({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
      "hook": {insert: () => null},
    }),
    {
      sel: "noscript#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {title: "x"},
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("html", ({equal, end}) => {
  equal(
    toHTML(noscript({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        attributes: {NAME: "Kurtis Rainbolt-Greene"},
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<noscript id=\"b\" class=\"c d active\" yyy=\"y\" xxx=\"x\" data-id=\"1\" data-attributes-name=\"Kurtis Rainbolt-Greene\" aria-role=\"navigation\" title=\"x\" href=\"/a\" style=\"border: 1px\">test</noscript>"
  )
  end()
})

test("html with plugins", ({equal, end}) => {
  equal(
    toHTMLWithPlugins(noscript({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<noscript id=\"b\" class=\"c d active\" title=\"x\" href=\"/a\" yyy=\"y\" xxx=\"x\" data-name=\"Kurtis\" data-id=\"1\" aria-role=\"navigation\" style=\"border: 1px\">test</noscript>"
  )
  end()
})

test("empty", ({same, end}) => {
  same(
    object(),
    {
      children: undefined,
      data: {
        "attrs": {},
        "class": {},
        "hook": {},
        "on": {},
        "props": {},
        "style": {},
      },
      elm: undefined,
      key: undefined,
      sel: "object",
      text: undefined,
    }
  )
  end()
})

test("selector", ({similar, end}) => {
  similar(object({selector: ".value"}), {sel: "object.value"})
  end()
})

test("children string", ({similar, end}) => {
  similar(object({children: "test"}), {text: "test"})
  end()
})

test("children array string", ({similar, end}) => {
  similar(object({children: ["test"]}), {children: [{text: "test"}]})
  end()
})

test("children function", ({similar, end}) => {
  similar(object({children: Function}), {children: [Function]})
  end()
})

test("children array function", ({similar, end}) => {
  similar(object({children: [Function]}), {children: [Function]})
  end()
})

test("aria", ({similar, end}) => {
  similar(object({aria: {id: "1"}}), {data: {attrs: {"aria-id": "1"}}})
  end()
})

test("data", ({similar, end}) => {
  similar(
    object({
      data: {
        id: "1",
        attributes: {NAME: "test"},
      },
    }),
    {
      data: {
        attrs: {
          "data-id": "1",
          "data-attributes-name": "test",
        },
      },
    }
  )
  end()
})

test("full without functions", ({same, end}) => {
  same(
    object({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
    }),
    {
      sel: "object#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {
          title: "x",
          href: "/a",
        },
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "hook": {},
        "on": {},
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("full", ({similar, end}) => {
  similar(
    object({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
      "hook": {insert: () => null},
    }),
    {
      sel: "object#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {title: "x"},
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("html", ({equal, end}) => {
  equal(
    toHTML(object({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        attributes: {NAME: "Kurtis Rainbolt-Greene"},
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<object id=\"b\" class=\"c d active\" yyy=\"y\" xxx=\"x\" data-id=\"1\" data-attributes-name=\"Kurtis Rainbolt-Greene\" aria-role=\"navigation\" title=\"x\" href=\"/a\" style=\"border: 1px\">test</object>"
  )
  end()
})

test("html with plugins", ({equal, end}) => {
  equal(
    toHTMLWithPlugins(object({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<object id=\"b\" class=\"c d active\" title=\"x\" href=\"/a\" yyy=\"y\" xxx=\"x\" data-name=\"Kurtis\" data-id=\"1\" aria-role=\"navigation\" style=\"border: 1px\">test</object>"
  )
  end()
})

test("empty", ({same, end}) => {
  same(
    ol(),
    {
      children: undefined,
      data: {
        "attrs": {},
        "class": {},
        "hook": {},
        "on": {},
        "props": {},
        "style": {},
      },
      elm: undefined,
      key: undefined,
      sel: "ol",
      text: undefined,
    }
  )
  end()
})

test("selector", ({similar, end}) => {
  similar(ol({selector: ".value"}), {sel: "ol.value"})
  end()
})

test("children string", ({similar, end}) => {
  similar(ol({children: "test"}), {text: "test"})
  end()
})

test("children array string", ({similar, end}) => {
  similar(ol({children: ["test"]}), {children: [{text: "test"}]})
  end()
})

test("children function", ({similar, end}) => {
  similar(ol({children: Function}), {children: [Function]})
  end()
})

test("children array function", ({similar, end}) => {
  similar(ol({children: [Function]}), {children: [Function]})
  end()
})

test("aria", ({similar, end}) => {
  similar(ol({aria: {id: "1"}}), {data: {attrs: {"aria-id": "1"}}})
  end()
})

test("data", ({similar, end}) => {
  similar(
    ol({
      data: {
        id: "1",
        attributes: {NAME: "test"},
      },
    }),
    {
      data: {
        attrs: {
          "data-id": "1",
          "data-attributes-name": "test",
        },
      },
    }
  )
  end()
})

test("full without functions", ({same, end}) => {
  same(
    ol({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
    }),
    {
      sel: "ol#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {
          title: "x",
          href: "/a",
        },
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "hook": {},
        "on": {},
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("full", ({similar, end}) => {
  similar(
    ol({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
      "hook": {insert: () => null},
    }),
    {
      sel: "ol#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {title: "x"},
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("html", ({equal, end}) => {
  equal(
    toHTML(ol({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        attributes: {NAME: "Kurtis Rainbolt-Greene"},
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<ol id=\"b\" class=\"c d active\" yyy=\"y\" xxx=\"x\" data-id=\"1\" data-attributes-name=\"Kurtis Rainbolt-Greene\" aria-role=\"navigation\" title=\"x\" href=\"/a\" style=\"border: 1px\">test</ol>"
  )
  end()
})

test("html with plugins", ({equal, end}) => {
  equal(
    toHTMLWithPlugins(ol({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<ol id=\"b\" class=\"c d active\" title=\"x\" href=\"/a\" yyy=\"y\" xxx=\"x\" data-name=\"Kurtis\" data-id=\"1\" aria-role=\"navigation\" style=\"border: 1px\">test</ol>"
  )
  end()
})

test("empty", ({same, end}) => {
  same(
    optgroup(),
    {
      children: undefined,
      data: {
        "attrs": {},
        "class": {},
        "hook": {},
        "on": {},
        "props": {},
        "style": {},
      },
      elm: undefined,
      key: undefined,
      sel: "optgroup",
      text: undefined,
    }
  )
  end()
})

test("selector", ({similar, end}) => {
  similar(optgroup({selector: ".value"}), {sel: "optgroup.value"})
  end()
})

test("children string", ({similar, end}) => {
  similar(optgroup({children: "test"}), {text: "test"})
  end()
})

test("children array string", ({similar, end}) => {
  similar(optgroup({children: ["test"]}), {children: [{text: "test"}]})
  end()
})

test("children function", ({similar, end}) => {
  similar(optgroup({children: Function}), {children: [Function]})
  end()
})

test("children array function", ({similar, end}) => {
  similar(optgroup({children: [Function]}), {children: [Function]})
  end()
})

test("aria", ({similar, end}) => {
  similar(optgroup({aria: {id: "1"}}), {data: {attrs: {"aria-id": "1"}}})
  end()
})

test("data", ({similar, end}) => {
  similar(
    optgroup({
      data: {
        id: "1",
        attributes: {NAME: "test"},
      },
    }),
    {
      data: {
        attrs: {
          "data-id": "1",
          "data-attributes-name": "test",
        },
      },
    }
  )
  end()
})

test("full without functions", ({same, end}) => {
  same(
    optgroup({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
    }),
    {
      sel: "optgroup#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {
          title: "x",
          href: "/a",
        },
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "hook": {},
        "on": {},
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("full", ({similar, end}) => {
  similar(
    optgroup({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
      "hook": {insert: () => null},
    }),
    {
      sel: "optgroup#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {title: "x"},
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("html", ({equal, end}) => {
  equal(
    toHTML(optgroup({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        attributes: {NAME: "Kurtis Rainbolt-Greene"},
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<optgroup id=\"b\" class=\"c d active\" yyy=\"y\" xxx=\"x\" data-id=\"1\" data-attributes-name=\"Kurtis Rainbolt-Greene\" aria-role=\"navigation\" title=\"x\" href=\"/a\" style=\"border: 1px\">test</optgroup>"
  )
  end()
})

test("html with plugins", ({equal, end}) => {
  equal(
    toHTMLWithPlugins(optgroup({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<optgroup id=\"b\" class=\"c d active\" title=\"x\" href=\"/a\" yyy=\"y\" xxx=\"x\" data-name=\"Kurtis\" data-id=\"1\" aria-role=\"navigation\" style=\"border: 1px\">test</optgroup>"
  )
  end()
})

test("empty", ({same, end}) => {
  same(
    option(),
    {
      children: undefined,
      data: {
        "attrs": {},
        "class": {},
        "hook": {},
        "on": {},
        "props": {},
        "style": {},
      },
      elm: undefined,
      key: undefined,
      sel: "option",
      text: undefined,
    }
  )
  end()
})

test("selector", ({similar, end}) => {
  similar(option({selector: ".value"}), {sel: "option.value"})
  end()
})

test("children string", ({similar, end}) => {
  similar(option({children: "test"}), {text: "test"})
  end()
})

test("children array string", ({similar, end}) => {
  similar(option({children: ["test"]}), {children: [{text: "test"}]})
  end()
})

test("children function", ({similar, end}) => {
  similar(option({children: Function}), {children: [Function]})
  end()
})

test("children array function", ({similar, end}) => {
  similar(option({children: [Function]}), {children: [Function]})
  end()
})

test("aria", ({similar, end}) => {
  similar(option({aria: {id: "1"}}), {data: {attrs: {"aria-id": "1"}}})
  end()
})

test("data", ({similar, end}) => {
  similar(
    option({
      data: {
        id: "1",
        attributes: {NAME: "test"},
      },
    }),
    {
      data: {
        attrs: {
          "data-id": "1",
          "data-attributes-name": "test",
        },
      },
    }
  )
  end()
})

test("full without functions", ({same, end}) => {
  same(
    option({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
    }),
    {
      sel: "option#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {
          title: "x",
          href: "/a",
        },
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "hook": {},
        "on": {},
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("full", ({similar, end}) => {
  similar(
    option({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
      "hook": {insert: () => null},
    }),
    {
      sel: "option#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {title: "x"},
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("html", ({equal, end}) => {
  equal(
    toHTML(option({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        attributes: {NAME: "Kurtis Rainbolt-Greene"},
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<option id=\"b\" class=\"c d active\" yyy=\"y\" xxx=\"x\" data-id=\"1\" data-attributes-name=\"Kurtis Rainbolt-Greene\" aria-role=\"navigation\" title=\"x\" href=\"/a\" style=\"border: 1px\">test</option>"
  )
  end()
})

test("html with plugins", ({equal, end}) => {
  equal(
    toHTMLWithPlugins(option({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<option id=\"b\" class=\"c d active\" title=\"x\" href=\"/a\" yyy=\"y\" xxx=\"x\" data-name=\"Kurtis\" data-id=\"1\" aria-role=\"navigation\" style=\"border: 1px\">test</option>"
  )
  end()
})

test("empty", ({same, end}) => {
  same(
    output(),
    {
      children: undefined,
      data: {
        "attrs": {},
        "class": {},
        "hook": {},
        "on": {},
        "props": {},
        "style": {},
      },
      elm: undefined,
      key: undefined,
      sel: "output",
      text: undefined,
    }
  )
  end()
})

test("selector", ({similar, end}) => {
  similar(output({selector: ".value"}), {sel: "output.value"})
  end()
})

test("children string", ({similar, end}) => {
  similar(output({children: "test"}), {text: "test"})
  end()
})

test("children array string", ({similar, end}) => {
  similar(output({children: ["test"]}), {children: [{text: "test"}]})
  end()
})

test("children function", ({similar, end}) => {
  similar(output({children: Function}), {children: [Function]})
  end()
})

test("children array function", ({similar, end}) => {
  similar(output({children: [Function]}), {children: [Function]})
  end()
})

test("aria", ({similar, end}) => {
  similar(output({aria: {id: "1"}}), {data: {attrs: {"aria-id": "1"}}})
  end()
})

test("data", ({similar, end}) => {
  similar(
    output({
      data: {
        id: "1",
        attributes: {NAME: "test"},
      },
    }),
    {
      data: {
        attrs: {
          "data-id": "1",
          "data-attributes-name": "test",
        },
      },
    }
  )
  end()
})

test("full without functions", ({same, end}) => {
  same(
    output({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
    }),
    {
      sel: "output#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {
          title: "x",
          href: "/a",
        },
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "hook": {},
        "on": {},
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("full", ({similar, end}) => {
  similar(
    output({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
      "hook": {insert: () => null},
    }),
    {
      sel: "output#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {title: "x"},
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("html", ({equal, end}) => {
  equal(
    toHTML(output({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        attributes: {NAME: "Kurtis Rainbolt-Greene"},
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<output id=\"b\" class=\"c d active\" yyy=\"y\" xxx=\"x\" data-id=\"1\" data-attributes-name=\"Kurtis Rainbolt-Greene\" aria-role=\"navigation\" title=\"x\" href=\"/a\" style=\"border: 1px\">test</output>"
  )
  end()
})

test("html with plugins", ({equal, end}) => {
  equal(
    toHTMLWithPlugins(output({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<output id=\"b\" class=\"c d active\" title=\"x\" href=\"/a\" yyy=\"y\" xxx=\"x\" data-name=\"Kurtis\" data-id=\"1\" aria-role=\"navigation\" style=\"border: 1px\">test</output>"
  )
  end()
})

test("empty", ({same, end}) => {
  same(
    p(),
    {
      children: undefined,
      data: {
        "attrs": {},
        "class": {},
        "hook": {},
        "on": {},
        "props": {},
        "style": {},
      },
      elm: undefined,
      key: undefined,
      sel: "p",
      text: undefined,
    }
  )
  end()
})

test("selector", ({similar, end}) => {
  similar(p({selector: ".value"}), {sel: "p.value"})
  end()
})

test("children string", ({similar, end}) => {
  similar(p({children: "test"}), {text: "test"})
  end()
})

test("children array string", ({similar, end}) => {
  similar(p({children: ["test"]}), {children: [{text: "test"}]})
  end()
})

test("children function", ({similar, end}) => {
  similar(p({children: Function}), {children: [Function]})
  end()
})

test("children array function", ({similar, end}) => {
  similar(p({children: [Function]}), {children: [Function]})
  end()
})

test("aria", ({similar, end}) => {
  similar(p({aria: {id: "1"}}), {data: {attrs: {"aria-id": "1"}}})
  end()
})

test("data", ({similar, end}) => {
  similar(
    p({
      data: {
        id: "1",
        attributes: {NAME: "test"},
      },
    }),
    {
      data: {
        attrs: {
          "data-id": "1",
          "data-attributes-name": "test",
        },
      },
    }
  )
  end()
})

test("full without functions", ({same, end}) => {
  same(
    p({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
    }),
    {
      sel: "p#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {
          title: "x",
          href: "/a",
        },
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "hook": {},
        "on": {},
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("full", ({similar, end}) => {
  similar(
    p({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
      "hook": {insert: () => null},
    }),
    {
      sel: "p#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {title: "x"},
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("html", ({equal, end}) => {
  equal(
    toHTML(p({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        attributes: {NAME: "Kurtis Rainbolt-Greene"},
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<p id=\"b\" class=\"c d active\" yyy=\"y\" xxx=\"x\" data-id=\"1\" data-attributes-name=\"Kurtis Rainbolt-Greene\" aria-role=\"navigation\" title=\"x\" href=\"/a\" style=\"border: 1px\">test</p>"
  )
  end()
})

test("html with plugins", ({equal, end}) => {
  equal(
    toHTMLWithPlugins(p({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<p id=\"b\" class=\"c d active\" title=\"x\" href=\"/a\" yyy=\"y\" xxx=\"x\" data-name=\"Kurtis\" data-id=\"1\" aria-role=\"navigation\" style=\"border: 1px\">test</p>"
  )
  end()
})

test("empty", ({same, end}) => {
  same(
    picture(),
    {
      children: undefined,
      data: {
        "attrs": {},
        "class": {},
        "hook": {},
        "on": {},
        "props": {},
        "style": {},
      },
      elm: undefined,
      key: undefined,
      sel: "picture",
      text: undefined,
    }
  )
  end()
})

test("selector", ({similar, end}) => {
  similar(picture({selector: ".value"}), {sel: "picture.value"})
  end()
})

test("children string", ({similar, end}) => {
  similar(picture({children: "test"}), {text: "test"})
  end()
})

test("children array string", ({similar, end}) => {
  similar(picture({children: ["test"]}), {children: [{text: "test"}]})
  end()
})

test("children function", ({similar, end}) => {
  similar(picture({children: Function}), {children: [Function]})
  end()
})

test("children array function", ({similar, end}) => {
  similar(picture({children: [Function]}), {children: [Function]})
  end()
})

test("aria", ({similar, end}) => {
  similar(picture({aria: {id: "1"}}), {data: {attrs: {"aria-id": "1"}}})
  end()
})

test("data", ({similar, end}) => {
  similar(
    picture({
      data: {
        id: "1",
        attributes: {NAME: "test"},
      },
    }),
    {
      data: {
        attrs: {
          "data-id": "1",
          "data-attributes-name": "test",
        },
      },
    }
  )
  end()
})

test("full without functions", ({same, end}) => {
  same(
    picture({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
    }),
    {
      sel: "picture#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {
          title: "x",
          href: "/a",
        },
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "hook": {},
        "on": {},
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("full", ({similar, end}) => {
  similar(
    picture({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
      "hook": {insert: () => null},
    }),
    {
      sel: "picture#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {title: "x"},
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("html", ({equal, end}) => {
  equal(
    toHTML(picture({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        attributes: {NAME: "Kurtis Rainbolt-Greene"},
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<picture id=\"b\" class=\"c d active\" yyy=\"y\" xxx=\"x\" data-id=\"1\" data-attributes-name=\"Kurtis Rainbolt-Greene\" aria-role=\"navigation\" title=\"x\" href=\"/a\" style=\"border: 1px\">test</picture>"
  )
  end()
})

test("html with plugins", ({equal, end}) => {
  equal(
    toHTMLWithPlugins(picture({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<picture id=\"b\" class=\"c d active\" title=\"x\" href=\"/a\" yyy=\"y\" xxx=\"x\" data-name=\"Kurtis\" data-id=\"1\" aria-role=\"navigation\" style=\"border: 1px\">test</picture>"
  )
  end()
})

test("empty", ({same, end}) => {
  same(
    pre(),
    {
      children: undefined,
      data: {
        "attrs": {},
        "class": {},
        "hook": {},
        "on": {},
        "props": {},
        "style": {},
      },
      elm: undefined,
      key: undefined,
      sel: "pre",
      text: undefined,
    }
  )
  end()
})

test("selector", ({similar, end}) => {
  similar(pre({selector: ".value"}), {sel: "pre.value"})
  end()
})

test("children string", ({similar, end}) => {
  similar(pre({children: "test"}), {text: "test"})
  end()
})

test("children array string", ({similar, end}) => {
  similar(pre({children: ["test"]}), {children: [{text: "test"}]})
  end()
})

test("children function", ({similar, end}) => {
  similar(pre({children: Function}), {children: [Function]})
  end()
})

test("children array function", ({similar, end}) => {
  similar(pre({children: [Function]}), {children: [Function]})
  end()
})

test("aria", ({similar, end}) => {
  similar(pre({aria: {id: "1"}}), {data: {attrs: {"aria-id": "1"}}})
  end()
})

test("data", ({similar, end}) => {
  similar(
    pre({
      data: {
        id: "1",
        attributes: {NAME: "test"},
      },
    }),
    {
      data: {
        attrs: {
          "data-id": "1",
          "data-attributes-name": "test",
        },
      },
    }
  )
  end()
})

test("full without functions", ({same, end}) => {
  same(
    pre({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
    }),
    {
      sel: "pre#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {
          title: "x",
          href: "/a",
        },
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "hook": {},
        "on": {},
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("full", ({similar, end}) => {
  similar(
    pre({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
      "hook": {insert: () => null},
    }),
    {
      sel: "pre#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {title: "x"},
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("html", ({equal, end}) => {
  equal(
    toHTML(pre({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        attributes: {NAME: "Kurtis Rainbolt-Greene"},
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<pre id=\"b\" class=\"c d active\" yyy=\"y\" xxx=\"x\" data-id=\"1\" data-attributes-name=\"Kurtis Rainbolt-Greene\" aria-role=\"navigation\" title=\"x\" href=\"/a\" style=\"border: 1px\">test</pre>"
  )
  end()
})

test("html with plugins", ({equal, end}) => {
  equal(
    toHTMLWithPlugins(pre({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<pre id=\"b\" class=\"c d active\" title=\"x\" href=\"/a\" yyy=\"y\" xxx=\"x\" data-name=\"Kurtis\" data-id=\"1\" aria-role=\"navigation\" style=\"border: 1px\">test</pre>"
  )
  end()
})

test("empty", ({same, end}) => {
  same(
    progress(),
    {
      children: undefined,
      data: {
        "attrs": {},
        "class": {},
        "hook": {},
        "on": {},
        "props": {},
        "style": {},
      },
      elm: undefined,
      key: undefined,
      sel: "progress",
      text: undefined,
    }
  )
  end()
})

test("selector", ({similar, end}) => {
  similar(progress({selector: ".value"}), {sel: "progress.value"})
  end()
})

test("children string", ({similar, end}) => {
  similar(progress({children: "test"}), {text: "test"})
  end()
})

test("children array string", ({similar, end}) => {
  similar(progress({children: ["test"]}), {children: [{text: "test"}]})
  end()
})

test("children function", ({similar, end}) => {
  similar(progress({children: Function}), {children: [Function]})
  end()
})

test("children array function", ({similar, end}) => {
  similar(progress({children: [Function]}), {children: [Function]})
  end()
})

test("aria", ({similar, end}) => {
  similar(progress({aria: {id: "1"}}), {data: {attrs: {"aria-id": "1"}}})
  end()
})

test("data", ({similar, end}) => {
  similar(
    progress({
      data: {
        id: "1",
        attributes: {NAME: "test"},
      },
    }),
    {
      data: {
        attrs: {
          "data-id": "1",
          "data-attributes-name": "test",
        },
      },
    }
  )
  end()
})

test("full without functions", ({same, end}) => {
  same(
    progress({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
    }),
    {
      sel: "progress#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {
          title: "x",
          href: "/a",
        },
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "hook": {},
        "on": {},
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("full", ({similar, end}) => {
  similar(
    progress({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
      "hook": {insert: () => null},
    }),
    {
      sel: "progress#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {title: "x"},
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("html", ({equal, end}) => {
  equal(
    toHTML(progress({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        attributes: {NAME: "Kurtis Rainbolt-Greene"},
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<progress id=\"b\" class=\"c d active\" yyy=\"y\" xxx=\"x\" data-id=\"1\" data-attributes-name=\"Kurtis Rainbolt-Greene\" aria-role=\"navigation\" title=\"x\" href=\"/a\" style=\"border: 1px\">test</progress>"
  )
  end()
})

test("html with plugins", ({equal, end}) => {
  equal(
    toHTMLWithPlugins(progress({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<progress id=\"b\" class=\"c d active\" title=\"x\" href=\"/a\" yyy=\"y\" xxx=\"x\" data-name=\"Kurtis\" data-id=\"1\" aria-role=\"navigation\" style=\"border: 1px\">test</progress>"
  )
  end()
})

test("empty", ({same, end}) => {
  same(
    q(),
    {
      children: undefined,
      data: {
        "attrs": {},
        "class": {},
        "hook": {},
        "on": {},
        "props": {},
        "style": {},
      },
      elm: undefined,
      key: undefined,
      sel: "q",
      text: undefined,
    }
  )
  end()
})

test("selector", ({similar, end}) => {
  similar(q({selector: ".value"}), {sel: "q.value"})
  end()
})

test("children string", ({similar, end}) => {
  similar(q({children: "test"}), {text: "test"})
  end()
})

test("children array string", ({similar, end}) => {
  similar(q({children: ["test"]}), {children: [{text: "test"}]})
  end()
})

test("children function", ({similar, end}) => {
  similar(q({children: Function}), {children: [Function]})
  end()
})

test("children array function", ({similar, end}) => {
  similar(q({children: [Function]}), {children: [Function]})
  end()
})

test("aria", ({similar, end}) => {
  similar(q({aria: {id: "1"}}), {data: {attrs: {"aria-id": "1"}}})
  end()
})

test("data", ({similar, end}) => {
  similar(
    q({
      data: {
        id: "1",
        attributes: {NAME: "test"},
      },
    }),
    {
      data: {
        attrs: {
          "data-id": "1",
          "data-attributes-name": "test",
        },
      },
    }
  )
  end()
})

test("full without functions", ({same, end}) => {
  same(
    q({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
    }),
    {
      sel: "q#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {
          title: "x",
          href: "/a",
        },
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "hook": {},
        "on": {},
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("full", ({similar, end}) => {
  similar(
    q({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
      "hook": {insert: () => null},
    }),
    {
      sel: "q#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {title: "x"},
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("html", ({equal, end}) => {
  equal(
    toHTML(q({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        attributes: {NAME: "Kurtis Rainbolt-Greene"},
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<q id=\"b\" class=\"c d active\" yyy=\"y\" xxx=\"x\" data-id=\"1\" data-attributes-name=\"Kurtis Rainbolt-Greene\" aria-role=\"navigation\" title=\"x\" href=\"/a\" style=\"border: 1px\">test</q>"
  )
  end()
})

test("html with plugins", ({equal, end}) => {
  equal(
    toHTMLWithPlugins(q({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<q id=\"b\" class=\"c d active\" title=\"x\" href=\"/a\" yyy=\"y\" xxx=\"x\" data-name=\"Kurtis\" data-id=\"1\" aria-role=\"navigation\" style=\"border: 1px\">test</q>"
  )
  end()
})

test("empty", ({same, end}) => {
  same(
    rp(),
    {
      children: undefined,
      data: {
        "attrs": {},
        "class": {},
        "hook": {},
        "on": {},
        "props": {},
        "style": {},
      },
      elm: undefined,
      key: undefined,
      sel: "rp",
      text: undefined,
    }
  )
  end()
})

test("selector", ({similar, end}) => {
  similar(rp({selector: ".value"}), {sel: "rp.value"})
  end()
})

test("children string", ({similar, end}) => {
  similar(rp({children: "test"}), {text: "test"})
  end()
})

test("children array string", ({similar, end}) => {
  similar(rp({children: ["test"]}), {children: [{text: "test"}]})
  end()
})

test("children function", ({similar, end}) => {
  similar(rp({children: Function}), {children: [Function]})
  end()
})

test("children array function", ({similar, end}) => {
  similar(rp({children: [Function]}), {children: [Function]})
  end()
})

test("aria", ({similar, end}) => {
  similar(rp({aria: {id: "1"}}), {data: {attrs: {"aria-id": "1"}}})
  end()
})

test("data", ({similar, end}) => {
  similar(
    rp({
      data: {
        id: "1",
        attributes: {NAME: "test"},
      },
    }),
    {
      data: {
        attrs: {
          "data-id": "1",
          "data-attributes-name": "test",
        },
      },
    }
  )
  end()
})

test("full without functions", ({same, end}) => {
  same(
    rp({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
    }),
    {
      sel: "rp#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {
          title: "x",
          href: "/a",
        },
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "hook": {},
        "on": {},
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("full", ({similar, end}) => {
  similar(
    rp({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
      "hook": {insert: () => null},
    }),
    {
      sel: "rp#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {title: "x"},
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("html", ({equal, end}) => {
  equal(
    toHTML(rp({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        attributes: {NAME: "Kurtis Rainbolt-Greene"},
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<rp id=\"b\" class=\"c d active\" yyy=\"y\" xxx=\"x\" data-id=\"1\" data-attributes-name=\"Kurtis Rainbolt-Greene\" aria-role=\"navigation\" title=\"x\" href=\"/a\" style=\"border: 1px\">test</rp>"
  )
  end()
})

test("html with plugins", ({equal, end}) => {
  equal(
    toHTMLWithPlugins(rp({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<rp id=\"b\" class=\"c d active\" title=\"x\" href=\"/a\" yyy=\"y\" xxx=\"x\" data-name=\"Kurtis\" data-id=\"1\" aria-role=\"navigation\" style=\"border: 1px\">test</rp>"
  )
  end()
})

test("empty", ({same, end}) => {
  same(
    rt(),
    {
      children: undefined,
      data: {
        "attrs": {},
        "class": {},
        "hook": {},
        "on": {},
        "props": {},
        "style": {},
      },
      elm: undefined,
      key: undefined,
      sel: "rt",
      text: undefined,
    }
  )
  end()
})

test("selector", ({similar, end}) => {
  similar(rt({selector: ".value"}), {sel: "rt.value"})
  end()
})

test("children string", ({similar, end}) => {
  similar(rt({children: "test"}), {text: "test"})
  end()
})

test("children array string", ({similar, end}) => {
  similar(rt({children: ["test"]}), {children: [{text: "test"}]})
  end()
})

test("children function", ({similar, end}) => {
  similar(rt({children: Function}), {children: [Function]})
  end()
})

test("children array function", ({similar, end}) => {
  similar(rt({children: [Function]}), {children: [Function]})
  end()
})

test("aria", ({similar, end}) => {
  similar(rt({aria: {id: "1"}}), {data: {attrs: {"aria-id": "1"}}})
  end()
})

test("data", ({similar, end}) => {
  similar(
    rt({
      data: {
        id: "1",
        attributes: {NAME: "test"},
      },
    }),
    {
      data: {
        attrs: {
          "data-id": "1",
          "data-attributes-name": "test",
        },
      },
    }
  )
  end()
})

test("full without functions", ({same, end}) => {
  same(
    rt({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
    }),
    {
      sel: "rt#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {
          title: "x",
          href: "/a",
        },
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "hook": {},
        "on": {},
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("full", ({similar, end}) => {
  similar(
    rt({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
      "hook": {insert: () => null},
    }),
    {
      sel: "rt#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {title: "x"},
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("html", ({equal, end}) => {
  equal(
    toHTML(rt({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        attributes: {NAME: "Kurtis Rainbolt-Greene"},
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<rt id=\"b\" class=\"c d active\" yyy=\"y\" xxx=\"x\" data-id=\"1\" data-attributes-name=\"Kurtis Rainbolt-Greene\" aria-role=\"navigation\" title=\"x\" href=\"/a\" style=\"border: 1px\">test</rt>"
  )
  end()
})

test("html with plugins", ({equal, end}) => {
  equal(
    toHTMLWithPlugins(rt({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<rt id=\"b\" class=\"c d active\" title=\"x\" href=\"/a\" yyy=\"y\" xxx=\"x\" data-name=\"Kurtis\" data-id=\"1\" aria-role=\"navigation\" style=\"border: 1px\">test</rt>"
  )
  end()
})

test("empty", ({same, end}) => {
  same(
    rtc(),
    {
      children: undefined,
      data: {
        "attrs": {},
        "class": {},
        "hook": {},
        "on": {},
        "props": {},
        "style": {},
      },
      elm: undefined,
      key: undefined,
      sel: "rtc",
      text: undefined,
    }
  )
  end()
})

test("selector", ({similar, end}) => {
  similar(rtc({selector: ".value"}), {sel: "rtc.value"})
  end()
})

test("children string", ({similar, end}) => {
  similar(rtc({children: "test"}), {text: "test"})
  end()
})

test("children array string", ({similar, end}) => {
  similar(rtc({children: ["test"]}), {children: [{text: "test"}]})
  end()
})

test("children function", ({similar, end}) => {
  similar(rtc({children: Function}), {children: [Function]})
  end()
})

test("children array function", ({similar, end}) => {
  similar(rtc({children: [Function]}), {children: [Function]})
  end()
})

test("aria", ({similar, end}) => {
  similar(rtc({aria: {id: "1"}}), {data: {attrs: {"aria-id": "1"}}})
  end()
})

test("data", ({similar, end}) => {
  similar(
    rtc({
      data: {
        id: "1",
        attributes: {NAME: "test"},
      },
    }),
    {
      data: {
        attrs: {
          "data-id": "1",
          "data-attributes-name": "test",
        },
      },
    }
  )
  end()
})

test("full without functions", ({same, end}) => {
  same(
    rtc({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
    }),
    {
      sel: "rtc#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {
          title: "x",
          href: "/a",
        },
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "hook": {},
        "on": {},
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("full", ({similar, end}) => {
  similar(
    rtc({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
      "hook": {insert: () => null},
    }),
    {
      sel: "rtc#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {title: "x"},
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("html", ({equal, end}) => {
  equal(
    toHTML(rtc({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        attributes: {NAME: "Kurtis Rainbolt-Greene"},
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<rtc id=\"b\" class=\"c d active\" yyy=\"y\" xxx=\"x\" data-id=\"1\" data-attributes-name=\"Kurtis Rainbolt-Greene\" aria-role=\"navigation\" title=\"x\" href=\"/a\" style=\"border: 1px\">test</rtc>"
  )
  end()
})

test("html with plugins", ({equal, end}) => {
  equal(
    toHTMLWithPlugins(rtc({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<rtc id=\"b\" class=\"c d active\" title=\"x\" href=\"/a\" yyy=\"y\" xxx=\"x\" data-name=\"Kurtis\" data-id=\"1\" aria-role=\"navigation\" style=\"border: 1px\">test</rtc>"
  )
  end()
})

test("empty", ({same, end}) => {
  same(
    ruby(),
    {
      children: undefined,
      data: {
        "attrs": {},
        "class": {},
        "hook": {},
        "on": {},
        "props": {},
        "style": {},
      },
      elm: undefined,
      key: undefined,
      sel: "ruby",
      text: undefined,
    }
  )
  end()
})

test("selector", ({similar, end}) => {
  similar(ruby({selector: ".value"}), {sel: "ruby.value"})
  end()
})

test("children string", ({similar, end}) => {
  similar(ruby({children: "test"}), {text: "test"})
  end()
})

test("children array string", ({similar, end}) => {
  similar(ruby({children: ["test"]}), {children: [{text: "test"}]})
  end()
})

test("children function", ({similar, end}) => {
  similar(ruby({children: Function}), {children: [Function]})
  end()
})

test("children array function", ({similar, end}) => {
  similar(ruby({children: [Function]}), {children: [Function]})
  end()
})

test("aria", ({similar, end}) => {
  similar(ruby({aria: {id: "1"}}), {data: {attrs: {"aria-id": "1"}}})
  end()
})

test("data", ({similar, end}) => {
  similar(
    ruby({
      data: {
        id: "1",
        attributes: {NAME: "test"},
      },
    }),
    {
      data: {
        attrs: {
          "data-id": "1",
          "data-attributes-name": "test",
        },
      },
    }
  )
  end()
})

test("full without functions", ({same, end}) => {
  same(
    ruby({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
    }),
    {
      sel: "ruby#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {
          title: "x",
          href: "/a",
        },
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "hook": {},
        "on": {},
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("full", ({similar, end}) => {
  similar(
    ruby({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
      "hook": {insert: () => null},
    }),
    {
      sel: "ruby#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {title: "x"},
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("html", ({equal, end}) => {
  equal(
    toHTML(ruby({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        attributes: {NAME: "Kurtis Rainbolt-Greene"},
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<ruby id=\"b\" class=\"c d active\" yyy=\"y\" xxx=\"x\" data-id=\"1\" data-attributes-name=\"Kurtis Rainbolt-Greene\" aria-role=\"navigation\" title=\"x\" href=\"/a\" style=\"border: 1px\">test</ruby>"
  )
  end()
})

test("html with plugins", ({equal, end}) => {
  equal(
    toHTMLWithPlugins(ruby({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<ruby id=\"b\" class=\"c d active\" title=\"x\" href=\"/a\" yyy=\"y\" xxx=\"x\" data-name=\"Kurtis\" data-id=\"1\" aria-role=\"navigation\" style=\"border: 1px\">test</ruby>"
  )
  end()
})

test("empty", ({same, end}) => {
  same(
    s(),
    {
      children: undefined,
      data: {
        "attrs": {},
        "class": {},
        "hook": {},
        "on": {},
        "props": {},
        "style": {},
      },
      elm: undefined,
      key: undefined,
      sel: "s",
      text: undefined,
    }
  )
  end()
})

test("selector", ({similar, end}) => {
  similar(s({selector: ".value"}), {sel: "s.value"})
  end()
})

test("children string", ({similar, end}) => {
  similar(s({children: "test"}), {text: "test"})
  end()
})

test("children array string", ({similar, end}) => {
  similar(s({children: ["test"]}), {children: [{text: "test"}]})
  end()
})

test("children function", ({similar, end}) => {
  similar(s({children: Function}), {children: [Function]})
  end()
})

test("children array function", ({similar, end}) => {
  similar(s({children: [Function]}), {children: [Function]})
  end()
})

test("aria", ({similar, end}) => {
  similar(s({aria: {id: "1"}}), {data: {attrs: {"aria-id": "1"}}})
  end()
})

test("data", ({similar, end}) => {
  similar(
    s({
      data: {
        id: "1",
        attributes: {NAME: "test"},
      },
    }),
    {
      data: {
        attrs: {
          "data-id": "1",
          "data-attributes-name": "test",
        },
      },
    }
  )
  end()
})

test("full without functions", ({same, end}) => {
  same(
    s({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
    }),
    {
      sel: "s#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {
          title: "x",
          href: "/a",
        },
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "hook": {},
        "on": {},
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("full", ({similar, end}) => {
  similar(
    s({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
      "hook": {insert: () => null},
    }),
    {
      sel: "s#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {title: "x"},
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("html", ({equal, end}) => {
  equal(
    toHTML(s({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        attributes: {NAME: "Kurtis Rainbolt-Greene"},
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<s id=\"b\" class=\"c d active\" yyy=\"y\" xxx=\"x\" data-id=\"1\" data-attributes-name=\"Kurtis Rainbolt-Greene\" aria-role=\"navigation\" title=\"x\" href=\"/a\" style=\"border: 1px\">test</s>"
  )
  end()
})

test("html with plugins", ({equal, end}) => {
  equal(
    toHTMLWithPlugins(s({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<s id=\"b\" class=\"c d active\" title=\"x\" href=\"/a\" yyy=\"y\" xxx=\"x\" data-name=\"Kurtis\" data-id=\"1\" aria-role=\"navigation\" style=\"border: 1px\">test</s>"
  )
  end()
})

test("empty", ({same, end}) => {
  same(
    samp(),
    {
      children: undefined,
      data: {
        "attrs": {},
        "class": {},
        "hook": {},
        "on": {},
        "props": {},
        "style": {},
      },
      elm: undefined,
      key: undefined,
      sel: "samp",
      text: undefined,
    }
  )
  end()
})

test("selector", ({similar, end}) => {
  similar(samp({selector: ".value"}), {sel: "samp.value"})
  end()
})

test("children string", ({similar, end}) => {
  similar(samp({children: "test"}), {text: "test"})
  end()
})

test("children array string", ({similar, end}) => {
  similar(samp({children: ["test"]}), {children: [{text: "test"}]})
  end()
})

test("children function", ({similar, end}) => {
  similar(samp({children: Function}), {children: [Function]})
  end()
})

test("children array function", ({similar, end}) => {
  similar(samp({children: [Function]}), {children: [Function]})
  end()
})

test("aria", ({similar, end}) => {
  similar(samp({aria: {id: "1"}}), {data: {attrs: {"aria-id": "1"}}})
  end()
})

test("data", ({similar, end}) => {
  similar(
    samp({
      data: {
        id: "1",
        attributes: {NAME: "test"},
      },
    }),
    {
      data: {
        attrs: {
          "data-id": "1",
          "data-attributes-name": "test",
        },
      },
    }
  )
  end()
})

test("full without functions", ({same, end}) => {
  same(
    samp({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
    }),
    {
      sel: "samp#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {
          title: "x",
          href: "/a",
        },
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "hook": {},
        "on": {},
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("full", ({similar, end}) => {
  similar(
    samp({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
      "hook": {insert: () => null},
    }),
    {
      sel: "samp#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {title: "x"},
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("html", ({equal, end}) => {
  equal(
    toHTML(samp({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        attributes: {NAME: "Kurtis Rainbolt-Greene"},
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<samp id=\"b\" class=\"c d active\" yyy=\"y\" xxx=\"x\" data-id=\"1\" data-attributes-name=\"Kurtis Rainbolt-Greene\" aria-role=\"navigation\" title=\"x\" href=\"/a\" style=\"border: 1px\">test</samp>"
  )
  end()
})

test("html with plugins", ({equal, end}) => {
  equal(
    toHTMLWithPlugins(samp({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<samp id=\"b\" class=\"c d active\" title=\"x\" href=\"/a\" yyy=\"y\" xxx=\"x\" data-name=\"Kurtis\" data-id=\"1\" aria-role=\"navigation\" style=\"border: 1px\">test</samp>"
  )
  end()
})

test("empty", ({same, end}) => {
  same(
    script(),
    {
      children: undefined,
      data: {
        "attrs": {},
        "class": {},
        "hook": {},
        "on": {},
        "props": {},
        "style": {},
      },
      elm: undefined,
      key: undefined,
      sel: "script",
      text: undefined,
    }
  )
  end()
})

test("selector", ({similar, end}) => {
  similar(script({selector: ".value"}), {sel: "script.value"})
  end()
})

test("children string", ({similar, end}) => {
  similar(script({children: "test"}), {text: "test"})
  end()
})

test("children array string", ({similar, end}) => {
  similar(script({children: ["test"]}), {children: [{text: "test"}]})
  end()
})

test("children function", ({similar, end}) => {
  similar(script({children: Function}), {children: [Function]})
  end()
})

test("children array function", ({similar, end}) => {
  similar(script({children: [Function]}), {children: [Function]})
  end()
})

test("aria", ({similar, end}) => {
  similar(script({aria: {id: "1"}}), {data: {attrs: {"aria-id": "1"}}})
  end()
})

test("data", ({similar, end}) => {
  similar(
    script({
      data: {
        id: "1",
        attributes: {NAME: "test"},
      },
    }),
    {
      data: {
        attrs: {
          "data-id": "1",
          "data-attributes-name": "test",
        },
      },
    }
  )
  end()
})

test("full without functions", ({same, end}) => {
  same(
    script({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
    }),
    {
      sel: "script#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {
          title: "x",
          href: "/a",
        },
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "hook": {},
        "on": {},
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("full", ({similar, end}) => {
  similar(
    script({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
      "hook": {insert: () => null},
    }),
    {
      sel: "script#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {title: "x"},
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("html", ({equal, end}) => {
  equal(
    toHTML(script({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        attributes: {NAME: "Kurtis Rainbolt-Greene"},
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<script id=\"b\" class=\"c d active\" yyy=\"y\" xxx=\"x\" data-id=\"1\" data-attributes-name=\"Kurtis Rainbolt-Greene\" aria-role=\"navigation\" title=\"x\" href=\"/a\" style=\"border: 1px\">test</script>"
  )
  end()
})

test("html with plugins", ({equal, end}) => {
  equal(
    toHTMLWithPlugins(script({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<script id=\"b\" class=\"c d active\" title=\"x\" href=\"/a\" yyy=\"y\" xxx=\"x\" data-name=\"Kurtis\" data-id=\"1\" aria-role=\"navigation\" style=\"border: 1px\">test</script>"
  )
  end()
})

test("empty", ({same, end}) => {
  same(
    section(),
    {
      children: undefined,
      data: {
        "attrs": {},
        "class": {},
        "hook": {},
        "on": {},
        "props": {},
        "style": {},
      },
      elm: undefined,
      key: undefined,
      sel: "section",
      text: undefined,
    }
  )
  end()
})

test("selector", ({similar, end}) => {
  similar(section({selector: ".value"}), {sel: "section.value"})
  end()
})

test("children string", ({similar, end}) => {
  similar(section({children: "test"}), {text: "test"})
  end()
})

test("children array string", ({similar, end}) => {
  similar(section({children: ["test"]}), {children: [{text: "test"}]})
  end()
})

test("children function", ({similar, end}) => {
  similar(section({children: Function}), {children: [Function]})
  end()
})

test("children array function", ({similar, end}) => {
  similar(section({children: [Function]}), {children: [Function]})
  end()
})

test("aria", ({similar, end}) => {
  similar(section({aria: {id: "1"}}), {data: {attrs: {"aria-id": "1"}}})
  end()
})

test("data", ({similar, end}) => {
  similar(
    section({
      data: {
        id: "1",
        attributes: {NAME: "test"},
      },
    }),
    {
      data: {
        attrs: {
          "data-id": "1",
          "data-attributes-name": "test",
        },
      },
    }
  )
  end()
})

test("full without functions", ({same, end}) => {
  same(
    section({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
    }),
    {
      sel: "section#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {
          title: "x",
          href: "/a",
        },
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "hook": {},
        "on": {},
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("full", ({similar, end}) => {
  similar(
    section({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
      "hook": {insert: () => null},
    }),
    {
      sel: "section#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {title: "x"},
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("html", ({equal, end}) => {
  equal(
    toHTML(section({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        attributes: {NAME: "Kurtis Rainbolt-Greene"},
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<section id=\"b\" class=\"c d active\" yyy=\"y\" xxx=\"x\" data-id=\"1\" data-attributes-name=\"Kurtis Rainbolt-Greene\" aria-role=\"navigation\" title=\"x\" href=\"/a\" style=\"border: 1px\">test</section>"
  )
  end()
})

test("html with plugins", ({equal, end}) => {
  equal(
    toHTMLWithPlugins(section({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<section id=\"b\" class=\"c d active\" title=\"x\" href=\"/a\" yyy=\"y\" xxx=\"x\" data-name=\"Kurtis\" data-id=\"1\" aria-role=\"navigation\" style=\"border: 1px\">test</section>"
  )
  end()
})

test("empty", ({same, end}) => {
  same(
    select(),
    {
      children: undefined,
      data: {
        "attrs": {},
        "class": {},
        "hook": {},
        "on": {},
        "props": {},
        "style": {},
      },
      elm: undefined,
      key: undefined,
      sel: "select",
      text: undefined,
    }
  )
  end()
})

test("selector", ({similar, end}) => {
  similar(select({selector: ".value"}), {sel: "select.value"})
  end()
})

test("children string", ({similar, end}) => {
  similar(select({children: "test"}), {text: "test"})
  end()
})

test("children array string", ({similar, end}) => {
  similar(select({children: ["test"]}), {children: [{text: "test"}]})
  end()
})

test("children function", ({similar, end}) => {
  similar(select({children: Function}), {children: [Function]})
  end()
})

test("children array function", ({similar, end}) => {
  similar(select({children: [Function]}), {children: [Function]})
  end()
})

test("aria", ({similar, end}) => {
  similar(select({aria: {id: "1"}}), {data: {attrs: {"aria-id": "1"}}})
  end()
})

test("data", ({similar, end}) => {
  similar(
    select({
      data: {
        id: "1",
        attributes: {NAME: "test"},
      },
    }),
    {
      data: {
        attrs: {
          "data-id": "1",
          "data-attributes-name": "test",
        },
      },
    }
  )
  end()
})

test("full without functions", ({same, end}) => {
  same(
    select({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
    }),
    {
      sel: "select#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {
          title: "x",
          href: "/a",
        },
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "hook": {},
        "on": {},
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("full", ({similar, end}) => {
  similar(
    select({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
      "hook": {insert: () => null},
    }),
    {
      sel: "select#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {title: "x"},
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("html", ({equal, end}) => {
  equal(
    toHTML(select({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        attributes: {NAME: "Kurtis Rainbolt-Greene"},
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<select id=\"b\" class=\"c d active\" yyy=\"y\" xxx=\"x\" data-id=\"1\" data-attributes-name=\"Kurtis Rainbolt-Greene\" aria-role=\"navigation\" title=\"x\" href=\"/a\" style=\"border: 1px\">test</select>"
  )
  end()
})

test("html with plugins", ({equal, end}) => {
  equal(
    toHTMLWithPlugins(select({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<select id=\"b\" class=\"c d active\" title=\"x\" href=\"/a\" yyy=\"y\" xxx=\"x\" data-name=\"Kurtis\" data-id=\"1\" aria-role=\"navigation\" style=\"border: 1px\">test</select>"
  )
  end()
})

test("empty", ({same, end}) => {
  same(
    small(),
    {
      children: undefined,
      data: {
        "attrs": {},
        "class": {},
        "hook": {},
        "on": {},
        "props": {},
        "style": {},
      },
      elm: undefined,
      key: undefined,
      sel: "small",
      text: undefined,
    }
  )
  end()
})

test("selector", ({similar, end}) => {
  similar(small({selector: ".value"}), {sel: "small.value"})
  end()
})

test("children string", ({similar, end}) => {
  similar(small({children: "test"}), {text: "test"})
  end()
})

test("children array string", ({similar, end}) => {
  similar(small({children: ["test"]}), {children: [{text: "test"}]})
  end()
})

test("children function", ({similar, end}) => {
  similar(small({children: Function}), {children: [Function]})
  end()
})

test("children array function", ({similar, end}) => {
  similar(small({children: [Function]}), {children: [Function]})
  end()
})

test("aria", ({similar, end}) => {
  similar(small({aria: {id: "1"}}), {data: {attrs: {"aria-id": "1"}}})
  end()
})

test("data", ({similar, end}) => {
  similar(
    small({
      data: {
        id: "1",
        attributes: {NAME: "test"},
      },
    }),
    {
      data: {
        attrs: {
          "data-id": "1",
          "data-attributes-name": "test",
        },
      },
    }
  )
  end()
})

test("full without functions", ({same, end}) => {
  same(
    small({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
    }),
    {
      sel: "small#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {
          title: "x",
          href: "/a",
        },
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "hook": {},
        "on": {},
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("full", ({similar, end}) => {
  similar(
    small({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
      "hook": {insert: () => null},
    }),
    {
      sel: "small#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {title: "x"},
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("html", ({equal, end}) => {
  equal(
    toHTML(small({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        attributes: {NAME: "Kurtis Rainbolt-Greene"},
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<small id=\"b\" class=\"c d active\" yyy=\"y\" xxx=\"x\" data-id=\"1\" data-attributes-name=\"Kurtis Rainbolt-Greene\" aria-role=\"navigation\" title=\"x\" href=\"/a\" style=\"border: 1px\">test</small>"
  )
  end()
})

test("html with plugins", ({equal, end}) => {
  equal(
    toHTMLWithPlugins(small({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<small id=\"b\" class=\"c d active\" title=\"x\" href=\"/a\" yyy=\"y\" xxx=\"x\" data-name=\"Kurtis\" data-id=\"1\" aria-role=\"navigation\" style=\"border: 1px\">test</small>"
  )
  end()
})

test("empty", ({same, end}) => {
  same(
    span(),
    {
      children: undefined,
      data: {
        "attrs": {},
        "class": {},
        "hook": {},
        "on": {},
        "props": {},
        "style": {},
      },
      elm: undefined,
      key: undefined,
      sel: "span",
      text: undefined,
    }
  )
  end()
})

test("selector", ({similar, end}) => {
  similar(span({selector: ".value"}), {sel: "span.value"})
  end()
})

test("children string", ({similar, end}) => {
  similar(span({children: "test"}), {text: "test"})
  end()
})

test("children array string", ({similar, end}) => {
  similar(span({children: ["test"]}), {children: [{text: "test"}]})
  end()
})

test("children function", ({similar, end}) => {
  similar(span({children: Function}), {children: [Function]})
  end()
})

test("children array function", ({similar, end}) => {
  similar(span({children: [Function]}), {children: [Function]})
  end()
})

test("aria", ({similar, end}) => {
  similar(span({aria: {id: "1"}}), {data: {attrs: {"aria-id": "1"}}})
  end()
})

test("data", ({similar, end}) => {
  similar(
    span({
      data: {
        id: "1",
        attributes: {NAME: "test"},
      },
    }),
    {
      data: {
        attrs: {
          "data-id": "1",
          "data-attributes-name": "test",
        },
      },
    }
  )
  end()
})

test("full without functions", ({same, end}) => {
  same(
    span({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
    }),
    {
      sel: "span#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {
          title: "x",
          href: "/a",
        },
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "hook": {},
        "on": {},
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("full", ({similar, end}) => {
  similar(
    span({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
      "hook": {insert: () => null},
    }),
    {
      sel: "span#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {title: "x"},
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("html", ({equal, end}) => {
  equal(
    toHTML(span({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        attributes: {NAME: "Kurtis Rainbolt-Greene"},
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<span id=\"b\" class=\"c d active\" yyy=\"y\" xxx=\"x\" data-id=\"1\" data-attributes-name=\"Kurtis Rainbolt-Greene\" aria-role=\"navigation\" title=\"x\" href=\"/a\" style=\"border: 1px\">test</span>"
  )
  end()
})

test("html with plugins", ({equal, end}) => {
  equal(
    toHTMLWithPlugins(span({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<span id=\"b\" class=\"c d active\" title=\"x\" href=\"/a\" yyy=\"y\" xxx=\"x\" data-name=\"Kurtis\" data-id=\"1\" aria-role=\"navigation\" style=\"border: 1px\">test</span>"
  )
  end()
})

test("empty", ({same, end}) => {
  same(
    strong(),
    {
      children: undefined,
      data: {
        "attrs": {},
        "class": {},
        "hook": {},
        "on": {},
        "props": {},
        "style": {},
      },
      elm: undefined,
      key: undefined,
      sel: "strong",
      text: undefined,
    }
  )
  end()
})

test("selector", ({similar, end}) => {
  similar(strong({selector: ".value"}), {sel: "strong.value"})
  end()
})

test("children string", ({similar, end}) => {
  similar(strong({children: "test"}), {text: "test"})
  end()
})

test("children array string", ({similar, end}) => {
  similar(strong({children: ["test"]}), {children: [{text: "test"}]})
  end()
})

test("children function", ({similar, end}) => {
  similar(strong({children: Function}), {children: [Function]})
  end()
})

test("children array function", ({similar, end}) => {
  similar(strong({children: [Function]}), {children: [Function]})
  end()
})

test("aria", ({similar, end}) => {
  similar(strong({aria: {id: "1"}}), {data: {attrs: {"aria-id": "1"}}})
  end()
})

test("data", ({similar, end}) => {
  similar(
    strong({
      data: {
        id: "1",
        attributes: {NAME: "test"},
      },
    }),
    {
      data: {
        attrs: {
          "data-id": "1",
          "data-attributes-name": "test",
        },
      },
    }
  )
  end()
})

test("full without functions", ({same, end}) => {
  same(
    strong({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
    }),
    {
      sel: "strong#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {
          title: "x",
          href: "/a",
        },
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "hook": {},
        "on": {},
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("full", ({similar, end}) => {
  similar(
    strong({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
      "hook": {insert: () => null},
    }),
    {
      sel: "strong#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {title: "x"},
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("html", ({equal, end}) => {
  equal(
    toHTML(strong({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        attributes: {NAME: "Kurtis Rainbolt-Greene"},
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<strong id=\"b\" class=\"c d active\" yyy=\"y\" xxx=\"x\" data-id=\"1\" data-attributes-name=\"Kurtis Rainbolt-Greene\" aria-role=\"navigation\" title=\"x\" href=\"/a\" style=\"border: 1px\">test</strong>"
  )
  end()
})

test("html with plugins", ({equal, end}) => {
  equal(
    toHTMLWithPlugins(strong({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<strong id=\"b\" class=\"c d active\" title=\"x\" href=\"/a\" yyy=\"y\" xxx=\"x\" data-name=\"Kurtis\" data-id=\"1\" aria-role=\"navigation\" style=\"border: 1px\">test</strong>"
  )
  end()
})

test("empty", ({same, end}) => {
  same(
    style(),
    {
      children: undefined,
      data: {
        "attrs": {},
        "class": {},
        "hook": {},
        "on": {},
        "props": {},
        "style": {},
      },
      elm: undefined,
      key: undefined,
      sel: "style",
      text: undefined,
    }
  )
  end()
})

test("selector", ({similar, end}) => {
  similar(style({selector: ".value"}), {sel: "style.value"})
  end()
})

test("children string", ({similar, end}) => {
  similar(style({children: "test"}), {text: "test"})
  end()
})

test("children array string", ({similar, end}) => {
  similar(style({children: ["test"]}), {children: [{text: "test"}]})
  end()
})

test("children function", ({similar, end}) => {
  similar(style({children: Function}), {children: [Function]})
  end()
})

test("children array function", ({similar, end}) => {
  similar(style({children: [Function]}), {children: [Function]})
  end()
})

test("aria", ({similar, end}) => {
  similar(style({aria: {id: "1"}}), {data: {attrs: {"aria-id": "1"}}})
  end()
})

test("data", ({similar, end}) => {
  similar(
    style({
      data: {
        id: "1",
        attributes: {NAME: "test"},
      },
    }),
    {
      data: {
        attrs: {
          "data-id": "1",
          "data-attributes-name": "test",
        },
      },
    }
  )
  end()
})

test("full without functions", ({same, end}) => {
  same(
    style({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
    }),
    {
      sel: "style#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {
          title: "x",
          href: "/a",
        },
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "hook": {},
        "on": {},
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("full", ({similar, end}) => {
  similar(
    style({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
      "hook": {insert: () => null},
    }),
    {
      sel: "style#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {title: "x"},
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("html", ({equal, end}) => {
  equal(
    toHTML(style({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        attributes: {NAME: "Kurtis Rainbolt-Greene"},
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<style id=\"b\" class=\"c d active\" yyy=\"y\" xxx=\"x\" data-id=\"1\" data-attributes-name=\"Kurtis Rainbolt-Greene\" aria-role=\"navigation\" title=\"x\" href=\"/a\" style=\"border: 1px\">test</style>"
  )
  end()
})

test("html with plugins", ({equal, end}) => {
  equal(
    toHTMLWithPlugins(style({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<style id=\"b\" class=\"c d active\" title=\"x\" href=\"/a\" yyy=\"y\" xxx=\"x\" data-name=\"Kurtis\" data-id=\"1\" aria-role=\"navigation\" style=\"border: 1px\">test</style>"
  )
  end()
})

test("empty", ({same, end}) => {
  same(
    sub(),
    {
      children: undefined,
      data: {
        "attrs": {},
        "class": {},
        "hook": {},
        "on": {},
        "props": {},
        "style": {},
      },
      elm: undefined,
      key: undefined,
      sel: "sub",
      text: undefined,
    }
  )
  end()
})

test("selector", ({similar, end}) => {
  similar(sub({selector: ".value"}), {sel: "sub.value"})
  end()
})

test("children string", ({similar, end}) => {
  similar(sub({children: "test"}), {text: "test"})
  end()
})

test("children array string", ({similar, end}) => {
  similar(sub({children: ["test"]}), {children: [{text: "test"}]})
  end()
})

test("children function", ({similar, end}) => {
  similar(sub({children: Function}), {children: [Function]})
  end()
})

test("children array function", ({similar, end}) => {
  similar(sub({children: [Function]}), {children: [Function]})
  end()
})

test("aria", ({similar, end}) => {
  similar(sub({aria: {id: "1"}}), {data: {attrs: {"aria-id": "1"}}})
  end()
})

test("data", ({similar, end}) => {
  similar(
    sub({
      data: {
        id: "1",
        attributes: {NAME: "test"},
      },
    }),
    {
      data: {
        attrs: {
          "data-id": "1",
          "data-attributes-name": "test",
        },
      },
    }
  )
  end()
})

test("full without functions", ({same, end}) => {
  same(
    sub({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
    }),
    {
      sel: "sub#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {
          title: "x",
          href: "/a",
        },
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "hook": {},
        "on": {},
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("full", ({similar, end}) => {
  similar(
    sub({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
      "hook": {insert: () => null},
    }),
    {
      sel: "sub#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {title: "x"},
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("html", ({equal, end}) => {
  equal(
    toHTML(sub({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        attributes: {NAME: "Kurtis Rainbolt-Greene"},
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<sub id=\"b\" class=\"c d active\" yyy=\"y\" xxx=\"x\" data-id=\"1\" data-attributes-name=\"Kurtis Rainbolt-Greene\" aria-role=\"navigation\" title=\"x\" href=\"/a\" style=\"border: 1px\">test</sub>"
  )
  end()
})

test("html with plugins", ({equal, end}) => {
  equal(
    toHTMLWithPlugins(sub({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<sub id=\"b\" class=\"c d active\" title=\"x\" href=\"/a\" yyy=\"y\" xxx=\"x\" data-name=\"Kurtis\" data-id=\"1\" aria-role=\"navigation\" style=\"border: 1px\">test</sub>"
  )
  end()
})

test("empty", ({same, end}) => {
  same(
    summary(),
    {
      children: undefined,
      data: {
        "attrs": {},
        "class": {},
        "hook": {},
        "on": {},
        "props": {},
        "style": {},
      },
      elm: undefined,
      key: undefined,
      sel: "summary",
      text: undefined,
    }
  )
  end()
})

test("selector", ({similar, end}) => {
  similar(summary({selector: ".value"}), {sel: "summary.value"})
  end()
})

test("children string", ({similar, end}) => {
  similar(summary({children: "test"}), {text: "test"})
  end()
})

test("children array string", ({similar, end}) => {
  similar(summary({children: ["test"]}), {children: [{text: "test"}]})
  end()
})

test("children function", ({similar, end}) => {
  similar(summary({children: Function}), {children: [Function]})
  end()
})

test("children array function", ({similar, end}) => {
  similar(summary({children: [Function]}), {children: [Function]})
  end()
})

test("aria", ({similar, end}) => {
  similar(summary({aria: {id: "1"}}), {data: {attrs: {"aria-id": "1"}}})
  end()
})

test("data", ({similar, end}) => {
  similar(
    summary({
      data: {
        id: "1",
        attributes: {NAME: "test"},
      },
    }),
    {
      data: {
        attrs: {
          "data-id": "1",
          "data-attributes-name": "test",
        },
      },
    }
  )
  end()
})

test("full without functions", ({same, end}) => {
  same(
    summary({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
    }),
    {
      sel: "summary#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {
          title: "x",
          href: "/a",
        },
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "hook": {},
        "on": {},
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("full", ({similar, end}) => {
  similar(
    summary({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
      "hook": {insert: () => null},
    }),
    {
      sel: "summary#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {title: "x"},
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("html", ({equal, end}) => {
  equal(
    toHTML(summary({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        attributes: {NAME: "Kurtis Rainbolt-Greene"},
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<summary id=\"b\" class=\"c d active\" yyy=\"y\" xxx=\"x\" data-id=\"1\" data-attributes-name=\"Kurtis Rainbolt-Greene\" aria-role=\"navigation\" title=\"x\" href=\"/a\" style=\"border: 1px\">test</summary>"
  )
  end()
})

test("html with plugins", ({equal, end}) => {
  equal(
    toHTMLWithPlugins(summary({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<summary id=\"b\" class=\"c d active\" title=\"x\" href=\"/a\" yyy=\"y\" xxx=\"x\" data-name=\"Kurtis\" data-id=\"1\" aria-role=\"navigation\" style=\"border: 1px\">test</summary>"
  )
  end()
})

test("empty", ({same, end}) => {
  same(
    sup(),
    {
      children: undefined,
      data: {
        "attrs": {},
        "class": {},
        "hook": {},
        "on": {},
        "props": {},
        "style": {},
      },
      elm: undefined,
      key: undefined,
      sel: "sup",
      text: undefined,
    }
  )
  end()
})

test("selector", ({similar, end}) => {
  similar(sup({selector: ".value"}), {sel: "sup.value"})
  end()
})

test("children string", ({similar, end}) => {
  similar(sup({children: "test"}), {text: "test"})
  end()
})

test("children array string", ({similar, end}) => {
  similar(sup({children: ["test"]}), {children: [{text: "test"}]})
  end()
})

test("children function", ({similar, end}) => {
  similar(sup({children: Function}), {children: [Function]})
  end()
})

test("children array function", ({similar, end}) => {
  similar(sup({children: [Function]}), {children: [Function]})
  end()
})

test("aria", ({similar, end}) => {
  similar(sup({aria: {id: "1"}}), {data: {attrs: {"aria-id": "1"}}})
  end()
})

test("data", ({similar, end}) => {
  similar(
    sup({
      data: {
        id: "1",
        attributes: {NAME: "test"},
      },
    }),
    {
      data: {
        attrs: {
          "data-id": "1",
          "data-attributes-name": "test",
        },
      },
    }
  )
  end()
})

test("full without functions", ({same, end}) => {
  same(
    sup({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
    }),
    {
      sel: "sup#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {
          title: "x",
          href: "/a",
        },
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "hook": {},
        "on": {},
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("full", ({similar, end}) => {
  similar(
    sup({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
      "hook": {insert: () => null},
    }),
    {
      sel: "sup#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {title: "x"},
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("html", ({equal, end}) => {
  equal(
    toHTML(sup({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        attributes: {NAME: "Kurtis Rainbolt-Greene"},
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<sup id=\"b\" class=\"c d active\" yyy=\"y\" xxx=\"x\" data-id=\"1\" data-attributes-name=\"Kurtis Rainbolt-Greene\" aria-role=\"navigation\" title=\"x\" href=\"/a\" style=\"border: 1px\">test</sup>"
  )
  end()
})

test("html with plugins", ({equal, end}) => {
  equal(
    toHTMLWithPlugins(sup({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<sup id=\"b\" class=\"c d active\" title=\"x\" href=\"/a\" yyy=\"y\" xxx=\"x\" data-name=\"Kurtis\" data-id=\"1\" aria-role=\"navigation\" style=\"border: 1px\">test</sup>"
  )
  end()
})

test("empty", ({same, end}) => {
  same(
    table(),
    {
      children: undefined,
      data: {
        "attrs": {},
        "class": {},
        "hook": {},
        "on": {},
        "props": {},
        "style": {},
      },
      elm: undefined,
      key: undefined,
      sel: "table",
      text: undefined,
    }
  )
  end()
})

test("selector", ({similar, end}) => {
  similar(table({selector: ".value"}), {sel: "table.value"})
  end()
})

test("children string", ({similar, end}) => {
  similar(table({children: "test"}), {text: "test"})
  end()
})

test("children array string", ({similar, end}) => {
  similar(table({children: ["test"]}), {children: [{text: "test"}]})
  end()
})

test("children function", ({similar, end}) => {
  similar(table({children: Function}), {children: [Function]})
  end()
})

test("children array function", ({similar, end}) => {
  similar(table({children: [Function]}), {children: [Function]})
  end()
})

test("aria", ({similar, end}) => {
  similar(table({aria: {id: "1"}}), {data: {attrs: {"aria-id": "1"}}})
  end()
})

test("data", ({similar, end}) => {
  similar(
    table({
      data: {
        id: "1",
        attributes: {NAME: "test"},
      },
    }),
    {
      data: {
        attrs: {
          "data-id": "1",
          "data-attributes-name": "test",
        },
      },
    }
  )
  end()
})

test("full without functions", ({same, end}) => {
  same(
    table({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
    }),
    {
      sel: "table#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {
          title: "x",
          href: "/a",
        },
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "hook": {},
        "on": {},
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("full", ({similar, end}) => {
  similar(
    table({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
      "hook": {insert: () => null},
    }),
    {
      sel: "table#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {title: "x"},
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("html", ({equal, end}) => {
  equal(
    toHTML(table({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        attributes: {NAME: "Kurtis Rainbolt-Greene"},
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<table id=\"b\" class=\"c d active\" yyy=\"y\" xxx=\"x\" data-id=\"1\" data-attributes-name=\"Kurtis Rainbolt-Greene\" aria-role=\"navigation\" title=\"x\" href=\"/a\" style=\"border: 1px\">test</table>"
  )
  end()
})

test("html with plugins", ({equal, end}) => {
  equal(
    toHTMLWithPlugins(table({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<table id=\"b\" class=\"c d active\" title=\"x\" href=\"/a\" yyy=\"y\" xxx=\"x\" data-name=\"Kurtis\" data-id=\"1\" aria-role=\"navigation\" style=\"border: 1px\">test</table>"
  )
  end()
})

test("empty", ({same, end}) => {
  same(
    tbody(),
    {
      children: undefined,
      data: {
        "attrs": {},
        "class": {},
        "hook": {},
        "on": {},
        "props": {},
        "style": {},
      },
      elm: undefined,
      key: undefined,
      sel: "tbody",
      text: undefined,
    }
  )
  end()
})

test("selector", ({similar, end}) => {
  similar(tbody({selector: ".value"}), {sel: "tbody.value"})
  end()
})

test("children string", ({similar, end}) => {
  similar(tbody({children: "test"}), {text: "test"})
  end()
})

test("children array string", ({similar, end}) => {
  similar(tbody({children: ["test"]}), {children: [{text: "test"}]})
  end()
})

test("children function", ({similar, end}) => {
  similar(tbody({children: Function}), {children: [Function]})
  end()
})

test("children array function", ({similar, end}) => {
  similar(tbody({children: [Function]}), {children: [Function]})
  end()
})

test("aria", ({similar, end}) => {
  similar(tbody({aria: {id: "1"}}), {data: {attrs: {"aria-id": "1"}}})
  end()
})

test("data", ({similar, end}) => {
  similar(
    tbody({
      data: {
        id: "1",
        attributes: {NAME: "test"},
      },
    }),
    {
      data: {
        attrs: {
          "data-id": "1",
          "data-attributes-name": "test",
        },
      },
    }
  )
  end()
})

test("full without functions", ({same, end}) => {
  same(
    tbody({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
    }),
    {
      sel: "tbody#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {
          title: "x",
          href: "/a",
        },
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "hook": {},
        "on": {},
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("full", ({similar, end}) => {
  similar(
    tbody({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
      "hook": {insert: () => null},
    }),
    {
      sel: "tbody#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {title: "x"},
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("html", ({equal, end}) => {
  equal(
    toHTML(tbody({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        attributes: {NAME: "Kurtis Rainbolt-Greene"},
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<tbody id=\"b\" class=\"c d active\" yyy=\"y\" xxx=\"x\" data-id=\"1\" data-attributes-name=\"Kurtis Rainbolt-Greene\" aria-role=\"navigation\" title=\"x\" href=\"/a\" style=\"border: 1px\">test</tbody>"
  )
  end()
})

test("html with plugins", ({equal, end}) => {
  equal(
    toHTMLWithPlugins(tbody({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<tbody id=\"b\" class=\"c d active\" title=\"x\" href=\"/a\" yyy=\"y\" xxx=\"x\" data-name=\"Kurtis\" data-id=\"1\" aria-role=\"navigation\" style=\"border: 1px\">test</tbody>"
  )
  end()
})

test("empty", ({same, end}) => {
  same(
    td(),
    {
      children: undefined,
      data: {
        "attrs": {},
        "class": {},
        "hook": {},
        "on": {},
        "props": {},
        "style": {},
      },
      elm: undefined,
      key: undefined,
      sel: "td",
      text: undefined,
    }
  )
  end()
})

test("selector", ({similar, end}) => {
  similar(td({selector: ".value"}), {sel: "td.value"})
  end()
})

test("children string", ({similar, end}) => {
  similar(td({children: "test"}), {text: "test"})
  end()
})

test("children array string", ({similar, end}) => {
  similar(td({children: ["test"]}), {children: [{text: "test"}]})
  end()
})

test("children function", ({similar, end}) => {
  similar(td({children: Function}), {children: [Function]})
  end()
})

test("children array function", ({similar, end}) => {
  similar(td({children: [Function]}), {children: [Function]})
  end()
})

test("aria", ({similar, end}) => {
  similar(td({aria: {id: "1"}}), {data: {attrs: {"aria-id": "1"}}})
  end()
})

test("data", ({similar, end}) => {
  similar(
    td({
      data: {
        id: "1",
        attributes: {NAME: "test"},
      },
    }),
    {
      data: {
        attrs: {
          "data-id": "1",
          "data-attributes-name": "test",
        },
      },
    }
  )
  end()
})

test("full without functions", ({same, end}) => {
  same(
    td({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
    }),
    {
      sel: "td#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {
          title: "x",
          href: "/a",
        },
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "hook": {},
        "on": {},
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("full", ({similar, end}) => {
  similar(
    td({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
      "hook": {insert: () => null},
    }),
    {
      sel: "td#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {title: "x"},
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("html", ({equal, end}) => {
  equal(
    toHTML(td({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        attributes: {NAME: "Kurtis Rainbolt-Greene"},
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<td id=\"b\" class=\"c d active\" yyy=\"y\" xxx=\"x\" data-id=\"1\" data-attributes-name=\"Kurtis Rainbolt-Greene\" aria-role=\"navigation\" title=\"x\" href=\"/a\" style=\"border: 1px\">test</td>"
  )
  end()
})

test("html with plugins", ({equal, end}) => {
  equal(
    toHTMLWithPlugins(td({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<td id=\"b\" class=\"c d active\" title=\"x\" href=\"/a\" yyy=\"y\" xxx=\"x\" data-name=\"Kurtis\" data-id=\"1\" aria-role=\"navigation\" style=\"border: 1px\">test</td>"
  )
  end()
})

test("empty", ({same, end}) => {
  same(
    template(),
    {
      children: undefined,
      data: {
        "attrs": {},
        "class": {},
        "hook": {},
        "on": {},
        "props": {},
        "style": {},
      },
      elm: undefined,
      key: undefined,
      sel: "template",
      text: undefined,
    }
  )
  end()
})

test("selector", ({similar, end}) => {
  similar(template({selector: ".value"}), {sel: "template.value"})
  end()
})

test("children string", ({similar, end}) => {
  similar(template({children: "test"}), {text: "test"})
  end()
})

test("children array string", ({similar, end}) => {
  similar(template({children: ["test"]}), {children: [{text: "test"}]})
  end()
})

test("children function", ({similar, end}) => {
  similar(template({children: Function}), {children: [Function]})
  end()
})

test("children array function", ({similar, end}) => {
  similar(template({children: [Function]}), {children: [Function]})
  end()
})

test("aria", ({similar, end}) => {
  similar(template({aria: {id: "1"}}), {data: {attrs: {"aria-id": "1"}}})
  end()
})

test("data", ({similar, end}) => {
  similar(
    template({
      data: {
        id: "1",
        attributes: {NAME: "test"},
      },
    }),
    {
      data: {
        attrs: {
          "data-id": "1",
          "data-attributes-name": "test",
        },
      },
    }
  )
  end()
})

test("full without functions", ({same, end}) => {
  same(
    template({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
    }),
    {
      sel: "template#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {
          title: "x",
          href: "/a",
        },
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "hook": {},
        "on": {},
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("full", ({similar, end}) => {
  similar(
    template({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
      "hook": {insert: () => null},
    }),
    {
      sel: "template#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {title: "x"},
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("html", ({equal, end}) => {
  equal(
    toHTML(template({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        attributes: {NAME: "Kurtis Rainbolt-Greene"},
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<template id=\"b\" class=\"c d active\" yyy=\"y\" xxx=\"x\" data-id=\"1\" data-attributes-name=\"Kurtis Rainbolt-Greene\" aria-role=\"navigation\" title=\"x\" href=\"/a\" style=\"border: 1px\">test</template>"
  )
  end()
})

test("html with plugins", ({equal, end}) => {
  equal(
    toHTMLWithPlugins(template({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<template id=\"b\" class=\"c d active\" title=\"x\" href=\"/a\" yyy=\"y\" xxx=\"x\" data-name=\"Kurtis\" data-id=\"1\" aria-role=\"navigation\" style=\"border: 1px\">test</template>"
  )
  end()
})

test("empty", ({same, end}) => {
  same(
    textarea(),
    {
      children: undefined,
      data: {
        "attrs": {},
        "class": {},
        "hook": {},
        "on": {},
        "props": {},
        "style": {},
      },
      elm: undefined,
      key: undefined,
      sel: "textarea",
      text: undefined,
    }
  )
  end()
})

test("selector", ({similar, end}) => {
  similar(textarea({selector: ".value"}), {sel: "textarea.value"})
  end()
})

test("children string", ({similar, end}) => {
  similar(textarea({children: "test"}), {text: "test"})
  end()
})

test("children array string", ({similar, end}) => {
  similar(textarea({children: ["test"]}), {children: [{text: "test"}]})
  end()
})

test("children function", ({similar, end}) => {
  similar(textarea({children: Function}), {children: [Function]})
  end()
})

test("children array function", ({similar, end}) => {
  similar(textarea({children: [Function]}), {children: [Function]})
  end()
})

test("aria", ({similar, end}) => {
  similar(textarea({aria: {id: "1"}}), {data: {attrs: {"aria-id": "1"}}})
  end()
})

test("data", ({similar, end}) => {
  similar(
    textarea({
      data: {
        id: "1",
        attributes: {NAME: "test"},
      },
    }),
    {
      data: {
        attrs: {
          "data-id": "1",
          "data-attributes-name": "test",
        },
      },
    }
  )
  end()
})

test("full without functions", ({same, end}) => {
  same(
    textarea({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
    }),
    {
      sel: "textarea#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {
          title: "x",
          href: "/a",
        },
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "hook": {},
        "on": {},
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("full", ({similar, end}) => {
  similar(
    textarea({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
      "hook": {insert: () => null},
    }),
    {
      sel: "textarea#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {title: "x"},
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("html", ({equal, end}) => {
  equal(
    toHTML(textarea({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        attributes: {NAME: "Kurtis Rainbolt-Greene"},
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<textarea id=\"b\" class=\"c d active\" yyy=\"y\" xxx=\"x\" data-id=\"1\" data-attributes-name=\"Kurtis Rainbolt-Greene\" aria-role=\"navigation\" title=\"x\" href=\"/a\" style=\"border: 1px\">test</textarea>"
  )
  end()
})

test("html with plugins", ({equal, end}) => {
  equal(
    toHTMLWithPlugins(textarea({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<textarea id=\"b\" class=\"c d active\" title=\"x\" href=\"/a\" yyy=\"y\" xxx=\"x\" data-name=\"Kurtis\" data-id=\"1\" aria-role=\"navigation\" style=\"border: 1px\">test</textarea>"
  )
  end()
})

test("empty", ({same, end}) => {
  same(
    tfoot(),
    {
      children: undefined,
      data: {
        "attrs": {},
        "class": {},
        "hook": {},
        "on": {},
        "props": {},
        "style": {},
      },
      elm: undefined,
      key: undefined,
      sel: "tfoot",
      text: undefined,
    }
  )
  end()
})

test("selector", ({similar, end}) => {
  similar(tfoot({selector: ".value"}), {sel: "tfoot.value"})
  end()
})

test("children string", ({similar, end}) => {
  similar(tfoot({children: "test"}), {text: "test"})
  end()
})

test("children array string", ({similar, end}) => {
  similar(tfoot({children: ["test"]}), {children: [{text: "test"}]})
  end()
})

test("children function", ({similar, end}) => {
  similar(tfoot({children: Function}), {children: [Function]})
  end()
})

test("children array function", ({similar, end}) => {
  similar(tfoot({children: [Function]}), {children: [Function]})
  end()
})

test("aria", ({similar, end}) => {
  similar(tfoot({aria: {id: "1"}}), {data: {attrs: {"aria-id": "1"}}})
  end()
})

test("data", ({similar, end}) => {
  similar(
    tfoot({
      data: {
        id: "1",
        attributes: {NAME: "test"},
      },
    }),
    {
      data: {
        attrs: {
          "data-id": "1",
          "data-attributes-name": "test",
        },
      },
    }
  )
  end()
})

test("full without functions", ({same, end}) => {
  same(
    tfoot({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
    }),
    {
      sel: "tfoot#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {
          title: "x",
          href: "/a",
        },
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "hook": {},
        "on": {},
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("full", ({similar, end}) => {
  similar(
    tfoot({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
      "hook": {insert: () => null},
    }),
    {
      sel: "tfoot#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {title: "x"},
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("html", ({equal, end}) => {
  equal(
    toHTML(tfoot({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        attributes: {NAME: "Kurtis Rainbolt-Greene"},
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<tfoot id=\"b\" class=\"c d active\" yyy=\"y\" xxx=\"x\" data-id=\"1\" data-attributes-name=\"Kurtis Rainbolt-Greene\" aria-role=\"navigation\" title=\"x\" href=\"/a\" style=\"border: 1px\">test</tfoot>"
  )
  end()
})

test("html with plugins", ({equal, end}) => {
  equal(
    toHTMLWithPlugins(tfoot({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<tfoot id=\"b\" class=\"c d active\" title=\"x\" href=\"/a\" yyy=\"y\" xxx=\"x\" data-name=\"Kurtis\" data-id=\"1\" aria-role=\"navigation\" style=\"border: 1px\">test</tfoot>"
  )
  end()
})

test("empty", ({same, end}) => {
  same(
    th(),
    {
      children: undefined,
      data: {
        "attrs": {},
        "class": {},
        "hook": {},
        "on": {},
        "props": {},
        "style": {},
      },
      elm: undefined,
      key: undefined,
      sel: "th",
      text: undefined,
    }
  )
  end()
})

test("selector", ({similar, end}) => {
  similar(th({selector: ".value"}), {sel: "th.value"})
  end()
})

test("children string", ({similar, end}) => {
  similar(th({children: "test"}), {text: "test"})
  end()
})

test("children array string", ({similar, end}) => {
  similar(th({children: ["test"]}), {children: [{text: "test"}]})
  end()
})

test("children function", ({similar, end}) => {
  similar(th({children: Function}), {children: [Function]})
  end()
})

test("children array function", ({similar, end}) => {
  similar(th({children: [Function]}), {children: [Function]})
  end()
})

test("aria", ({similar, end}) => {
  similar(th({aria: {id: "1"}}), {data: {attrs: {"aria-id": "1"}}})
  end()
})

test("data", ({similar, end}) => {
  similar(
    th({
      data: {
        id: "1",
        attributes: {NAME: "test"},
      },
    }),
    {
      data: {
        attrs: {
          "data-id": "1",
          "data-attributes-name": "test",
        },
      },
    }
  )
  end()
})

test("full without functions", ({same, end}) => {
  same(
    th({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
    }),
    {
      sel: "th#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {
          title: "x",
          href: "/a",
        },
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "hook": {},
        "on": {},
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("full", ({similar, end}) => {
  similar(
    th({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
      "hook": {insert: () => null},
    }),
    {
      sel: "th#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {title: "x"},
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("html", ({equal, end}) => {
  equal(
    toHTML(th({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        attributes: {NAME: "Kurtis Rainbolt-Greene"},
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<th id=\"b\" class=\"c d active\" yyy=\"y\" xxx=\"x\" data-id=\"1\" data-attributes-name=\"Kurtis Rainbolt-Greene\" aria-role=\"navigation\" title=\"x\" href=\"/a\" style=\"border: 1px\">test</th>"
  )
  end()
})

test("html with plugins", ({equal, end}) => {
  equal(
    toHTMLWithPlugins(th({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<th id=\"b\" class=\"c d active\" title=\"x\" href=\"/a\" yyy=\"y\" xxx=\"x\" data-name=\"Kurtis\" data-id=\"1\" aria-role=\"navigation\" style=\"border: 1px\">test</th>"
  )
  end()
})

test("empty", ({same, end}) => {
  same(
    thead(),
    {
      children: undefined,
      data: {
        "attrs": {},
        "class": {},
        "hook": {},
        "on": {},
        "props": {},
        "style": {},
      },
      elm: undefined,
      key: undefined,
      sel: "thead",
      text: undefined,
    }
  )
  end()
})

test("selector", ({similar, end}) => {
  similar(thead({selector: ".value"}), {sel: "thead.value"})
  end()
})

test("children string", ({similar, end}) => {
  similar(thead({children: "test"}), {text: "test"})
  end()
})

test("children array string", ({similar, end}) => {
  similar(thead({children: ["test"]}), {children: [{text: "test"}]})
  end()
})

test("children function", ({similar, end}) => {
  similar(thead({children: Function}), {children: [Function]})
  end()
})

test("children array function", ({similar, end}) => {
  similar(thead({children: [Function]}), {children: [Function]})
  end()
})

test("aria", ({similar, end}) => {
  similar(thead({aria: {id: "1"}}), {data: {attrs: {"aria-id": "1"}}})
  end()
})

test("data", ({similar, end}) => {
  similar(
    thead({
      data: {
        id: "1",
        attributes: {NAME: "test"},
      },
    }),
    {
      data: {
        attrs: {
          "data-id": "1",
          "data-attributes-name": "test",
        },
      },
    }
  )
  end()
})

test("full without functions", ({same, end}) => {
  same(
    thead({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
    }),
    {
      sel: "thead#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {
          title: "x",
          href: "/a",
        },
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "hook": {},
        "on": {},
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("full", ({similar, end}) => {
  similar(
    thead({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
      "hook": {insert: () => null},
    }),
    {
      sel: "thead#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {title: "x"},
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("html", ({equal, end}) => {
  equal(
    toHTML(thead({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        attributes: {NAME: "Kurtis Rainbolt-Greene"},
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<thead id=\"b\" class=\"c d active\" yyy=\"y\" xxx=\"x\" data-id=\"1\" data-attributes-name=\"Kurtis Rainbolt-Greene\" aria-role=\"navigation\" title=\"x\" href=\"/a\" style=\"border: 1px\">test</thead>"
  )
  end()
})

test("html with plugins", ({equal, end}) => {
  equal(
    toHTMLWithPlugins(thead({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<thead id=\"b\" class=\"c d active\" title=\"x\" href=\"/a\" yyy=\"y\" xxx=\"x\" data-name=\"Kurtis\" data-id=\"1\" aria-role=\"navigation\" style=\"border: 1px\">test</thead>"
  )
  end()
})

test("empty", ({same, end}) => {
  same(
    time(),
    {
      children: undefined,
      data: {
        "attrs": {},
        "class": {},
        "hook": {},
        "on": {},
        "props": {},
        "style": {},
      },
      elm: undefined,
      key: undefined,
      sel: "time",
      text: undefined,
    }
  )
  end()
})

test("selector", ({similar, end}) => {
  similar(time({selector: ".value"}), {sel: "time.value"})
  end()
})

test("children string", ({similar, end}) => {
  similar(time({children: "test"}), {text: "test"})
  end()
})

test("children array string", ({similar, end}) => {
  similar(time({children: ["test"]}), {children: [{text: "test"}]})
  end()
})

test("children function", ({similar, end}) => {
  similar(time({children: Function}), {children: [Function]})
  end()
})

test("children array function", ({similar, end}) => {
  similar(time({children: [Function]}), {children: [Function]})
  end()
})

test("aria", ({similar, end}) => {
  similar(time({aria: {id: "1"}}), {data: {attrs: {"aria-id": "1"}}})
  end()
})

test("data", ({similar, end}) => {
  similar(
    time({
      data: {
        id: "1",
        attributes: {NAME: "test"},
      },
    }),
    {
      data: {
        attrs: {
          "data-id": "1",
          "data-attributes-name": "test",
        },
      },
    }
  )
  end()
})

test("full without functions", ({same, end}) => {
  same(
    time({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
    }),
    {
      sel: "time#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {
          title: "x",
          href: "/a",
        },
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "hook": {},
        "on": {},
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("full", ({similar, end}) => {
  similar(
    time({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
      "hook": {insert: () => null},
    }),
    {
      sel: "time#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {title: "x"},
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("html", ({equal, end}) => {
  equal(
    toHTML(time({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        attributes: {NAME: "Kurtis Rainbolt-Greene"},
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<time id=\"b\" class=\"c d active\" yyy=\"y\" xxx=\"x\" data-id=\"1\" data-attributes-name=\"Kurtis Rainbolt-Greene\" aria-role=\"navigation\" title=\"x\" href=\"/a\" style=\"border: 1px\">test</time>"
  )
  end()
})

test("html with plugins", ({equal, end}) => {
  equal(
    toHTMLWithPlugins(time({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<time id=\"b\" class=\"c d active\" title=\"x\" href=\"/a\" yyy=\"y\" xxx=\"x\" data-name=\"Kurtis\" data-id=\"1\" aria-role=\"navigation\" style=\"border: 1px\">test</time>"
  )
  end()
})

test("empty", ({same, end}) => {
  same(
    title(),
    {
      children: undefined,
      data: {
        "attrs": {},
        "class": {},
        "hook": {},
        "on": {},
        "props": {},
        "style": {},
      },
      elm: undefined,
      key: undefined,
      sel: "title",
      text: undefined,
    }
  )
  end()
})

test("selector", ({similar, end}) => {
  similar(title({selector: ".value"}), {sel: "title.value"})
  end()
})

test("children string", ({similar, end}) => {
  similar(title({children: "test"}), {text: "test"})
  end()
})

test("children array string", ({similar, end}) => {
  similar(title({children: ["test"]}), {children: [{text: "test"}]})
  end()
})

test("children function", ({similar, end}) => {
  similar(title({children: Function}), {children: [Function]})
  end()
})

test("children array function", ({similar, end}) => {
  similar(title({children: [Function]}), {children: [Function]})
  end()
})

test("aria", ({similar, end}) => {
  similar(title({aria: {id: "1"}}), {data: {attrs: {"aria-id": "1"}}})
  end()
})

test("data", ({similar, end}) => {
  similar(
    title({
      data: {
        id: "1",
        attributes: {NAME: "test"},
      },
    }),
    {
      data: {
        attrs: {
          "data-id": "1",
          "data-attributes-name": "test",
        },
      },
    }
  )
  end()
})

test("full without functions", ({same, end}) => {
  same(
    title({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
    }),
    {
      sel: "title#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {
          title: "x",
          href: "/a",
        },
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "hook": {},
        "on": {},
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("full", ({similar, end}) => {
  similar(
    title({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
      "hook": {insert: () => null},
    }),
    {
      sel: "title#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {title: "x"},
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("html", ({equal, end}) => {
  equal(
    toHTML(title({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        attributes: {NAME: "Kurtis Rainbolt-Greene"},
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<title id=\"b\" class=\"c d active\" yyy=\"y\" xxx=\"x\" data-id=\"1\" data-attributes-name=\"Kurtis Rainbolt-Greene\" aria-role=\"navigation\" title=\"x\" href=\"/a\" style=\"border: 1px\">test</title>"
  )
  end()
})

test("html with plugins", ({equal, end}) => {
  equal(
    toHTMLWithPlugins(title({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<title id=\"b\" class=\"c d active\" title=\"x\" href=\"/a\" yyy=\"y\" xxx=\"x\" data-name=\"Kurtis\" data-id=\"1\" aria-role=\"navigation\" style=\"border: 1px\">test</title>"
  )
  end()
})

test("empty", ({same, end}) => {
  same(
    tr(),
    {
      children: undefined,
      data: {
        "attrs": {},
        "class": {},
        "hook": {},
        "on": {},
        "props": {},
        "style": {},
      },
      elm: undefined,
      key: undefined,
      sel: "tr",
      text: undefined,
    }
  )
  end()
})

test("selector", ({similar, end}) => {
  similar(tr({selector: ".value"}), {sel: "tr.value"})
  end()
})

test("children string", ({similar, end}) => {
  similar(tr({children: "test"}), {text: "test"})
  end()
})

test("children array string", ({similar, end}) => {
  similar(tr({children: ["test"]}), {children: [{text: "test"}]})
  end()
})

test("children function", ({similar, end}) => {
  similar(tr({children: Function}), {children: [Function]})
  end()
})

test("children array function", ({similar, end}) => {
  similar(tr({children: [Function]}), {children: [Function]})
  end()
})

test("aria", ({similar, end}) => {
  similar(tr({aria: {id: "1"}}), {data: {attrs: {"aria-id": "1"}}})
  end()
})

test("data", ({similar, end}) => {
  similar(
    tr({
      data: {
        id: "1",
        attributes: {NAME: "test"},
      },
    }),
    {
      data: {
        attrs: {
          "data-id": "1",
          "data-attributes-name": "test",
        },
      },
    }
  )
  end()
})

test("full without functions", ({same, end}) => {
  same(
    tr({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
    }),
    {
      sel: "tr#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {
          title: "x",
          href: "/a",
        },
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "hook": {},
        "on": {},
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("full", ({similar, end}) => {
  similar(
    tr({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
      "hook": {insert: () => null},
    }),
    {
      sel: "tr#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {title: "x"},
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("html", ({equal, end}) => {
  equal(
    toHTML(tr({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        attributes: {NAME: "Kurtis Rainbolt-Greene"},
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<tr id=\"b\" class=\"c d active\" yyy=\"y\" xxx=\"x\" data-id=\"1\" data-attributes-name=\"Kurtis Rainbolt-Greene\" aria-role=\"navigation\" title=\"x\" href=\"/a\" style=\"border: 1px\">test</tr>"
  )
  end()
})

test("html with plugins", ({equal, end}) => {
  equal(
    toHTMLWithPlugins(tr({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<tr id=\"b\" class=\"c d active\" title=\"x\" href=\"/a\" yyy=\"y\" xxx=\"x\" data-name=\"Kurtis\" data-id=\"1\" aria-role=\"navigation\" style=\"border: 1px\">test</tr>"
  )
  end()
})

test("empty", ({same, end}) => {
  same(
    u(),
    {
      children: undefined,
      data: {
        "attrs": {},
        "class": {},
        "hook": {},
        "on": {},
        "props": {},
        "style": {},
      },
      elm: undefined,
      key: undefined,
      sel: "u",
      text: undefined,
    }
  )
  end()
})

test("selector", ({similar, end}) => {
  similar(u({selector: ".value"}), {sel: "u.value"})
  end()
})

test("children string", ({similar, end}) => {
  similar(u({children: "test"}), {text: "test"})
  end()
})

test("children array string", ({similar, end}) => {
  similar(u({children: ["test"]}), {children: [{text: "test"}]})
  end()
})

test("children function", ({similar, end}) => {
  similar(u({children: Function}), {children: [Function]})
  end()
})

test("children array function", ({similar, end}) => {
  similar(u({children: [Function]}), {children: [Function]})
  end()
})

test("aria", ({similar, end}) => {
  similar(u({aria: {id: "1"}}), {data: {attrs: {"aria-id": "1"}}})
  end()
})

test("data", ({similar, end}) => {
  similar(
    u({
      data: {
        id: "1",
        attributes: {NAME: "test"},
      },
    }),
    {
      data: {
        attrs: {
          "data-id": "1",
          "data-attributes-name": "test",
        },
      },
    }
  )
  end()
})

test("full without functions", ({same, end}) => {
  same(
    u({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
    }),
    {
      sel: "u#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {
          title: "x",
          href: "/a",
        },
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "hook": {},
        "on": {},
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("full", ({similar, end}) => {
  similar(
    u({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
      "hook": {insert: () => null},
    }),
    {
      sel: "u#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {title: "x"},
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("html", ({equal, end}) => {
  equal(
    toHTML(u({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        attributes: {NAME: "Kurtis Rainbolt-Greene"},
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<u id=\"b\" class=\"c d active\" yyy=\"y\" xxx=\"x\" data-id=\"1\" data-attributes-name=\"Kurtis Rainbolt-Greene\" aria-role=\"navigation\" title=\"x\" href=\"/a\" style=\"border: 1px\">test</u>"
  )
  end()
})

test("html with plugins", ({equal, end}) => {
  equal(
    toHTMLWithPlugins(u({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<u id=\"b\" class=\"c d active\" title=\"x\" href=\"/a\" yyy=\"y\" xxx=\"x\" data-name=\"Kurtis\" data-id=\"1\" aria-role=\"navigation\" style=\"border: 1px\">test</u>"
  )
  end()
})

test("empty", ({same, end}) => {
  same(
    ul(),
    {
      children: undefined,
      data: {
        "attrs": {},
        "class": {},
        "hook": {},
        "on": {},
        "props": {},
        "style": {},
      },
      elm: undefined,
      key: undefined,
      sel: "ul",
      text: undefined,
    }
  )
  end()
})

test("selector", ({similar, end}) => {
  similar(ul({selector: ".value"}), {sel: "ul.value"})
  end()
})

test("children string", ({similar, end}) => {
  similar(ul({children: "test"}), {text: "test"})
  end()
})

test("children array string", ({similar, end}) => {
  similar(ul({children: ["test"]}), {children: [{text: "test"}]})
  end()
})

test("children function", ({similar, end}) => {
  similar(ul({children: Function}), {children: [Function]})
  end()
})

test("children array function", ({similar, end}) => {
  similar(ul({children: [Function]}), {children: [Function]})
  end()
})

test("aria", ({similar, end}) => {
  similar(ul({aria: {id: "1"}}), {data: {attrs: {"aria-id": "1"}}})
  end()
})

test("data", ({similar, end}) => {
  similar(
    ul({
      data: {
        id: "1",
        attributes: {NAME: "test"},
      },
    }),
    {
      data: {
        attrs: {
          "data-id": "1",
          "data-attributes-name": "test",
        },
      },
    }
  )
  end()
})

test("full without functions", ({same, end}) => {
  same(
    ul({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
    }),
    {
      sel: "ul#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {
          title: "x",
          href: "/a",
        },
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "hook": {},
        "on": {},
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("full", ({similar, end}) => {
  similar(
    ul({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
      "hook": {insert: () => null},
    }),
    {
      sel: "ul#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {title: "x"},
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("html", ({equal, end}) => {
  equal(
    toHTML(ul({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        attributes: {NAME: "Kurtis Rainbolt-Greene"},
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<ul id=\"b\" class=\"c d active\" yyy=\"y\" xxx=\"x\" data-id=\"1\" data-attributes-name=\"Kurtis Rainbolt-Greene\" aria-role=\"navigation\" title=\"x\" href=\"/a\" style=\"border: 1px\">test</ul>"
  )
  end()
})

test("html with plugins", ({equal, end}) => {
  equal(
    toHTMLWithPlugins(ul({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<ul id=\"b\" class=\"c d active\" title=\"x\" href=\"/a\" yyy=\"y\" xxx=\"x\" data-name=\"Kurtis\" data-id=\"1\" aria-role=\"navigation\" style=\"border: 1px\">test</ul>"
  )
  end()
})

test("empty", ({same, end}) => {
  same(
    _var(),
    {
      children: undefined,
      data: {
        "attrs": {},
        "class": {},
        "hook": {},
        "on": {},
        "props": {},
        "style": {},
      },
      elm: undefined,
      key: undefined,
      sel: "var",
      text: undefined,
    }
  )
  end()
})

test("selector", ({similar, end}) => {
  similar(_var({selector: ".value"}), {sel: "var.value"})
  end()
})

test("children string", ({similar, end}) => {
  similar(_var({children: "test"}), {text: "test"})
  end()
})

test("children array string", ({similar, end}) => {
  similar(_var({children: ["test"]}), {children: [{text: "test"}]})
  end()
})

test("children function", ({similar, end}) => {
  similar(_var({children: Function}), {children: [Function]})
  end()
})

test("children array function", ({similar, end}) => {
  similar(_var({children: [Function]}), {children: [Function]})
  end()
})

test("aria", ({similar, end}) => {
  similar(_var({aria: {id: "1"}}), {data: {attrs: {"aria-id": "1"}}})
  end()
})

test("data", ({similar, end}) => {
  similar(
    _var({
      data: {
        id: "1",
        attributes: {NAME: "test"},
      },
    }),
    {
      data: {
        attrs: {
          "data-id": "1",
          "data-attributes-name": "test",
        },
      },
    }
  )
  end()
})

test("full without functions", ({same, end}) => {
  same(
    _var({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
    }),
    {
      sel: "var#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {
          title: "x",
          href: "/a",
        },
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "hook": {},
        "on": {},
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("full", ({similar, end}) => {
  similar(
    _var({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
      "hook": {insert: () => null},
    }),
    {
      sel: "var#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {title: "x"},
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("html", ({equal, end}) => {
  equal(
    toHTML(_var({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        attributes: {NAME: "Kurtis Rainbolt-Greene"},
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<var id=\"b\" class=\"c d active\" yyy=\"y\" xxx=\"x\" data-id=\"1\" data-attributes-name=\"Kurtis Rainbolt-Greene\" aria-role=\"navigation\" title=\"x\" href=\"/a\" style=\"border: 1px\">test</var>"
  )
  end()
})

test("html with plugins", ({equal, end}) => {
  equal(
    toHTMLWithPlugins(_var({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<var id=\"b\" class=\"c d active\" title=\"x\" href=\"/a\" yyy=\"y\" xxx=\"x\" data-name=\"Kurtis\" data-id=\"1\" aria-role=\"navigation\" style=\"border: 1px\">test</var>"
  )
  end()
})

test("empty", ({same, end}) => {
  same(
    video(),
    {
      children: undefined,
      data: {
        "attrs": {},
        "class": {},
        "hook": {},
        "on": {},
        "props": {},
        "style": {},
      },
      elm: undefined,
      key: undefined,
      sel: "video",
      text: undefined,
    }
  )
  end()
})

test("selector", ({similar, end}) => {
  similar(video({selector: ".value"}), {sel: "video.value"})
  end()
})

test("children string", ({similar, end}) => {
  similar(video({children: "test"}), {text: "test"})
  end()
})

test("children array string", ({similar, end}) => {
  similar(video({children: ["test"]}), {children: [{text: "test"}]})
  end()
})

test("children function", ({similar, end}) => {
  similar(video({children: Function}), {children: [Function]})
  end()
})

test("children array function", ({similar, end}) => {
  similar(video({children: [Function]}), {children: [Function]})
  end()
})

test("aria", ({similar, end}) => {
  similar(video({aria: {id: "1"}}), {data: {attrs: {"aria-id": "1"}}})
  end()
})

test("data", ({similar, end}) => {
  similar(
    video({
      data: {
        id: "1",
        attributes: {NAME: "test"},
      },
    }),
    {
      data: {
        attrs: {
          "data-id": "1",
          "data-attributes-name": "test",
        },
      },
    }
  )
  end()
})

test("full without functions", ({same, end}) => {
  same(
    video({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
    }),
    {
      sel: "video#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {
          title: "x",
          href: "/a",
        },
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "hook": {},
        "on": {},
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("full", ({similar, end}) => {
  similar(
    video({
      "selector": "#b.c.d",
      "children": "test",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
      "hook": {insert: () => null},
    }),
    {
      sel: "video#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {title: "x"},
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "key": "key",
      },
      children: undefined,
      text: "test",
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("html", ({equal, end}) => {
  equal(
    toHTML(video({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        attributes: {NAME: "Kurtis Rainbolt-Greene"},
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<video id=\"b\" class=\"c d active\" yyy=\"y\" xxx=\"x\" data-id=\"1\" data-attributes-name=\"Kurtis Rainbolt-Greene\" aria-role=\"navigation\" title=\"x\" href=\"/a\" style=\"border: 1px\">test</video>"
  )
  end()
})

test("html with plugins", ({equal, end}) => {
  equal(
    toHTMLWithPlugins(video({
      "selector": "#b.c.d",
      "children": "test",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<video id=\"b\" class=\"c d active\" title=\"x\" href=\"/a\" yyy=\"y\" xxx=\"x\" data-name=\"Kurtis\" data-id=\"1\" aria-role=\"navigation\" style=\"border: 1px\">test</video>"
  )
  end()
})

test("empty", ({same, end}) => {
  same(
    area(),
    {
      children: undefined,
      data: {
        "attrs": {},
        "class": {},
        "hook": {},
        "on": {},
        "props": {},
        "style": {},
      },
      elm: undefined,
      key: undefined,
      sel: "area",
      text: undefined,
    }
  )
  end()
})

test("selector", ({similar, end}) => {
  similar(area({selector: ".value"}), {sel: "area.value"})
  end()
})

test("children string", ({throws, end}) => {
  throws(() => area({children: "test"}), {message: "Empty tags cannot semantically have children."})
  end()
})

test("children array string", ({throws, end}) => {
  throws(() => area({children: ["test"]}), {message: "Empty tags cannot semantically have children."})
  end()
})

test("children function", ({throws, end}) => {
  throws(() => area({children: Function}), {message: "Empty tags cannot semantically have children."})
  end()
})

test("children array function", ({throws, end}) => {
  throws(() => area({children: [Function]}), {message: "Empty tags cannot semantically have children."})
  end()
})

test("aria", ({similar, end}) => {
  similar(area({aria: {id: "1"}}), {data: {attrs: {"aria-id": "1"}}})
  end()
})

test("data", ({similar, end}) => {
  similar(area({data: {id: "1"}}), {data: {attrs: {"data-id": "1"}}})
  end()
})

test("full without functions", ({same, end}) => {
  same(
    area({
      "selector": "#b.c.d",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
    }),
    {
      sel: "area#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {
          title: "x",
          href: "/a",
        },
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "hook": {},
        "on": {},
        "key": "key",
      },
      children: undefined,
      text: undefined,
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("full", ({similar, end}) => {
  similar(
    area({
      "selector": "#b.c.d",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
      "hook": {insert: () => null},
    }),
    {
      sel: "area#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {title: "x"},
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "key": "key",
      },
      children: undefined,
      text: undefined,
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("html", ({equal, end}) => {
  equal(
    toHTML(area({
      "selector": "#b.c.d",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<area id=\"b\" class=\"c d active\" yyy=\"y\" xxx=\"x\" data-name=\"Kurtis\" data-id=\"1\" aria-role=\"navigation\" title=\"x\" href=\"/a\" style=\"border: 1px\">"
  )
  end()
})

test("html with plugins", ({equal, end}) => {
  equal(
    toHTMLWithPlugins(area({
      "selector": "#b.c.d",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<area id=\"b\" class=\"c d active\" title=\"x\" href=\"/a\" yyy=\"y\" xxx=\"x\" data-name=\"Kurtis\" data-id=\"1\" aria-role=\"navigation\" style=\"border: 1px\">"
  )
  end()
})


test("empty", ({same, end}) => {
  same(
    base(),
    {
      children: undefined,
      data: {
        "attrs": {},
        "class": {},
        "hook": {},
        "on": {},
        "props": {},
        "style": {},
      },
      elm: undefined,
      key: undefined,
      sel: "base",
      text: undefined,
    }
  )
  end()
})

test("selector", ({similar, end}) => {
  similar(base({selector: ".value"}), {sel: "base.value"})
  end()
})

test("children string", ({throws, end}) => {
  throws(() => base({children: "test"}), {message: "Empty tags cannot semantically have children."})
  end()
})

test("children array string", ({throws, end}) => {
  throws(() => base({children: ["test"]}), {message: "Empty tags cannot semantically have children."})
  end()
})

test("children function", ({throws, end}) => {
  throws(() => base({children: Function}), {message: "Empty tags cannot semantically have children."})
  end()
})

test("children array function", ({throws, end}) => {
  throws(() => base({children: [Function]}), {message: "Empty tags cannot semantically have children."})
  end()
})

test("aria", ({similar, end}) => {
  similar(base({aria: {id: "1"}}), {data: {attrs: {"aria-id": "1"}}})
  end()
})

test("data", ({similar, end}) => {
  similar(base({data: {id: "1"}}), {data: {attrs: {"data-id": "1"}}})
  end()
})

test("full without functions", ({same, end}) => {
  same(
    base({
      "selector": "#b.c.d",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
    }),
    {
      sel: "base#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {
          title: "x",
          href: "/a",
        },
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "hook": {},
        "on": {},
        "key": "key",
      },
      children: undefined,
      text: undefined,
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("full", ({similar, end}) => {
  similar(
    base({
      "selector": "#b.c.d",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
      "hook": {insert: () => null},
    }),
    {
      sel: "base#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {title: "x"},
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "key": "key",
      },
      children: undefined,
      text: undefined,
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("html", ({equal, end}) => {
  equal(
    toHTML(base({
      "selector": "#b.c.d",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<base id=\"b\" class=\"c d active\" yyy=\"y\" xxx=\"x\" data-name=\"Kurtis\" data-id=\"1\" aria-role=\"navigation\" title=\"x\" href=\"/a\" style=\"border: 1px\">"
  )
  end()
})

test("html with plugins", ({equal, end}) => {
  equal(
    toHTMLWithPlugins(base({
      "selector": "#b.c.d",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<base id=\"b\" class=\"c d active\" title=\"x\" href=\"/a\" yyy=\"y\" xxx=\"x\" data-name=\"Kurtis\" data-id=\"1\" aria-role=\"navigation\" style=\"border: 1px\">"
  )
  end()
})


test("empty", ({same, end}) => {
  same(
    br(),
    {
      children: undefined,
      data: {
        "attrs": {},
        "class": {},
        "hook": {},
        "on": {},
        "props": {},
        "style": {},
      },
      elm: undefined,
      key: undefined,
      sel: "br",
      text: undefined,
    }
  )
  end()
})

test("selector", ({similar, end}) => {
  similar(br({selector: ".value"}), {sel: "br.value"})
  end()
})

test("children string", ({throws, end}) => {
  throws(() => br({children: "test"}), {message: "Empty tags cannot semantically have children."})
  end()
})

test("children array string", ({throws, end}) => {
  throws(() => br({children: ["test"]}), {message: "Empty tags cannot semantically have children."})
  end()
})

test("children function", ({throws, end}) => {
  throws(() => br({children: Function}), {message: "Empty tags cannot semantically have children."})
  end()
})

test("children array function", ({throws, end}) => {
  throws(() => br({children: [Function]}), {message: "Empty tags cannot semantically have children."})
  end()
})

test("aria", ({similar, end}) => {
  similar(br({aria: {id: "1"}}), {data: {attrs: {"aria-id": "1"}}})
  end()
})

test("data", ({similar, end}) => {
  similar(br({data: {id: "1"}}), {data: {attrs: {"data-id": "1"}}})
  end()
})

test("full without functions", ({same, end}) => {
  same(
    br({
      "selector": "#b.c.d",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
    }),
    {
      sel: "br#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {
          title: "x",
          href: "/a",
        },
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "hook": {},
        "on": {},
        "key": "key",
      },
      children: undefined,
      text: undefined,
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("full", ({similar, end}) => {
  similar(
    br({
      "selector": "#b.c.d",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
      "hook": {insert: () => null},
    }),
    {
      sel: "br#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {title: "x"},
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "key": "key",
      },
      children: undefined,
      text: undefined,
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("html", ({equal, end}) => {
  equal(
    toHTML(br({
      "selector": "#b.c.d",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<br id=\"b\" class=\"c d active\" yyy=\"y\" xxx=\"x\" data-name=\"Kurtis\" data-id=\"1\" aria-role=\"navigation\" title=\"x\" href=\"/a\" style=\"border: 1px\">"
  )
  end()
})

test("html with plugins", ({equal, end}) => {
  equal(
    toHTMLWithPlugins(br({
      "selector": "#b.c.d",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<br id=\"b\" class=\"c d active\" title=\"x\" href=\"/a\" yyy=\"y\" xxx=\"x\" data-name=\"Kurtis\" data-id=\"1\" aria-role=\"navigation\" style=\"border: 1px\">"
  )
  end()
})


test("empty", ({same, end}) => {
  same(
    col(),
    {
      children: undefined,
      data: {
        "attrs": {},
        "class": {},
        "hook": {},
        "on": {},
        "props": {},
        "style": {},
      },
      elm: undefined,
      key: undefined,
      sel: "col",
      text: undefined,
    }
  )
  end()
})

test("selector", ({similar, end}) => {
  similar(col({selector: ".value"}), {sel: "col.value"})
  end()
})

test("children string", ({throws, end}) => {
  throws(() => col({children: "test"}), {message: "Empty tags cannot semantically have children."})
  end()
})

test("children array string", ({throws, end}) => {
  throws(() => col({children: ["test"]}), {message: "Empty tags cannot semantically have children."})
  end()
})

test("children function", ({throws, end}) => {
  throws(() => col({children: Function}), {message: "Empty tags cannot semantically have children."})
  end()
})

test("children array function", ({throws, end}) => {
  throws(() => col({children: [Function]}), {message: "Empty tags cannot semantically have children."})
  end()
})

test("aria", ({similar, end}) => {
  similar(col({aria: {id: "1"}}), {data: {attrs: {"aria-id": "1"}}})
  end()
})

test("data", ({similar, end}) => {
  similar(col({data: {id: "1"}}), {data: {attrs: {"data-id": "1"}}})
  end()
})

test("full without functions", ({same, end}) => {
  same(
    col({
      "selector": "#b.c.d",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
    }),
    {
      sel: "col#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {
          title: "x",
          href: "/a",
        },
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "hook": {},
        "on": {},
        "key": "key",
      },
      children: undefined,
      text: undefined,
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("full", ({similar, end}) => {
  similar(
    col({
      "selector": "#b.c.d",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
      "hook": {insert: () => null},
    }),
    {
      sel: "col#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {title: "x"},
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "key": "key",
      },
      children: undefined,
      text: undefined,
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("html", ({equal, end}) => {
  equal(
    toHTML(col({
      "selector": "#b.c.d",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<col id=\"b\" class=\"c d active\" yyy=\"y\" xxx=\"x\" data-name=\"Kurtis\" data-id=\"1\" aria-role=\"navigation\" title=\"x\" href=\"/a\" style=\"border: 1px\">"
  )
  end()
})

test("html with plugins", ({equal, end}) => {
  equal(
    toHTMLWithPlugins(col({
      "selector": "#b.c.d",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<col id=\"b\" class=\"c d active\" title=\"x\" href=\"/a\" yyy=\"y\" xxx=\"x\" data-name=\"Kurtis\" data-id=\"1\" aria-role=\"navigation\" style=\"border: 1px\">"
  )
  end()
})


test("empty", ({same, end}) => {
  same(
    embed(),
    {
      children: undefined,
      data: {
        "attrs": {},
        "class": {},
        "hook": {},
        "on": {},
        "props": {},
        "style": {},
      },
      elm: undefined,
      key: undefined,
      sel: "embed",
      text: undefined,
    }
  )
  end()
})

test("selector", ({similar, end}) => {
  similar(embed({selector: ".value"}), {sel: "embed.value"})
  end()
})

test("children string", ({throws, end}) => {
  throws(() => embed({children: "test"}), {message: "Empty tags cannot semantically have children."})
  end()
})

test("children array string", ({throws, end}) => {
  throws(() => embed({children: ["test"]}), {message: "Empty tags cannot semantically have children."})
  end()
})

test("children function", ({throws, end}) => {
  throws(() => embed({children: Function}), {message: "Empty tags cannot semantically have children."})
  end()
})

test("children array function", ({throws, end}) => {
  throws(() => embed({children: [Function]}), {message: "Empty tags cannot semantically have children."})
  end()
})

test("aria", ({similar, end}) => {
  similar(embed({aria: {id: "1"}}), {data: {attrs: {"aria-id": "1"}}})
  end()
})

test("data", ({similar, end}) => {
  similar(embed({data: {id: "1"}}), {data: {attrs: {"data-id": "1"}}})
  end()
})

test("full without functions", ({same, end}) => {
  same(
    embed({
      "selector": "#b.c.d",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
    }),
    {
      sel: "embed#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {
          title: "x",
          href: "/a",
        },
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "hook": {},
        "on": {},
        "key": "key",
      },
      children: undefined,
      text: undefined,
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("full", ({similar, end}) => {
  similar(
    embed({
      "selector": "#b.c.d",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
      "hook": {insert: () => null},
    }),
    {
      sel: "embed#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {title: "x"},
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "key": "key",
      },
      children: undefined,
      text: undefined,
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("html", ({equal, end}) => {
  equal(
    toHTML(embed({
      "selector": "#b.c.d",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<embed id=\"b\" class=\"c d active\" yyy=\"y\" xxx=\"x\" data-name=\"Kurtis\" data-id=\"1\" aria-role=\"navigation\" title=\"x\" href=\"/a\" style=\"border: 1px\">"
  )
  end()
})

test("html with plugins", ({equal, end}) => {
  equal(
    toHTMLWithPlugins(embed({
      "selector": "#b.c.d",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<embed id=\"b\" class=\"c d active\" title=\"x\" href=\"/a\" yyy=\"y\" xxx=\"x\" data-name=\"Kurtis\" data-id=\"1\" aria-role=\"navigation\" style=\"border: 1px\">"
  )
  end()
})


test("empty", ({same, end}) => {
  same(
    hr(),
    {
      children: undefined,
      data: {
        "attrs": {},
        "class": {},
        "hook": {},
        "on": {},
        "props": {},
        "style": {},
      },
      elm: undefined,
      key: undefined,
      sel: "hr",
      text: undefined,
    }
  )
  end()
})

test("selector", ({similar, end}) => {
  similar(hr({selector: ".value"}), {sel: "hr.value"})
  end()
})

test("children string", ({throws, end}) => {
  throws(() => hr({children: "test"}), {message: "Empty tags cannot semantically have children."})
  end()
})

test("children array string", ({throws, end}) => {
  throws(() => hr({children: ["test"]}), {message: "Empty tags cannot semantically have children."})
  end()
})

test("children function", ({throws, end}) => {
  throws(() => hr({children: Function}), {message: "Empty tags cannot semantically have children."})
  end()
})

test("children array function", ({throws, end}) => {
  throws(() => hr({children: [Function]}), {message: "Empty tags cannot semantically have children."})
  end()
})

test("aria", ({similar, end}) => {
  similar(hr({aria: {id: "1"}}), {data: {attrs: {"aria-id": "1"}}})
  end()
})

test("data", ({similar, end}) => {
  similar(hr({data: {id: "1"}}), {data: {attrs: {"data-id": "1"}}})
  end()
})

test("full without functions", ({same, end}) => {
  same(
    hr({
      "selector": "#b.c.d",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
    }),
    {
      sel: "hr#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {
          title: "x",
          href: "/a",
        },
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "hook": {},
        "on": {},
        "key": "key",
      },
      children: undefined,
      text: undefined,
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("full", ({similar, end}) => {
  similar(
    hr({
      "selector": "#b.c.d",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
      "hook": {insert: () => null},
    }),
    {
      sel: "hr#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {title: "x"},
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "key": "key",
      },
      children: undefined,
      text: undefined,
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("html", ({equal, end}) => {
  equal(
    toHTML(hr({
      "selector": "#b.c.d",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<hr id=\"b\" class=\"c d active\" yyy=\"y\" xxx=\"x\" data-name=\"Kurtis\" data-id=\"1\" aria-role=\"navigation\" title=\"x\" href=\"/a\" style=\"border: 1px\">"
  )
  end()
})

test("html with plugins", ({equal, end}) => {
  equal(
    toHTMLWithPlugins(hr({
      "selector": "#b.c.d",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<hr id=\"b\" class=\"c d active\" title=\"x\" href=\"/a\" yyy=\"y\" xxx=\"x\" data-name=\"Kurtis\" data-id=\"1\" aria-role=\"navigation\" style=\"border: 1px\">"
  )
  end()
})


test("empty", ({same, end}) => {
  same(
    img(),
    {
      children: undefined,
      data: {
        "attrs": {},
        "class": {},
        "hook": {},
        "on": {},
        "props": {},
        "style": {},
      },
      elm: undefined,
      key: undefined,
      sel: "img",
      text: undefined,
    }
  )
  end()
})

test("selector", ({similar, end}) => {
  similar(img({selector: ".value"}), {sel: "img.value"})
  end()
})

test("children string", ({throws, end}) => {
  throws(() => img({children: "test"}), {message: "Empty tags cannot semantically have children."})
  end()
})

test("children array string", ({throws, end}) => {
  throws(() => img({children: ["test"]}), {message: "Empty tags cannot semantically have children."})
  end()
})

test("children function", ({throws, end}) => {
  throws(() => img({children: Function}), {message: "Empty tags cannot semantically have children."})
  end()
})

test("children array function", ({throws, end}) => {
  throws(() => img({children: [Function]}), {message: "Empty tags cannot semantically have children."})
  end()
})

test("aria", ({similar, end}) => {
  similar(img({aria: {id: "1"}}), {data: {attrs: {"aria-id": "1"}}})
  end()
})

test("data", ({similar, end}) => {
  similar(img({data: {id: "1"}}), {data: {attrs: {"data-id": "1"}}})
  end()
})

test("full without functions", ({same, end}) => {
  same(
    img({
      "selector": "#b.c.d",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
    }),
    {
      sel: "img#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {
          title: "x",
          href: "/a",
        },
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "hook": {},
        "on": {},
        "key": "key",
      },
      children: undefined,
      text: undefined,
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("full", ({similar, end}) => {
  similar(
    img({
      "selector": "#b.c.d",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
      "hook": {insert: () => null},
    }),
    {
      sel: "img#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {title: "x"},
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "key": "key",
      },
      children: undefined,
      text: undefined,
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("html", ({equal, end}) => {
  equal(
    toHTML(img({
      "selector": "#b.c.d",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<img id=\"b\" class=\"c d active\" yyy=\"y\" xxx=\"x\" data-name=\"Kurtis\" data-id=\"1\" aria-role=\"navigation\" title=\"x\" href=\"/a\" style=\"border: 1px\">"
  )
  end()
})

test("html with plugins", ({equal, end}) => {
  equal(
    toHTMLWithPlugins(img({
      "selector": "#b.c.d",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<img id=\"b\" class=\"c d active\" title=\"x\" href=\"/a\" yyy=\"y\" xxx=\"x\" data-name=\"Kurtis\" data-id=\"1\" aria-role=\"navigation\" style=\"border: 1px\">"
  )
  end()
})


test("empty", ({same, end}) => {
  same(
    input(),
    {
      children: undefined,
      data: {
        "attrs": {},
        "class": {},
        "hook": {},
        "on": {},
        "props": {},
        "style": {},
      },
      elm: undefined,
      key: undefined,
      sel: "input",
      text: undefined,
    }
  )
  end()
})

test("selector", ({similar, end}) => {
  similar(input({selector: ".value"}), {sel: "input.value"})
  end()
})

test("children string", ({throws, end}) => {
  throws(() => input({children: "test"}), {message: "Empty tags cannot semantically have children."})
  end()
})

test("children array string", ({throws, end}) => {
  throws(() => input({children: ["test"]}), {message: "Empty tags cannot semantically have children."})
  end()
})

test("children function", ({throws, end}) => {
  throws(() => input({children: Function}), {message: "Empty tags cannot semantically have children."})
  end()
})

test("children array function", ({throws, end}) => {
  throws(() => input({children: [Function]}), {message: "Empty tags cannot semantically have children."})
  end()
})

test("aria", ({similar, end}) => {
  similar(input({aria: {id: "1"}}), {data: {attrs: {"aria-id": "1"}}})
  end()
})

test("data", ({similar, end}) => {
  similar(input({data: {id: "1"}}), {data: {attrs: {"data-id": "1"}}})
  end()
})

test("full without functions", ({same, end}) => {
  same(
    input({
      "selector": "#b.c.d",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
    }),
    {
      sel: "input#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {
          title: "x",
          href: "/a",
        },
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "hook": {},
        "on": {},
        "key": "key",
      },
      children: undefined,
      text: undefined,
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("full", ({similar, end}) => {
  similar(
    input({
      "selector": "#b.c.d",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
      "hook": {insert: () => null},
    }),
    {
      sel: "input#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {title: "x"},
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "key": "key",
      },
      children: undefined,
      text: undefined,
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("html", ({equal, end}) => {
  equal(
    toHTML(input({
      "selector": "#b.c.d",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<input id=\"b\" class=\"c d active\" yyy=\"y\" xxx=\"x\" data-name=\"Kurtis\" data-id=\"1\" aria-role=\"navigation\" title=\"x\" href=\"/a\" style=\"border: 1px\">"
  )
  end()
})

test("html with plugins", ({equal, end}) => {
  equal(
    toHTMLWithPlugins(input({
      "selector": "#b.c.d",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<input id=\"b\" class=\"c d active\" title=\"x\" href=\"/a\" yyy=\"y\" xxx=\"x\" data-name=\"Kurtis\" data-id=\"1\" aria-role=\"navigation\" style=\"border: 1px\">"
  )
  end()
})


test("empty", ({same, end}) => {
  same(
    link(),
    {
      children: undefined,
      data: {
        "attrs": {},
        "class": {},
        "hook": {},
        "on": {},
        "props": {},
        "style": {},
      },
      elm: undefined,
      key: undefined,
      sel: "link",
      text: undefined,
    }
  )
  end()
})

test("selector", ({similar, end}) => {
  similar(link({selector: ".value"}), {sel: "link.value"})
  end()
})

test("children string", ({throws, end}) => {
  throws(() => link({children: "test"}), {message: "Empty tags cannot semantically have children."})
  end()
})

test("children array string", ({throws, end}) => {
  throws(() => link({children: ["test"]}), {message: "Empty tags cannot semantically have children."})
  end()
})

test("children function", ({throws, end}) => {
  throws(() => link({children: Function}), {message: "Empty tags cannot semantically have children."})
  end()
})

test("children array function", ({throws, end}) => {
  throws(() => link({children: [Function]}), {message: "Empty tags cannot semantically have children."})
  end()
})

test("aria", ({similar, end}) => {
  similar(link({aria: {id: "1"}}), {data: {attrs: {"aria-id": "1"}}})
  end()
})

test("data", ({similar, end}) => {
  similar(link({data: {id: "1"}}), {data: {attrs: {"data-id": "1"}}})
  end()
})

test("full without functions", ({same, end}) => {
  same(
    link({
      "selector": "#b.c.d",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
    }),
    {
      sel: "link#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {
          title: "x",
          href: "/a",
        },
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "hook": {},
        "on": {},
        "key": "key",
      },
      children: undefined,
      text: undefined,
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("full", ({similar, end}) => {
  similar(
    link({
      "selector": "#b.c.d",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
      "hook": {insert: () => null},
    }),
    {
      sel: "link#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {title: "x"},
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "key": "key",
      },
      children: undefined,
      text: undefined,
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("html", ({equal, end}) => {
  equal(
    toHTML(link({
      "selector": "#b.c.d",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<link id=\"b\" class=\"c d active\" yyy=\"y\" xxx=\"x\" data-name=\"Kurtis\" data-id=\"1\" aria-role=\"navigation\" title=\"x\" href=\"/a\" style=\"border: 1px\">"
  )
  end()
})

test("html with plugins", ({equal, end}) => {
  equal(
    toHTMLWithPlugins(link({
      "selector": "#b.c.d",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<link id=\"b\" class=\"c d active\" title=\"x\" href=\"/a\" yyy=\"y\" xxx=\"x\" data-name=\"Kurtis\" data-id=\"1\" aria-role=\"navigation\" style=\"border: 1px\">"
  )
  end()
})


test("empty", ({same, end}) => {
  same(
    meta(),
    {
      children: undefined,
      data: {
        "attrs": {},
        "class": {},
        "hook": {},
        "on": {},
        "props": {},
        "style": {},
      },
      elm: undefined,
      key: undefined,
      sel: "meta",
      text: undefined,
    }
  )
  end()
})

test("selector", ({similar, end}) => {
  similar(meta({selector: ".value"}), {sel: "meta.value"})
  end()
})

test("children string", ({throws, end}) => {
  throws(() => meta({children: "test"}), {message: "Empty tags cannot semantically have children."})
  end()
})

test("children array string", ({throws, end}) => {
  throws(() => meta({children: ["test"]}), {message: "Empty tags cannot semantically have children."})
  end()
})

test("children function", ({throws, end}) => {
  throws(() => meta({children: Function}), {message: "Empty tags cannot semantically have children."})
  end()
})

test("children array function", ({throws, end}) => {
  throws(() => meta({children: [Function]}), {message: "Empty tags cannot semantically have children."})
  end()
})

test("aria", ({similar, end}) => {
  similar(meta({aria: {id: "1"}}), {data: {attrs: {"aria-id": "1"}}})
  end()
})

test("data", ({similar, end}) => {
  similar(meta({data: {id: "1"}}), {data: {attrs: {"data-id": "1"}}})
  end()
})

test("full without functions", ({same, end}) => {
  same(
    meta({
      "selector": "#b.c.d",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
    }),
    {
      sel: "meta#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {
          title: "x",
          href: "/a",
        },
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "hook": {},
        "on": {},
        "key": "key",
      },
      children: undefined,
      text: undefined,
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("full", ({similar, end}) => {
  similar(
    meta({
      "selector": "#b.c.d",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
      "hook": {insert: () => null},
    }),
    {
      sel: "meta#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {title: "x"},
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "key": "key",
      },
      children: undefined,
      text: undefined,
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("html", ({equal, end}) => {
  equal(
    toHTML(meta({
      "selector": "#b.c.d",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<meta id=\"b\" class=\"c d active\" yyy=\"y\" xxx=\"x\" data-name=\"Kurtis\" data-id=\"1\" aria-role=\"navigation\" title=\"x\" href=\"/a\" style=\"border: 1px\">"
  )
  end()
})

test("html with plugins", ({equal, end}) => {
  equal(
    toHTMLWithPlugins(meta({
      "selector": "#b.c.d",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<meta id=\"b\" class=\"c d active\" title=\"x\" href=\"/a\" yyy=\"y\" xxx=\"x\" data-name=\"Kurtis\" data-id=\"1\" aria-role=\"navigation\" style=\"border: 1px\">"
  )
  end()
})


test("empty", ({same, end}) => {
  same(
    param(),
    {
      children: undefined,
      data: {
        "attrs": {},
        "class": {},
        "hook": {},
        "on": {},
        "props": {},
        "style": {},
      },
      elm: undefined,
      key: undefined,
      sel: "param",
      text: undefined,
    }
  )
  end()
})

test("selector", ({similar, end}) => {
  similar(param({selector: ".value"}), {sel: "param.value"})
  end()
})

test("children string", ({throws, end}) => {
  throws(() => param({children: "test"}), {message: "Empty tags cannot semantically have children."})
  end()
})

test("children array string", ({throws, end}) => {
  throws(() => param({children: ["test"]}), {message: "Empty tags cannot semantically have children."})
  end()
})

test("children function", ({throws, end}) => {
  throws(() => param({children: Function}), {message: "Empty tags cannot semantically have children."})
  end()
})

test("children array function", ({throws, end}) => {
  throws(() => param({children: [Function]}), {message: "Empty tags cannot semantically have children."})
  end()
})

test("aria", ({similar, end}) => {
  similar(param({aria: {id: "1"}}), {data: {attrs: {"aria-id": "1"}}})
  end()
})

test("data", ({similar, end}) => {
  similar(param({data: {id: "1"}}), {data: {attrs: {"data-id": "1"}}})
  end()
})

test("full without functions", ({same, end}) => {
  same(
    param({
      "selector": "#b.c.d",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
    }),
    {
      sel: "param#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {
          title: "x",
          href: "/a",
        },
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "hook": {},
        "on": {},
        "key": "key",
      },
      children: undefined,
      text: undefined,
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("full", ({similar, end}) => {
  similar(
    param({
      "selector": "#b.c.d",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
      "hook": {insert: () => null},
    }),
    {
      sel: "param#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {title: "x"},
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "key": "key",
      },
      children: undefined,
      text: undefined,
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("html", ({equal, end}) => {
  equal(
    toHTML(param({
      "selector": "#b.c.d",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<param id=\"b\" class=\"c d active\" yyy=\"y\" xxx=\"x\" data-name=\"Kurtis\" data-id=\"1\" aria-role=\"navigation\" title=\"x\" href=\"/a\" style=\"border: 1px\">"
  )
  end()
})

test("html with plugins", ({equal, end}) => {
  equal(
    toHTMLWithPlugins(param({
      "selector": "#b.c.d",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<param id=\"b\" class=\"c d active\" title=\"x\" href=\"/a\" yyy=\"y\" xxx=\"x\" data-name=\"Kurtis\" data-id=\"1\" aria-role=\"navigation\" style=\"border: 1px\">"
  )
  end()
})


test("empty", ({same, end}) => {
  same(
    source(),
    {
      children: undefined,
      data: {
        "attrs": {},
        "class": {},
        "hook": {},
        "on": {},
        "props": {},
        "style": {},
      },
      elm: undefined,
      key: undefined,
      sel: "source",
      text: undefined,
    }
  )
  end()
})

test("selector", ({similar, end}) => {
  similar(source({selector: ".value"}), {sel: "source.value"})
  end()
})

test("children string", ({throws, end}) => {
  throws(() => source({children: "test"}), {message: "Empty tags cannot semantically have children."})
  end()
})

test("children array string", ({throws, end}) => {
  throws(() => source({children: ["test"]}), {message: "Empty tags cannot semantically have children."})
  end()
})

test("children function", ({throws, end}) => {
  throws(() => source({children: Function}), {message: "Empty tags cannot semantically have children."})
  end()
})

test("children array function", ({throws, end}) => {
  throws(() => source({children: [Function]}), {message: "Empty tags cannot semantically have children."})
  end()
})

test("aria", ({similar, end}) => {
  similar(source({aria: {id: "1"}}), {data: {attrs: {"aria-id": "1"}}})
  end()
})

test("data", ({similar, end}) => {
  similar(source({data: {id: "1"}}), {data: {attrs: {"data-id": "1"}}})
  end()
})

test("full without functions", ({same, end}) => {
  same(
    source({
      "selector": "#b.c.d",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
    }),
    {
      sel: "source#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {
          title: "x",
          href: "/a",
        },
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "hook": {},
        "on": {},
        "key": "key",
      },
      children: undefined,
      text: undefined,
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("full", ({similar, end}) => {
  similar(
    source({
      "selector": "#b.c.d",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
      "hook": {insert: () => null},
    }),
    {
      sel: "source#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {title: "x"},
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "key": "key",
      },
      children: undefined,
      text: undefined,
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("html", ({equal, end}) => {
  equal(
    toHTML(source({
      "selector": "#b.c.d",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<source id=\"b\" class=\"c d active\" yyy=\"y\" xxx=\"x\" data-name=\"Kurtis\" data-id=\"1\" aria-role=\"navigation\" title=\"x\" href=\"/a\" style=\"border: 1px\">"
  )
  end()
})

test("html with plugins", ({equal, end}) => {
  equal(
    toHTMLWithPlugins(source({
      "selector": "#b.c.d",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<source id=\"b\" class=\"c d active\" title=\"x\" href=\"/a\" yyy=\"y\" xxx=\"x\" data-name=\"Kurtis\" data-id=\"1\" aria-role=\"navigation\" style=\"border: 1px\">"
  )
  end()
})


test("empty", ({same, end}) => {
  same(
    track(),
    {
      children: undefined,
      data: {
        "attrs": {},
        "class": {},
        "hook": {},
        "on": {},
        "props": {},
        "style": {},
      },
      elm: undefined,
      key: undefined,
      sel: "track",
      text: undefined,
    }
  )
  end()
})

test("selector", ({similar, end}) => {
  similar(track({selector: ".value"}), {sel: "track.value"})
  end()
})

test("children string", ({throws, end}) => {
  throws(() => track({children: "test"}), {message: "Empty tags cannot semantically have children."})
  end()
})

test("children array string", ({throws, end}) => {
  throws(() => track({children: ["test"]}), {message: "Empty tags cannot semantically have children."})
  end()
})

test("children function", ({throws, end}) => {
  throws(() => track({children: Function}), {message: "Empty tags cannot semantically have children."})
  end()
})

test("children array function", ({throws, end}) => {
  throws(() => track({children: [Function]}), {message: "Empty tags cannot semantically have children."})
  end()
})

test("aria", ({similar, end}) => {
  similar(track({aria: {id: "1"}}), {data: {attrs: {"aria-id": "1"}}})
  end()
})

test("data", ({similar, end}) => {
  similar(track({data: {id: "1"}}), {data: {attrs: {"data-id": "1"}}})
  end()
})

test("full without functions", ({same, end}) => {
  same(
    track({
      "selector": "#b.c.d",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
    }),
    {
      sel: "track#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {
          title: "x",
          href: "/a",
        },
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "hook": {},
        "on": {},
        "key": "key",
      },
      children: undefined,
      text: undefined,
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("full", ({similar, end}) => {
  similar(
    track({
      "selector": "#b.c.d",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
      "hook": {insert: () => null},
    }),
    {
      sel: "track#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {title: "x"},
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "key": "key",
      },
      children: undefined,
      text: undefined,
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("html", ({equal, end}) => {
  equal(
    toHTML(track({
      "selector": "#b.c.d",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<track id=\"b\" class=\"c d active\" yyy=\"y\" xxx=\"x\" data-name=\"Kurtis\" data-id=\"1\" aria-role=\"navigation\" title=\"x\" href=\"/a\" style=\"border: 1px\">"
  )
  end()
})

test("html with plugins", ({equal, end}) => {
  equal(
    toHTMLWithPlugins(track({
      "selector": "#b.c.d",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<track id=\"b\" class=\"c d active\" title=\"x\" href=\"/a\" yyy=\"y\" xxx=\"x\" data-name=\"Kurtis\" data-id=\"1\" aria-role=\"navigation\" style=\"border: 1px\">"
  )
  end()
})


test("empty", ({same, end}) => {
  same(
    wbr(),
    {
      children: undefined,
      data: {
        "attrs": {},
        "class": {},
        "hook": {},
        "on": {},
        "props": {},
        "style": {},
      },
      elm: undefined,
      key: undefined,
      sel: "wbr",
      text: undefined,
    }
  )
  end()
})

test("selector", ({similar, end}) => {
  similar(wbr({selector: ".value"}), {sel: "wbr.value"})
  end()
})

test("children string", ({throws, end}) => {
  throws(() => wbr({children: "test"}), {message: "Empty tags cannot semantically have children."})
  end()
})

test("children array string", ({throws, end}) => {
  throws(() => wbr({children: ["test"]}), {message: "Empty tags cannot semantically have children."})
  end()
})

test("children function", ({throws, end}) => {
  throws(() => wbr({children: Function}), {message: "Empty tags cannot semantically have children."})
  end()
})

test("children array function", ({throws, end}) => {
  throws(() => wbr({children: [Function]}), {message: "Empty tags cannot semantically have children."})
  end()
})

test("aria", ({similar, end}) => {
  similar(wbr({aria: {id: "1"}}), {data: {attrs: {"aria-id": "1"}}})
  end()
})

test("data", ({similar, end}) => {
  similar(wbr({data: {id: "1"}}), {data: {attrs: {"data-id": "1"}}})
  end()
})

test("full without functions", ({same, end}) => {
  same(
    wbr({
      "selector": "#b.c.d",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
    }),
    {
      sel: "wbr#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {
          title: "x",
          href: "/a",
        },
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "hook": {},
        "on": {},
        "key": "key",
      },
      children: undefined,
      text: undefined,
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("full", ({similar, end}) => {
  similar(
    wbr({
      "selector": "#b.c.d",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "key": "key",
      "hook": {insert: () => null},
    }),
    {
      sel: "wbr#b.c.d",
      data: {
        "attrs": {
          "yyy": "y",
          "xxx": "x",
          "data-name": "Kurtis",
          "data-id": "1",
          "aria-role": "navigation",
        },
        "props": {title: "x"},
        "style": {border: "1px"},
        "class": {
          active: true,
          ignored: false,
        },
        "key": "key",
      },
      children: undefined,
      text: undefined,
      elm: undefined,
      key: "key",
    }
  )
  end()
})

test("html", ({equal, end}) => {
  equal(
    toHTML(wbr({
      "selector": "#b.c.d",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<wbr id=\"b\" class=\"c d active\" yyy=\"y\" xxx=\"x\" data-name=\"Kurtis\" data-id=\"1\" aria-role=\"navigation\" title=\"x\" href=\"/a\" style=\"border: 1px\">"
  )
  end()
})

test("html with plugins", ({equal, end}) => {
  equal(
    toHTMLWithPlugins(wbr({
      "selector": "#b.c.d",
      "key": "key",
      "props": {title: "x"},
      "properties": {href: "/a"},
      "attributes": {xxx: "x"},
      "attrs": {yyy: "y"},
      "data": {
        id: "1",
        name: "Kurtis",
      },
      "style": {border: "1px"},
      "on": {click: () => null},
      "aria": {role: "navigation"},
      "class": {
        active: true,
        ignored: false,
      },
      "hook": {insert: () => null},
    })),
    "<wbr id=\"b\" class=\"c d active\" title=\"x\" href=\"/a\" yyy=\"y\" xxx=\"x\" data-name=\"Kurtis\" data-id=\"1\" aria-role=\"navigation\" style=\"border: 1px\">"
  )
  end()
})


