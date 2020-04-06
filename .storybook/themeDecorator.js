import React from "react"
import { ThemeProvider, useTheme } from "../src/theme"
import { DefaultTheme } from "./theme/default-theme"
import { defaultGlobal } from "./theme/global"
import { Box } from "../src/box/Box"

const ThemeDecorator = storyFn => (
  <ThemeProvider
    options={{
      key: "marozzo-ui",
      prefix: false,
    }}
    theme={DefaultTheme}
    global={defaultGlobal}>
    <App>{storyFn()}</App>
  </ThemeProvider>
)

const App = ({ children }) => {
  const {
    theme: { colors },
  } = useTheme()
  return <Box style={{ minWidth: "100vw", minHeight: "100vh", backgroundColor: colors.background }}>{children}</Box>
}

export default ThemeDecorator
