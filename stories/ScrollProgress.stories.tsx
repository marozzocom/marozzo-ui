import React, { useRef, FC } from "react"
import { markdown } from "./mock/mock"
import { ScrollProgress } from "../src/scrollProgress"
import { Markdown, Box, ScrollProgressContainer } from "../src"

export default {
  component: ScrollProgress,
  title: "ScrollProgress"
}

export const withLargeHeight = () => {
  return (
    <>
      <ScrollProgress />
      <ScrollProgressContainer
        style={{
          margin: "500px auto",
          border: "2px solid #f00"
        }}>
        <Markdown>{markdown}</Markdown>
      </ScrollProgressContainer>
    </>
  )
}

// export const withMediumHeight = () => (
//   <>
//     <ScrollProgress />
//     <ScrollableContent>
//       <Heading>Lorem</Heading>
//       <Text>Lorem ipsum dolor sit amet.</Text>
//       <Heading>Ipsum</Heading>
//       <Text>Lorem ipsum dolor sit amet.</Text>
//       <Heading>Dolor</Heading>
//       <Text>Lorem ipsum dolor sit amet.</Text>
//       <Heading>Sit</Heading>
//       <Text>Lorem ipsum dolor sit amet.</Text>
//       <Heading>Amet</Heading>
//       <Text>Lorem ipsum dolor sit amet.</Text>
//     </ScrollableContent>
//   </>
// )

// export const withSmallHeight = () => (
//   <>
//     <ScrollProgress />
//     <ScrollableContent>
//       <Text>Lorem ipsum.</Text>
//     </ScrollableContent>
//   </>
// )

const ScrollableContent: FC<{}> = ({ children }) => {
  const content = useRef<HTMLElement>()

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
