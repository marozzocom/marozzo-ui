import React, { FC } from "react"
import { ThemeProviderProps, ThemeProvider } from "emotion-theming"
import { DefaultTheme } from "./DefaultTheme"
import { Global, InterpolationWithTheme } from "@emotion/core"

export interface Theme extends DefaultTheme {
}

interface Props {
    theme: ThemeProviderProps<Theme>,
    global?: InterpolationWithTheme<any>
}

export const Theme: FC<Props> = ({theme, children, global}) => {
    console.log(global)
    return <>{global && <Global styles={global} />}<ThemeProvider theme={theme}>{children}</ThemeProvider></>
}