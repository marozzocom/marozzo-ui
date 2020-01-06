import React, { FC } from "react"
import { Box } from "../box/Box"
import { styles } from "./styles"
import SyntaxHighlighter from "react-syntax-highlighter"

// TODO: Fix how to import styles and other things, and expand options

interface Props {}

export const Code: FC<Props> = ({ children }) => {
  return (
    <Box css={styles} as="code">
      <SyntaxHighlighter language="javascript">{children}</SyntaxHighlighter>
    </Box>
  )
}
