export type VirtualDOMPropertiesType = {
  attrs?: {},
  props?: {},
  style?: {},
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
export type ShorthandsType = {
  data?: {},
  aria?: {},
  attributes?: {},
  dataset?: {},
  properties?: {},
  styles?: {},
  events?: {[key: string]: Function},
  hooks?: {[key: string]: Function},
  lifecycle?: {[key: string]: Function},
}
export type ParametersType = {
  children?: mixed,
  selector?: string,
} & ShorthandsType & VirtualDOMPropertiesType
