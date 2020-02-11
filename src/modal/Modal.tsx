import React, { FC, ComponentProps } from "react"
import nanoid from "nanoid"
import { Overlay } from "./components/Overlay"
import { Container } from "./components/Container"
import { Box } from "../box/Box"
import { Close } from "./components/Close"

interface Props extends ComponentProps<typeof Box> {
  key?: string
  close?: () => void
}

interface Composition {
  Container: typeof Container
  Overlay: typeof Overlay
  Close: typeof Close
}

const Modal: FC<Props> & Composition = ({ key = nanoid(), children, close, ...props }) => {
  return <>{open && children}</>
}

Modal.Container = Container
Modal.Overlay = Overlay
Modal.Close = Close

export { Modal }
