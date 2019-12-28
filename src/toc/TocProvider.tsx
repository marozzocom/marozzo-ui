import React, { FC, useState, createContext, Dispatch, SetStateAction, useEffect } from "react"

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
  const [intersecting, setIntersecting] = useState<{ element: Element; direction: "up" | "down" }>({ element: null, direction: undefined })

  const observation = (entries: IntersectionObserverEntry[]) => {
    entries.some(entry => {
      if (entry.isIntersecting) {
        setActive(entry.target)
        return false
      } else {
        entry.boundingClientRect.y < 0
          ? setIntersecting({ element: entry.target.nextElementSibling, direction: "down" })
          : setIntersecting({ element: entry.target.previousElementSibling, direction: "up" })
      }
    })
  }

  // TODO: Refactor function without changing behavior
  useEffect(() => {
    const intersectingElementIndex = toc.findIndex(tocElement => tocElement.element === intersecting.element)
    const activeElementIndex = toc.findIndex(tocElement => tocElement.element === active)
    if (intersecting.direction === "up" && intersectingElementIndex < activeElementIndex) {
      setActive(intersecting.element)
    } else if (intersecting.direction === "down" && intersectingElementIndex > activeElementIndex) {
      setActive(intersecting.element)
    }
  }, [intersecting])

  const observer = new IntersectionObserver(observation, { threshold: 0.1 })

  return <TocContext.Provider value={{ toc, setToc, observer, active }}>{children}</TocContext.Provider>
}

export { TocContext, TocProvider }
