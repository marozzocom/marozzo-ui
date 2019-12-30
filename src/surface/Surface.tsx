import React, { FC, ComponentProps } from "react"
import { Box } from "../box/Box"
import { useTheme } from "../theme/useTheme"
import { ensureArray } from "../_common/helpers"

export const Surface: FC<ComponentProps<typeof Box>> = ({ style, variant, children, ...props }) => {
  const {
    theme: { gradients }
  } = useTheme()

  return (
    <Box
      style={[
        {
          height: "100%",
          backgroundImage: gradients.primary,
          ...variant
        },
        ...ensureArray(style)
      ]}
      {...props}>
      {children}
    </Box>
  )
}
