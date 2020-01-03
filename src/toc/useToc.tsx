import { useState, useEffect, useCallback } from "react"
import { TocList } from "./TocProvider"
import { emitter } from "../_common/Emitter"
import { events } from "../_common/constants"

const getScrollDirectionFromObserverEntry = (entry: IntersectionObserverEntry) => (entry.boundingClientRect.y < 0 ? "down" : "up")
const getEnteringTarget = (entries: IntersectionObserverEntry[]) => entries.find(entry => entry.isIntersecting)?.target
const getExitingTarget = (entries: IntersectionObserverEntry[]) =>
  getScrollDirectionFromObserverEntry(entries[0]) === "down" ? entries[0].target.nextElementSibling : entries[0].target.previousElementSibling

const getTargetFromIntersectionEntries = (entries: IntersectionObserverEntry[]) => getEnteringTarget(entries) ?? getExitingTarget(entries)

const activate = (entries: IntersectionObserverEntry[]) => emitter.emit("activateTocItem", getTargetFromIntersectionEntries(entries))

const observer = new IntersectionObserver(activate, { threshold: 0.1 })
const observe = (element: HTMLElement) => observer.observe(element)

const useToc = () => {
  const [toc, setToc] = useState<TocList>({})
  const [active, setActive] = useState<Element>()

  const addTocItem = useCallback(args => {
    const { id, title, ref } = args[0]
    setToc(toc => ({ ...toc, [id]: { title, ref } }))
    observe(ref.current)
  }, [])
  const activateTocItem = useCallback(args => setActive(args[0]), [])

  useEffect(() => {
    emitter.on(events.addTocItem, addTocItem)
    emitter.on(events.activateTocItem, activateTocItem)
    return () => {
      emitter.off(events.addTocItem, addTocItem)
      emitter.off(events.activateTocItem, activateTocItem)
    }
  }, [])
  return { toc, active }
}

export { useToc }
