import React, { FC, ElementType, ComponentProps } from "react"
import { Text } from "../text/Text"
import { useTheme } from "../theme/useTheme"
import { Box } from "../box/Box"
import { ensureArray } from "../_common/helpers"

export type Level = 1 | 2 | 3 | 4 | 5 | 6

interface Props extends ComponentProps<typeof Box> {
  level?: Level
}

export const Heading: FC<Props> = ({ level = 2, children, style, ...props }) => {
  const {
    theme: { fonts }
  } = useTheme()

  return (
    <Text
      as={`h${level}` as ElementType}
      role="heading"
      aria-level={level}
      style={[
        {
          fontFamily: fonts.heading,
          margin: 0
        },
        ...ensureArray(style)
      ]}
      {...props}>
      {children}
    </Text>
  )
}
