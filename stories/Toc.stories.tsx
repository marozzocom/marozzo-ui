import React from "react"
import { Toc } from "../src/toc"
import { Stack, Box, Markdown } from "../src"
import { markdown } from "./mock/mock"
import { useTheme } from "../src/theme/useTheme"

export default {
  component: Toc,
  title: "Toc"
}

export const tocFromContent = () => {
  const {
    theme: { sizes }
  } = useTheme()

  return (
    <Stack horizontal>
      <Box
        style={{
          flexShrink: 0,
          margin: `initial ${sizes[2]}`,
          width: sizes[5],
          position: "sticky",
          top: "0px",
          alignSelf: "flex-start"
        }}>
        <Toc />
      </Box>
      <Box>
        <Markdown>{markdown}</Markdown>
      </Box>
    </Stack>
  )
}
