import React, { FC, createContext, useMemo, useState, useEffect } from "react"
import { Global, CSSObject } from "@emotion/core"
import { defaultTheme, ITheme } from "./DefaultTheme"
import { global as globals } from "./global"
import { focusVisible } from "../_common/focusVisible"
import merge from "deepmerge"
import { ColorMode } from "./models"

interface Props {
  baseTheme?: typeof defaultTheme
  theme?: ITheme
  global?: CSSObject
  colorMode?: ColorMode
  alternateTheme?: ITheme
  focusVisiblePolyfill?: boolean
}

interface ThemeContextValue {
  mergedTheme: ITheme
  colorMode?: ColorMode
  setColorMode?: React.Dispatch<React.SetStateAction<ColorMode>>
}

const ThemeContext = createContext<ThemeContextValue>({
  mergedTheme: defaultTheme
})

const focusVisibleStyles: CSSObject = {
  ".js-focus-visible :focus:not([data-focus-visible-added])": {
    outline: "none",
    boxShadow: "none"
  }
}

const ThemeProvider: FC<Props> = ({
  baseTheme = defaultTheme,
  theme = defaultTheme,
  alternateTheme = {},
  children,
  global = globals,
  focusVisiblePolyfill = true
}) => {
  const [colorMode, setColorMode] = useState<ColorMode>("normal")

  focusVisiblePolyfill && focusVisible()
  const mergedTheme = useMemo(() => merge.all([baseTheme, theme, colorMode === "alternate" && alternateTheme]), [baseTheme, theme, colorMode, alternateTheme])

  useEffect(() => setColorMode(localStorage.getItem("colorMode") as ColorMode), [])

  return (
    <ThemeContext.Provider value={{ mergedTheme, colorMode, setColorMode }}>
      {global && <Global styles={global} />}
      {focusVisiblePolyfill && <Global styles={focusVisibleStyles} />}
      {children}
    </ThemeContext.Provider>
  )
}

export { ThemeContext, ThemeProvider }
