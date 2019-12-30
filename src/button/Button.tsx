import { Box } from "../box/Box"
import React, { FC, ComponentProps } from "react"
import { useTheme } from "../theme/useTheme"
import { CSSObject } from "@emotion/core"

interface Props extends ComponentProps<typeof Box> {
  primary?: boolean
  small?: boolean
}

export const Button: FC<Props> = ({ primary, small, style, children, ...props }) => {
  const { theme } = useTheme()
  const {
    sizes,
    shadows,
    variants: { buttons, textStyles }
  } = theme

  return (
    <Box
      variant={{
        ...(primary ? buttons.primary : buttons.default),
        ...(small ? textStyles.actionSmall : textStyles.actionNormal)
      }}
      style={[
        {
          border: "none",
          overflow: "hidden",
          padding: `${small ? sizes[0] : sizes[1]} ${small ? sizes[2] : sizes[3]}`,
          "&::after": {
            content: '""',
            display: "block",
            background: "rgba(0, 0, 0, 0.1)",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            position: "absolute",
            opacity: 0,
            transitionDuration: "300ms"
          },
          "&:hover": {
            "&::after": {
              opacity: 1
            }
          },
          "&:focus": {
            outline: "none",
            boxShadow: shadows.active
          }
        },
        style as CSSObject
      ]}
      as="button"
      {...props}>
      {children}
    </Box>
  )
}
