import React, { FC, ComponentProps } from "react"
import { Box } from "../box/Box"
import { useTheme } from "../theme/useTheme"

interface Props extends ComponentProps<typeof Box> {
  // TODO: Oneline with ellipsis?
  // Custom multiline truncation?
}

export const Text: FC<Props> = ({ children, ...props }) => {
  const {
    theme: {
      variants: { textStyles }
    }
  } = useTheme()

  return (
    <Box
      as="p"
      style={{
        ...textStyles.body
      }}
      {...props}>
      {children}
    </Box>
  )
}
