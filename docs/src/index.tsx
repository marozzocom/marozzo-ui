import React from "react"
import { render } from "react-dom"
import App from "./app/App"

// const App = React.lazy(() => import("./app/App"))

render(
  <div>
    <App />
  </div>,
  document.getElementById("root")
)
