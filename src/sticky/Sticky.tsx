import React, { FC, ComponentProps } from "react"
import { Box } from "../box/Box"
import { ensureArray } from "../_common/helpers"

export const Sticky: FC<ComponentProps<typeof Box>> = ({ style, children, ...props }) => {
  return (
    <Box
      style={[
        {
          flexShrink: 0,
          position: "sticky",
          top: "0px",
          alignSelf: "flex-start"
        },
        ...ensureArray(style)
      ]}
      {...props}>
      {children}
    </Box>
  )
}
