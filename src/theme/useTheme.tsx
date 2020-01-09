import { useContext, useMemo } from "react"
import { ThemeContext } from "./ThemeProvider"
import facepaint from "facepaint"
import { defaultTheme } from "./DefaultTheme"

export const useTheme = () => {
  try {
    const theme = useContext(ThemeContext)
    const breakpoints = useMemo(() => facepaint(Object.values(theme.breakpoints).map((breakpoint: number) => `@media (min-width: ${breakpoint}px)`)), [theme])
    return { theme, breakpoints }
  } catch (error) {
    return { theme: defaultTheme, breakpoints: null }
  }
}
