import flattenTree from "@unction/flattentree"

export default function microformats (tree: {data?: object, aria?: object}): object {
  return flattenTree("-")(tree)
}
