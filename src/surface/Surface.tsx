import React, { FC, ComponentProps } from "react"
import { Box } from "../box/Box"
import { useTheme } from "../theme/useTheme"

export const Surface: FC<ComponentProps<typeof Box>> = ({ style, children, ...props }) => {
  const {
    theme: { gradients }
  } = useTheme()

  return (
    <Box
      style={{
        height: "100%",
        backgroundImage: gradients.primary,
        ...style
      }}
      {...props}>
      {children}
    </Box>
  )
}
