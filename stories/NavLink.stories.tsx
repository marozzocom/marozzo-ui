import React from "react"
import { NavLink } from "../src/navLink/NavLink"
import { action } from "@storybook/addon-actions"

export default {
  component: NavLink,
  title: "NavLink"
}

export const withLink = () => (
  <NavLink to="http://google.com" newTab>
    Google
  </NavLink>
)

export const withAction = () => <NavLink onClick={action("clicked")}>Click me</NavLink>
