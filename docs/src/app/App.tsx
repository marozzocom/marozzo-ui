import React, { useEffect, useState } from "react"
import { ThemeProvider, defaultTheme, ProgressProvider, ProgressIndicator, ToastProvider, Toaster, Markdown } from "@marozzocom/marozzo-ui"

const App = () => {
  const [content, setContent] = useState<string>("")

  useEffect(() => {
    ;(async () => {
      const page = await import("../pages/introduction.md")
      setContent(page.default)
    })()
  }, [])

  return (
    <ThemeProvider theme={defaultTheme}>
      <ProgressProvider>
        <ProgressIndicator />
        <ToastProvider>
          <Toaster />
          <Markdown>{content}</Markdown>
        </ToastProvider>
      </ProgressProvider>
    </ThemeProvider>
  )
}

export default App
