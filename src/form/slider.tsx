import React, { forwardRef } from "react"
import { Box } from ".."

export const Slider = forwardRef(({ ...props }, ref) => (
  <Box
    ref={ref}
    as="input"
    type="range"
    tx="forms"
    variant="slider"
    {...props}
    style={{
      display: "block",
      width: "100%",
      height: 4,
      my: 2,
      cursor: "pointer",
      appearance: "none",
      borderRadius: 9999,
      color: "inherit",
      bg: "gray",
      ":focus": {
        outline: "none",
        color: "primary"
      },
      "&::-webkit-slider-thumb": {
        appearance: "none",
        width: 16,
        height: 16,
        bg: "currentcolor",
        border: 0,
        borderRadius: 9999,
        variant: "forms.slider.thumb"
      }
    }}
  />
))

Slider.displayName = "Slider"
