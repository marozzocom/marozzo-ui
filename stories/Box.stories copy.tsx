import React from "react"
import { Box } from "../src/box/Box"
import { useTheme } from "../src/theme/useTheme"

export default {
  component: Box,
  title: "Box"
}

export const box = () => {
  const {
    theme: { sizes, colors }
  } = useTheme()

  return (
    <Box
      style={{
        padding: sizes[3],
        background: colors.secondary
      }}>
      Box
    </Box>
  )
}
