import React, { forwardRef } from "react"
import { Stack } from ".."

export const Label = forwardRef((props, ref) => (
  <Stack
    ref={ref}
    as="label"
    tx="forms"
    variant="label"
    {...props}
    style={{
      width: "100%"
    }}
  />
))

Label.displayName = "Label"
