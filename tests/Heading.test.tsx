import React from "react"
import { Heading } from "../src/heading/Heading"
import { render } from "@testing-library/react"

test("Renders Heading", () => {
  const { getByText } = render(<Heading>Heading</Heading>)
  expect(getByText("Heading")).not.toBeNull()
})
