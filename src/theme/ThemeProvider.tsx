import React, { FC } from "react"
import { ThemeProviderProps, ThemeProvider as EmotionThemeProvider } from "emotion-theming"
import { DefaultTheme } from "./DefaultTheme"
import { Global, InterpolationWithTheme } from "@emotion/core"

export interface Theme extends DefaultTheme {
}

interface Props {
    theme: ThemeProviderProps<Theme>,
    global?: InterpolationWithTheme<any>
}

export const ThemeProvider: FC<Props> = ({theme, children, global}) => <>{global && <Global styles={global} />}<EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider></>