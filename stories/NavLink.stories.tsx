import React from "react"
import { Text } from "../src/text/Text"
import { NavLink } from "../src/navLink/NavLink"

export default {
  component: NavLink,
  title: "NavLink"
}

export const link = () => (
  <NavLink to="http://google.com" newTab>
    <Text>Google</Text>
  </NavLink>
)
