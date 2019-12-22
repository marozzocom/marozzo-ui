import React, { useState } from "react"
import { Button } from "../src"
import { useToast } from "../src/toast/useToast"
import { Toaster as ToasterComponent } from "../src/toast/Toaster"
import { ToastProvider } from "../src/toast/ToastProvider"

export const Toaster = () => (
  <ToastProvider>
    <Controls />
    <ToasterComponent />
  </ToastProvider>
)

export default {
  component: Toaster,
  title: "Toaster"
}

const Controls = () => {
  const [index, setindex] = useState(1)
  const { add } = useToast()
  const queue = () => {
    add({ title: `Hi! (${index})`, message: "Toast!", duration: 2500 })
    setindex(index + 1)
  }

  return (
    <Button id="toaster-queue" onClick={queue}>
      Toast
    </Button>
  )
}
