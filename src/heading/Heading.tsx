import React, { FC, ElementType } from "react"
import { Text } from "../text/Text"

export type Level = 1 | 2 | 3 | 4 | 5 | 6

interface Props {
  level?: Level
}

export const Heading: FC<Props> = ({ level = 2, children }) => (
  <Text as={`h${level}` as ElementType} role="heading" aria-level={level} variants={["textStyles.heading"]}>
    {children}
  </Text>
)
