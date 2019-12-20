import React, { FC, ComponentProps, useRef, useEffect, useState } from "react"
import { Portal } from "../portal/Portal"
import { Disclosure } from "../disclosure/Disclosure"
import nanoid from "nanoid"
import { Surface } from "../surface/Surface"
import { MotionProps } from "framer-motion"
import { Overlay } from "../overlay/Overlay"
import { Close } from "../close/Close"

interface Props {
  open?: boolean
  key?: string
  far?: boolean
  animation?: MotionProps
  modal?: boolean
  overlayProps?: ComponentProps<typeof Overlay>
  close?: () => void
}

export const Drawer: FC<Props> = ({ open = true, key = nanoid(), far, animation, children, overlayProps, modal = true, close }) => {
  const focusTrapRef = useRef(null)
  const [focusTrap, setFocusTrap] = useState({ first: undefined, last: undefined })

  const motionProps: MotionProps = {
    initial: { opacity: 0, x: `${far ? 100 : -100}%`, position: "fixed", left: !far && 0, right: far && 0, top: 0, bottom: 0 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: `${far ? 100 : -100}%` },
    transition: {
      type: "tween",
      duration: .3
    },
    ...animation
  }

  const handleTab = (event: KeyboardEvent) => event.key === "Tab" && !focusTrapRef.current.contains(event.currentTarget) && event.shiftKey ? focusTrap.last.focus() : focusTrap.first.focus()

  useEffect(() => {
    if (focusTrapRef.current) {

      const focusable = focusTrapRef.current.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
      setFocusTrap({
        first: focusable[0],
        last: focusable[focusable.length - 1]
      })

      if (!focusTrap.first) return

      focusTrap.first.focus()
      window.addEventListener("keydown", handleTab)
    }
    return () => {
      window.removeEventListener("keydown", handleTab)
    }
  }, [focusTrapRef.current])

  return (
    <Portal>
      {modal && open && <Overlay {...overlayProps} />}
      <Disclosure animation={motionProps}>
        {open && <DrawerContainer key={key} close={close}>{children}</DrawerContainer>}
      </Disclosure>
    </Portal>
  )
}


const DrawerContainer: FC<{ close: () => void }> = ({ children, close }) => {
  const focusTrapRef = useRef(null)
  const [focusTrap, setFocusTrap] = useState({ first: undefined, last: undefined })

  const handleTab = (event: KeyboardEvent) => {
    if (event.key !== "Tab") {
      return
    }
    if (!focusTrapRef.current.contains(event.target)) {
      focusTrap.first.focus()
      event.preventDefault()
    }
    if (event.target === focusTrap.first && event.shiftKey) {
      focusTrap.last.focus()
    }
    if (event.target === focusTrap.last) {
      focusTrap.first.focus()
      event.preventDefault()
    }
  }

  useEffect(() => {
    if (!focusTrapRef.current) {
      return
    }

    const focusable = focusTrapRef.current.querySelectorAll(`button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])`)

    if (focusable.length === 0) {
      return
    }

    setFocusTrap({
      first: focusable[0],
      last: focusable[focusable.length - 1]
    })
    
    focusable[0].focus()

    window.addEventListener("keydown", handleTab)

    return () => {
      window.removeEventListener("keydown", handleTab)
    }
  }, [focusTrapRef.current])

  return (
    <Surface ref={focusTrapRef} width="7" boxShadow="subtle">
      {close && <Close onClick={close} />}
      {children}
    </Surface>
  )
}