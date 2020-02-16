import React, { FC } from "react"
import { Text } from "../text/Text"
import { Heading } from "../heading/Heading"
import MarkdownToJSX, { MarkdownOptions } from "markdown-to-jsx"
import { Code } from "../code/Code"
import { ListItem, List } from "../list"
import { Image } from "../image/Image"
import { TocHeading } from "../heading/TocHeading"

// TODO: Make sure you actually want to keep TOCHeading as default H1

const defaultOptions = {
  overrides: {
    h1: {
      component: TocHeading
    },
    h2: {
      component: Heading,
      props: {
        level: 2
      }
    },
    h3: {
      component: Heading,
      props: {
        level: 3
      }
    },
    h4: {
      component: Heading,
      props: {
        level: 4
      }
    },
    h5: {
      component: Heading,
      props: {
        level: 5
      }
    },
    h6: {
      component: Heading,
      props: {
        level: 6
      }
    },
    p: {
      component: Text
    },
    ul: {
      component: List
    },
    ol: {
      component: List,
      props: {
        ordered: true
      }
    },
    li: {
      component: ListItem
    },
    img: {
      component: Image
    },
    code: {
      component: Code
    }
  }
}

interface Props {
  options?: MarkdownOptions
}

export const Markdown: FC<Props> = ({ options = defaultOptions, children }) => <MarkdownToJSX options={options}>{children}</MarkdownToJSX>
