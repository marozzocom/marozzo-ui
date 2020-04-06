import React, { forwardRef, ComponentProps } from "react"
import { Box, useTheme } from "../.."
import { ensureArray } from "../../_common/helpers"
import { useVariants } from "../../_common/use-variants"

interface Props extends ComponentProps<typeof Box> {
  checked: boolean
}

export const Switch = forwardRef<Props, any>(({ style, checked, ...rest }, ref) => {
  const { theme } = useTheme()
  const { colors, radii, sizes } = theme

  const { field } = useVariants(theme)

  return (
    <Box
      ref={ref}
      as="button"
      type="button"
      role="switch"
      aria-checked={checked}
      style={[
        {
          ...field,
          margin: 0,
          padding: 0,
          width: sizes[4] + sizes[2],
          height: sizes[3] + sizes[2],
          borderRadius: radii.round,
          display: "flex",
          flex: "0 0 auto",
          justifyContent: "center",
          alignItems: "center",
          "&[aria-checked=true]": {
            background: colors.primary,
          },
        },
        ...ensureArray(style),
      ]}
      {...rest}>
      <Box
        aria-hidden
        style={{
          transform: checked ? `translateX(${sizes[2] - sizes[0]}px)` : `translateX(-${sizes[2] - sizes[0]}px)`,
          width: sizes[3],
          height: sizes[3],
          borderRadius: radii.round,
          borderColor: colors.primary,
          background: colors.action,
          transitionProperty: "transform",
          transitionTimingFunction: "ease-out",
          transitionDuration: "0.1s",
        }}
      />
    </Box>
  )
})

Switch.displayName = "Switch"
