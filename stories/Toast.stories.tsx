import React from "react"
import { Toast } from "../src/toast/Toast"
import { action } from "@storybook/addon-actions"

export default {
  component: Toast,
  title: "Toast"
}

const remove = action("Removed")

export const toast = () => <Toast id="toast" message="Toast"/>
export const toastWithRemove = () => <Toast id="toast" remove={remove} message="Toast"/>