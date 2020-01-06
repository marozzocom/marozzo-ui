import React, { FC, createContext, useMemo, useEffect, useState } from "react"
import { Global, CSSObject } from "@emotion/core"
import { defaultTheme } from "./DefaultTheme"
import { global as globals } from "./global"
import { useFocusVisible } from "../_common/useFocusVisible"
import { Theme } from "./Theme"
import merge from "deepmerge"

interface Props {
  theme?: Theme
  global?: CSSObject
  focusVisiblePolyfill?: boolean
}

const ThemeContext = createContext<Record<string, any>>(defaultTheme)

const focusVisibleStyles: CSSObject = {
  ".js-focus-visible :focus:not([data-focus-visible-added])": {
    outline: "none",
    boxShadow: "none"
  }
}

const ThemeProvider: FC<Props> = ({ theme, children, global = globals, focusVisiblePolyfill = true }) => {
  focusVisiblePolyfill && useFocusVisible()
  const mergedTheme = theme ? useMemo(() => merge(defaultTheme, theme), [theme]) : defaultTheme

  return (
    <ThemeContext.Provider value={mergedTheme}>
      {global && <Global styles={global} />}
      {focusVisiblePolyfill && <Global styles={focusVisibleStyles} />}
      {children}
    </ThemeContext.Provider>
  )
}

export { ThemeContext, ThemeProvider }
