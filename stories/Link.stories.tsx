import React from "react"
import { Text } from "../src/text/Text"
import { Link } from "../src/link/Link"

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
