import compact from "@unction/compact"

import microformats from "./microformats"

import type {VirtualDOMPropertiesType} from "types"
import type {ParametersType} from "types"

export default function transform (raw: ParametersType): VirtualDOMPropertiesType {
  return compact(
    {
      "attrs": {
        ...raw.attrs,
        ...raw.attributes,
        ...microformats({
          data: raw.data,
          aria: raw.aria,
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
  )
}
