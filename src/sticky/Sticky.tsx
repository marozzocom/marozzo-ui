import React, { FC, ComponentProps } from "react"
import { Box } from "../box/Box"

export const Sticky: FC<ComponentProps<typeof Box>> = ({ style, children }) => {
  return (
    <Box
      style={{
        flexShrink: 0,
        position: "sticky",
        top: "0px",
        alignSelf: "flex-start",
        ...style
      }}>
      {children}
    </Box>
  )
}
