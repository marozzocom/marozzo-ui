import React, { FC, createContext, SetStateAction, Dispatch, useState } from "react"
import { Global, CSSObject } from "@emotion/core"
import { Theme } from "./models"
import { defaultTheme } from "./DefaultTheme"
import { global as globals } from "./global"

interface Props {
  theme?: Theme
  global?: CSSObject
}

const ThemeContext = createContext<{
  theme: Theme
}>({ theme: defaultTheme })

const ThemeProvider: FC<Props> = ({ theme, children, global = globals }) => (
  <ThemeContext.Provider value={{ theme }}>
    {global && <Global styles={global} />}
    {children}
  </ThemeContext.Provider>
)

export { ThemeContext, ThemeProvider }
