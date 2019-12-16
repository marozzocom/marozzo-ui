import React, { FC } from "react"
import { ThemeProviderProps, ThemeProvider } from "emotion-theming"
import { ITheme } from "./DefaultTheme"
import { Global, InterpolationWithTheme } from "@emotion/core"

interface Props {
    theme: ThemeProviderProps<ITheme>,
    global?: InterpolationWithTheme<any>
}

export const Theme: FC<Props> = ({theme, children, global}) => <>{global && <Global styles={global} />}<ThemeProvider theme={theme}>{children}</ThemeProvider></>