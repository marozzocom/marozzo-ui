import React, { FC, ComponentProps } from "react"
import { Box } from "../box/Box"

interface Props extends ComponentProps<typeof Box> {
  ordered?: boolean
}

export const List: FC<Props> = ({ ordered, children, ...props }) => {
  return (
    <Box as={ordered ? "ol" : "ul"} {...props}>
      {children}
    </Box>
  )
}
