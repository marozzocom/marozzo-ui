import React, { Suspense } from "react"
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
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { routes } from "../_common/constants"

const Home = React.lazy(() => import("../home/Home"))

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
            <Suspense fallback={<>Loading... 🔜</>}>
              <Router>
                <Switch>
                  <Route path={routes.home} exact>
                    <Home />
                  </Route>
                  {/* <Route path={`${routes.components}:name`} exact render={props => <Page name={props?.match.params.name} />} /> */}
                  <Route path={`${routes.docs}:name`}>
                    <Page />
                  </Route>
                  <Route render={() => <Box>Not found!</Box>} />
                </Switch>
              </Router>
            </Suspense>
            <Footer />
          </ScrollProgressProvider>
        </TocProvider>
      </ToastProvider>
    </ProgressProvider>
  </ThemeProvider>
)

export default App
