import React, { FC } from "react"
import { Box } from "../box/Box"
import { useTheme } from "../theme"
import { Button } from "../button/Button"
import { ColorMode as ColorModeType } from "../theme/models"

interface Props {
  onToggleColorMode?: (colorMode: ColorModeType) => void
}

export const ColorMode: FC<Props> = ({ onToggleColorMode }) => {
  const {
    theme: { colors },
    colorMode,
    setColorMode
  } = useTheme()

  const handleToggle = () => {
    const nextColorMode: ColorModeType = colorMode === "normal" ? "alternate" : "normal"
    setColorMode(nextColorMode)
    onToggleColorMode(nextColorMode)
  }

  return (
    <Box
      style={{
        backgroundColor: colors.primary
      }}>
      {colorMode} <Button onClick={handleToggle}>Toggle</Button>
    </Box>
  )
}
