import React, { FC, ComponentProps } from "react"
import { Box } from "../box/Box"
import { useTheme } from "../theme"

interface Props extends ComponentProps<typeof Box> {
  // TODO: Oneline with ellipsis?
  // Custom multiline truncation?
}

export const Text: FC<Props> = ({ children, ...props }) => {
  const {
    theme: { fonts, fontWeights, fontSizes }
  } = useTheme()
  return (
    <Box
      as="p"
      style={{
        fontFamily: fonts.body,
        fontWeight: fontWeights.normal,
        fontSize: fontSizes.m
      }}
      {...props}>
      {children}
    </Box>
  )
}
