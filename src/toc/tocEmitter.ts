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

const getScrollDirectionFromObserverEntry = (entry: IntersectionObserverEntry) => (entry.boundingClientRect.y < 0 ? "down" : "up")
const getEnteringTarget = (entries: IntersectionObserverEntry[]) => entries.find(entry => entry.isIntersecting)?.target
const getExitingTarget = (entries: IntersectionObserverEntry[]) =>
  getScrollDirectionFromObserverEntry(entries[0]) === "down" ? entries[0].target.nextElementSibling : entries[0].target.previousElementSibling

const getTargetFromIntersectionEntries = (entries: IntersectionObserverEntry[]) => getEnteringTarget(entries) ?? getExitingTarget(entries)

const activate = (entries: IntersectionObserverEntry[]) => emitter.emit("activateTocItem", getTargetFromIntersectionEntries(entries))

const observer = new IntersectionObserver(activate, { threshold: 0.1 })
export const observe = (element: HTMLElement) => observer.observe(element)
