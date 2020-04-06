import React, { FC, createContext, useMemo, useState, useEffect } from "react"
import { Global, CSSObject, CacheProvider } from "@emotion/core"
import { focusVisible } from "../_common/focusVisible"
import merge from "deepmerge"
import { ColorMode } from "./models"
import createCache, { Options } from "@emotion/cache"
import { ThemeProperty } from "./Theme"

interface Props {
  baseTheme?: ThemeProperty
  theme?: ThemeProperty
  global?: CSSObject
  colorMode?: ColorMode
  alternateModeTheme?: ThemeProperty
  focusVisiblePolyfill?: boolean
  options?: Options
}

interface ThemeContextValue {
  mergedTheme: ThemeProperty
  colorMode?: ColorMode
  setColorMode?: React.Dispatch<React.SetStateAction<ColorMode>>
}

const ThemeContext = createContext<ThemeContextValue>({
  mergedTheme: {},
})

const focusVisibleStyles: CSSObject = {
  ".js-focus-visible :focus:not([data-focus-visible-added]), .js-focus-visible :focus:not([data-focus-visible-added]) ~ div": {
    outline: "none",
    boxShadow: "none",
  },
}

const ThemeProvider: FC<Props> = ({ baseTheme, theme, alternateModeTheme, children, global, focusVisiblePolyfill = true, options }) => {
  const [colorMode, setColorMode] = useState<ColorMode>("normal")

  const emotionCache = createCache(options)

  focusVisiblePolyfill && focusVisible()
  const mergedTheme = useMemo(() => merge.all([baseTheme, global, theme, colorMode === "alternate" && alternateModeTheme]) as ThemeProperty, [
    alternateModeTheme,
    baseTheme,
    colorMode,
    theme,
  ])
  useEffect(() => setColorMode(localStorage.getItem("colorMode") as ColorMode), [])

  return (
    <CacheProvider value={emotionCache}>
      <ThemeContext.Provider value={{ mergedTheme, colorMode, setColorMode }}>
        {global && <Global styles={global} />}
        {focusVisiblePolyfill && <Global styles={focusVisibleStyles} />}
        {children}
      </ThemeContext.Provider>
    </CacheProvider>
  )
}

export { ThemeContext, ThemeProvider }
