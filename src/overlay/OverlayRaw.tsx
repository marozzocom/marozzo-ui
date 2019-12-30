import React, { ComponentProps, FC } from "react"
import { Box } from "../box/Box"
import { useTheme } from "../theme"
import { ensureArray } from "../_common/helpers"

export const OverlayRaw: FC<ComponentProps<typeof Box>> = ({ style, ...props }) => {
  const {
    theme: { colors }
  } = useTheme()

  return (
    <Box
      style={[
        {
          backgroundColor: colors.overlay,
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        },
        ...ensureArray(style)
      ]}
      {...props}
    />
  )
}
