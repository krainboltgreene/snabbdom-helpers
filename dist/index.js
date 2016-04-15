"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require("babel-runtime/helpers/defineProperty");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _h = require("snabbdom/h");

var _h2 = _interopRequireDefault(_h);

var _ramda = require("ramda");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

const voids = ["br", "hr", "img", "meta"];
const tags = ["a", "abbr", "acronym", "address", "applet", "area", "article", "aside", "audio", "b", "base", "basefont", "bdi", "bdo", "bgsound", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "command", "content", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "embed", "fieldset", "figcaption", "figure", "font", "footer", "form", "frame", "frameset", "head", "header", "hgroup", "hr", "html", "i", "iframe", "image", "img", "input", "ins", "isindex", "kbd", "keygen", "label", "legend", "li", "link", "listing", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "multicol", "nav", "nobr", "noembed", "noframes", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "plaintext", "pre", "progress", "q", "rp", "rt", "rtc", "ruby", "s", "samp", "script", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "tt", "u", "ul", "var", "video", "wbr", "xmp"];

const EMPTY_OBJECT = {};
const EMTPY_STRING = "";
const withoutSpecial = (0, _ramda.omit)(["selector", "content"]);

const node = tag => {
  const withTag = (0, _ramda.concat)(tag);

  if ((0, _ramda.contains)(tag, voids)) {
    const warning = "No content is allowed on void element like <" + tag + ">";

    return (0, _defineProperty3["default"])({}, tag, function () {
      let properties = arguments.length <= 0 || arguments[0] === undefined ? EMPTY_OBJECT : arguments[0];

      if (properties.content) {
        throw new Error(warning);
      }

      return (0, _h2["default"])(withTag(properties.selector || EMTPY_STRING), withoutSpecial(properties));
    });
  }

  return (0, _defineProperty3["default"])({}, tag, function () {
    let properties = arguments.length <= 0 || arguments[0] === undefined ? EMPTY_OBJECT : arguments[0];
    return (0, _h2["default"])(withTag(properties.selector || EMTPY_STRING), withoutSpecial(properties), properties.content || EMTPY_STRING);
  });
};

const nodes = (0, _ramda.map)(node, tags);

exports["default"] = (0, _ramda.mergeAll)(nodes);
