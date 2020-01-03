import React, { ComponentPropsWithoutRef, FC } from "react"
import { Box } from "../box/Box"
import { useTheme } from "../theme"
import { Surface } from "../surface/Surface"

export const CardRaw: FC<ComponentPropsWithoutRef<typeof Box>> = ({ children, ...props }) => {
  const {
    theme: {
      variants: { cards }
    }
  } = useTheme()

  return (
    <Surface variant={cards.primary} {...props}>
      {children}
    </Surface>
  )
}
