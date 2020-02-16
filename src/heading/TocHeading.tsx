import React, { FC, useMemo, useRef, useEffect } from "react"
import { addTocItem } from "../toc/tocEmitter"
import nanoid from "nanoid"
import { Heading } from "./Heading"

// TODO: Consider making this a hook instead of separate component

export const TocHeading: FC<{}> = ({ children, ...props }) => {
  const ref = useRef<HTMLHeadingElement>()

  const id = useMemo(() => nanoid(), [])

  useEffect(() => {
    const title = ref.current.textContent
    addTocItem({ id, title, ref })
  }, [id])

  return (
    <Heading data-tocid={id} level={2} id={id} innerRef={ref} {...props}>
      {children}
    </Heading>
  )
}
