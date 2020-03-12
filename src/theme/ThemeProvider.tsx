import React, { FC, createContext, useMemo, useState, useEffect } from "react"
import { Global, CSSObject, CacheProvider } from "@emotion/core"
import { defaultTheme, ITheme } from "./DefaultTheme"
import { defaultGlobal } from "./global"
import { focusVisible } from "../_common/focusVisible"
import merge from "deepmerge"
import { ColorMode } from "./models"
import createCache, { Options } from "@emotion/cache"

interface Props {
  baseTheme?: typeof defaultTheme
  theme?: ITheme
  global?: CSSObject
  colorMode?: ColorMode
  alternateTheme?: ITheme
  focusVisiblePolyfill?: boolean
  options?: Options
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
  ".js-focus-visible :focus:not([data-focus-visible-added]), .js-focus-visible :focus:not([data-focus-visible-added]) ~ div": {
    outline: "none",
    boxShadow: "none"
  }
}

const ThemeProvider: FC<Props> = ({
  baseTheme = defaultTheme,
  theme = defaultTheme,
  alternateTheme = {},
  children,
  global = {},
  focusVisiblePolyfill = true,
  options = {
    key: "marozzo-ui",
    prefix: false
  }
}) => {
  const [colorMode, setColorMode] = useState<ColorMode>("normal")

  const emotionCache = createCache(options)

  focusVisiblePolyfill && focusVisible()
  const mergedTheme = useMemo(() => merge.all([baseTheme, theme, colorMode === "alternate" && alternateTheme]), [baseTheme, theme, colorMode, alternateTheme])
  const mergedGlobal = useMemo(() => merge.all([defaultGlobal, global]), [global])
  useEffect(() => setColorMode(localStorage.getItem("colorMode") as ColorMode), [])

  return (
    <CacheProvider value={emotionCache}>
      <ThemeContext.Provider value={{ mergedTheme, colorMode, setColorMode }}>
        {global && <Global styles={mergedGlobal as CSSObject} />}
        {focusVisiblePolyfill && <Global styles={focusVisibleStyles} />}
        {children}
      </ThemeContext.Provider>
    </CacheProvider>
  )
}

export { ThemeContext, ThemeProvider }
