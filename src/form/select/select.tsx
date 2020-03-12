import React, { forwardRef, ComponentProps } from "react"
import { Stack, Box, Icon } from "../.."
import { DownArrow } from "./components/down-arrow"
import { useTheme } from "../../theme"
import { ensureArray } from "../../_common/helpers"
import { useVariants } from "../../_common/use-variants"
import { useTypography } from "../../_common/use-typography"
import { Vertical } from "../../fixture/Fixture"

interface Props extends ComponentProps<typeof Box> {}

export const Select = forwardRef<Props, any>(({ style, ...rest }, ref) => {
  const { field } = useVariants()
  const { form } = useTypography()
  const {
    theme: { sizes }
  } = useTheme()

  return (
    <Stack horizontal verticalAlign={Vertical.Center}>
      <Box
        ref={ref}
        as="select"
        style={[
          {
            ...field,
            ...form,
            display: "block",
            width: "100%",
            "&:focus-within, &:not:focus": {
              borderBottomLeftRadius: 0,
              borderBottomRightRadius: 0
            },
            "&>option": {
              ...form
            }
          },
          ...ensureArray(style)
        ]}
        {...rest}
      />
      <Icon
        style={{
          position: "absolute",
          right: sizes[3],
          pointerEvents: "none"
        }}>
        <DownArrow />
      </Icon>
    </Stack>
  )
})

Select.displayName = "Select"
