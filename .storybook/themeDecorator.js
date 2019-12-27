import React from "react"
import { ThemeProvider, defaultTheme } from "../src/theme"

const ThemeDecorator = storyFn => <ThemeProvider theme={defaultTheme}>{storyFn()}</ThemeProvider>

export default ThemeDecorator
