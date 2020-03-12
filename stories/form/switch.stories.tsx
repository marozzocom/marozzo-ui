import React, { useState } from "react"
import { Switch, Label } from "../../src/form"
import { useTheme, Stack } from "../../src"

export default {
  title: "Form/Switch"
}

export const Basic = () => {
  const [checked, setChecked] = useState(false)
  const {
    theme: { sizes }
  } = useTheme()
  return (
    <Stack
      gap={2}
      horizontal
      style={{
        padding: sizes[2],
        display: "inline-flex"
      }}>
      <Label htmlFor="toggle">Location</Label>
      <Switch id="toggle" checked={checked} onClick={() => setChecked(!checked)} />
    </Stack>
  )
}
