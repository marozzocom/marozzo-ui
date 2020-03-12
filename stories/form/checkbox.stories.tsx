import React from "react"
import { Checkbox, Label } from "../../src/form"
import { useTheme, Box } from "../../src"

export default {
  title: "Form/Checkbox"
}

export const Basic = () => {
  const {
    theme: { sizes }
  } = useTheme()
  return (
    <Box
      style={{
        width: sizes[8],
        padding: sizes[2]
      }}>
      <Label>
        <Checkbox />
        Click me
      </Label>
    </Box>
  )
}
