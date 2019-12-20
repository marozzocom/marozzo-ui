import React from "react"
import { Card } from "../src/card/Card"
import { render } from "@testing-library/react"
import { ThemeProvider, defaultTheme } from "../src/theme"

const renderComponent = () => render(<ThemeProvider theme={defaultTheme}>
  <Card>Card</Card>
</ThemeProvider>)

test("Renders Card", () => {
  const { getByText } = renderComponent()
  expect(getByText("Card")).not.toBeNull()
})