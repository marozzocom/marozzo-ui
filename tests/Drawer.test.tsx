import React from "react"
import { render } from "@testing-library/react"
import { Drawer } from "../src/drawer/Drawer"

test("Renders Drawer", () => {
  const { getByText } = render(<Drawer>Drawer</Drawer>)
  expect(getByText('Drawer')).not.toBeNull()
})