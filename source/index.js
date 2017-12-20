/* eslint-disable max-lines, func-style, id-length, no-underscore-dangle */
import domElement from "snabbdom/h"

import normalize from "./normalize"

import type {ParametersType} from "types"
import type {VirtualDOMNodeType} from "types"

const EMPTY_ERROR_MESSAGE = "Empty tags cannot semantically have children."
const EMPTY_PARAMETERS = {}
const EMPTY_CONTENT = ""
const EMPTY_SELECTOR = ""

export function a (parameters: ParametersType): VirtualDOMNodeType {
  const {children, selector}: {children?: mixed, selector?: string} = parameters || EMPTY_PARAMETERS

  if (children instanceof Function) {
    return domElement(`a${selector || EMPTY_SELECTOR}`, normalize(parameters), [children])
  }

  return domElement(`a${selector || EMPTY_SELECTOR}`, normalize(parameters), children || EMPTY_CONTENT)
}

export function abbr (parameters: ParametersType): VirtualDOMNodeType {
  const {children, selector}: {children?: mixed, selector?: string} = parameters || EMPTY_PARAMETERS

  if (children instanceof Function) {
    return domElement(`abbr${selector || EMPTY_SELECTOR}`, normalize(parameters), [children])
  }

  return domElement(`abbr${selector || EMPTY_SELECTOR}`, normalize(parameters), children || EMPTY_CONTENT)
}

export function address (parameters: ParametersType): VirtualDOMNodeType {
  const {children, selector}: {children?: mixed, selector?: string} = parameters || EMPTY_PARAMETERS

  if (children instanceof Function) {
    return domElement(`address${selector || EMPTY_SELECTOR}`, normalize(parameters), [children])
  }

  return domElement(`address${selector || EMPTY_SELECTOR}`, normalize(parameters), children || EMPTY_CONTENT)
}

export function article (parameters: ParametersType): VirtualDOMNodeType {
  const {children, selector}: {children?: mixed, selector?: string} = parameters || EMPTY_PARAMETERS

  if (children instanceof Function) {
    return domElement(`article${selector || EMPTY_SELECTOR}`, normalize(parameters), [children])
  }

  return domElement(`article${selector || EMPTY_SELECTOR}`, normalize(parameters), children || EMPTY_CONTENT)
}

export function aside (parameters: ParametersType): VirtualDOMNodeType {
  const {children, selector}: {children?: mixed, selector?: string} = parameters || EMPTY_PARAMETERS

  if (children instanceof Function) {
    return domElement(`aside${selector || EMPTY_SELECTOR}`, normalize(parameters), [children])
  }

  return domElement(`aside${selector || EMPTY_SELECTOR}`, normalize(parameters), children || EMPTY_CONTENT)
}

export function audio (parameters: ParametersType): VirtualDOMNodeType {
  const {children, selector}: {children?: mixed, selector?: string} = parameters || EMPTY_PARAMETERS

  if (children instanceof Function) {
    return domElement(`audio${selector || EMPTY_SELECTOR}`, normalize(parameters), [children])
  }

  return domElement(`audio${selector || EMPTY_SELECTOR}`, normalize(parameters), children || EMPTY_CONTENT)
}

export function b (parameters: ParametersType): VirtualDOMNodeType {
  const {children, selector}: {children?: mixed, selector?: string} = parameters || EMPTY_PARAMETERS

  if (children instanceof Function) {
    return domElement(`b${selector || EMPTY_SELECTOR}`, normalize(parameters), [children])
  }

  return domElement(`b${selector || EMPTY_SELECTOR}`, normalize(parameters), children || EMPTY_CONTENT)
}

export function bdi (parameters: ParametersType): VirtualDOMNodeType {
  const {children, selector}: {children?: mixed, selector?: string} = parameters || EMPTY_PARAMETERS

  if (children instanceof Function) {
    return domElement(`bdi${selector || EMPTY_SELECTOR}`, normalize(parameters), [children])
  }

  return domElement(`bdi${selector || EMPTY_SELECTOR}`, normalize(parameters), children || EMPTY_CONTENT)
}

export function bdo (parameters: ParametersType): VirtualDOMNodeType {
  const {children, selector}: {children?: mixed, selector?: string} = parameters || EMPTY_PARAMETERS

  if (children instanceof Function) {
    return domElement(`bdo${selector || EMPTY_SELECTOR}`, normalize(parameters), [children])
  }

  return domElement(`bdo${selector || EMPTY_SELECTOR}`, normalize(parameters), children || EMPTY_CONTENT)
}

export function bgsound (parameters: ParametersType): VirtualDOMNodeType {
  const {children, selector}: {children?: mixed, selector?: string} = parameters || EMPTY_PARAMETERS

  if (children instanceof Function) {
    return domElement(`bgsound${selector || EMPTY_SELECTOR}`, normalize(parameters), [children])
  }

  return domElement(`bgsound${selector || EMPTY_SELECTOR}`, normalize(parameters), children || EMPTY_CONTENT)
}

export function blockquote (parameters: ParametersType): VirtualDOMNodeType {
  const {children, selector}: {children?: mixed, selector?: string} = parameters || EMPTY_PARAMETERS

  if (children instanceof Function) {
    return domElement(`blockquote${selector || EMPTY_SELECTOR}`, normalize(parameters), [children])
  }

  return domElement(`blockquote${selector || EMPTY_SELECTOR}`, normalize(parameters), children || EMPTY_CONTENT)
}

export function body (parameters: ParametersType): VirtualDOMNodeType {
  const {children, selector}: {children?: mixed, selector?: string} = parameters || EMPTY_PARAMETERS

  if (children instanceof Function) {
    return domElement(`body${selector || EMPTY_SELECTOR}`, normalize(parameters), [children])
  }

  return domElement(`body${selector || EMPTY_SELECTOR}`, normalize(parameters), children || EMPTY_CONTENT)
}

export function button (parameters: ParametersType): VirtualDOMNodeType {
  const {children, selector}: {children?: mixed, selector?: string} = parameters || EMPTY_PARAMETERS

  if (children instanceof Function) {
    return domElement(`button${selector || EMPTY_SELECTOR}`, normalize(parameters), [children])
  }

  return domElement(`button${selector || EMPTY_SELECTOR}`, normalize(parameters), children || EMPTY_CONTENT)
}

export function canvas (parameters: ParametersType): VirtualDOMNodeType {
  const {children, selector}: {children?: mixed, selector?: string} = parameters || EMPTY_PARAMETERS

  if (children instanceof Function) {
    return domElement(`canvas${selector || EMPTY_SELECTOR}`, normalize(parameters), [children])
  }

  return domElement(`canvas${selector || EMPTY_SELECTOR}`, normalize(parameters), children || EMPTY_CONTENT)
}

export function caption (parameters: ParametersType): VirtualDOMNodeType {
  const {children, selector}: {children?: mixed, selector?: string} = parameters || EMPTY_PARAMETERS

  if (children instanceof Function) {
    return domElement(`caption${selector || EMPTY_SELECTOR}`, normalize(parameters), [children])
  }

  return domElement(`caption${selector || EMPTY_SELECTOR}`, normalize(parameters), children || EMPTY_CONTENT)
}

export function cite (parameters: ParametersType): VirtualDOMNodeType {
  const {children, selector}: {children?: mixed, selector?: string} = parameters || EMPTY_PARAMETERS

  if (children instanceof Function) {
    return domElement(`cite${selector || EMPTY_SELECTOR}`, normalize(parameters), [children])
  }

  return domElement(`cite${selector || EMPTY_SELECTOR}`, normalize(parameters), children || EMPTY_CONTENT)
}

export function code (parameters: ParametersType): VirtualDOMNodeType {
  const {children, selector}: {children?: mixed, selector?: string} = parameters || EMPTY_PARAMETERS

  if (children instanceof Function) {
    return domElement(`code${selector || EMPTY_SELECTOR}`, normalize(parameters), [children])
  }

  return domElement(`code${selector || EMPTY_SELECTOR}`, normalize(parameters), children || EMPTY_CONTENT)
}

export function colgroup (parameters: ParametersType): VirtualDOMNodeType {
  const {children, selector}: {children?: mixed, selector?: string} = parameters || EMPTY_PARAMETERS

  if (children instanceof Function) {
    return domElement(`colgroup${selector || EMPTY_SELECTOR}`, normalize(parameters), [children])
  }

  return domElement(`colgroup${selector || EMPTY_SELECTOR}`, normalize(parameters), children || EMPTY_CONTENT)
}

export function data (parameters: ParametersType): VirtualDOMNodeType {
  const {children, selector}: {children?: mixed, selector?: string} = parameters || EMPTY_PARAMETERS

  if (children instanceof Function) {
    return domElement(`data${selector || EMPTY_SELECTOR}`, normalize(parameters), [children])
  }

  return domElement(`data${selector || EMPTY_SELECTOR}`, normalize(parameters), children || EMPTY_CONTENT)
}

export function datalist (parameters: ParametersType): VirtualDOMNodeType {
  const {children, selector}: {children?: mixed, selector?: string} = parameters || EMPTY_PARAMETERS

  if (children instanceof Function) {
    return domElement(`datalist${selector || EMPTY_SELECTOR}`, normalize(parameters), [children])
  }

  return domElement(`datalist${selector || EMPTY_SELECTOR}`, normalize(parameters), children || EMPTY_CONTENT)
}

export function dd (parameters: ParametersType): VirtualDOMNodeType {
  const {children, selector}: {children?: mixed, selector?: string} = parameters || EMPTY_PARAMETERS

  if (children instanceof Function) {
    return domElement(`dd${selector || EMPTY_SELECTOR}`, normalize(parameters), [children])
  }

  return domElement(`dd${selector || EMPTY_SELECTOR}`, normalize(parameters), children || EMPTY_CONTENT)
}

export function del (parameters: ParametersType): VirtualDOMNodeType {
  const {children, selector}: {children?: mixed, selector?: string} = parameters || EMPTY_PARAMETERS

  if (children instanceof Function) {
    return domElement(`del${selector || EMPTY_SELECTOR}`, normalize(parameters), [children])
  }

  return domElement(`del${selector || EMPTY_SELECTOR}`, normalize(parameters), children || EMPTY_CONTENT)
}

export function details (parameters: ParametersType): VirtualDOMNodeType {
  const {children, selector}: {children?: mixed, selector?: string} = parameters || EMPTY_PARAMETERS

  if (children instanceof Function) {
    return domElement(`details${selector || EMPTY_SELECTOR}`, normalize(parameters), [children])
  }

  return domElement(`details${selector || EMPTY_SELECTOR}`, normalize(parameters), children || EMPTY_CONTENT)
}

export function dfn (parameters: ParametersType): VirtualDOMNodeType {
  const {children, selector}: {children?: mixed, selector?: string} = parameters || EMPTY_PARAMETERS

  if (children instanceof Function) {
    return domElement(`dfn${selector || EMPTY_SELECTOR}`, normalize(parameters), [children])
  }

  return domElement(`dfn${selector || EMPTY_SELECTOR}`, normalize(parameters), children || EMPTY_CONTENT)
}

export function dir (parameters: ParametersType): VirtualDOMNodeType {
  const {children, selector}: {children?: mixed, selector?: string} = parameters || EMPTY_PARAMETERS

  if (children instanceof Function) {
    return domElement(`dir${selector || EMPTY_SELECTOR}`, normalize(parameters), [children])
  }

  return domElement(`dir${selector || EMPTY_SELECTOR}`, normalize(parameters), children || EMPTY_CONTENT)
}

export function div (parameters: ParametersType): VirtualDOMNodeType {
  const {children, selector}: {children?: mixed, selector?: string} = parameters || EMPTY_PARAMETERS

  if (children instanceof Function) {
    return domElement(`div${selector || EMPTY_SELECTOR}`, normalize(parameters), [children])
  }

  return domElement(`div${selector || EMPTY_SELECTOR}`, normalize(parameters), children || EMPTY_CONTENT)
}

export function dl (parameters: ParametersType): VirtualDOMNodeType {
  const {children, selector}: {children?: mixed, selector?: string} = parameters || EMPTY_PARAMETERS

  if (children instanceof Function) {
    return domElement(`dl${selector || EMPTY_SELECTOR}`, normalize(parameters), [children])
  }

  return domElement(`dl${selector || EMPTY_SELECTOR}`, normalize(parameters), children || EMPTY_CONTENT)
}

export function dt (parameters: ParametersType): VirtualDOMNodeType {
  const {children, selector}: {children?: mixed, selector?: string} = parameters || EMPTY_PARAMETERS

  if (children instanceof Function) {
    return domElement(`dt${selector || EMPTY_SELECTOR}`, normalize(parameters), [children])
  }

  return domElement(`dt${selector || EMPTY_SELECTOR}`, normalize(parameters), children || EMPTY_CONTENT)
}

export function em (parameters: ParametersType): VirtualDOMNodeType {
  const {children, selector}: {children?: mixed, selector?: string} = parameters || EMPTY_PARAMETERS

  if (children instanceof Function) {
    return domElement(`em${selector || EMPTY_SELECTOR}`, normalize(parameters), [children])
  }

  return domElement(`em${selector || EMPTY_SELECTOR}`, normalize(parameters), children || EMPTY_CONTENT)
}

export function fieldset (parameters: ParametersType): VirtualDOMNodeType {
  const {children, selector}: {children?: mixed, selector?: string} = parameters || EMPTY_PARAMETERS

  if (children instanceof Function) {
    return domElement(`fieldset${selector || EMPTY_SELECTOR}`, normalize(parameters), [children])
  }

  return domElement(`fieldset${selector || EMPTY_SELECTOR}`, normalize(parameters), children || EMPTY_CONTENT)
}

export function figcaption (parameters: ParametersType): VirtualDOMNodeType {
  const {children, selector}: {children?: mixed, selector?: string} = parameters || EMPTY_PARAMETERS

  if (children instanceof Function) {
    return domElement(`figcaption${selector || EMPTY_SELECTOR}`, normalize(parameters), [children])
  }

  return domElement(`figcaption${selector || EMPTY_SELECTOR}`, normalize(parameters), children || EMPTY_CONTENT)
}

export function figure (parameters: ParametersType): VirtualDOMNodeType {
  const {children, selector}: {children?: mixed, selector?: string} = parameters || EMPTY_PARAMETERS

  if (children instanceof Function) {
    return domElement(`figure${selector || EMPTY_SELECTOR}`, normalize(parameters), [children])
  }

  return domElement(`figure${selector || EMPTY_SELECTOR}`, normalize(parameters), children || EMPTY_CONTENT)
}

export function footer (parameters: ParametersType): VirtualDOMNodeType {
  const {children, selector}: {children?: mixed, selector?: string} = parameters || EMPTY_PARAMETERS

  if (children instanceof Function) {
    return domElement(`footer${selector || EMPTY_SELECTOR}`, normalize(parameters), [children])
  }

  return domElement(`footer${selector || EMPTY_SELECTOR}`, normalize(parameters), children || EMPTY_CONTENT)
}

export function form (parameters: ParametersType): VirtualDOMNodeType {
  const {children, selector}: {children?: mixed, selector?: string} = parameters || EMPTY_PARAMETERS

  if (children instanceof Function) {
    return domElement(`form${selector || EMPTY_SELECTOR}`, normalize(parameters), [children])
  }

  return domElement(`form${selector || EMPTY_SELECTOR}`, normalize(parameters), children || EMPTY_CONTENT)
}

export function h1 (parameters: ParametersType): VirtualDOMNodeType {
  const {children, selector}: {children?: mixed, selector?: string} = parameters || EMPTY_PARAMETERS

  if (children instanceof Function) {
    return domElement(`h1${selector || EMPTY_SELECTOR}`, normalize(parameters), [children])
  }

  return domElement(`h1${selector || EMPTY_SELECTOR}`, normalize(parameters), children || EMPTY_CONTENT)
}

export function h2 (parameters: ParametersType): VirtualDOMNodeType {
  const {children, selector}: {children?: mixed, selector?: string} = parameters || EMPTY_PARAMETERS

  if (children instanceof Function) {
    return domElement(`h2${selector || EMPTY_SELECTOR}`, normalize(parameters), [children])
  }

  return domElement(`h2${selector || EMPTY_SELECTOR}`, normalize(parameters), children || EMPTY_CONTENT)
}

export function h3 (parameters: ParametersType): VirtualDOMNodeType {
  const {children, selector}: {children?: mixed, selector?: string} = parameters || EMPTY_PARAMETERS

  if (children instanceof Function) {
    return domElement(`h3${selector || EMPTY_SELECTOR}`, normalize(parameters), [children])
  }

  return domElement(`h3${selector || EMPTY_SELECTOR}`, normalize(parameters), children || EMPTY_CONTENT)
}

export function h4 (parameters: ParametersType): VirtualDOMNodeType {
  const {children, selector}: {children?: mixed, selector?: string} = parameters || EMPTY_PARAMETERS

  if (children instanceof Function) {
    return domElement(`h4${selector || EMPTY_SELECTOR}`, normalize(parameters), [children])
  }

  return domElement(`h4${selector || EMPTY_SELECTOR}`, normalize(parameters), children || EMPTY_CONTENT)
}

export function h5 (parameters: ParametersType): VirtualDOMNodeType {
  const {children, selector}: {children?: mixed, selector?: string} = parameters || EMPTY_PARAMETERS

  if (children instanceof Function) {
    return domElement(`h5${selector || EMPTY_SELECTOR}`, normalize(parameters), [children])
  }

  return domElement(`h5${selector || EMPTY_SELECTOR}`, normalize(parameters), children || EMPTY_CONTENT)
}

export function h6 (parameters: ParametersType): VirtualDOMNodeType {
  const {children, selector}: {children?: mixed, selector?: string} = parameters || EMPTY_PARAMETERS

  if (children instanceof Function) {
    return domElement(`h6${selector || EMPTY_SELECTOR}`, normalize(parameters), [children])
  }

  return domElement(`h6${selector || EMPTY_SELECTOR}`, normalize(parameters), children || EMPTY_CONTENT)
}

export function head (parameters: ParametersType): VirtualDOMNodeType {
  const {children, selector}: {children?: mixed, selector?: string} = parameters || EMPTY_PARAMETERS

  if (children instanceof Function) {
    return domElement(`head${selector || EMPTY_SELECTOR}`, normalize(parameters), [children])
  }

  return domElement(`head${selector || EMPTY_SELECTOR}`, normalize(parameters), children || EMPTY_CONTENT)
}

export function header (parameters: ParametersType): VirtualDOMNodeType {
  const {children, selector}: {children?: mixed, selector?: string} = parameters || EMPTY_PARAMETERS

  if (children instanceof Function) {
    return domElement(`header${selector || EMPTY_SELECTOR}`, normalize(parameters), [children])
  }

  return domElement(`header${selector || EMPTY_SELECTOR}`, normalize(parameters), children || EMPTY_CONTENT)
}

export function hgroup (parameters: ParametersType): VirtualDOMNodeType {
  const {children, selector}: {children?: mixed, selector?: string} = parameters || EMPTY_PARAMETERS

  if (children instanceof Function) {
    return domElement(`hgroup${selector || EMPTY_SELECTOR}`, normalize(parameters), [children])
  }

  return domElement(`hgroup${selector || EMPTY_SELECTOR}`, normalize(parameters), children || EMPTY_CONTENT)
}

export function html (parameters: ParametersType): VirtualDOMNodeType {
  const {children, selector}: {children?: mixed, selector?: string} = parameters || EMPTY_PARAMETERS

  if (children instanceof Function) {
    return domElement(`html${selector || EMPTY_SELECTOR}`, normalize(parameters), [children])
  }

  return domElement(`html${selector || EMPTY_SELECTOR}`, normalize(parameters), children || EMPTY_CONTENT)
}

export function i (parameters: ParametersType): VirtualDOMNodeType {
  const {children, selector}: {children?: mixed, selector?: string} = parameters || EMPTY_PARAMETERS

  if (children instanceof Function) {
    return domElement(`i${selector || EMPTY_SELECTOR}`, normalize(parameters), [children])
  }

  return domElement(`i${selector || EMPTY_SELECTOR}`, normalize(parameters), children || EMPTY_CONTENT)
}

export function iframe (parameters: ParametersType): VirtualDOMNodeType {
  const {children, selector}: {children?: mixed, selector?: string} = parameters || EMPTY_PARAMETERS

  if (children instanceof Function) {
    return domElement(`iframe${selector || EMPTY_SELECTOR}`, normalize(parameters), [children])
  }

  return domElement(`iframe${selector || EMPTY_SELECTOR}`, normalize(parameters), children || EMPTY_CONTENT)
}

export function ins (parameters: ParametersType): VirtualDOMNodeType {
  const {children, selector}: {children?: mixed, selector?: string} = parameters || EMPTY_PARAMETERS

  if (children instanceof Function) {
    return domElement(`ins${selector || EMPTY_SELECTOR}`, normalize(parameters), [children])
  }

  return domElement(`ins${selector || EMPTY_SELECTOR}`, normalize(parameters), children || EMPTY_CONTENT)
}

export function kbd (parameters: ParametersType): VirtualDOMNodeType {
  const {children, selector}: {children?: mixed, selector?: string} = parameters || EMPTY_PARAMETERS

  if (children instanceof Function) {
    return domElement(`kbd${selector || EMPTY_SELECTOR}`, normalize(parameters), [children])
  }

  return domElement(`kbd${selector || EMPTY_SELECTOR}`, normalize(parameters), children || EMPTY_CONTENT)
}

export function label (parameters: ParametersType): VirtualDOMNodeType {
  const {children, selector}: {children?: mixed, selector?: string} = parameters || EMPTY_PARAMETERS

  if (children instanceof Function) {
    return domElement(`label${selector || EMPTY_SELECTOR}`, normalize(parameters), [children])
  }

  return domElement(`label${selector || EMPTY_SELECTOR}`, normalize(parameters), children || EMPTY_CONTENT)
}

export function legend (parameters: ParametersType): VirtualDOMNodeType {
  const {children, selector}: {children?: mixed, selector?: string} = parameters || EMPTY_PARAMETERS

  if (children instanceof Function) {
    return domElement(`legend${selector || EMPTY_SELECTOR}`, normalize(parameters), [children])
  }

  return domElement(`legend${selector || EMPTY_SELECTOR}`, normalize(parameters), children || EMPTY_CONTENT)
}

export function li (parameters: ParametersType): VirtualDOMNodeType {
  const {children, selector}: {children?: mixed, selector?: string} = parameters || EMPTY_PARAMETERS

  if (children instanceof Function) {
    return domElement(`li${selector || EMPTY_SELECTOR}`, normalize(parameters), [children])
  }

  return domElement(`li${selector || EMPTY_SELECTOR}`, normalize(parameters), children || EMPTY_CONTENT)
}

export function main (parameters: ParametersType): VirtualDOMNodeType {
  const {children, selector}: {children?: mixed, selector?: string} = parameters || EMPTY_PARAMETERS

  if (children instanceof Function) {
    return domElement(`main${selector || EMPTY_SELECTOR}`, normalize(parameters), [children])
  }

  return domElement(`main${selector || EMPTY_SELECTOR}`, normalize(parameters), children || EMPTY_CONTENT)
}

export function map (parameters: ParametersType): VirtualDOMNodeType {
  const {children, selector}: {children?: mixed, selector?: string} = parameters || EMPTY_PARAMETERS

  if (children instanceof Function) {
    return domElement(`map${selector || EMPTY_SELECTOR}`, normalize(parameters), [children])
  }

  return domElement(`map${selector || EMPTY_SELECTOR}`, normalize(parameters), children || EMPTY_CONTENT)
}

export function mark (parameters: ParametersType): VirtualDOMNodeType {
  const {children, selector}: {children?: mixed, selector?: string} = parameters || EMPTY_PARAMETERS

  if (children instanceof Function) {
    return domElement(`mark${selector || EMPTY_SELECTOR}`, normalize(parameters), [children])
  }

  return domElement(`mark${selector || EMPTY_SELECTOR}`, normalize(parameters), children || EMPTY_CONTENT)
}

export function menu (parameters: ParametersType): VirtualDOMNodeType {
  const {children, selector}: {children?: mixed, selector?: string} = parameters || EMPTY_PARAMETERS

  if (children instanceof Function) {
    return domElement(`menu${selector || EMPTY_SELECTOR}`, normalize(parameters), [children])
  }

  return domElement(`menu${selector || EMPTY_SELECTOR}`, normalize(parameters), children || EMPTY_CONTENT)
}

export function menuitem (parameters: ParametersType): VirtualDOMNodeType {
  const {children, selector}: {children?: mixed, selector?: string} = parameters || EMPTY_PARAMETERS

  if (children instanceof Function) {
    return domElement(`menuitem${selector || EMPTY_SELECTOR}`, normalize(parameters), [children])
  }

  return domElement(`menuitem${selector || EMPTY_SELECTOR}`, normalize(parameters), children || EMPTY_CONTENT)
}

export function meter (parameters: ParametersType): VirtualDOMNodeType {
  const {children, selector}: {children?: mixed, selector?: string} = parameters || EMPTY_PARAMETERS

  if (children instanceof Function) {
    return domElement(`meter${selector || EMPTY_SELECTOR}`, normalize(parameters), [children])
  }

  return domElement(`meter${selector || EMPTY_SELECTOR}`, normalize(parameters), children || EMPTY_CONTENT)
}

export function nav (parameters: ParametersType): VirtualDOMNodeType {
  const {children, selector}: {children?: mixed, selector?: string} = parameters || EMPTY_PARAMETERS

  if (children instanceof Function) {
    return domElement(`nav${selector || EMPTY_SELECTOR}`, normalize(parameters), [children])
  }

  return domElement(`nav${selector || EMPTY_SELECTOR}`, normalize(parameters), children || EMPTY_CONTENT)
}

export function nobr (parameters: ParametersType): VirtualDOMNodeType {
  const {children, selector}: {children?: mixed, selector?: string} = parameters || EMPTY_PARAMETERS

  if (children instanceof Function) {
    return domElement(`nobr${selector || EMPTY_SELECTOR}`, normalize(parameters), [children])
  }

  return domElement(`nobr${selector || EMPTY_SELECTOR}`, normalize(parameters), children || EMPTY_CONTENT)
}

export function noframes (parameters: ParametersType): VirtualDOMNodeType {
  const {children, selector}: {children?: mixed, selector?: string} = parameters || EMPTY_PARAMETERS

  if (children instanceof Function) {
    return domElement(`noframes${selector || EMPTY_SELECTOR}`, normalize(parameters), [children])
  }

  return domElement(`noframes${selector || EMPTY_SELECTOR}`, normalize(parameters), children || EMPTY_CONTENT)
}

export function noscript (parameters: ParametersType): VirtualDOMNodeType {
  const {children, selector}: {children?: mixed, selector?: string} = parameters || EMPTY_PARAMETERS

  if (children instanceof Function) {
    return domElement(`noscript${selector || EMPTY_SELECTOR}`, normalize(parameters), [children])
  }

  return domElement(`noscript${selector || EMPTY_SELECTOR}`, normalize(parameters), children || EMPTY_CONTENT)
}

export function object (parameters: ParametersType): VirtualDOMNodeType {
  const {children, selector}: {children?: mixed, selector?: string} = parameters || EMPTY_PARAMETERS

  if (children instanceof Function) {
    return domElement(`object${selector || EMPTY_SELECTOR}`, normalize(parameters), [children])
  }

  return domElement(`object${selector || EMPTY_SELECTOR}`, normalize(parameters), children || EMPTY_CONTENT)
}

export function ol (parameters: ParametersType): VirtualDOMNodeType {
  const {children, selector}: {children?: mixed, selector?: string} = parameters || EMPTY_PARAMETERS

  if (children instanceof Function) {
    return domElement(`ol${selector || EMPTY_SELECTOR}`, normalize(parameters), [children])
  }

  return domElement(`ol${selector || EMPTY_SELECTOR}`, normalize(parameters), children || EMPTY_CONTENT)
}

export function optgroup (parameters: ParametersType): VirtualDOMNodeType {
  const {children, selector}: {children?: mixed, selector?: string} = parameters || EMPTY_PARAMETERS

  if (children instanceof Function) {
    return domElement(`optgroup${selector || EMPTY_SELECTOR}`, normalize(parameters), [children])
  }

  return domElement(`optgroup${selector || EMPTY_SELECTOR}`, normalize(parameters), children || EMPTY_CONTENT)
}

export function option (parameters: ParametersType): VirtualDOMNodeType {
  const {children, selector}: {children?: mixed, selector?: string} = parameters || EMPTY_PARAMETERS

  if (children instanceof Function) {
    return domElement(`option${selector || EMPTY_SELECTOR}`, normalize(parameters), [children])
  }

  return domElement(`option${selector || EMPTY_SELECTOR}`, normalize(parameters), children || EMPTY_CONTENT)
}

export function output (parameters: ParametersType): VirtualDOMNodeType {
  const {children, selector}: {children?: mixed, selector?: string} = parameters || EMPTY_PARAMETERS

  if (children instanceof Function) {
    return domElement(`output${selector || EMPTY_SELECTOR}`, normalize(parameters), [children])
  }

  return domElement(`output${selector || EMPTY_SELECTOR}`, normalize(parameters), children || EMPTY_CONTENT)
}

export function p (parameters: ParametersType): VirtualDOMNodeType {
  const {children, selector}: {children?: mixed, selector?: string} = parameters || EMPTY_PARAMETERS

  if (children instanceof Function) {
    return domElement(`p${selector || EMPTY_SELECTOR}`, normalize(parameters), [children])
  }

  return domElement(`p${selector || EMPTY_SELECTOR}`, normalize(parameters), children || EMPTY_CONTENT)
}

export function picture (parameters: ParametersType): VirtualDOMNodeType {
  const {children, selector}: {children?: mixed, selector?: string} = parameters || EMPTY_PARAMETERS

  if (children instanceof Function) {
    return domElement(`picture${selector || EMPTY_SELECTOR}`, normalize(parameters), [children])
  }

  return domElement(`picture${selector || EMPTY_SELECTOR}`, normalize(parameters), children || EMPTY_CONTENT)
}

export function pre (parameters: ParametersType): VirtualDOMNodeType {
  const {children, selector}: {children?: mixed, selector?: string} = parameters || EMPTY_PARAMETERS

  if (children instanceof Function) {
    return domElement(`pre${selector || EMPTY_SELECTOR}`, normalize(parameters), [children])
  }

  return domElement(`pre${selector || EMPTY_SELECTOR}`, normalize(parameters), children || EMPTY_CONTENT)
}

export function progress (parameters: ParametersType): VirtualDOMNodeType {
  const {children, selector}: {children?: mixed, selector?: string} = parameters || EMPTY_PARAMETERS

  if (children instanceof Function) {
    return domElement(`progress${selector || EMPTY_SELECTOR}`, normalize(parameters), [children])
  }

  return domElement(`progress${selector || EMPTY_SELECTOR}`, normalize(parameters), children || EMPTY_CONTENT)
}

export function q (parameters: ParametersType): VirtualDOMNodeType {
  const {children, selector}: {children?: mixed, selector?: string} = parameters || EMPTY_PARAMETERS

  if (children instanceof Function) {
    return domElement(`q${selector || EMPTY_SELECTOR}`, normalize(parameters), [children])
  }

  return domElement(`q${selector || EMPTY_SELECTOR}`, normalize(parameters), children || EMPTY_CONTENT)
}

export function rp (parameters: ParametersType): VirtualDOMNodeType {
  const {children, selector}: {children?: mixed, selector?: string} = parameters || EMPTY_PARAMETERS

  if (children instanceof Function) {
    return domElement(`rp${selector || EMPTY_SELECTOR}`, normalize(parameters), [children])
  }

  return domElement(`rp${selector || EMPTY_SELECTOR}`, normalize(parameters), children || EMPTY_CONTENT)
}

export function rt (parameters: ParametersType): VirtualDOMNodeType {
  const {children, selector}: {children?: mixed, selector?: string} = parameters || EMPTY_PARAMETERS

  if (children instanceof Function) {
    return domElement(`rt${selector || EMPTY_SELECTOR}`, normalize(parameters), [children])
  }

  return domElement(`rt${selector || EMPTY_SELECTOR}`, normalize(parameters), children || EMPTY_CONTENT)
}

export function rtc (parameters: ParametersType): VirtualDOMNodeType {
  const {children, selector}: {children?: mixed, selector?: string} = parameters || EMPTY_PARAMETERS

  if (children instanceof Function) {
    return domElement(`rtc${selector || EMPTY_SELECTOR}`, normalize(parameters), [children])
  }

  return domElement(`rtc${selector || EMPTY_SELECTOR}`, normalize(parameters), children || EMPTY_CONTENT)
}

export function ruby (parameters: ParametersType): VirtualDOMNodeType {
  const {children, selector}: {children?: mixed, selector?: string} = parameters || EMPTY_PARAMETERS

  if (children instanceof Function) {
    return domElement(`ruby${selector || EMPTY_SELECTOR}`, normalize(parameters), [children])
  }

  return domElement(`ruby${selector || EMPTY_SELECTOR}`, normalize(parameters), children || EMPTY_CONTENT)
}

export function s (parameters: ParametersType): VirtualDOMNodeType {
  const {children, selector}: {children?: mixed, selector?: string} = parameters || EMPTY_PARAMETERS

  if (children instanceof Function) {
    return domElement(`s${selector || EMPTY_SELECTOR}`, normalize(parameters), [children])
  }

  return domElement(`s${selector || EMPTY_SELECTOR}`, normalize(parameters), children || EMPTY_CONTENT)
}

export function samp (parameters: ParametersType): VirtualDOMNodeType {
  const {children, selector}: {children?: mixed, selector?: string} = parameters || EMPTY_PARAMETERS

  if (children instanceof Function) {
    return domElement(`samp${selector || EMPTY_SELECTOR}`, normalize(parameters), [children])
  }

  return domElement(`samp${selector || EMPTY_SELECTOR}`, normalize(parameters), children || EMPTY_CONTENT)
}

export function script (parameters: ParametersType): VirtualDOMNodeType {
  const {children, selector}: {children?: mixed, selector?: string} = parameters || EMPTY_PARAMETERS

  if (children instanceof Function) {
    return domElement(`script${selector || EMPTY_SELECTOR}`, normalize(parameters), [children])
  }

  return domElement(`script${selector || EMPTY_SELECTOR}`, normalize(parameters), children || EMPTY_CONTENT)
}

export function section (parameters: ParametersType): VirtualDOMNodeType {
  const {children, selector}: {children?: mixed, selector?: string} = parameters || EMPTY_PARAMETERS

  if (children instanceof Function) {
    return domElement(`section${selector || EMPTY_SELECTOR}`, normalize(parameters), [children])
  }

  return domElement(`section${selector || EMPTY_SELECTOR}`, normalize(parameters), children || EMPTY_CONTENT)
}

export function select (parameters: ParametersType): VirtualDOMNodeType {
  const {children, selector}: {children?: mixed, selector?: string} = parameters || EMPTY_PARAMETERS

  if (children instanceof Function) {
    return domElement(`select${selector || EMPTY_SELECTOR}`, normalize(parameters), [children])
  }

  return domElement(`select${selector || EMPTY_SELECTOR}`, normalize(parameters), children || EMPTY_CONTENT)
}

export function small (parameters: ParametersType): VirtualDOMNodeType {
  const {children, selector}: {children?: mixed, selector?: string} = parameters || EMPTY_PARAMETERS

  if (children instanceof Function) {
    return domElement(`small${selector || EMPTY_SELECTOR}`, normalize(parameters), [children])
  }

  return domElement(`small${selector || EMPTY_SELECTOR}`, normalize(parameters), children || EMPTY_CONTENT)
}

export function span (parameters: ParametersType): VirtualDOMNodeType {
  const {children, selector}: {children?: mixed, selector?: string} = parameters || EMPTY_PARAMETERS

  if (children instanceof Function) {
    return domElement(`span${selector || EMPTY_SELECTOR}`, normalize(parameters), [children])
  }

  return domElement(`span${selector || EMPTY_SELECTOR}`, normalize(parameters), children || EMPTY_CONTENT)
}

export function strong (parameters: ParametersType): VirtualDOMNodeType {
  const {children, selector}: {children?: mixed, selector?: string} = parameters || EMPTY_PARAMETERS

  if (children instanceof Function) {
    return domElement(`strong${selector || EMPTY_SELECTOR}`, normalize(parameters), [children])
  }

  return domElement(`strong${selector || EMPTY_SELECTOR}`, normalize(parameters), children || EMPTY_CONTENT)
}

export function style (parameters: ParametersType): VirtualDOMNodeType {
  const {children, selector}: {children?: mixed, selector?: string} = parameters || EMPTY_PARAMETERS

  if (children instanceof Function) {
    return domElement(`style${selector || EMPTY_SELECTOR}`, normalize(parameters), [children])
  }

  return domElement(`style${selector || EMPTY_SELECTOR}`, normalize(parameters), children || EMPTY_CONTENT)
}

export function sub (parameters: ParametersType): VirtualDOMNodeType {
  const {children, selector}: {children?: mixed, selector?: string} = parameters || EMPTY_PARAMETERS

  if (children instanceof Function) {
    return domElement(`sub${selector || EMPTY_SELECTOR}`, normalize(parameters), [children])
  }

  return domElement(`sub${selector || EMPTY_SELECTOR}`, normalize(parameters), children || EMPTY_CONTENT)
}

export function summary (parameters: ParametersType): VirtualDOMNodeType {
  const {children, selector}: {children?: mixed, selector?: string} = parameters || EMPTY_PARAMETERS

  if (children instanceof Function) {
    return domElement(`summary${selector || EMPTY_SELECTOR}`, normalize(parameters), [children])
  }

  return domElement(`summary${selector || EMPTY_SELECTOR}`, normalize(parameters), children || EMPTY_CONTENT)
}

export function sup (parameters: ParametersType): VirtualDOMNodeType {
  const {children, selector}: {children?: mixed, selector?: string} = parameters || EMPTY_PARAMETERS

  if (children instanceof Function) {
    return domElement(`sup${selector || EMPTY_SELECTOR}`, normalize(parameters), [children])
  }

  return domElement(`sup${selector || EMPTY_SELECTOR}`, normalize(parameters), children || EMPTY_CONTENT)
}

export function table (parameters: ParametersType): VirtualDOMNodeType {
  const {children, selector}: {children?: mixed, selector?: string} = parameters || EMPTY_PARAMETERS

  if (children instanceof Function) {
    return domElement(`table${selector || EMPTY_SELECTOR}`, normalize(parameters), [children])
  }

  return domElement(`table${selector || EMPTY_SELECTOR}`, normalize(parameters), children || EMPTY_CONTENT)
}

export function tbody (parameters: ParametersType): VirtualDOMNodeType {
  const {children, selector}: {children?: mixed, selector?: string} = parameters || EMPTY_PARAMETERS

  if (children instanceof Function) {
    return domElement(`tbody${selector || EMPTY_SELECTOR}`, normalize(parameters), [children])
  }

  return domElement(`tbody${selector || EMPTY_SELECTOR}`, normalize(parameters), children || EMPTY_CONTENT)
}

export function td (parameters: ParametersType): VirtualDOMNodeType {
  const {children, selector}: {children?: mixed, selector?: string} = parameters || EMPTY_PARAMETERS

  if (children instanceof Function) {
    return domElement(`td${selector || EMPTY_SELECTOR}`, normalize(parameters), [children])
  }

  return domElement(`td${selector || EMPTY_SELECTOR}`, normalize(parameters), children || EMPTY_CONTENT)
}

export function template (parameters: ParametersType): VirtualDOMNodeType {
  const {children, selector}: {children?: mixed, selector?: string} = parameters || EMPTY_PARAMETERS

  if (children instanceof Function) {
    return domElement(`template${selector || EMPTY_SELECTOR}`, normalize(parameters), [children])
  }

  return domElement(`template${selector || EMPTY_SELECTOR}`, normalize(parameters), children || EMPTY_CONTENT)
}

export function textarea (parameters: ParametersType): VirtualDOMNodeType {
  const {children, selector}: {children?: mixed, selector?: string} = parameters || EMPTY_PARAMETERS

  if (children instanceof Function) {
    return domElement(`textarea${selector || EMPTY_SELECTOR}`, normalize(parameters), [children])
  }

  return domElement(`textarea${selector || EMPTY_SELECTOR}`, normalize(parameters), children || EMPTY_CONTENT)
}

export function tfoot (parameters: ParametersType): VirtualDOMNodeType {
  const {children, selector}: {children?: mixed, selector?: string} = parameters || EMPTY_PARAMETERS

  if (children instanceof Function) {
    return domElement(`tfoot${selector || EMPTY_SELECTOR}`, normalize(parameters), [children])
  }

  return domElement(`tfoot${selector || EMPTY_SELECTOR}`, normalize(parameters), children || EMPTY_CONTENT)
}

export function th (parameters: ParametersType): VirtualDOMNodeType {
  const {children, selector}: {children?: mixed, selector?: string} = parameters || EMPTY_PARAMETERS

  if (children instanceof Function) {
    return domElement(`th${selector || EMPTY_SELECTOR}`, normalize(parameters), [children])
  }

  return domElement(`th${selector || EMPTY_SELECTOR}`, normalize(parameters), children || EMPTY_CONTENT)
}

export function thead (parameters: ParametersType): VirtualDOMNodeType {
  const {children, selector}: {children?: mixed, selector?: string} = parameters || EMPTY_PARAMETERS

  if (children instanceof Function) {
    return domElement(`thead${selector || EMPTY_SELECTOR}`, normalize(parameters), [children])
  }

  return domElement(`thead${selector || EMPTY_SELECTOR}`, normalize(parameters), children || EMPTY_CONTENT)
}

export function time (parameters: ParametersType): VirtualDOMNodeType {
  const {children, selector}: {children?: mixed, selector?: string} = parameters || EMPTY_PARAMETERS

  if (children instanceof Function) {
    return domElement(`time${selector || EMPTY_SELECTOR}`, normalize(parameters), [children])
  }

  return domElement(`time${selector || EMPTY_SELECTOR}`, normalize(parameters), children || EMPTY_CONTENT)
}

export function title (parameters: ParametersType): VirtualDOMNodeType {
  const {children, selector}: {children?: mixed, selector?: string} = parameters || EMPTY_PARAMETERS

  if (children instanceof Function) {
    return domElement(`title${selector || EMPTY_SELECTOR}`, normalize(parameters), [children])
  }

  return domElement(`title${selector || EMPTY_SELECTOR}`, normalize(parameters), children || EMPTY_CONTENT)
}

export function tr (parameters: ParametersType): VirtualDOMNodeType {
  const {children, selector}: {children?: mixed, selector?: string} = parameters || EMPTY_PARAMETERS

  if (children instanceof Function) {
    return domElement(`tr${selector || EMPTY_SELECTOR}`, normalize(parameters), [children])
  }

  return domElement(`tr${selector || EMPTY_SELECTOR}`, normalize(parameters), children || EMPTY_CONTENT)
}

export function u (parameters: ParametersType): VirtualDOMNodeType {
  const {children, selector}: {children?: mixed, selector?: string} = parameters || EMPTY_PARAMETERS

  if (children instanceof Function) {
    return domElement(`u${selector || EMPTY_SELECTOR}`, normalize(parameters), [children])
  }

  return domElement(`u${selector || EMPTY_SELECTOR}`, normalize(parameters), children || EMPTY_CONTENT)
}

export function ul (parameters: ParametersType): VirtualDOMNodeType {
  const {children, selector}: {children?: mixed, selector?: string} = parameters || EMPTY_PARAMETERS

  if (children instanceof Function) {
    return domElement(`ul${selector || EMPTY_SELECTOR}`, normalize(parameters), [children])
  }

  return domElement(`ul${selector || EMPTY_SELECTOR}`, normalize(parameters), children || EMPTY_CONTENT)
}

export function _var (parameters: ParametersType): VirtualDOMNodeType {
  const {children, selector}: {children?: mixed, selector?: string} = parameters || EMPTY_PARAMETERS

  if (children instanceof Function) {
    return domElement(`var${selector || EMPTY_SELECTOR}`, normalize(parameters), [children])
  }

  return domElement(`var${selector || EMPTY_SELECTOR}`, normalize(parameters), children || EMPTY_CONTENT)
}

export function video (parameters: ParametersType): VirtualDOMNodeType {
  const {children, selector}: {children?: mixed, selector?: string} = parameters || EMPTY_PARAMETERS

  if (children instanceof Function) {
    return domElement(`video${selector || EMPTY_SELECTOR}`, normalize(parameters), [children])
  }

  return domElement(`video${selector || EMPTY_SELECTOR}`, normalize(parameters), children || EMPTY_CONTENT)
}

export function area (parameters: ParametersType): VirtualDOMNodeType {
  const {selector}: {selector?: string} = parameters || EMPTY_PARAMETERS

  if (parameters && parameters.children) {
    throw new Error(EMPTY_ERROR_MESSAGE)
  }

  return domElement(`area${selector || EMPTY_SELECTOR}`, normalize(parameters))
}

export function base (parameters: ParametersType): VirtualDOMNodeType {
  const {selector}: {selector?: string} = parameters || EMPTY_PARAMETERS

  if (parameters && parameters.children) {
    throw new Error(EMPTY_ERROR_MESSAGE)
  }

  return domElement(`base${selector || EMPTY_SELECTOR}`, normalize(parameters))
}

export function br (parameters: ParametersType): VirtualDOMNodeType {
  const {selector}: {selector?: string} = parameters || EMPTY_PARAMETERS

  if (parameters && parameters.children) {
    throw new Error(EMPTY_ERROR_MESSAGE)
  }

  return domElement(`br${selector || EMPTY_SELECTOR}`, normalize(parameters))
}

export function col (parameters: ParametersType): VirtualDOMNodeType {
  const {selector}: {selector?: string} = parameters || EMPTY_PARAMETERS

  if (parameters && parameters.children) {
    throw new Error(EMPTY_ERROR_MESSAGE)
  }

  return domElement(`col${selector || EMPTY_SELECTOR}`, normalize(parameters))
}

export function embed (parameters: ParametersType): VirtualDOMNodeType {
  const {selector}: {selector?: string} = parameters || EMPTY_PARAMETERS

  if (parameters && parameters.children) {
    throw new Error(EMPTY_ERROR_MESSAGE)
  }

  return domElement(`embed${selector || EMPTY_SELECTOR}`, normalize(parameters))
}

export function hr (parameters: ParametersType): VirtualDOMNodeType {
  const {selector}: {selector?: string} = parameters || EMPTY_PARAMETERS

  if (parameters && parameters.children) {
    throw new Error(EMPTY_ERROR_MESSAGE)
  }

  return domElement(`hr${selector || EMPTY_SELECTOR}`, normalize(parameters))
}

export function img (parameters: ParametersType): VirtualDOMNodeType {
  const {selector}: {selector?: string} = parameters || EMPTY_PARAMETERS

  if (parameters && parameters.children) {
    throw new Error(EMPTY_ERROR_MESSAGE)
  }

  return domElement(`img${selector || EMPTY_SELECTOR}`, normalize(parameters))
}

export function input (parameters: ParametersType): VirtualDOMNodeType {
  const {selector}: {selector?: string} = parameters || EMPTY_PARAMETERS

  if (parameters && parameters.children) {
    throw new Error(EMPTY_ERROR_MESSAGE)
  }

  return domElement(`input${selector || EMPTY_SELECTOR}`, normalize(parameters))
}

export function link (parameters: ParametersType): VirtualDOMNodeType {
  const {selector}: {selector?: string} = parameters || EMPTY_PARAMETERS

  if (parameters && parameters.children) {
    throw new Error(EMPTY_ERROR_MESSAGE)
  }

  return domElement(`link${selector || EMPTY_SELECTOR}`, normalize(parameters))
}

export function meta (parameters: ParametersType): VirtualDOMNodeType {
  const {selector}: {selector?: string} = parameters || EMPTY_PARAMETERS

  if (parameters && parameters.children) {
    throw new Error(EMPTY_ERROR_MESSAGE)
  }

  return domElement(`meta${selector || EMPTY_SELECTOR}`, normalize(parameters))
}

export function param (parameters: ParametersType): VirtualDOMNodeType {
  const {selector}: {selector?: string} = parameters || EMPTY_PARAMETERS

  if (parameters && parameters.children) {
    throw new Error(EMPTY_ERROR_MESSAGE)
  }

  return domElement(`param${selector || EMPTY_SELECTOR}`, normalize(parameters))
}

export function source (parameters: ParametersType): VirtualDOMNodeType {
  const {selector}: {selector?: string} = parameters || EMPTY_PARAMETERS

  if (parameters && parameters.children) {
    throw new Error(EMPTY_ERROR_MESSAGE)
  }

  return domElement(`source${selector || EMPTY_SELECTOR}`, normalize(parameters))
}

export function track (parameters: ParametersType): VirtualDOMNodeType {
  const {selector}: {selector?: string} = parameters || EMPTY_PARAMETERS

  if (parameters && parameters.children) {
    throw new Error(EMPTY_ERROR_MESSAGE)
  }

  return domElement(`track${selector || EMPTY_SELECTOR}`, normalize(parameters))
}

export function wbr (parameters: ParametersType): VirtualDOMNodeType {
  const {selector}: {selector?: string} = parameters || EMPTY_PARAMETERS

  if (parameters && parameters.children) {
    throw new Error(EMPTY_ERROR_MESSAGE)
  }

  return domElement(`wbr${selector || EMPTY_SELECTOR}`, normalize(parameters))
}

