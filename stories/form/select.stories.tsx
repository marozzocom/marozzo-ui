import React from "react"
import { Select, Label } from "../../src/form"
import { useTheme, Box } from "../../src"

export default {
  title: "Form/Select"
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
      <Label htmlFor="pet">Location</Label>
      <Select id="pet">
        <option>Dog</option>
        <option>Cat</option>
        <option>Spider</option>
        <option>Fox</option>
        <option>Bear</option>
      </Select>
    </Box>
  )
}
