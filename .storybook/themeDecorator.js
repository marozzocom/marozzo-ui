import React from "react"
import { ThemeProvider } from "../src/theme/ThemeProvider"
import { global } from "../src/theme/global"
import { defaultTheme } from "../src/theme/DefaultTheme"

const ThemeDecorator = storyFn => (
  <ThemeProvider theme={defaultTheme} global={global}>{storyFn()}</ThemeProvider>
)

export default ThemeDecorator
