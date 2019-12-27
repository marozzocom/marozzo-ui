import React, { FC, ComponentProps } from "react"
import { Disclosure } from "../disclosure/Disclosure"
import { Surface } from "../surface/Surface"
import { Box } from ".."
import { useTheme } from "../theme/useTheme"

export const Card: FC<ComponentProps<typeof Box>> = ({ children }) => {
  const {
    theme: { sizes, shadows, radii }
  } = useTheme()
  return (
    <Disclosure>
      <Surface
        style={{
          borderRadius: radii.normal,
          boxShadow: shadows.subtle,
          width: sizes[6],
          height: sizes[6]
        }}>
        {children}
      </Surface>
    </Disclosure>
  )
}
