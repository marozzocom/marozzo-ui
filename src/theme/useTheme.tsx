import { useContext, useMemo } from "react"
import { ThemeContext } from "./ThemeProvider"
import facepaint from "facepaint"
import { defaultTheme } from "./DefaultTheme"

export const useTheme = () => {
  try {
    const { mergedTheme, colorMode, setColorMode } = useContext(ThemeContext)

    const breakpoints = useMemo(() => facepaint(Object.values(mergedTheme.breakpoints).map((breakpoint: number) => `@media (min-width: ${breakpoint}px)`)), [
      mergedTheme
    ])
    return { theme: mergedTheme, breakpoints, colorMode, setColorMode }
  } catch (error) {
    return { theme: defaultTheme, breakpoints: null, colorMode: null, setColorMode: null }
  }
}
