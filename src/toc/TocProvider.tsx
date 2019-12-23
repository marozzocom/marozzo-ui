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
  const [active, setActive] = useState<Element | string>()

  const observation = (entries: IntersectionObserverEntry[]) =>
    entries.forEach(entry =>
      entry.isIntersecting
        ? setActive(entries[0].target)
        : setActive(entry.boundingClientRect.y < 0 ? entries[0].target.nextElementSibling : entries[0].target.previousElementSibling)
    )
  const observer = new IntersectionObserver(observation, { threshold: 0.1 })

  return <TocContext.Provider value={{ toc, setToc, observer, active }}>{children}</TocContext.Provider>
}

export { TocContext, TocProvider }
