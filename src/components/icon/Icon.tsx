import React, { FC, ComponentProps } from "react"
import { Box } from "../../box/Box"
import { useTheme } from "../.."
import { ensureArray } from "../../_common/helpers"
import { Theme } from "../theme"

interface Props extends ComponentProps<typeof Box> {}

export const Icon: FC<Props> = ({ style, children, ...props }) => {
  const {
    theme: { fontSizes, colors },
  } = useTheme<{ theme: Theme }>()
  const color = style?.color ? style.color : colors.primary
  const size = style?.fontSize ? style.fontSize : fontSizes.l
  return (
    <Box
      style={[
        {
          height: size,
          width: size,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
        ...ensureArray(style),
      ]}
      {...props}>
      <svg fill={color} width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        {children}
      </svg>
    </Box>
  )
}
