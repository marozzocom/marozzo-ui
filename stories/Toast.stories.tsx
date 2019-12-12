import React from "react"
import { Toast } from "../src/toast/Toast";

export default {
  component: Toast,
  title: "Toast",
};

export const toast = () => <Toast id="toast" message="Toast"/>