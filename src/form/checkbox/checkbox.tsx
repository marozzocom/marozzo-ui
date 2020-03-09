import React, { forwardRef } from "react"
import { Box } from "../.."

export const Checkbox = forwardRef(({ className, sx, variant = "checkbox", ...props }, ref) => (
  <Box>
    <Box
      ref={ref}
      as="input"
      type="checkbox"
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
      as={CheckboxIcon}
      aria-hidden="true"
      tx="forms"
      variant={variant}
      className={className}
      sx={sx}
      {...getSystemProps(props)}
      style={{
        marginRight: 2,
        borderRadius: 4,
        color: "gray",
        "input:checked ~ &": {
          color: "primary"
        },
        "input:focus ~ &": {
          color: "primary",
          bg: "highlight"
        }
      }}
    />
  </Box>
))

Checkbox.displayName = "CheckBox"
