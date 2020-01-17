import React from "react"
import { ThemeProvider, useTheme } from "../src/theme"
import { dark } from "../src/theme/Dark"
import { Box } from "../src/box/Box"
import { VariantsProvider } from "../src/variants/VariantsProvider"
import { Variants } from "../src/variants/Variants"

const ThemeDecorator = storyFn => (
  <ThemeProvider alternateTheme={dark}>
    <VariantsProvider>
      <App>{storyFn()}</App>
    </VariantsProvider>
  </ThemeProvider>
)

const App = ({ children }) => {
  const {
    theme: { colors }
  } = useTheme()
  return <Box style={{ minWidth: "100vw", minHeight: "100vh", backgroundColor: colors.background }}>{children}</Box>
}

export default ThemeDecorator
