import React, { useState } from "react"
import { Drawer } from "../src/drawer/Drawer";
import { Button } from "../src/button/Button";

export default {
  component: Drawer,
  title: "Drawer",
};

export const drawer = () => {
  const [open, setOpen] = useState(false)
  return <>
    <Button onClick={() => setOpen(!open)}>toggle</Button>
    <Drawer open={open}>drawer</Drawer>
  </>
}