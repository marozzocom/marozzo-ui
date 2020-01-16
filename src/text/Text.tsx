import React, { FC, ComponentProps } from "react"
import { Box } from "../box/Box"
import { useVariants } from "../variants"

interface Props extends ComponentProps<typeof Box> {
  // TODO: Oneline with ellipsis?
  // Custom multiline truncation?
}

export const Text: FC<Props> = ({ children, ...props }) => {
  const { textStyles } = useVariants()

  return (
    <Box as="p" variant={textStyles.body} {...props}>
      {children}
    </Box>
  )
}
