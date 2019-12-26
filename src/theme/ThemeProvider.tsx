import React, { FC, CSSProperties } from "react"
import { ThemeProvider as EmotionThemeProvider } from "emotion-theming"
import { Global, InterpolationWithTheme, CSSObject } from "@emotion/core"
import { Theme } from "./models"
import { defaultTheme } from "./DefaultTheme"
import { global as globals } from "./global"

interface Props {
  theme?: Theme
  global?: CSSObject
}

export const ThemeProvider: FC<Props> = ({ theme = defaultTheme, children, global = globals }) => (
  <>
    {global && <Global styles={global} />}
    <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>
  </>
)
