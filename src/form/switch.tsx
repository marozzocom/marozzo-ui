import React, { forwardRef } from "react"
import { Box } from ".."

interface Props {
  checked: boolean
}

export const Switch = forwardRef<Props, any>(({ checked, ...props }, ref) => (
  <Box
    ref={ref}
    as="button"
    type="button"
    role="switch"
    tx="forms"
    variant="switch"
    aria-checked={checked}
    {...props}
    style={{
      appearance: "none",
      m: 0,
      p: 0,
      width: 40,
      height: 24,
      color: "primary",
      bg: "transparent",
      border: "1px solid",
      borderColor: "primary",
      borderRadius: 9999,
      "&[aria-checked=true]": {
        bg: "primary"
      },
      ":focus": {
        outline: "none",
        boxShadow: "0 0 0 2px"
      }
    }}>
    <Box
      aria-hidden
      style={{
        transform: checked ? "translateX(16px)" : "translateX(0)"
      }}
      sx={{
        mt: "-1px",
        ml: "-1px",
        width: 24,
        height: 24,
        borderRadius: 9999,
        border: "1px solid",
        borderColor: "primary",
        bg: "background",
        transitionProperty: "transform",
        transitionTimingFunction: "ease-out",
        transitionDuration: "0.1s",
        variant: "forms.switch.thumb"
      }}
    />
  </Box>
))

Switch.displayName = "Switch"
