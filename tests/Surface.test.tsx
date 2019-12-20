import React from "react"
import { Surface } from "../src/surface/Surface"
import { render } from "@testing-library/react"
import { ThemeProvider, defaultTheme } from "../src/theme"

const renderComponent = () => render(<ThemeProvider theme={defaultTheme}>
  <Surface>Surface</Surface>
</ThemeProvider>)

test("Renders Surface", () => {
  const { getByText } = renderComponent()
  expect(getByText("Surface")).not.toBeNull()
})