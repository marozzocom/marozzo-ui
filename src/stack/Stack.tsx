import React, { FC, ComponentProps, useCallback } from "react"
import { Box } from "../box/Box"
import { binaryFromBooleans, ensureArray } from "../_common/helpers"
import { useTheme } from "../theme"
import { CSSObject } from "@emotion/core"

type Alignment = "start" | "end" | "center" | "space-between" | "space-around" | "space-evenly" | "baseline" | "stretch"

interface Props extends ComponentProps<typeof Box> {
  horizontal?: boolean
  reverse?: boolean
  horizontalAlign?: Alignment
  verticalAlign?: Alignment
  gap?: string | number | string[] | "none"
  itemStyle?: CSSObject
}

const flexDirection: { [index: number]: "column" | "column-reverse" | "row" | "row-reverse" } = {
  "0": "column",
  "1": "column-reverse",
  "2": "row",
  "3": "row-reverse"
}

export const Stack: FC<Props> = ({ gap, itemStyle, horizontal = false, reverse = false, horizontalAlign, verticalAlign, children, style, ...props }) => {
  const {
    theme: { sizes }
  } = useTheme()

  const getGapValue = useCallback(gap => (gap ? (typeof gap === "number" ? (sizes as any)[gap] : gap) : 0), [sizes])

  const gapStyle: CSSObject = gap !== "none" && {
    "> *:not(:last-child)": {
      marginRight: horizontal && getGapValue(gap),
      marginBottom: !horizontal && getGapValue(gap)
    }
  }

  return (
    <Box
      style={[
        {
          flexDirection: flexDirection[binaryFromBooleans(horizontal, reverse)],
          alignItems: horizontal ? verticalAlign : horizontalAlign,
          justifyContent: horizontal ? horizontalAlign : verticalAlign,
          display: "flex"
        },
        gapStyle,
        itemStyle && {
          "> *": itemStyle
        },
        ...ensureArray(style)
      ]}
      {...props}>
      {children}
    </Box>
  )
}
