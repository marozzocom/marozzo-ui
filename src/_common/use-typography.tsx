import React, { useMemo } from "react"
import { useTheme } from ".."

export const useTypography = () => {
  const { theme } = useTheme()

  const form = useMemo(() => {
    const { fontSizes, fontWeights, fonts } = theme
    return {
      fontFamily: fonts.action,
      fontWeight: fontWeights.bold,
      fontSize: fontSizes.m,
      lineHeight: "inherit"
    }
  }, [theme])

  return { form }
}
