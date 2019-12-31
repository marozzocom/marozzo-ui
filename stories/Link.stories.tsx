import React from "react"
import { Text } from "../src/text/Text"
import { Link } from "../src/link/Link"
import { action } from "@storybook/addon-actions"

export default {
  component: Link,
  title: "Link"
}

export const link = () => (
  <Text>
    <Link to="http://google.com" newTab>
      Google
    </Link>
  </Text>
)

export const linkWithAction = () => (
  <Text>
    <Link onClick={action("clicked")}>I am not accessible. Please use a NavLink or cast me as a button.</Link>
  </Text>
)
