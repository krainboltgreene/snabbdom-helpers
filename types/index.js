export type VirtualDOMPropertiesType = {
  props?: {[key: string]: mixed},
  style?: {[key: string]: mixed},
  on?: {[key: string]: Function},
  class?: {[key: string]: boolean},
  hook?: {[key: string]: Function},
  key?: string,
}
export type VirtualDOMNodeType = {
  sel: string,
  children?: Array<mixed>,
  text?: string,
} & VirtualDOMPropertiesType
export type AttributesType = {
  attrs?: {},
  attributes?: {},
  properties?: {},
  styles?: {},
  events?: {},
  hooks?: {},
  lifecycle?: {},
} & VirtualDOMPropertiesType
export type ParametersType = {
  children?: mixed,
  selector?: mixed,
} & AttributesType
