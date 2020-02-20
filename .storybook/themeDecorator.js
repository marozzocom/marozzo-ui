import React from "react"
import { ThemeProvider, useTheme } from "../src/theme"
import { dark } from "../src/theme/Dark"
import { Box } from "../src/box/Box"

const ThemeDecorator = storyFn => (
  <ThemeProvider>
    <App>{storyFn()}</App>
  </ThemeProvider>
)

const App = ({ children }) => {
  const {
    theme: { colors }
  } = useTheme()
  return <Box style={{ minWidth: "100vw", minHeight: "100vh", backgroundColor: colors.background }}>{children}</Box>
}

export default ThemeDecorator
