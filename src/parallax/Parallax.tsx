import React, { FC, ComponentProps } from "react"
import { Box } from "../box/Box"
import { useParallax } from "./useParallax"
import { ensureArray } from "../_common/helpers"

export const Parallax: FC<ComponentProps<typeof Box>> = ({ style, ...props }) => {
  const { progress } = useParallax()

  return (
    <Box
      style={[
        {
          position: "fixed",
          top: 0,
          left: 0,
          right: 0
        },
        ...ensureArray(style)
      ]}
      {...props}>
      TODO
    </Box>
  )
}
