import helper from "snabbdom/h"

import normalize from "../normalize"

import type {ParametersType} from "types"
import type {VirtualDOMNodeType} from "types"

const EMPTY_SELECTOR = ""

export default function regularElement (parameters: ParametersType): Function {
  return function regularElementParameters (name: string): VirtualDOMNodeType {
    const {children} = parameters
    const {selector} = parameters

    if (children instanceof Function) {
      return helper(`${name}${selector || EMPTY_SELECTOR}`, normalize(parameters), [children])
    }

    return helper(`${name}${selector || EMPTY_SELECTOR}`, normalize(parameters), children)
  }
}
