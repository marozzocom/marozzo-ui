import React, { forwardRef, ComponentProps } from "react"
import { Box, useTheme } from "../../.."
import { RadioIcon } from "./components/icon"

interface Props extends ComponentProps<typeof Box> {}

export const Radio = forwardRef<Props, any>(({ style, ...rest }, ref) => {
  const {
    theme: { colors, sizes, radii },
  } = useTheme()

  return (
    <>
      <Box
        ref={ref}
        as="input"
        type="radio"
        style={{
          position: "absolute",
          opacity: 0,
          zIndex: -1,
          width: 1,
          height: 1,
          overflow: "hidden",
        }}
        {...rest}
      />
      <RadioIcon
        aria-hidden="true"
        style={{
          marginRight: sizes[1],
          borderRadius: radii.round,
          color: colors.primary,
          "input:checked ~ &": {
            color: colors.primary,
          },
          "input:focus ~ &": {
            color: colors.primary,
            outline: "none",
            boxShadow: `0px 0px 2px 3px ${colors.active}`,
          },
        }}
      />
    </>
  )
})

Radio.displayName = "Radio"
