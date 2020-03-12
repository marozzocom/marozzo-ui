import React, { useMemo } from "react"
import { useTheme } from ".."

export const useVariants = () => {
  const { theme } = useTheme()

  const field = useMemo(() => {
    const { radii, colors, sizes } = theme
    return {
      appearance: "none",
      "-webkit-appearance": "none",
      lineHeight: "inherit",
      border: `${sizes[0]}px solid ${colors.primary}`,
      borderRadius: radii.subtle,
      color: colors.text,
      backgroundColor: "transparent",
      padding: sizes[2],
      "&:focus": {
        outline: "none",
        boxShadow: `0px 0px 2px 3px ${colors.active}`
      }
    }
  }, [theme])

  return { field }
}
