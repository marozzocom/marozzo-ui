import React from "react"
import { Fixture } from "../src/"
import { render } from "@testing-library/react"

test("Renders Fixture", () => {
  const { getByText } = render(<Fixture>Fixture</Fixture>)
  expect(getByText("Fixture")).not.toBeNull()
})
