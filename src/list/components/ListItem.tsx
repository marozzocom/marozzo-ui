import React, { FC, ComponentProps } from "react"
import { Box } from "../../box/Box"

interface Props extends ComponentProps<typeof Box> {}

export const ListItem: FC<Props> = ({ children, ...props }) => {
  return (
    <Box as="li" {...props}>
      {children}
    </Box>
  )
}
