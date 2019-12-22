import React from "react"
import { Link } from "../src/link/Link"
import { render } from "@testing-library/react"

test("Renders Link", () => {
  const { getByText } = render(<Link>Link</Link>)
  expect(getByText("Link")).not.toBeNull()
})
