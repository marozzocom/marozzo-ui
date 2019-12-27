import React, { FC, useState, createContext, Dispatch, SetStateAction, useEffect } from "react"
import { positive } from "../_common/helpers"

const ScrollProgressContext = createContext<{
  progress: number
  setContainer: Dispatch<SetStateAction<Element>>
  attach: Dispatch<SetStateAction<Element>>
  showProgress: boolean
}>(null)

/**
 * The scroll progress indicator is only shown when the target element is visible on screen when entering and while at least half of the container element's height is still shown on exit. If the target element is smaller than 1.5 times the container, progress indicator is not shown.
 */

const ScrollProgressProvider: FC<{}> = ({ children }) => {
  const [progress, setProgress] = useState(0)
  const [container, setContainer] = useState(document.scrollingElement)
  const [target, attach] = useState<HTMLElement>()
  const [showProgress, setShowProgress] = useState(false)

  const scrollPosition = (container: Element) => (target: HTMLElement) => positive(container.scrollTop - target.offsetTop)
  const scrollPercentage = (container: Element) => (target: HTMLElement) =>
    Math.floor(
      ((scrollPosition(container)(target) <= target.offsetHeight - container.clientHeight
        ? scrollPosition(container)(target)
        : target.offsetHeight - container.clientHeight) /
        (target.offsetHeight - container.clientHeight)) *
        1000
    ) / 10
  const targetHighEnough = (container: Element) => (target: HTMLElement) => target.offsetHeight > container.clientHeight * 1.5
  const shouldShowProgress = (container: Element) => (target: HTMLElement) =>
    targetHighEnough(container)(target) &&
    scrollPercentage(container)(target) > 0 &&
    scrollPosition(container)(target) < target.offsetHeight - container.clientHeight + container.clientHeight / 2

  let timer: number

  const updateProgress = () => {
    timer && cancelAnimationFrame(timer)
    setShowProgress(shouldShowProgress(container)(target))

    timer = requestAnimationFrame(() => setProgress(scrollPercentage(container)(target)))
  }

  useEffect(() => {
    if (!target || !container) {
      return
    }
    addEventListener("scroll", updateProgress)
    addEventListener("resize", updateProgress)
    updateProgress()
    return () => {
      removeEventListener("scroll", updateProgress)
      removeEventListener("resize", updateProgress)
      clearTimeout(timer)
    }
  }, [target, container])

  return <ScrollProgressContext.Provider value={{ progress, setContainer, attach, showProgress }}>{children}</ScrollProgressContext.Provider>
}

export { ScrollProgressContext, ScrollProgressProvider }
