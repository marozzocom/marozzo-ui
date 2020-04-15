import { useContext, useMemo } from "react"
import { ThemeContext } from "./ThemeProvider"
import facepaint from "facepaint"

export const useTheme = () => {
  const { mergedTheme, colorMode, setColorMode, breakpoints: breakpointValues } = useContext(ThemeContext)

  const breakpoints = useMemo(() => facepaint(Object.values(breakpointValues).map((breakpoint: number) => `@media (min-width: ${breakpoint}px)`)), [
    breakpointValues,
  ])
  return { theme: mergedTheme, breakpoints, colorMode, setColorMode }
}
