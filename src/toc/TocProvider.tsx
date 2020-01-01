import React, { FC, useState, createContext, Dispatch, SetStateAction } from "react"

export type Toc = {
  name: string
  element: Element
}

const TocContext = createContext<{
  toc: Toc[]
  setToc: Dispatch<SetStateAction<Toc[]>>
  observer: IntersectionObserver
  active: Element | string
}>(null)

const TocProvider: FC<{}> = ({ children }) => {
  const [toc, setToc] = useState<Toc[]>([])
  const [active, setActive] = useState<Element>()

  const observation = (entries: IntersectionObserverEntry[]) => {
    entries.some(entry => {
      // iterate through intersecting elements until match
      if (entry.isIntersecting) {
        // if entering, match and set active
        setActive(entry.target)
        return false
      } else {
        // if exiting, calculate direction and match the closest visible sibling and set active
        const intersecting =
          entry.boundingClientRect.y < 0
            ? { element: entry.target.nextElementSibling, direction: "down" }
            : { element: entry.target.previousElementSibling, direction: "up" }

        const intersectingElementIndex = toc.findIndex(tocElement => tocElement.element === intersecting.element)
        const activeElementIndex = toc.findIndex(tocElement => tocElement.element === active)

        if (
          (intersecting.direction === "up" && intersectingElementIndex < activeElementIndex) ||
          (intersecting.direction === "down" && intersectingElementIndex > activeElementIndex)
        ) {
          setActive(intersecting.element)
          return false
        }
      }
    })
  }

  const observer = new IntersectionObserver(observation, { threshold: 0.1 })

  return <TocContext.Provider value={{ toc, setToc, observer, active }}>{children}</TocContext.Provider>
}

export { TocContext, TocProvider }
