import React from "react"
import { Toc } from "../src/toc"
import { Stack, Box, Markdown } from "../src"
import { markdown } from "./mock/mock"
import { useTheme } from "../src/theme/useTheme"

export default {
  component: Toc,
  title: "Toc"
}

export const TocFromContent = () => {
  const {
    theme: { sizes }
  } = useTheme()
  return (
    <Stack
      horizontal
      style={{
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        overflow: "auto",
        position: "absolute"
      }}>
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
        <Content />
      </Box>
    </Stack>
  )
}

const Content = () => <Markdown>{markdown}</Markdown>
