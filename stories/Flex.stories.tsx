import React from "react"
import { Flex } from "../src/"
import { useTheme } from "../src/theme/useTheme"

export default {
  component: Flex,
  title: "Flex"
}

export const flex = () => {
  const {
    theme: { sizes, colors }
  } = useTheme()
  return (
    <Flex
      style={{
        padding: sizes[3],
        background: colors.secondary
      }}>
      Flex
    </Flex>
  )
}
