import React from "react"
import { Button } from "../src/button/Button"
import { action } from "@storybook/addon-actions"

export default {
  component: Button,
  title: "Button"
}

export const defaultButton = () => <Button onClick={action("clicked")}>Button</Button>
export const primaryButton = () => (
  <Button primary onClick={action("clicked")}>
    Button
  </Button>
)
export const smallButton = () => (
  <Button small onClick={action("clicked")}>
    Button
  </Button>
)
export const smallPrimaryButton = () => (
  <Button small primary onClick={action("clicked")}>
    Button
  </Button>
)
