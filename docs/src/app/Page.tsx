import React, { useEffect, useState, useRef, FC } from "react"
import { Markdown, Stack, Box, useTheme, ScrollProgressContainer, ScrollProgress, Vertical, Sticky } from "@marozzocom/marozzo-ui"
import { Navigation } from "../navigation/Navigation"
import { navigation } from "../_common/navigation"
import { useParams } from "react-router-dom"
import { scrollProgressEmitter } from "@marozzocom/marozzo-ui"

const Page: FC<{}> = () => {
  const {
    theme: { sizes, shadows, colors }
  } = useTheme()

  const { name } = useParams()
  const [content, setContent] = useState<string>()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" })
    ;(async () => {
      const page = await import(`../pages/${name}.md`)
      setContent(page.default)
    })()
  }, [name])

  return (
    <Stack horizontal>
      <Box
        style={{
          flexShrink: 0,
          margin: `initial ${sizes[2]}`,
          width: sizes[6],
          boxShadow: shadows.normal,
          backgroundColor: colors.background,
          position: "sticky",
          top: "0px",
          alignSelf: "flex-start",
          maxHeight: "100vh",
          overflowY: "auto"
        }}>
        <Navigation items={{ ...navigation, [name]: { ...navigation[name], selected: true } }} />
      </Box>
      <PageContent content={content} />
    </Stack>
  )
}

export default Page

const PageContent: FC<{ content: string }> = ({ content }) => {
  const contentRef = useRef()
  const { set, clear } = scrollProgressEmitter

  useEffect(() => {
    set(contentRef.current)
    return () => {
      clear()
    }
  }, [contentRef.current])

  return (
    <Box innerRef={contentRef}>
      <Sticky>
        <ScrollProgress type="absolute" vertical={Vertical.Top} />
      </Sticky>
      <ScrollProgressContainer>{content && <Markdown>{content}</Markdown>}</ScrollProgressContainer>
    </Box>
  )
}
