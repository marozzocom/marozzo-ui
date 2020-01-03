import React, { Suspense } from "react"
import {
  defaultTheme,
  ThemeProvider,
  Box,
  Text,
  ProgressProvider,
  ProgressIndicator,
  ToastProvider,
  Toaster,
  Card,
  Heading,
  TocProvider
} from "@marozzocom/marozzo-ui"
import Page from "./Page"
import { Footer } from "./Footer"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { routes } from "../_common/constants"

const Home = React.lazy(() => import("../home/Home"))

const App = () => (
  <ThemeProvider theme={defaultTheme}>
    <ProgressProvider>
      <ProgressIndicator />
      <ToastProvider>
        <Toaster />
        <Card>
          <Box>
            <Text>Testings</Text>
          </Box>
          <Heading>Test heading</Heading>
        </Card>
        <Suspense fallback={<>Loading... 🔜</>}>
          <Router>
            <Switch>
              <Route path={routes.home} exact>
                <Home />
              </Route>
              <Route path={`${routes.docs}:name`}>
                <TocProvider>
                  <Page />
                </TocProvider>
              </Route>
              <Route render={() => <Box>Page not found!</Box>} />
            </Switch>
          </Router>
        </Suspense>
        <Footer />
      </ToastProvider>
    </ProgressProvider>
  </ThemeProvider>
)

export default App
