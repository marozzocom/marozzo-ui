import React, { useEffect, useState, useRef, FC, useCallback, useMemo } from "react"
import { Navigation } from "../navigation/Navigation"
import { navigation } from "../_common/navigation"
import { useParams } from "react-router-dom"
import {
  Markdown,
  Stack,
  Box,
  useTheme,
  ScrollProgressContainer,
  scrollProgressEmitter,
  scrollIntoView,
  getSectionFromHash,
  Disclosure,
  useToc,
  NavigationItems,
  useProgress
} from "@marozzocom/marozzo-ui"
import { scrollTop } from "../_common/helpers"

const Page: FC<{}> = () => {
  const {
    theme: { sizes }
  } = useTheme() as any

  const { start, stop } = useProgress()

  const { name } = useParams()
  const [content, setContent] = useState<string>()
  const [navigationItems, setNavigationItems] = useState<NavigationItems>({})
  const { toc, clearToc } = useToc()

  const getNavigationWithTOC = () => ({ ...navigation, [name]: { ...navigation[name], selected: true, subItems: toc } })

  const updateNavigationItems = () => setNavigationItems(getNavigationWithTOC())

  const load = async (name: string) => {
    start("pageLoad")
    clearToc()
    const page = await import(`../pages/${name}.md`)
    stop("pageLoad")
    scrollTop()
    setContent(page.default)
    updateNavigationItems()
    scrollIntoView(getSectionFromHash())(-sizes["topBar"])
  }

  const remove = useCallback(() => {
    clearToc()
    setContent(null)
  }, [])

  useEffect(() => {
    load(name)
  }, [])

  useEffect(() => {
    updateNavigationItems()
  }, [toc])

  useEffect(() => {
    remove()
  }, [name])

  const animation = useMemo(
    () => ({
      initial: { opacity: 0, y: -sizes[1], overflow: "hidden" },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: 0, overflow: "hidden" },
      transition: {
        type: "tween"
      }
    }),
    []
  )

  return (
    <Stack
      horizontal
      style={{
        minHeight: `calc(100vh - ${sizes["topBar"]}px)`
      }}>
      <Box
        style={{
          flexShrink: 0,
          margin: `initial ${sizes[2]}`,
          width: sizes[6],
          position: "sticky",
          top: sizes[4],
          alignSelf: "flex-start",
          maxHeight: `calc(100vh - ${sizes["topBar"]}px)`,
          overflowY: "auto",
          paddingTop: sizes[1],
          paddingLeft: sizes[2],
          paddingRight: sizes[1]
        }}>
        <Navigation items={navigationItems} />
      </Box>
      <Disclosure animation={animation} onExitComplete={() => load(name)}>
        {content && <PageContent content={content} />}
      </Disclosure>
    </Stack>
  )
}

export default Page

const PageContent: FC<{ content: string }> = React.memo(({ content }) => {
  const contentRef = useRef()
  const { set, clear } = scrollProgressEmitter

  useEffect(() => {
    set(contentRef.current)
    return () => {
      clear()
    }
  }, [contentRef.current])

  return (
    <>
      <Box innerRef={contentRef}>
        <ScrollProgressContainer>
          <Markdown>{content}</Markdown>
        </ScrollProgressContainer>
      </Box>
    </>
  )
})
