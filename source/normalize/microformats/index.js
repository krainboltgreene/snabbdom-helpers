import flattenTree from "@unction/flattentree"
import compact from "@unction/compact"

export default function microformats (tree: {[key: string]: mixed}): {[key: string]: string} {
  return compact(flattenTree("-")(tree))
}
