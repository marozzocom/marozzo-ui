import React, { useRef, useEffect, FC } from "react"
import { markdown } from "./mock/mock"
import { ScrollProgress, ScrollProgressProvider, useScrollProgress } from "../src/scrollProgress"
import { Markdown, Box, Text, Heading, Fixture, Position } from "../src"

export default {
  component: ScrollProgress,
  title: "ScrollProgress"
}

export const withLargeHeight = () => (
  <ScrollProgressProvider>
    <ScrollProgress />
    <ScrollableContent>
      <Markdown>{markdown}</Markdown>
    </ScrollableContent>
  </ScrollProgressProvider>
)

export const withMediumHeight = () => (
  <ScrollProgressProvider>
    <ScrollProgress />
    <ScrollableContent>
      <Heading>Lorem</Heading>
      <Text>Lorem ipsum dolor sit amet.</Text>
      <Heading>Ipsum</Heading>
      <Text>Lorem ipsum dolor sit amet.</Text>
      <Heading>Dolor</Heading>
      <Text>Lorem ipsum dolor sit amet.</Text>
      <Heading>Sit</Heading>
      <Text>Lorem ipsum dolor sit amet.</Text>
      <Heading>Amet</Heading>
      <Text>Lorem ipsum dolor sit amet.</Text>
    </ScrollableContent>
  </ScrollProgressProvider>
)

export const withSmallHeight = () => (
  <ScrollProgressProvider>
    <ScrollProgress />
    <ScrollableContent>
      <Text>Lorem ipsum.</Text>
    </ScrollableContent>
  </ScrollProgressProvider>
)

const ScrollableContent: FC<{}> = ({ children }) => {
  const content = useRef()
  const { attach } = useScrollProgress()

  useEffect(() => {
    attach(content.current)
  }, [content.current])

  return (
    <Box
      style={{
        padding: "500px initial"
      }}>
      <Box innerRef={content} style={{ border: "2px solid tomato" }}>
        {children}
      </Box>
    </Box>
  )
}
