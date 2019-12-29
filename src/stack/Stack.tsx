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

const getFlexDirection = (configuration: number): Object => {
  switch (configuration) {
    case 0:
      return { flexDirection: "column" }
    case 1:
      return { flexDirection: "column-reverse" }
    case 2:
      return { flexDirection: "row" }
    case 3:
      return { flexDirection: "row-reverse" }
  }
}

export const Stack: FC<Props> = ({ horizontal = false, reverse = false, horizontalAlign, verticalAlign, children, style, ...props }) => (
  <Box
    style={{
      ...style,
      ...getFlexDirection(binaryFromBooleans(horizontal, reverse)),
      alignItems: horizontal ? verticalAlign : horizontalAlign,
      justifyContent: horizontal ? horizontalAlign : verticalAlign,
      display: "flex"
    }}
    {...props}>
    {children}
  </Box>
)
