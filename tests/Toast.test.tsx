import React from "react"
import { render } from "@testing-library/react"
import { Toast } from "../src/toast/Toast"

test("Renders Toast", () => {
  const { getByText } = render(<Toast id="toast" message="Toast" />)
  expect(getByText("Toast")).not.toBeNull()
})

test("Toast with id and remove has close button", () => {
  const removeMock = jest.fn((id: string) => console.log("remove"))
  const { getByLabelText } = render(<Toast id="toast" remove={removeMock} message="Toast" />)
  expect(getByLabelText("Close")).not.toBeNull()
})
