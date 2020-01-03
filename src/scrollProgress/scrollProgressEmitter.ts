import { emitter } from "../_common/Emitter"
import { events } from "../_common/constants"

const set = (element: HTMLElement) => emitter.emit(events.setScrollProgressTarget, element)
const clear = () => emitter.emit(events.clearScrollProgressTarget)

export const scrollProgressEmitter = { set, clear }
