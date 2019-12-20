import React, { FC, ComponentProps, forwardRef } from "react"
import { Box } from ".."
import { useTheme } from "emotion-theming"
import { Theme } from "../theme"

export const Surface: FC<ComponentProps<typeof Box>> = forwardRef((props, ref) => {
  const theme = useTheme() as Theme

  return (
  <Box ref={ref} height="100%" backgroundImage={theme.gradients.primary} {...props} />
  )
})