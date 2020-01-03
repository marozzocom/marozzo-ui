import { useState, useEffect, useCallback } from "react"
import { TocList } from "./TocProvider"
import { emitter } from "../_common/Emitter"
import { tocEmitter } from "./tocEmitter"
import { events } from "../_common/constants"

const useToc = () => {
  const [toc, setToc] = useState<TocList>({})
  const [active, setActive] = useState<Element>()

  const addTocItem = useCallback(args => {
    const { id, title, ref } = args[0]
    setToc(toc => ({ ...toc, [id]: { title, ref } }))
    tocEmitter.observe(ref.current)
  }, [])
  const activateTocItem = useCallback(args => setActive(args[0]), [])

  useEffect(() => {
    emitter.on(events.addTocItem, addTocItem)
    emitter.on(events.activateTocItem, activateTocItem)
    return () => {
      emitter.off(events.addTocItem, addTocItem)
      emitter.off(events.activateTocItem, activateTocItem)
    }
  }, [])
  return { toc, active }
}

export { useToc }
