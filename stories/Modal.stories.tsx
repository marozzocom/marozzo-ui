import React, { useState } from "react"
import { Modal } from "../src/modal/Modal"
import { Text } from "../src/text/Text"
import { Button } from "../src/button/Button"
import { CSSObject } from "@emotion/core"
import { Overlay } from "../src/overlay/Overlay"
import { Transition } from "../src/transition/Transition"

export default {
  component: Modal,
  title: "Modal"
}

const buttonStyle: CSSObject = {
  position: "fixed",
  right: "20px",
  zIndex: 1
}

export const SimpleModal = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Button style={buttonStyle} onClick={() => setOpen(!open)} id="Modal-toggle">
        toggle
      </Button>
      {open && (
        <Modal close={() => setOpen(false)}>
          <Text>Modal</Text>
          <Button primary inverted>
            Random primary button
          </Button>
          <Button>Just a random button</Button>
        </Modal>
      )}
    </>
  )
}

export const StyledModal = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Button style={buttonStyle} onClick={() => setOpen(!open)} id="Modal-toggle">
        toggle
      </Button>
      <Transition>{open && <Overlay />}</Transition>
      <Transition>
        {open && (
          <Modal close={() => setOpen(false)}>
            <Text>Modal</Text>
            <Button primary inverted>
              Random primary button
            </Button>
            <Button>Just a random button</Button>
          </Modal>
        )}
      </Transition>
    </>
  )
}
