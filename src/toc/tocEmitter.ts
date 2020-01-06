import { emitter } from "../_common/Emitter"

export const addTocItem = ({ id, title, ref }: { id: string; title: string; ref: React.MutableRefObject<HTMLHeadingElement> }) => {
  emitter.emit("addTocItem", { id, title, ref })
}

export const tocEmitter = { addTocItem }
