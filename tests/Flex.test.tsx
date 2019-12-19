import React from "react"
import { Flex } from "../src/"
import { render } from "@testing-library/react"

test("Renders Flex", () => {
  const { getByText } = render(<Flex>Flex</Flex>)
  expect(getByText("Flex")).not.toBeNull()
})