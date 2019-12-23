import React, { FC } from "react"
import { Text } from ".."
import { Heading } from "../heading/Heading"
import MarkdownToJSX from "markdown-to-jsx"
import { ContentSection } from "../contentSection/ContentSection"

const overrides = {
  h1: {
    component: Heading,
    props: {
      level: 1
    }
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
  Section: {
    component: ContentSection
  }
}

// TODO: Complete Node types: https://github.com/rexxars/react-markdown
export const Markdown: FC<{}> = ({ children }) => <MarkdownToJSX options={{ overrides }}>{children}</MarkdownToJSX>
