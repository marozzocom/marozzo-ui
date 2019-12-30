import React, { FC, createContext } from "react"
import { Global, CSSObject } from "@emotion/core"
import { Theme } from "./models"
import { defaultTheme } from "./DefaultTheme"
import { global as globals } from "./global"
import { useFocusVisible } from "../_common/useFocusVisible"

interface Props {
  theme?: Theme
  global?: CSSObject
  focusVisiblePolyfill?: boolean
}

const ThemeContext = createContext<{
  theme: Theme
}>({ theme: defaultTheme })

const focusVisibleStyles: CSSObject = {
  ".js-focus-visible :focus:not([data-focus-visible-added])": {
    outline: "none",
    boxShadow: "none"
  }
}

const ThemeProvider: FC<Props> = ({ theme, children, global = globals, focusVisiblePolyfill = true }) => {
  focusVisiblePolyfill && useFocusVisible()

  return (
    <ThemeContext.Provider value={{ theme }}>
      {global && <Global styles={global} />}
      {focusVisiblePolyfill && <Global styles={focusVisibleStyles} />}
      {children}
    </ThemeContext.Provider>
  )
}

export { ThemeContext, ThemeProvider }
