import React from "react"
import { Box } from "../src/box/Box"
import { render } from "@testing-library/react"

test("Renders Box", () => {
  const { getByText } = render(<Box>Box</Box>)
  expect(getByText("Box")).not.toBeNull()
})