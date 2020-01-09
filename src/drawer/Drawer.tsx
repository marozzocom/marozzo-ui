import React, { FC, ComponentProps } from "react"
import { Portal } from "../portal/Portal"
import { Transition } from "../transition/Transition"
import nanoid from "nanoid"
import { MotionProps } from "framer-motion"
import { Overlay } from "../overlay/Overlay"
import { DrawerRaw } from "./DrawerRaw"
import { Box } from ".."

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

export const Drawer: FC<Props> = ({
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
    <Portal>
      {modal && open && <Overlay onClick={close} {...overlayProps} />}
      <Transition motionProps={defaultMotionProps}>
        {open && (
          <DrawerRaw key={key} close={hasCloseButton && close} {...props}>
            {children}
          </DrawerRaw>
        )}
      </Transition>
    </Portal>
  )
}
