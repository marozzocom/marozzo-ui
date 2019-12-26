import React from "react"
import { Markdown } from "../src/markdown/Markdown"

export default {
  component: Markdown,
  title: "Markdown"
}

export const basic = () => (
  <Markdown>{`
# Title
## Heading

Text rendered via Markdown.
`}</Markdown>
)
