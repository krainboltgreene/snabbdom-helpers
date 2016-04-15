import dom from "snabbdom/h"
import {omit} from "ramda"
import {map} from "ramda"
import {concat} from "ramda"
import {mergeAll} from "ramda"
import {contains} from "ramda"

const voids = [
  "br",
  "hr",
  "img",
  "meta"
]
const tags = [
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
  "xmp"
]

const EMPTY_OBJECT = {}
const EMTPY_STRING = ""
const withoutSpecial = omit(["selector", "content"])

const node = (tag) => {
  const withTag = concat(tag)

  if (contains(tag, voids)) {
    const warning = `No content is allowed on void element like <${tag}>`

    return {
      [tag]: (properties = EMPTY_OBJECT) => {
        if (properties.content) {
          throw new Error(warning)
        }

        return dom(
          withTag(properties.selector || EMTPY_STRING),
          withoutSpecial(properties)
        )
      }
    }
  }

  return {
    [tag]: (properties = EMPTY_OBJECT) => dom(
      withTag(properties.selector || EMTPY_STRING),
      withoutSpecial(properties),
      properties.content || EMTPY_STRING
    )
  }
}

const nodes = map(node, tags)

export default mergeAll(nodes)
