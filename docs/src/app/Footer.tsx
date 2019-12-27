import React from "react"
import { useTheme, Box, Heading, Text } from "@marozzocom/marozzo-ui"

export const Footer = () => {
  const {
    theme: { sizes, colors }
  } = useTheme()

  return (
    <Box
      style={{
        background: colors.secondary,
        minHeight: sizes[8]
      }}>
      <Heading>Footer</Heading>
      <Text>Some text</Text>
    </Box>
  )
}
