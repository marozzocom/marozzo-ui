import React, { FC } from "react"
import { ThemeProviderProps, ThemeProvider as EmotionThemeProvider } from "emotion-theming"
import { Global, InterpolationWithTheme } from "@emotion/core"
import { Theme } from "./models"

interface Props {
    theme: ThemeProviderProps<Theme>,
    global?: InterpolationWithTheme<any>
}

export const ThemeProvider: FC<Props> = ({theme, children, global}) => <>{global && <Global styles={global} />}<EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider></>