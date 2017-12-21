import flattenTree from "@unction/flattentree"
import compact from "@unction/compact"
import mapKeys from "@unction/mapkeys"

export default function microformats (tree: {[key: string]: mixed}): {[key: string]: string} {
  return compact(mapKeys((key: string): string => key.toLowerCase())(flattenTree("-")(tree)))
}
