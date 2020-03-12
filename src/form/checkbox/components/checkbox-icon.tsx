import React, { ComponentProps } from "react"
import { Checked } from "./checked"
import { Unchecked } from "./unchecked"
import { Box, Icon } from "../../.."
import { Checkmark } from "./checkmark"
import { useTheme } from "../../../theme"
import { ensureArray } from "../../../_common/helpers"

interface Props extends ComponentProps<typeof Box> {}

export const CheckboxIcon = ({ style, ...rest }: Props) => {
  const {
    theme: { colors }
  } = useTheme()

  return (
    <>
      <Box
        style={[
          {
            display: "none",
            "input:checked ~ &": {
              display: "inline-block"
            }
          },
          ensureArray(style)
        ]}>
        <Icon>
          <Checked />
        </Icon>
        <Icon
          style={{
            color: colors.text,
            position: "absolute",
            top: 0,
            left: 0
          }}>
          <Checkmark />
        </Icon>
      </Box>
      <Icon
        style={[
          {
            display: "inline-block",
            "input:checked ~ &": {
              display: "none"
            }
          },
          ensureArray(style)
        ]}>
        <Unchecked />
      </Icon>
    </>
  )
}
