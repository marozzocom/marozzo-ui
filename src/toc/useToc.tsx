import { useState, useCallback, useEffect, useMemo } from "react"
import { emitter } from "../_common/Emitter"
import { events } from "../_common/constants"
import { NavigationItem } from "../_common/models"

// TODO: This file needs refactoring and more testing

interface Intersection {
  id?: string
  state?: "top" | "bottom"
}

interface Options {
  root?: Element | null
  rootMargin?: string
  threshold?: number | number[]
  offsetY?: number
}

const useToc = (options: Options = {}) => {
  const { root, rootMargin, threshold = [0, 1], offsetY = 0 } = options

  const getEnteringTarget = useCallback(
    (entries: IntersectionObserverEntry[]): Intersection => {
      const entry = entries.filter(entry => entry.isIntersecting)[0]
      return {
        state: entry?.boundingClientRect.y < offsetY ? "top" : "bottom",
        id: entry?.target.getAttribute("data-tocid")
      }
    },
    [offsetY]
  )

  const activate = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const intersection = getEnteringTarget(entries)
      intersection && emitter.emit("activateTocItem", intersection)
    },
    [getEnteringTarget]
  )

  const observer = useMemo(() => new IntersectionObserver(activate, { root, rootMargin, threshold }), [])
  const observe = useCallback((element: HTMLElement) => observer.observe(element), [observer])

  const [toc, setToc] = useState<NavigationItem[]>([])

  const addTocItem = useCallback(
    args => {
      const { id, title, ref } = args[0]
      setToc(toc => [...toc, { id, title, ref }])
      observe(ref.current)
    },
    [observe]
  )

  const clearToc = useCallback(() => setToc([]), [])

  useEffect(() => {
    const activateTocItem = (args: [Intersection]) => {
      if (!args[0]) {
        return
      }
      const { state, id } = args[0]
      const targetIndex = toc.findIndex(item => item.id === id)
      if (targetIndex < 0) {
        return
      }
      const targetId = state === "bottom" ? toc[targetIndex - 1].id : toc[targetIndex].id

      setToc(toc => toc.map(item => ({ ...item, selected: item.id === targetId })))
    }
    emitter.on(events.addTocItem, addTocItem)
    emitter.on(events.activateTocItem, activateTocItem)
    return () => {
      emitter.off(events.addTocItem, addTocItem)
      emitter.off(events.activateTocItem, activateTocItem)
    }
  }, [addTocItem, toc])
  return { toc, clearToc }
}

export { useToc }
