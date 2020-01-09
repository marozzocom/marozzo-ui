import React, { FC, ComponentProps } from "react"
import { Box } from "../../box/Box"
import { useTheme } from "../.."

interface Props extends ComponentProps<typeof Box> {}

export const ListItem: FC<Props> = ({ children, ...props }) => {
  const {
    theme: {
      variants: { textStyles }
    }
  } = useTheme()
  return (
    <Box as="li" variant={textStyles.body} {...props}>
      {children}
    </Box>
  )
}
