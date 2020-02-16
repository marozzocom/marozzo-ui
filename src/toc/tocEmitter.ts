import { emitter } from "../_common/Emitter"
import { events } from "../_common/constants"

export const addTocItem = ({ id, title, ref }: { id: string; title: string; ref: React.MutableRefObject<HTMLHeadingElement> }) => {
  emitter.emit(events.addTocItem, { id, title, ref })
}

export const tocEmitter = { addTocItem }
