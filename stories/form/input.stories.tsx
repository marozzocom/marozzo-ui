import React from "react"
import { Input, Label } from "../../src/form"
import { useTheme, Box } from "../../src"

export default {
  title: "Form/Input"
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
      <Label htmlFor="name">Name</Label>
      <Input id="name" />
    </Box>
  )
}
