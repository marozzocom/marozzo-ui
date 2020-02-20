import React, { ComponentProps, forwardRef } from "react"
import { Box } from "../box/Box"
import { useTheme } from "../theme"
import { ensureArray } from "../_common/helpers"

interface Props extends ComponentProps<typeof Box> {
  // TODO: Oneline with ellipsis?
  // Custom multiline truncation?
}

export const Text = forwardRef<Props, any>(({ children, style, ...rest }, ref) => {
  const {
    theme: { fonts, fontWeights, fontSizes, colors }
  } = useTheme()
  return (
    <Box
      ref={ref}
      as="p"
      style={[
        {
          fontFamily: fonts.body,
          fontWeight: fontWeights.normal,
          fontSize: fontSizes.m,
          color: colors.text
        },
        ...ensureArray(style)
      ]}
      {...rest}>
      {children}
    </Box>
  )
})

Text.displayName = "Text"
