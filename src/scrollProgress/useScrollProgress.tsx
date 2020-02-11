import React, { useState, useCallback, useEffect } from "react"
import { positive } from "../_common/helpers"
import { emitter } from "../_common/Emitter"
import { events } from "../_common/constants"

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

const container = document.scrollingElement

export const useScrollProgress = () => {
  const [progress, setProgress] = useState(0)
  const [showProgress, setShowProgress] = useState(false)
  const [target, setTarget] = useState<HTMLElement>()

  const set = useCallback((args: any) => setTarget(args[0]), [])

  const update = useCallback(() => {
    setShowProgress(shouldShowProgress(container)(target))
    setProgress(scrollPercentage(container)(target))
  }, [target])

  const updateProgress = useCallback(() => {
    if (!target) {
      return
    }
    timer && cancelAnimationFrame(timer)

    timer = requestAnimationFrame(update)
  }, [target, update])

  const clear = useCallback(() => {
    emitter.off(events.setScrollProgressTarget, set)
    emitter.off(events.clearScrollProgressTarget, clear)
    setTarget(null)
    removeEventListener("scroll", updateProgress)
    removeEventListener("resize", updateProgress)
    clearTimeout(timer)
  }, [set, updateProgress])

  useEffect(() => {
    emitter.on(events.setScrollProgressTarget, set)
    emitter.on(events.clearScrollProgressTarget, clear)
    addEventListener("scroll", updateProgress)
    addEventListener("resize", updateProgress)
    return () => {
      clear()
    }
  }, [clear, set, target, updateProgress])

  return { progress, showProgress }
}
