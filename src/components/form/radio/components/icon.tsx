import React, { ComponentProps } from "react"
import { Checked } from "./checked"
import { Unchecked } from "./unchecked"
import { Icon, Box } from "../../../.."
import { ensureArray } from "../../../../_common/helpers"

interface Props extends ComponentProps<typeof Box> {}

export const RadioIcon = ({ style, ...rest }: Props) => {
  // const {
  //   theme: { colors }
  // } = useTheme()

  return (
    <>
      <Icon
        style={[
          {
            display: "none",
            "input:checked ~ &": {
              display: "block",
            },
          },
          ensureArray(style),
        ]}>
        <Checked />
      </Icon>
      <Icon
        style={[
          {
            display: "block",
            "input:checked ~ &": {
              display: "none",
            },
          },
          ensureArray(style),
        ]}>
        <Unchecked />
      </Icon>
    </>
  )
}
