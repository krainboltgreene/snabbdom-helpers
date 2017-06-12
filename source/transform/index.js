import microformats from "./microformats"

type RawPropertiesType = {
  attrs?: {},
  attributes?: {},
  props?: {},
  properties?: {},
  style?: {},
  styles?: {},
  on?: {},
  events?: {},
  class?: {},
  hook?: {},
  hooks?: {},
  lifecycle?: {},
  key?: string,
}
type PropertiesType = {
  attrs: {},
  props: {},
  style: {},
  on: {},
  class: {},
  hook: {},
  key: string,
}

export default function transform (raw: RawPropertiesType): PropertiesType {
  return {
    "attrs": {
      ...raw.attrs,
      ...raw.attributes,
      ...microformats({
        data: raw.data,
        aria: raw.aria
      }),
      ...microformats({data: raw.dataset}),
      ...microformats(raw.props || {}),
      ...microformats(raw.properties || {}),
    },
    "props": {
      ...raw.props,
      ...raw.properties,
    },
    "style": {
      ...raw.style,
      ...raw.styles,
    },
    "on": {
      ...raw.on,
      ...raw.events,
    },
    "class": raw.class,
    "hook": {
      ...raw.hook,
      ...raw.hooks,
      ...raw.lifecycle,
    },
    "key": raw.key,
  }
}
