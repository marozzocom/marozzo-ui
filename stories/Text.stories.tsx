import React from "react"
import { Text } from "../src/text/Text"
import { useTheme } from "../src"

export default {
  component: Text,
  title: "Text"
}

export const text = () => <Text>Text</Text>

export const textWithResponsiveVariant = () => {
  const {
    theme: {
      variants: { textStyles }
    }
  } = useTheme()

  return <Text variant={{ color: ["#f00", "#cf0"] }}>Text</Text>
}
