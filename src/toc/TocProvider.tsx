import React, { FC, useState, createContext, Dispatch, SetStateAction } from "react"

export type Toc = { name: string; element: Element } // TODO: type

const TocContext = createContext<{
  toc: Toc[]
  setToc: Dispatch<SetStateAction<Toc[]>>
  observer: IntersectionObserver
  selected: Element
}>(null)

const TocProvider: FC<{}> = ({ children }) => {
  const [toc, setToc] = useState<Toc[]>([])
  const [selected, setSelected] = useState<Element>()
  let previousY = 0

  const observation = (entries: IntersectionObserverEntry[]) => {
    const currentY = entries[0].boundingClientRect.y
    if (currentY < previousY) {
      // Check scroll direction
      setSelected(entries.find(entry => entry.isIntersecting && currentY < previousY && entry.boundingClientRect.y < entry.rootBounds.y).target)
    } else {
      setSelected(entries.reverse().find(entry => entry.isIntersecting && entry.boundingClientRect.y > entry.rootBounds.y).target)
    }
  }

  const observer = new IntersectionObserver(observation, {
    rootMargin: "0px",
    threshold: 0
  })

  return <TocContext.Provider value={{ toc, setToc, observer, selected }}>{children}</TocContext.Provider>
}

export { TocContext, TocProvider }
