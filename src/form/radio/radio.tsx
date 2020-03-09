import React, { forwardRef } from "react"
import { Box } from "../.."

export const Radio = forwardRef(({ ...props }, ref) => (
  <Box>
    <Box
      ref={ref}
      as="input"
      type="radio"
      {...props}
      sx={{
        position: "absolute",
        opacity: 0,
        zIndex: -1,
        width: 1,
        height: 1,
        overflow: "hidden"
      }}
    />
    <Box
      as={RadioIcon}
      aria-hidden="true"
      tx="forms"
      style={{
        marginRight: 2,
        borderRadius: 9999,
        color: "gray",
        "input:checked ~ &": {
          color: "primary"
        },
        "input:focus ~ &": {
          bg: "highlight"
        }
      }}
    />
  </Box>
))

Radio.displayName = "Radio"
