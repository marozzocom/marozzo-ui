import React from "react"
import { Stack } from "../src/"
import { render } from "@testing-library/react"

test("Renders Stack", () => {
  const { getByText } = render(<Stack>Stack</Stack>)
  expect(getByText("Stack")).not.toBeNull()
})
