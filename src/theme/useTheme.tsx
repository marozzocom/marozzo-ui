import { useContext, useMemo } from "react"
import { ThemeContext } from "./ThemeProvider"
import facepaint from "facepaint"
import { defaultTheme } from "./DefaultTheme"

export const useTheme = () => {
  try {
    const { mergedTheme, colorMode, setColorMode, variants: variantFunc } = useContext(ThemeContext)
    const variants: any = variantFunc(mergedTheme)
    const theme = { ...mergedTheme, variants }

    console.log("theme", theme)

    const breakpoints = useMemo(() => facepaint(Object.values(mergedTheme.breakpoints).map((breakpoint: number) => `@media (min-width: ${breakpoint}px)`)), [
      mergedTheme
    ])
    return { theme: { ...mergedTheme, variants } as any, breakpoints, colorMode, setColorMode }
  } catch (error) {
    return { theme: defaultTheme, breakpoints: null, colorMode: null, setColorMode: null }
  }
}
