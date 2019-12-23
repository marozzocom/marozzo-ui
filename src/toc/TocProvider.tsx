import React, { FC, useState, createContext, Dispatch, SetStateAction } from "react"

export type Toc = {
  name: string
  element: Element
}

const TocContext = createContext<{
  toc: Toc[]
  setToc: Dispatch<SetStateAction<Toc[]>>
  observer: IntersectionObserver
  selected: Element | string
}>(null)

const TocProvider: FC<{}> = ({ children }) => {
  const [toc, setToc] = useState<Toc[]>([])
  const [selected, setSelected] = useState<Element | string>()

  const observation = (entries: IntersectionObserverEntry[]) =>
    entries.forEach(entry =>
      entry.isIntersecting
        ? setSelected(entries[0].target)
        : setSelected(entry.boundingClientRect.y < 0 ? entries[0].target.nextElementSibling : entries[0].target.previousElementSibling)
    )
  const observer = new IntersectionObserver(observation)

  return <TocContext.Provider value={{ toc, setToc, observer, selected }}>{children}</TocContext.Provider>
}

export { TocContext, TocProvider }
