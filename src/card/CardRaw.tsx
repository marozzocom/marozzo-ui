import React, { ComponentPropsWithoutRef, FC } from "react"
import { Box, Surface } from ".."
import { useTheme } from "../theme"

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
