import React from "react"
import { ThemeProvider, defaultTheme, ProgressProvider, ProgressIndicator, ToastProvider, Toaster, Box } from "@marozzocom/marozzo-ui"
// import { global } from "@marozzocom/marozzo-ui/dist/theme/global"

// TODO: Fix theme typings

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ProgressProvider>
        <ProgressIndicator />
        <ToastProvider>
          <Toaster />
          <Box>Test</Box>
        </ToastProvider>
      </ProgressProvider>
    </ThemeProvider>
  )
}

export default App
