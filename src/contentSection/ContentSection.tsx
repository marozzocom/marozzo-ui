import React, { FC, useRef, useEffect, ComponentProps } from "react"
import { Box } from "../box/Box"
import { addTocItem } from "../toc/tocEmitter"

interface Props extends ComponentProps<typeof Box> {
  id: string
  title: string
}

export const ContentSection: FC<Props> = ({ id, title, children, ...props }) => {
  const ref = useRef<HTMLHeadingElement>()

  useEffect(() => {
    addTocItem({ id, title, ref })
  }, [])

  return (
    <Box as="section" id={id} innerRef={ref} {...props}>
      {children}
    </Box>
  )
}
