import { emitter } from "../_common/Emitter"
import { events } from "../_common/constants"

export const set = (element: HTMLElement) => emitter.emit(events.setScrollProgressTarget, element)
export const clear = () => emitter.emit(events.clearScrollProgressTarget)
