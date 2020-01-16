import React, { ComponentPropsWithoutRef, FC } from "react"
import { Box } from "../box/Box"
import { Surface } from "../surface/Surface"
import { useVariants } from "../variants"

export const CardRaw: FC<ComponentPropsWithoutRef<typeof Box>> = ({ children, ...props }) => {
  const { cards } = useVariants()

  return (
    <Surface variant={cards.primary} {...props}>
      {children}
    </Surface>
  )
}
