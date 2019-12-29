import { Box } from "../box/Box"
import { FC, ComponentProps } from "react"
import React from "react"
import { useTheme } from "../theme/useTheme"

interface Props extends ComponentProps<typeof Box> {
  primary?: boolean
  small?: boolean
}

export const Button: FC<Props> = ({ primary, small, style, children, ...props }) => {
  const {
    theme: {
      sizes,
      pseudo,
      variants: { buttons, textStyles }
    }
  } = useTheme()

  return (
    <Box
      variant={{
        ...(primary ? buttons.primary : buttons.default),
        ...(small ? textStyles.actionSmall : textStyles.actionNormal)
      }}
      style={{
        border: "none",
        overflow: "hidden",
        transition: "box-shadow 0.2s",
        padding: `${small ? sizes[0] : sizes[1]} ${small ? sizes[2] : sizes[3]}`,
        ...pseudo.button,
        ...style
      }}
      as="button"
      {...props}>
      {children}
    </Box>
  )
}
