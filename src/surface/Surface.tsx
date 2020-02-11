import React, { FC, ComponentProps } from "react"
import { Box } from "../box/Box"
import { ensureArray } from "../_common/helpers"

export const Surface: FC<ComponentProps<typeof Box>> = ({ style, children, ...props }) => {
  return (
    <Box
      style={[
        {
          height: "100%"
        },
        ...ensureArray(style)
      ]}
      {...props}>
      {children}
    </Box>
  )
}
