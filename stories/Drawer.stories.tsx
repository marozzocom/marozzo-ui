import React, { useState } from "react"
import { Drawer } from "../src/drawer/Drawer"
import { Text } from "../src/text/Text"
import { Button } from "../src/button/Button"
import { Link } from "../src/link/Link"
import { CSSObject } from "@emotion/core"
import { VariantsProvider } from "../src"

export default {
  component: Drawer,
  title: "Drawer"
}

const buttonStyle: CSSObject = {
  position: "fixed",
  right: "20px",
  zIndex: 1
}

export const _DrawerRaw = () => (
  <Drawer.Container>
    <Text>Drawer</Text>
  </Drawer.Container>
)

export const drawer = () => {
  const [open, setOpen] = useState(false)
  // TODO: fix variants
  return (
    <>
      <VariantsProvider variants={{ test: "value" }}>
        <Button style={buttonStyle} onClick={() => setOpen(!open)} id="drawer-toggle">
          toggle
        </Button>
        <Drawer open={open} close={() => setOpen(false)}>
          <Text>Drawer</Text>
          <Button primary inverted>
            Random primary button
          </Button>
          <Button>Just a random button</Button>
        </Drawer>
      </VariantsProvider>
    </>
  )
}

export const drawerWithFocusTrap = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Button style={buttonStyle} onClick={() => setOpen(!open)} id="drawer-toggle">
        toggle
      </Button>
      <Drawer open={open} close={() => setOpen(false)}>
        <>
          <Link to="http://google.com" newTab>
            Link 1
          </Link>
          <br />
          <Link to="http://google.com" newTab>
            Link 2
          </Link>
          <br />
          <Link to="http://google.com" newTab>
            Link 3
          </Link>
          <br />
          <Link to="http://google.com" newTab>
            Link 4
          </Link>
          <br />
          <Link to="http://google.com" newTab>
            Link 5
          </Link>
          <br />
          <Link to="http://google.com" newTab>
            Link 6
          </Link>
          <br />
          <Link to="http://google.com" newTab>
            Link 7
          </Link>
          <br />
          <Link to="http://google.com" newTab>
            Link 8
          </Link>
          <br />
          <Link to="http://google.com" newTab>
            Link 9
          </Link>
          <br />
          <Link to="http://google.com" newTab>
            Link 10
          </Link>
        </>
      </Drawer>
    </>
  )
}

export const drawerWithoutCloseButton = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Button style={buttonStyle} onClick={() => setOpen(!open)} id="drawer-toggle">
        toggle
      </Button>
      <Drawer open={open} hasCloseButton={false} close={() => setOpen(false)}>
        <Text>Drawer</Text>
      </Drawer>
    </>
  )
}

export const drawerWithoutOverlayClose = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Button style={buttonStyle} onClick={() => setOpen(!open)} id="drawer-toggle">
        toggle
      </Button>
      <Drawer open={open} overlayProps={{ onClick: null }} close={() => setOpen(false)}>
        <Text>Drawer</Text>
      </Drawer>
    </>
  )
}

export const modelessDrawer = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Button style={buttonStyle} onClick={() => setOpen(!open)} id="drawer-toggle">
        toggle
      </Button>
      <Drawer open={open} modal={false} close={() => setOpen(false)}>
        <Text>Drawer</Text>
      </Drawer>
    </>
  )
}

export const drawerWithCustomOverlay = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Button style={buttonStyle} onClick={() => setOpen(!open)} id="drawer-toggle">
        toggle
      </Button>
      <Drawer open={open} overlayProps={{ style: { backGround: "tomato" } }} close={() => setOpen(false)}>
        <Text>Drawer</Text>
      </Drawer>
    </>
  )
}

export const drawerPositionedFar = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Button
        style={{
          position: "fixed",
          left: "20px",
          zIndex: 1
        }}
        onClick={() => setOpen(!open)}
        id="drawer-toggle">
        toggle
      </Button>
      <Drawer open={open} far={true} close={() => setOpen(false)}>
        <Text>Drawer</Text>
      </Drawer>
    </>
  )
}

export const drawerWithCustommotionProps = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Button style={buttonStyle} onClick={() => setOpen(!open)} id="drawer-toggle">
        toggle
      </Button>
      <Drawer
        open={open}
        motionProps={{
          initial: { opacity: 0, y: "-100%", position: "fixed", left: 0, top: 0, bottom: 0 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: "100%" },
          transition: {
            type: "spring",
            duration: 0.3
          }
        }}
        close={() => setOpen(false)}>
        <Text>Drawer</Text>
      </Drawer>
    </>
  )
}
