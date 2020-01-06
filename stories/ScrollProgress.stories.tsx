import React from "react"
import { markdown } from "./mock/mock"
import { ScrollProgress } from "../src/scrollProgress"
import { Markdown, ScrollProgressContainer } from "../src"

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
