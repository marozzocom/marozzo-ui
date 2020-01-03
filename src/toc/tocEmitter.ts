import { emitter } from "../_common/Emitter"

export type TocItem = {
  title: string
  ref: React.MutableRefObject<HTMLHeadingElement>
  active?: boolean
}

export type TocList = {
  [key: string]: TocItem
}

export const addTocItem = ({ id, title, ref }: { id: string; title: string; ref: React.MutableRefObject<HTMLHeadingElement> }) => {
  emitter.emit("addTocItem", { id, title, ref })
}

export const tocEmitter = { addTocItem }
