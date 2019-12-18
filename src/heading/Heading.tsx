import React, { FC } from "react"
import { Text } from "../text/Text"

enum Level {
    H1 = "h1",
    H2 = "h2",
    H3 = "h3",
    H4 = "h4",
    H5 = "h5",
    H6 = "h6"
}

interface Props {
    level?: Level
}

export const Heading: FC<Props> = ({level=Level.H2, children}) => <Text as={level}>{children}</Text>