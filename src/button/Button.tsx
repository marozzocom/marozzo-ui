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
      variants: { buttons, textStyles }
    }
  } = useTheme()

  return (
    <Box
      style={{
        border: "none",
        padding: `${small ? sizes[0] : sizes[1]} ${small ? sizes[2] : sizes[3]}`,
        ...(primary ? buttons.primary : buttons.default),
        ...(small ? textStyles.actionSmall : textStyles.actionNormal),
        ...style
      }}
      as="button"
      {...props}>
      {children}
    </Box>
  )
}
