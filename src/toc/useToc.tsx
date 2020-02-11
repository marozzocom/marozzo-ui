import { useState, useCallback, useEffect } from "react"
import { emitter } from "../_common/Emitter"
import { events } from "../_common/constants"
import { NavigationItems } from "../_common/models"

const getScrollDirectionFromObserverEntry = (entry: IntersectionObserverEntry) => (entry.boundingClientRect.y < 0 ? "down" : "up")
const getEnteringTarget = (entries: IntersectionObserverEntry[]) => entries.find(entry => entry.isIntersecting)?.target
const getExitingTarget = (entries: IntersectionObserverEntry[]) =>
  getScrollDirectionFromObserverEntry(entries[0]) === "down" ? entries[0].target.nextElementSibling : entries[0].target.previousElementSibling

const getTargetFromIntersectionEntries = (entries: IntersectionObserverEntry[]) => getEnteringTarget(entries) ?? getExitingTarget(entries)

const activate = (entries: IntersectionObserverEntry[]) => emitter.emit("activateTocItem", getTargetFromIntersectionEntries(entries))

const observer = new IntersectionObserver(activate, { threshold: 0.1 })
const observe = (element: HTMLElement) => observer.observe(element)

const useToc = () => {
  const [toc, setToc] = useState<NavigationItems>({})

  const addTocItem = useCallback(args => {
    const { id, title, ref } = args[0]
    setToc(toc => ({ ...toc, [id]: { title, ref } }))
    observe(ref.current)
  }, [])

  const clearToc = useCallback(() => setToc({}), [])

  const activateTocItem = (args: [Element]) =>
    setToc(toc =>
      Object.entries(toc).reduce(
        (acc, [key, { selected, ref, ...tocItem }]) => ({ ...acc, [key]: { ...tocItem, ref, selected: ref?.current === args[0] } }),
        {}
      )
    )

  useEffect(() => {
    emitter.on(events.addTocItem, addTocItem)
    emitter.on(events.activateTocItem, activateTocItem)
    return () => {
      emitter.off(events.addTocItem, addTocItem)
      emitter.off(events.activateTocItem, activateTocItem)
    }
  }, [addTocItem])
  return { toc, clearToc }
}

export { useToc }
