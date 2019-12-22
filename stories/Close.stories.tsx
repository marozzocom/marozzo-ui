import React from "react"
import { Close } from "../src/close/Close"
import { action } from "@storybook/addon-actions"

export default {
  component: Close,
  title: "Close"
}

export const close = () => <Close onClick={action("Close")} />
