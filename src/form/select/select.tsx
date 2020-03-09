import React, { forwardRef } from "react"
import { Stack, Box } from "../.."
import { DownArrow } from "./components/down-arrow"

export const Select = forwardRef((props, ref) => (
  <Stack>
    <Box
      ref={ref}
      as="select"
      tx="forms"
      variant="select"
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
    <DownArrow />
  </Stack>
))

Select.displayName = "Select"
