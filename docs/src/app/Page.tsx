import React, { useEffect, useState, useRef, FC } from "react"
import { Markdown, useScrollProgress, Stack, Box, Toc, useTheme, useToc } from "@marozzocom/marozzo-ui"
import { Navigation } from "../navigation/Navigation"
import { navigation } from "../_common/navigation"
import { useParams } from "react-router-dom"

const Page: FC<{}> = () => {
  const { name } = useParams()
  const [content, setContent] = useState<string>("")
  const contentRef = useRef()
  const { attach } = useScrollProgress()
  const { resetToc } = useToc()

  const {
    theme: { sizes }
  } = useTheme()

  useEffect(() => {
    attach(contentRef.current)
  }, [contentRef.current])
  useEffect(() => {
    ;(async () => {
      window.scrollTo({ top: 0, behavior: "smooth" })
      resetToc()
      const page = await import(`../pages/${name}.md`)
      setContent(page.default)
    })()
  }, [name])

  const toc = <Toc />

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
        <Navigation items={{ ...navigation, [name]: { ...navigation[name], selected: true } }} toc={toc} />
      </Box>
      <Box innerRef={contentRef}>
        <Markdown>{content}</Markdown>
      </Box>
    </Stack>
  )
}

export default Page
