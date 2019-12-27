import React from "react"
import {
  defaultTheme,
  ThemeProvider,
  Box,
  Text,
  ProgressProvider,
  ScrollProgress,
  ScrollProgressProvider,
  ProgressIndicator,
  ToastProvider,
  Toaster,
  Card,
  Heading,
  TocProvider
} from "@marozzocom/marozzo-ui"
import Page from "./Page"
import { Footer } from "./Footer"

const App = () => (
  <ThemeProvider theme={defaultTheme}>
    <ProgressProvider>
      <ProgressIndicator />
      <ToastProvider>
        <Toaster />
        <TocProvider>
          <ScrollProgressProvider>
            <ScrollProgress />
            <Card>
              <Box>
                <Text>Testings</Text>
              </Box>
              <Heading>Test heading</Heading>
            </Card>
            <Page />
            <Footer />
          </ScrollProgressProvider>
        </TocProvider>
      </ToastProvider>
    </ProgressProvider>
  </ThemeProvider>
)

export default App
