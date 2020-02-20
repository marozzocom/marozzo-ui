import React, { useMemo, useCallback, FC, useLayoutEffect, useState } from "react"
import { addTocItem } from "../toc/tocEmitter"
import nanoid from "nanoid"
import { Heading } from "./Heading"

// TODO: Consider making this a hook instead of separate component

// TODO: The weird syntax here creates a callback ref and updates a local state when the callback ref has a value.
// Then a layout effect listens to us having this value, and it emits the toc data to emitter.
// This is to make sure the toc emitter has activated before the message is sent, there probably are better ways to accomplish this
// but noyt right now.

export const TocHeading: FC<{}> = ({ children, ...rest }) => {
  const id = useMemo(() => nanoid(), [])
  const [node, setNode] = useState()

  const tocHeadingRef = useCallback((node: any) => {
    if (node !== null) {
      setNode(node)
    }
  }, [])

  useLayoutEffect(() => {
    if (!node) {
      return
    }
    const title = node.textContent
    addTocItem({ id, title, node })
  }, [id, node])

  return (
    <Heading data-tocid={id} level={2} id={id} ref={tocHeadingRef} {...rest}>
      {children}
    </Heading>
  )
}
