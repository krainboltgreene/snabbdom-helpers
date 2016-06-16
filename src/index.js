import {concat} from "ramda"
import {contains} from "ramda"
import {map} from "ramda"
import {merge} from "ramda"
import {mergeAll} from "ramda"
import {omit} from "ramda"
import {pick} from "ramda"
import dom from "snabbdom/h"

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
const HELPER_FIELD_KEYS = ["selector", "inner"]
const SNABBDOM_MODULE_KEYS = ["attrs", "on", "style", "class"]
const withoutHelperFields = omit(HELPER_FIELD_KEYS)
const withoutSnabbdomModules = omit(SNABBDOM_MODULE_KEYS)
const withSnabbdomModules = pick(SNABBDOM_MODULE_KEYS)

function attributes (properties) {
  return merge(
    withSnabbdomModules(properties),
    {
      props: merge(
        withoutSnabbdomModules(properties),
        properties.props
      )
    }
  )
}

module.exports = mergeAll(map(function node (tag) {
  const withTag = concat(tag)

  if (contains(tag, voids)) {
    const warning = `No content allowed in void element <${tag}>`

    return {
      [tag]: (properties = EMPTY_OBJECT) => {
        if (properties.inner) {
          throw new Error(warning)
        }

        return dom(
          withTag(properties.selector || EMTPY_STRING),
          attributes(properties)
        )
      }
    }
  }

  return {
    [tag]: (properties = EMPTY_OBJECT) => {
      return dom(
        withTag(properties.selector || EMTPY_STRING),
        attributes(withoutHelperFields(properties)),
        properties.inner || EMTPY_STRING
      )
    }
  }
}, tags))
