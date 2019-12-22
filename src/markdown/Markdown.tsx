import React, { FC, PropsWithChildren } from "react"
import ReactMarkdown from "react-markdown"
import { Box, Text } from ".."
import { Heading, Level } from "../heading/Heading"

interface Props {
  content: string
}

// TODO: Complete Node types: https://github.com/rexxars/react-markdown
export const Markdown: FC<Props> = ({ content }) => (
  <ReactMarkdown
    source={content}
    renderers={{
      root: (props: PropsWithChildren<{}>) => <Box>{props.children}</Box>,
      heading: (props: PropsWithChildren<{ level: number }>) => <Heading level={props.level as Level}>{props.children}</Heading>,
      text: (props: PropsWithChildren<{}>) => <Text>{props.children}</Text>,
      paragraph: (props: PropsWithChildren<{}>) => <Box mb={3}>{props.children}</Box>
    }}
  />
)
