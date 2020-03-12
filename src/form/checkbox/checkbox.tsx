import React, { forwardRef, ComponentProps } from "react"
import { Box, useTheme } from "../.."
import { CheckboxIcon } from "./components/checkbox-icon"

interface Props extends ComponentProps<typeof Box> {}

export const Checkbox = forwardRef<Props, any>(({ style, ...rest }, ref) => {
  const {
    theme: { colors, sizes }
  } = useTheme()

  return (
    <>
      <Box
        ref={ref}
        as="input"
        type="checkbox"
        style={{
          position: "absolute",
          opacity: 0,
          zIndex: -1,
          width: 1,
          height: 1,
          overflow: "hidden"
        }}
        {...rest}
      />
      <CheckboxIcon
        aria-hidden="true"
        style={{
          marginRight: sizes[1],
          "input:checked ~ &": {
            color: colors.primary
          },
          "input:focus ~ &": {
            color: colors.primary,
            outline: "none",
            boxShadow: `0px 0px 2px 3px ${colors.active}`
          }
        }}
      />
    </>
  )
})

Checkbox.displayName = "Checkbox"
