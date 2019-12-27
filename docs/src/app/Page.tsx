import React, { useEffect, useState, useRef } from "react"
import { Markdown, useScrollProgress, Flex, Box, Toc, useTheme } from "@marozzocom/marozzo-ui"

const Page = () => {
  const [content, setContent] = useState<string>("")
  const contentRef = useRef()
  const { attach } = useScrollProgress()
  const {
    theme: { sizes }
  } = useTheme()

  useEffect(() => {
    attach(contentRef.current)
  }, [contentRef.current])
  useEffect(() => {
    ;(async () => {
      const page = await import("../pages/introduction.md")
      setContent(page.default)
    })()
  }, [])

  return (
    <Flex>
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
      <Box innerRef={contentRef}>
        <Markdown>{content}</Markdown>
      </Box>
    </Flex>
  )
}

export default Page
