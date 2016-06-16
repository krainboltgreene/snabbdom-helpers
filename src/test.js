import {describe, describe as context, it} from "mocha"
import {expect} from "chai"
import snabbdomToHTMLInit from "snabbdom-to-html/lib/init"
import snabbdomToHTMLAttributes from "snabbdom-to-html/lib/modules/attributes"
import snabbdomToHTMLStyle from "snabbdom-to-html/lib/modules/attributes"
import * as src from "../src"
import {img} from "../src"
import {a} from "../src"

const toHTML = snabbdomToHTMLInit([
  snabbdomToHTMLAttributes,
  snabbdomToHTMLStyle
])

describe("src/index.js", () => {
  context("when asked for a void element", () => {
    context("and called with inner", () => {
      it("throws an error", () => {
        expect(() => img({inner: "Test"})).to.throw("No content allowed in void element <img>")
      })
    })
  })

  context("when asked for any element", () => {
    context("and called with selector", () => {
      it("returns HTML with a class selector", () => {
        expect(toHTML(a({selector: ".value"}))).to.equal("<a class=\"value\"></a>")
      })
    })

    context("and called with inner", () => {
      it("returns HTML with the given inner in the .text property", () => {
        expect(toHTML(a({inner: "test"}))).to.equal("<a>test</a>")
      })
    })

    context("and called with aria microformat", () => {
      it("returns HTML with the given aria-id property", () => {
        expect(toHTML(a({aria: {id: "1"}}))).to.equal("<a aria-id=\"1\"></a>")
      })
    })

    context("and called with data microformat", () => {
      it("returns HTML with the given data-id property", () => {
        expect(toHTML(a({data: {id: "1"}}))).to.equal("<a data-id=\"1\"></a>")
      })
    })

    context("and called with style property", () => {
      it("returns HTML with the given style property", () => {
        expect(toHTML(a({style: {"background-color": "red"}}))).to.equal("<a style=\"background-color: red;\"></a>")
      })
    })
  })

  it("contains all of the W3C defined elements", () => {
    expect(Object.keys(src)).to.deep.equal([
      "a",
      "abbr",
      "acronym",
      "address",
      "applet",
      "area",
      "article",
      "aside",
      "audio",
      "b",
      "base",
      "basefont",
      "bdi",
      "bdo",
      "bgsound",
      "big",
      "blink",
      "blockquote",
      "body",
      "br",
      "button",
      "canvas",
      "caption",
      "center",
      "cite",
      "code",
      "col",
      "colgroup",
      "command",
      "content",
      "data",
      "datalist",
      "dd",
      "del",
      "details",
      "dfn",
      "dialog",
      "dir",
      "div",
      "dl",
      "dt",
      "element",
      "em",
      "embed",
      "fieldset",
      "figcaption",
      "figure",
      "font",
      "footer",
      "form",
      "frame",
      "frameset",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "head",
      "header",
      "hgroup",
      "hr",
      "html",
      "i",
      "iframe",
      "image",
      "img",
      "input",
      "ins",
      "isindex",
      "kbd",
      "keygen",
      "label",
      "legend",
      "li",
      "link",
      "listing",
      "main",
      "map",
      "mark",
      "marquee",
      "menu",
      "menuitem",
      "meta",
      "meter",
      "multicol",
      "nav",
      "nobr",
      "noembed",
      "noframes",
      "noscript",
      "object",
      "ol",
      "optgroup",
      "option",
      "output",
      "p",
      "param",
      "picture",
      "plaintext",
      "pre",
      "progress",
      "q",
      "rp",
      "rt",
      "rtc",
      "ruby",
      "s",
      "samp",
      "script",
      "section",
      "select",
      "shadow",
      "small",
      "source",
      "spacer",
      "span",
      "strike",
      "strong",
      "style",
      "sub",
      "summary",
      "sup",
      "table",
      "tbody",
      "td",
      "template",
      "textarea",
      "tfoot",
      "th",
      "thead",
      "time",
      "title",
      "tr",
      "track",
      "tt",
      "u",
      "ul",
      "var",
      "video",
      "wbr",
      "xmp",
      "default"
      // Exports!
    ])
  })
})
