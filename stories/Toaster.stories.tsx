import React from "react"
import { Button } from "../src";
import nanoid from "nanoid";
import { useToast } from "../src/toast/useToast"
import { Toaster as ToasterComponent } from "../src/toast/Toaster"
import { ToastProvider } from "../src/toast/ToastProvider";

export const Toaster = () => <ToastProvider>
    <Controls />
    <ToasterComponent />
</ToastProvider>

export default {
  component: Toaster,
  title: "Toaster",
};

const Controls = () => {
  const { add } = useToast()
  return <Button id="toaster-queue" onClick={() => add({ title: "Hi!", message: "Toast!", duration: 1000 })}>Toast</Button>
}