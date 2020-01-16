import React, { FC, ComponentProps } from "react"
import { Box } from "../box/Box"
import { useTheme } from "../theme"
import { ensureArray } from "../_common/helpers"
import { useVariants } from "../variants"

interface Props extends ComponentProps<typeof Box> {
  to?: string
  newTab?: boolean
  href?: string
}

export const Link: FC<Props> = ({ as = "a", to, newTab, style, children, ...props }) => {
  const {
    theme: { colors, shadows }
  } = useTheme()

  const { textStyles } = useVariants()

  return (
    <Box
      as={as}
      href={to}
      target={newTab ? "_blank" : null}
      variant={textStyles.body}
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
