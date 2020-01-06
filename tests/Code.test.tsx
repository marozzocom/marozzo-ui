import React from "react"
import { Code } from "../src/code/Code"
import { render } from "@testing-library/react"

test("Renders Code", () => {
  const { getByText } = render(<Code>Code</Code>)
  expect(getByText("Code")).not.toBeNull()
})
