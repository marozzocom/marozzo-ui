import React, { FC, ComponentProps } from "react"
import { Box } from "../box/Box"

export const Flex: FC<ComponentProps<typeof Box>> = ({ children, style, ...props }) => (
  <Box style={{ ...style, display: "flex" }} {...props}>
    {children}
  </Box>
)
