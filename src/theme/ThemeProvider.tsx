import React, { FC, createContext, useMemo, useCallback, useState, useEffect } from "react"
import { Global, CSSObject } from "@emotion/core"
import { defaultTheme, variants } from "./DefaultTheme"
import { global as globals } from "./global"
import { useFocusVisible } from "../_common/useFocusVisible"
import { Theme } from "./Theme"
import merge from "deepmerge"
import { ColorMode } from "./models"

interface Props {
  baseTheme?: typeof defaultTheme
  theme?: Theme
  global?: CSSObject
  colorMode?: ColorMode
  alternateTheme?: Theme
  focusVisiblePolyfill?: boolean
}

interface ThemeContextValue {
  mergedTheme: Record<string, any>
  colorMode?: ColorMode
  setColorMode?: React.Dispatch<React.SetStateAction<ColorMode>>
  variants?: (theme: any) => any
}

const ThemeContext = createContext<ThemeContextValue>(null)

const focusVisibleStyles: CSSObject = {
  ".js-focus-visible :focus:not([data-focus-visible-added])": {
    outline: "none",
    boxShadow: "none"
  }
}

const ThemeProvider: FC<Props> = ({
  baseTheme = defaultTheme,
  theme = defaultTheme,
  alternateTheme,
  children,
  global = globals,
  focusVisiblePolyfill = true
}) => {
  const [colorMode, setColorMode] = useState<ColorMode>("normal")

  focusVisiblePolyfill && useFocusVisible()
  const mergedTheme = useMemo(() => merge.all([baseTheme, theme, colorMode === "alternate" && alternateTheme]), [theme, colorMode, alternateTheme])

  useEffect(() => setColorMode(localStorage.getItem("colorMode") as ColorMode), [])

  return (
    <ThemeContext.Provider value={{ mergedTheme, colorMode, setColorMode, variants }}>
      {global && <Global styles={global} />}
      {focusVisiblePolyfill && <Global styles={focusVisibleStyles} />}
      {children}
    </ThemeContext.Provider>
  )
}

export { ThemeContext, ThemeProvider }
