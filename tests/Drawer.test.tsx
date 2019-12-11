import React from "react"
import { render } from '@testing-library/react'
import { Drawer } from "../src/drawer/Drawer"

test("renders drawer", () => {
  const { getByText } = render(<Drawer>drawer</Drawer>)
  expect(getByText('drawer')).not.toBeNull()
})