import { useContext } from "react"
import { ThemeContext } from "./ThemeProvider"
import facepaint from "facepaint"

export const useTheme = () => {
  try {
    const { theme } = useContext(ThemeContext)
    const breakpoints = facepaint(theme.breakpoints.map(breakpoint => `@media (min-width: ${breakpoint}px)`))
    return { theme, breakpoints }
  } catch (error) {
    return { theme: null, breakpoints: null }
  }
}
