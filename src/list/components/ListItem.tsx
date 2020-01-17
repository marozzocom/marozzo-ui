import React, { FC, ComponentProps } from "react"
import { Box } from "../../box/Box"
import { useVariants } from "../../variants"

interface Props extends ComponentProps<typeof Box> {}

export const ListItem: FC<Props> = ({ children, ...props }) => {
  const { textStyles } = useVariants()
  return (
    <Box as="li" variant={textStyles?.body} {...props}>
      {children}
    </Box>
  )
}
