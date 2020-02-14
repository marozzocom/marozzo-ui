import { useContext, useMemo } from "react"
import { ThemeContext } from "./ThemeProvider"
import facepaint from "facepaint"

export const useTheme = () => {
  const { mergedTheme, colorMode, setColorMode } = useContext(ThemeContext)

  const breakpoints = useMemo(() => facepaint(Object.values(mergedTheme.breakpoints).map((breakpoint: number) => `@media (min-width: ${breakpoint}px)`)), [
    mergedTheme
  ])
  return { theme: mergedTheme as typeof mergedTheme, breakpoints, colorMode, setColorMode }
}
