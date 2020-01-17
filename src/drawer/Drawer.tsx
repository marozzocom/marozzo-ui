import React, { FC, ComponentProps } from "react"
import { Portal } from "../portal/Portal"
import { Transition } from "../transition/Transition"
import nanoid from "nanoid"
import { MotionProps } from "framer-motion"
import { Overlay } from "../overlay/Overlay"
import { Container } from "./components/Container"
import { Box, useVariants } from ".."
import { VariantsProvider } from "../variants"

interface Props extends ComponentProps<typeof Box> {
  open?: boolean
  key?: string
  far?: boolean
  motionProps?: MotionProps
  modal?: boolean
  hasCloseButton?: boolean
  overlayProps?: ComponentProps<typeof Overlay>
  close?: () => void
}

interface Composition {
  Container: typeof Container
}

const Drawer: FC<Props> & Composition = ({
  open = true,
  key = nanoid(),
  far,
  hasCloseButton = true,
  motionProps,
  children,
  overlayProps,
  modal = true,
  close,
  ...props
}) => {
  const defaultMotionProps: MotionProps = {
    initial: { opacity: 0, x: `${far ? 100 : -100}%`, position: "fixed", left: !far && 0, right: far && 0, top: 0, bottom: 0 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: `${far ? 100 : -100}%` },
    transition: {
      type: "tween",
      duration: 0.3
    },
    ...motionProps
  }

  return (
    <VariantsProvider
      variants={{
        buttons: {
          default: {
            borderRadius: "2px",
            background: "none",
            color: "#f00"
          },
          primary: {
            borderRadius: "1px",
            background: "#1a1a1a",
            color: "#fff"
          }
        }
      }}>
      <Portal>
        {modal && open && <Overlay onClick={close} {...overlayProps} />}
        <Transition motionProps={defaultMotionProps}>
          {open && (
            <Container key={key} close={hasCloseButton && close} {...props}>
              {children}
            </Container>
          )}
        </Transition>
      </Portal>
    </VariantsProvider>
  )
}

Drawer.Container = Container

export { Drawer }
