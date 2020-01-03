import React, { FC, useRef, useEffect, ComponentProps } from "react"
import { Box } from ".."
import { set, clear } from "./scrollProgressEmitter"

export const ScrollProgressContainer: FC<ComponentProps<typeof Box>> = ({ children, innerRef, ...props }) => {
  const ref = innerRef ?? useRef<HTMLElement>()

  useEffect(() => {
    set(ref.current)
    return () => {
      clear()
    }
  }, [ref.current])

  return (
    <Box innerRef={ref} {...props}>
      {children}
    </Box>
  )
}
