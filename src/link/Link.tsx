import React, { FC, ComponentProps } from "react"
import { Box } from "../box/Box"
import { useTheme } from "../theme"
import { ensureArray } from "../_common/helpers"

interface Props extends ComponentProps<typeof Box> {
  to?: string
  newTab?: boolean
  href?: string
}

export const Link: FC<Props> = ({ as = "a", to, newTab, style, children, ...props }) => {
  const {
    theme: { colors, shadows }
  } = useTheme()

  return (
    <Box
      as={as}
      href={to}
      target={newTab ? "_blank" : null}
      style={[
        {
          cursor: "pointer",
          borderRadius: "1px",
          "&:active, &:visited": {
            color: "inherit"
          },
          "&:focus": {
            outline: "none",
            boxShadow: shadows.active
          },
          "&:hover": {
            color: colors.active
          }
        },
        ...ensureArray(style)
      ]}
      {...props}>
      {children}
    </Box>
  )
}
