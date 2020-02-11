import React, { ComponentPropsWithoutRef, FC } from "react"
import { Box } from "../box/Box"
import { Surface } from "../surface/Surface"

export const CardRaw: FC<ComponentPropsWithoutRef<typeof Box>> = ({ children, ...props }) => {
  return <Surface {...props}>{children}</Surface>
}
