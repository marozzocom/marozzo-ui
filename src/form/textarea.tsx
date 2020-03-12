import React, { forwardRef, ComponentProps } from "react"
import { Box, useTheme } from ".."
import { ensureArray } from "../_common/helpers"
import { useVariants } from "../_common/use-variants"
import { useTypography } from "../_common/use-typography"

interface Props extends ComponentProps<typeof Box> {}

export const Textarea = forwardRef<Props, any>(({ style, ...rest }, ref) => {
  const { field } = useVariants()
  const { form } = useTypography()
  const {
    theme: { sizes }
  } = useTheme()

  return (
    <Box
      ref={ref}
      as="textarea"
      style={[
        {
          ...field,
          ...form,
          display: "block",
          width: "100%",
          paddingTop: sizes[1],
          paddingRight: sizes[2],
          paddingBottom: sizes[1],
          paddingLeft: sizes[2]
        },
        ...ensureArray(style)
      ]}
      {...rest}
    />
  )
})

Textarea.displayName = "Textarea"
