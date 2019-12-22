import React from "react"
import { Markdown } from "../src/markdown/Markdown"

export default {
  component: Markdown,
  title: "Markdown"
}

export const box = () => (
  <Markdown
    content={`
# Title
## Heading
Text rendered via Markdown.
`}
  />
)
