import React from "react"
import { render } from "@testing-library/react"
import { Toast } from "../src/toast/Toast"
import { ThemeProvider } from "../src/theme/ThemeProvider"

test("Renders Toast", () => {
  const renderComponent = () =>
    render(
      <ThemeProvider>
        <Toast id="toast" message="Toast" />
      </ThemeProvider>
    )

  const { getByText } = renderComponent()
  expect(getByText("Toast")).not.toBeNull()
})

test("Toast with id and remove has close button", () => {
  const renderComponent = () =>
    render(
      <ThemeProvider>
        <Toast id="toast" remove={removeMock} message="Toast" />
      </ThemeProvider>
    )

  const removeMock = jest.fn((id: string) => console.log("remove"))
  const { getByLabelText } = renderComponent()
  expect(getByLabelText("Close")).not.toBeNull()
})
