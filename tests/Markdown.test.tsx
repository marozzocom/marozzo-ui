import React from "react"
import { Markdown } from "../src/markdown/Markdown"
import { render } from "@testing-library/react"

const md = `
# Heading
Text rendered via Markdown.
`

test("Renders Markdown", () => {
  const { getByText, getByRole } = render(<Markdown>{md}</Markdown>)
  expect(getByText("Text rendered via Markdown.")).not.toBeNull()
  expect(getByRole("heading")).not.toBeNull()
})
