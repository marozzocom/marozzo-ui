import React, { FC, createContext, useCallback, useMemo } from "react"
import EventEmitter from "eventemitter3"
import { events } from "../_common/constants"

export type TocItem = {
  title: string
  ref: React.MutableRefObject<HTMLHeadingElement>
  active?: boolean
}

export type TocList = {
  [key: string]: TocItem
}

const TocContext = createContext<EventEmitter<string | symbol>>(null)

const getScrollDirectionFromObserverEntry = (entry: IntersectionObserverEntry) => (entry.boundingClientRect.y < 0 ? "down" : "up")
const getEnteringTarget = (entries: IntersectionObserverEntry[]) => entries.find(entry => entry.isIntersecting)?.target
const getExitingTarget = (entries: IntersectionObserverEntry[]) =>
  getScrollDirectionFromObserverEntry(entries[0]) === "down" ? entries[0].target.nextElementSibling : entries[0].target.previousElementSibling

const getTargetFromIntersectionEntries = (entries: IntersectionObserverEntry[]) => getEnteringTarget(entries) ?? getExitingTarget(entries)

const emitter = new EventEmitter()

const TocProvider: FC<{}> = ({ children }) => {
  const activate = useCallback((entries: IntersectionObserverEntry[]) => emitter.emit("activateTocItem", getTargetFromIntersectionEntries(entries)), []) // setActiveElement(getTargetFromIntersectionEntries(entries)), [])

  const observer = useMemo(() => new IntersectionObserver(activate, { threshold: 0.1 }), [])
  const observe = useCallback((element: HTMLHeadElement) => observer.observe(element), [])

  // Note: I expect intersectionobserver to clean up after itself automatically
  emitter.on(events.addTocItem, ({ ref }) => observe(ref.current))

  return <TocContext.Provider value={emitter}>{children}</TocContext.Provider>
}

export { TocContext, TocProvider }
