import React, { FC, ComponentProps } from "react"
import { Box } from "../box/Box"
import { binaryFromBooleans } from "../_common/helpers"

type Alignment = "start" | "end" | "center" | "space-between" | "space-around" | "space-evenly" | "baseline" | "stretch"

interface Props extends ComponentProps<typeof Box> {
  horizontal?: boolean
  reverse?: boolean
  horizontalAlign?: Alignment
  verticalAlign?: Alignment
}

const flexDirection: { [key: number]: string } = {
  "0": "column",
  "1": "column-reverse",
  "2": "row",
  "3": "row-reverse"
}

export const Stack: FC<Props> = ({ horizontal = false, reverse = false, horizontalAlign, verticalAlign, children, style, ...props }) => (
  <Box
    style={{
      ...style,
      flexDirection: flexDirection[binaryFromBooleans(horizontal, reverse)],
      alignItems: horizontal ? verticalAlign : horizontalAlign,
      justifyContent: horizontal ? horizontalAlign : verticalAlign,
      display: "flex"
    }}
    {...props}>
    {children}
  </Box>
)
