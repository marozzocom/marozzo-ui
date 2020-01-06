import React from "react"
import { Code } from "../src/code/Code"

export default {
  component: Code,
  title: "Code"
}

const source = `import React from "react"
import { Code } from "../src/code/Code"
import { useTheme } from "../src/theme/useTheme"

export default {
  component: Code,
  title: "Code"
}

const source = \`\`

export const code = () => {
  return (
    <Code>{source}</Code>
  )
}
`

export const code = () => {
  return <Code>{source}</Code>
}
