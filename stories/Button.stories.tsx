import React from "react"
import { Button } from "../src/button/Button"
import { action } from "@storybook/addon-actions"

export default {
  component: Button,
  title: "Button"
}

export const button = () => (
  <Button p={2} onClick={action("clicked")}>
    Button
  </Button>
)
