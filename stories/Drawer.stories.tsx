import React, { useState } from "react"
import { Drawer } from "../src/drawer/Drawer";
import { Button } from "../src/button/Button";
import { Link } from "../src/link/Link";

export default {
  component: Drawer,
  title: "Drawer",
};

export const drawer = () => {
  const [open, setOpen] = useState(false)
  return <>
    <Button position="fixed" right="2" zIndex={1} onClick={() => setOpen(!open)} id="drawer-toggle">toggle</Button>
    <Drawer open={open}>drawer</Drawer>
  </>
}

export const drawerWithFocusTrap = () => {
  const [open, setOpen] = useState(false)
  return <>
    <Button position="fixed" right="2" zIndex={1} onClick={() => setOpen(!open)} id="drawer-toggle">toggle</Button>
    <Drawer open={open}>
      <>
        <Link to="http://google.com" newTab>Link 1</Link><br />
        <Link to="http://google.com" newTab>Link 2</Link><br />
        <Link to="http://google.com" newTab>Link 3</Link><br />
        <Link to="http://google.com" newTab>Link 4</Link><br />
        <Link to="http://google.com" newTab>Link 5</Link><br />
        <Link to="http://google.com" newTab>Link 6</Link><br />
        <Link to="http://google.com" newTab>Link 7</Link><br />
        <Link to="http://google.com" newTab>Link 8</Link><br />
        <Link to="http://google.com" newTab>Link 9</Link><br />
        <Link to="http://google.com" newTab>Link 10</Link>
      </>
    </Drawer>
  </>
}

export const drawerWithCloseButton = () => {
  const [open, setOpen] = useState(false)
  return <>
    <Button position="fixed" right="2" zIndex={1} onClick={() => setOpen(!open)} id="drawer-toggle">toggle</Button>
    <Drawer open={open} close={() => setOpen(false)}>drawer</Drawer>
  </>
}

export const modelessDrawer = () => {
  const [open, setOpen] = useState(false)
  return <>
    <Button position="fixed" right="2" onClick={() => setOpen(!open)} id="drawer-toggle">toggle</Button>
    <Drawer open={open} modal={false}>drawer</Drawer>
  </>
}

export const drawerWithCustomOverlay = () => {
  const [open, setOpen] = useState(false)
  return <>
    <Button position="fixed" right="2" zIndex={1} onClick={() => setOpen(!open)} id="drawer-toggle">toggle</Button>
    <Drawer open={open} overlayProps={{ bg: "tomato" }}>drawer</Drawer>
  </>
}

export const drawerPositionedFar = () => {
  const [open, setOpen] = useState(false)
  return <>
    <Button position="fixed" left="2" zIndex={1} onClick={() => setOpen(!open)} id="drawer-toggle">toggle</Button>
    <Drawer open={open} far={true}>drawer</Drawer>
  </>
}

export const drawerWithCustomAnimation = () => {
  const [open, setOpen] = useState(false)
  return <>
    <Button position="fixed" right="2" zIndex={1} onClick={() => setOpen(!open)} id="drawer-toggle">toggle</Button>
    <Drawer open={open} animation={
      {
        initial: { opacity: 0, y: "-100%", position: "fixed", left: 0, top: 0, bottom: 0 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: "100%" },
        transition: {
          type: "spring",
          duration: .3
        }
      }
    }>drawer</Drawer>
  </>
}