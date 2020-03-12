import React from "react"
import { Radio, Label } from "../../src/form"
import { useTheme, Box } from "../../src"

export default {
  title: "Form/Radio"
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
        <Radio name="color" id="red" value="red" />
        Red
      </Label>
      <Label>
        <Radio name="color" id="green" value="green" />
        Green
      </Label>
      <Label>
        <Radio name="color" id="blue" value="blue" />
        Blue
      </Label>
    </Box>
  )
}
