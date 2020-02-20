import { emitter } from "../_common/Emitter"
import { events } from "../_common/constants"

export const addTocItem = ({ id, title, node }: { id: string; title: string; node: any }) => emitter.emit(events.addTocItem, { id, title, node })

export const tocEmitter = { addTocItem }
