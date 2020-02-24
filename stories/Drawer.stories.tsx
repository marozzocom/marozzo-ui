import React, { useState } from "react"
import { Drawer } from "../src/drawer/Drawer"
import { Text } from "../src/text/Text"
import { Button } from "../src/button/Button"
import { Link } from "../src/link/Link"
import { CSSObject } from "@emotion/core"

export default {
  component: Drawer,
  title: "Drawer"
}

const buttonStyle: CSSObject = {
  position: "fixed",
  right: "20px",
  zIndex: 1
}

export const DrawerContainer = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
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
    </>
  )
}

export const DrawerWithFocusTrap = () => {
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

export const DrawerWithoutCloseButton = () => {
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

export const DrawerWithoutOverlayClose = () => {
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

export const ModelessDrawer = () => {
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

export const DrawerWithCustomOverlay = () => {
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

export const DrawerPositionedFar = () => {
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

export const DrawerWithCustommotionProps = () => {
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
            type: "spring"
          }
        }}
        close={() => setOpen(false)}>
        <Text>Drawer</Text>
      </Drawer>
    </>
  )
}
