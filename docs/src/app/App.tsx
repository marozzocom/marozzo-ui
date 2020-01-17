import React, { Suspense, useMemo } from "react"
import {
  ThemeProvider,
  Box,
  ProgressProvider,
  ProgressIndicator,
  ShowProgress,
  ToastProvider,
  Toaster,
  TocProvider,
  Sticky,
  ScrollProgress,
  Vertical,
  Stack,
  Fixture,
  VariantsProvider
} from "@marozzocom/marozzo-ui"
import Page from "./Page"
import { Footer } from "./Footer"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { routes } from "../_common/constants"
import { TopBar } from "../topBar/TopBar"
import { docs } from "../themes/Docs"
import { Variants } from "../themes/Variants"

const Home = React.lazy(() => import("../home/Home"))

const App = () => {
  return (
    <ThemeProvider theme={docs}>
      <VariantsProvider variants={Variants}>
        <ProgressProvider>
          <ToastProvider>
            <Toaster />
            <Sticky
              style={{
                zIndex: 10
              }}>
              <Stack gap={0}>
                <TopBar />
                <ScrollProgress
                  type="absolute"
                  vertical={Vertical.Bottom}
                  style={{
                    height: "2px",
                    zIndex: 20
                  }}
                />
              </Stack>
            </Sticky>
            <Suspense fallback={<ShowProgress />}>
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
          <Fixture
            vertical={Vertical.Top}
            style={{
              zIndex: 10
            }}>
            <ProgressIndicator />
          </Fixture>
        </ProgressProvider>
      </VariantsProvider>
    </ThemeProvider>
  )
}
export default App
