import React, { FC, ComponentProps } from "react"
import { Box } from "../box/Box"
import { useTheme } from "../theme/useTheme"

export const Surface: FC<ComponentProps<typeof Box>> = ({ style, variant, children, ...props }) => {
  const {
    theme: { gradients }
  } = useTheme()

  return (
    <Box
      style={{
        height: "100%",
        backgroundImage: gradients.primary,
        ...variant,
        ...style
      }}
      {...props}>
      {children}
    </Box>
  )
}
