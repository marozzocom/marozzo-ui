import React, { forwardRef } from "react"
import { Box } from ".."

export const Input = forwardRef((props, ref) => (
  <Box
    ref={ref}
    as="input"
    type="text"
    tx="forms"
    variant="input"
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

Input.displayName = "Input"
