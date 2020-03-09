import React, { forwardRef } from "react"
import { Box } from ".."

export const Textarea = forwardRef((props, ref) => (
  <Box
    ref={ref}
    as="textarea"
    tx="forms"
    variant="textarea"
    {...props}
    style={{
      display: "block",
      width: "100%",
      p: 2,
      appearance: "none",
      fontSize: "inherit",
      lineHeight: "inherit",
      border: "1px solid",
      borderRadius: "default",
      color: "inherit",
      bg: "transparent"
    }}
  />
))

Textarea.displayName = "TextArea"
