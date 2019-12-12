import React from "react"
import { render } from "@testing-library/react"
import { Toast } from "../src/toast/Toast"

test("Renders Toast", () => {
  const { getByText } = render(<Toast id="toast" message="Toast"/>)
  expect(getByText("Toast")).not.toBeNull()
})