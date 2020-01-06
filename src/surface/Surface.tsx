import React, { FC, ComponentProps } from "react"
import { Box } from "../box/Box"
import { useTheme } from "../theme/useTheme"
import { ensureArray } from "../_common/helpers"

export const Surface: FC<ComponentProps<typeof Box>> = ({ style, variant, children, ...props }) => {
  const {
    theme: {
      variants: { surfaces }
    }
  } = useTheme()

  return (
    <Box
      variant={surfaces.primary}
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
