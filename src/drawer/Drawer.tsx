import React, { FC, ComponentProps } from "react"
import { Portal } from "../portal/Portal"
import { Disclosure } from "../disclosure/Disclosure"
import nanoid from "nanoid"
import { MotionProps } from "framer-motion"
import { Overlay } from "../overlay/Overlay"
import { DrawerRaw } from "./DrawerRaw"

interface Props {
  open?: boolean
  key?: string
  far?: boolean
  animation?: MotionProps
  modal?: boolean
  hasCloseButton?: boolean
  overlayProps?: ComponentProps<typeof Overlay>
  close?: () => void
}

export const Drawer: FC<Props> = ({ open = true, key = nanoid(), far, hasCloseButton = true, animation, children, overlayProps, modal = true, close }) => {
  const motionProps: MotionProps = {
    initial: { opacity: 0, x: `${far ? 100 : -100}%`, position: "fixed", left: !far && 0, right: far && 0, top: 0, bottom: 0 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: `${far ? 100 : -100}%` },
    transition: {
      type: "tween",
      duration: 0.3
    },
    ...animation
  }

  return (
    <Portal>
      {modal && open && <Overlay onClick={close} {...overlayProps} />}
      <Disclosure animation={motionProps}>
        {open && (
          <DrawerRaw key={key} close={hasCloseButton && close}>
            {children}
          </DrawerRaw>
        )}
      </Disclosure>
    </Portal>
  )
}
