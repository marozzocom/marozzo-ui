import React, { useContext } from "react"
import { ToastProvider, ToastContext } from "../src/toast/ToastProvider";
import { Button } from "../src";
import nanoid from "nanoid";

export default {
  component: ToastProvider,
  title: "ToastProvider",
};

export const toastProvider = () => <ToastProvider>
  <Controls />
</ToastProvider>

const Controls = () => {
  const { add } = useContext(ToastContext)
  return <Button onClick={() => add({ message: "Toast!" }, nanoid())}>Toast</Button>
}