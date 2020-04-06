import React, { forwardRef, ComponentProps } from "react"
import { Stack, Box } from "../.."
import { ensureArray } from "../../_common/helpers"
import { useTypography } from "../../_common/use-typography"
import { Vertical, Horizontal } from "../../fixture/Fixture"
import { useTheme } from "../../theme"

interface Props extends ComponentProps<typeof Box> {}

export const Label = forwardRef<Props, any>(({ style, children, ...rest }, ref) => {
  const { theme } = useTheme() as ReturnType<typeof useTheme>
  const { colors } = theme

  const { form } = useTypography(theme)

  return (
    <Stack
      verticalAlign={Vertical.Center}
      horizontalAlign={Horizontal.Start}
      horizontal
      ref={ref}
      as="label"
      style={[
        {
          ...form,
          color: colors.text,
          width: "100%",
          whiteSpace: "nowrap",
        },
        ...ensureArray(style),
      ]}
      {...rest}>
      {children}
    </Stack>
  )
})

Label.displayName = "Label"
