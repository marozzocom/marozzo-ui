import React from "react"
import { render } from "react-dom"

const App = React.lazy(() => import("./app/App"))

render(
  <div>
    <React.Suspense fallback={<>🦄</>}>
      <App />
    </React.Suspense>
  </div>,
  document.getElementById("root")
)
