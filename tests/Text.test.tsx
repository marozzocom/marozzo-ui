import React from "react"
import { Text } from "../src/text/Text"
import { render } from "@testing-library/react"

test("Renders Text", () => {
  const { getByText } = render(<Text>Text</Text>)
  expect(getByText('Text')).not.toBeNull()
})