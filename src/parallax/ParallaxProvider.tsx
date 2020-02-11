import React, { FC, useState, createContext, Dispatch, SetStateAction, useEffect } from "react"

const ParallaxContext = createContext<{
  progress: number
  attach: Dispatch<SetStateAction<Element>>
}>(null)

const generateTreshold = (steps: number) => [...Array(steps + 1)].map((_, index) => index / steps || 0)

const ParallaxProvider: FC<{}> = ({ children }) => {
  const [progress, setProgress] = useState(0)
  const [source, attach] = useState<Element>()

  const observation = (entries: IntersectionObserverEntry[]) => {
    setProgress(Math.round(entries[0].intersectionRatio * 100))
  }
  const observer = new IntersectionObserver(observation, { threshold: generateTreshold(100) })

  useEffect(() => {
    if (!source) return
    // observer.disconnect()
    observer.observe(source)
  }, [observer, source])

  // TODO: Do we need a way to clean up the observer?

  return <ParallaxContext.Provider value={{ progress, attach }}>{children}</ParallaxContext.Provider>
}

export { ParallaxContext, ParallaxProvider }
