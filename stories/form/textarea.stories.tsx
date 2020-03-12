import React from "react"
import { Textarea, Label } from "../../src/form"
import { useTheme, Box } from "../../src"

export default {
  title: "Form/Textarea"
}

export const Basic = () => {
  const {
    theme: { sizes }
  } = useTheme()
  return (
    <Box
      style={{
        width: sizes[8],
        padding: sizes[2],
        margin: sizes[2]
      }}>
      <Label htmlFor="text">Text</Label>
      <Textarea id="text" />
    </Box>
  )
}
