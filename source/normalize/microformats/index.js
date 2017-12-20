import flattenTree from "@unction/flattentree"
import compact from "@unction/compact"

export default function microformats (tree: {data?: {[key: string]: mixed}, aria?: {[key: string]: mixed}}): {[key: string]: string} {
  return compact(flattenTree("-")(tree))
}
