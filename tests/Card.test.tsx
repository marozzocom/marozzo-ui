import React from "react"
import { Card } from "../src/card/Card"
import { render } from "@testing-library/react"

test("Renders Card", () => {
  const { getByText } = render(<Card>Card</Card>)
  expect(getByText("Card")).not.toBeNull()
})