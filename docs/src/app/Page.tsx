import React, { useEffect, useState, useRef, FC, useCallback, useMemo } from "react"
import { Navigation } from "../navigation/Navigation"
import { navigation } from "../_common/navigation"
import { useParams } from "react-router-dom"
import {
  Markdown,
  Stack,
  Box,
  Button,
  useTheme,
  ScrollProgressContainer,
  scrollProgressEmitter,
  scrollIntoView,
  getSectionFromHash,
  Transition,
  useToc,
  NavigationItems
  // useProgress
  // useMediaQuery
} from "@marozzocom/marozzo-ui"
import { scrollTop, getRef } from "../_common/helpers"
import { MotionProps } from "framer-motion"

const menuMotionProps: MotionProps = {
  initial: { opacity: 0, x: "-100%", overflow: "hidden" },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: "-100%", overflow: "hidden" },
  transition: {
    type: "tween",
    duration: 0.2
  }
}

const Page: FC<{}> = () => {
  const {
    theme: { sizes }
  } = useTheme()

  // const activeBreakpoints = useMediaQuery()

  const [menuOpen, setMenuOpen] = useState(false)
  const [showContent, setShowContent] = useState(true)

  // const { start, stop } = useProgress() // TODO: Fix this

  const { name } = useParams()
  const [content, setContent] = useState<string>()
  const [nextContent, setNextContent] = useState<string>()
  const [navigationItems, setNavigationItems] = useState<NavigationItems>({})
  const { toc, clearToc } = useToc()

  const getNavigationWithTOC = useCallback(() => ({ ...navigation, [name]: { ...navigation[name], selected: true, subItems: toc } }), [name, toc])

  const updateNavigationItems = useCallback(() => setNavigationItems(getNavigationWithTOC()), [getNavigationWithTOC])

  const remove = useCallback(() => {
    clearToc()
    setShowContent(false)
  }, [clearToc])

  useEffect(() => {
    updateNavigationItems()
  }, [toc, updateNavigationItems])

  // useEffect(() => {
  //   (async () => {
  //     const load = async (name: string) => {
  //       start("pageLoad")
  //       // const page = await import(`../pages/${name}.md`)
  //       const ref = await getRef()
  //       const response = await fetch(`https://marozzoui.cdn.prismic.io/api/v2/documents/search?ref=${ref}&q=[[at(my.page.title,%22${name}%22)]]`)
  //       const json = await response.json()
  //       stop("pageLoad")
  //       scrollTop()
  //       setNextContent(json.results[0].data.content)
  //       scrollIntoView(getSectionFromHash())(-sizes["topBar"])
  //     }

  //     remove()
  //     load(name)
  //   })()
  // }, [name, remove, sizes, start, stop])

  useEffect(() => {
    remove()
    ;(async () => {
      // start("pageLoad")
      // const page = await import(`../pages/${name}.md`)
      const ref = await getRef()
      const response = await fetch(`https://marozzoui.cdn.prismic.io/api/v2/documents/search?ref=${ref}&q=[[at(my.page.title,%22${name}%22)]]`)
      if (response.status !== 200) {
        return // TODO: handle correctly
      }
      const json = await response.json()
      // stop("pageLoad")
      scrollTop()
      setNextContent(json.results[0].data.content)
      scrollIntoView(getSectionFromHash())(-(sizes as any).topBar)
    })()
  }, [name, remove, sizes])

  useEffect(() => {
    const animationDelayTimer = setTimeout(() => {
      setContent(nextContent)
      setShowContent(true)
      updateNavigationItems()
    }, (menuMotionProps as any).transition.duration * 1000)
    return () => clearTimeout(animationDelayTimer)
  }, [nextContent, updateNavigationItems])

  const contentMotionProps = useMemo(
    () => ({
      initial: { opacity: 0, y: -sizes[1], overflow: "hidden" },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: 0, overflow: "hidden" },
      transition: {
        type: "tween",
        duration: 0.2
      }
    }),
    [sizes]
  )

  // const closeDrawer = useCallback(() => setMenuOpen(false), [])

  return (
    <Stack
      horizontal
      style={{
        minHeight: `calc(100vh - ${sizes.topBar}px)`
      }}>
      <Box
        style={{
          flexShrink: 0,
          margin: `initial ${sizes[2]}`,
          width: sizes[6],
          transform: menuOpen ? "none" : [`translateX(-${sizes[6]}px)`, `translateX(-${sizes[6]}px)`, `translateX(-${sizes[6]}px)`, "none"],
          position: ["fixed", "fixed", "fixed", "sticky"],
          top: sizes[4],
          bottom: 0,
          alignSelf: "flex-start",
          maxHeight: `calc(100vh - ${sizes.topBar}px)`,
          overflowY: "auto",
          paddingTop: sizes[1],
          paddingLeft: sizes[2],
          paddingRight: sizes[1],
          zIndex: 1
        }}>
        <Box>
          <Navigation id="navigation" items={navigationItems} />
          {/* <Transition motionProps={menuMotionProps}>
            {(menuOpen || activeBreakpoints["m"]) && <Navigation id="navigation" items={navigationItems} />}
          </Transition> */}
        </Box>
      </Box>
      {content && <Transition motionProps={contentMotionProps}>{showContent && <PageContent id="content" content={content} />}</Transition>}
      <Button style={{ zIndex: 1000000, position: "fixed" }} onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? "close" : "open"}
      </Button>
    </Stack>
  )
}

export default Page

const PageContent: FC<{ content: string; id: string }> = React.memo(({ content, id }) => {
  const contentRef = useRef()
  const { set, clear } = scrollProgressEmitter
  const {
    theme: { sizes }
  } = useTheme()

  useEffect(() => {
    set(contentRef.current)
    return () => {
      clear()
    }
  }, [clear, set])

  return (
    <Box
      innerRef={contentRef}
      key={id}
      style={{
        marginTop: sizes[1],
        marginRight: [sizes[3], sizes[3], sizes[3], sizes[2]],
        marginBottom: sizes[1],
        marginLeft: [sizes[3], sizes[3], sizes[3], sizes[2]]
      }}>
      <ScrollProgressContainer>
        <Markdown>{content}</Markdown>
      </ScrollProgressContainer>
    </Box>
  )
})

PageContent.displayName = "Page Content"
