import React from "react"
import { TocProvider, Toc } from "../src/toc"
import { Flex, Box, Markdown } from "../src"
import { markdown } from "./mock/mock"

export default {
  component: Toc,
  title: "Toc"
}

export const tocFromContent = () => (
  <TocProvider>
    <Flex>
      <Box flexShrink={0} mx={2} width={5} position="sticky" top="0px" alignSelf="flex-start">
        <Toc />
      </Box>
      <Box>
        <Markdown>{markdown}</Markdown>
      </Box>
    </Flex>
  </TocProvider>
)
