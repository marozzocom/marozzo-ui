import React, { FC, ComponentProps } from "react"
import { Box } from "../box/Box"

interface Props extends ComponentProps<typeof Box> {
  src: string
  alt?: string
}

export const Image: FC<Props> = ({ children, src, alt, ...props }) => {
  return <Box as="img" src={src} alt={alt} {...props} />
}
