import React from "react"
import { Button } from "button/Button";
import { action } from "@storybook/addon-actions"

export default {
  component: Button,
  title: "Button",
};

export const button = () => <Button style={{color: "primary"}} p={2} bg="secondary" onClick={action('clicked')}>Button</Button>