import React, { FC, ComponentProps } from "react"
import { Box } from "../box/Box"
import { CardRaw } from "./CardRaw"

// TODO: Fix Card API

export const Card: FC<ComponentProps<typeof Box>> = ({ children, ...props }) => {
  return <CardRaw {...props}>{children}</CardRaw>
}
