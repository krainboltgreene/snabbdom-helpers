import dom from "snabbdom/h"
import {concat} from "ramda"
import {contains} from "ramda"
import {map} from "ramda"
import {mergeAll} from "ramda"

import transform from "./transform"

const voids = [
  "area",
  "base",
  "br",
  "col",
  "command",
  "hr",
  "img",
  "input",
  "keygen",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr"
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
  "xmp"
]
const EMPTY_OBJECT = {}
const EMTPY_STRING = ""

module.exports = mergeAll(map(function node (tag: string): object {
  const withTag = concat(tag)

  if (contains(tag)(voids)) {
    const warning = `No inner allowed in void element <${tag}>`

    return {
      [tag]: (raw: {selector: string, inner?: string, children?: string} = EMPTY_OBJECT): [string, object] => {
        if (raw.inner || raw.children) {
          console.warn(warning)
        }

        return dom(
          withTag(raw.selector || EMTPY_STRING),
          transform(raw)
        )
      }
    }
  }

  return {
    [tag]: (raw: {selector?: string, inner?: string, children?: string} = EMPTY_OBJECT): [string, object, string] => dom(
      withTag(raw.selector || EMTPY_STRING),
      transform(raw),
      raw.inner || raw.children || EMTPY_STRING
    )
  }
})(tags))
