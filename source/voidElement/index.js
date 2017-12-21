import helper from "snabbdom/h"

import normalize from "../normalize"

import type {ParametersType} from "types"
import type {VirtualDOMNodeType} from "types"

const EMPTY_ERROR_MESSAGE = "Empty tags cannot semantically have children."
const EMPTY_SELECTOR = ""

export default function voidElement (parameters: ParametersType): Function {
  return function voidElementParameters (name: string): VirtualDOMNodeType {
    const {selector} = parameters

    if (parameters && parameters.children) {
      throw new Error(EMPTY_ERROR_MESSAGE)
    }

    return helper(`${name}${selector || EMPTY_SELECTOR}`, normalize(parameters))
  }
}
