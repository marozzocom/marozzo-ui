import React from "react"
import { render, fireEvent } from "@testing-library/react"
import { Close } from "../src/close/Close"

test("Renders Close button", () => {
  const { getByLabelText } = render(<Close />)
  expect(getByLabelText("Close")).not.toBeNull()
})

it("Close button captures clicks", done => {
  const handleClick = () => {
    done()
  }
  const { getByLabelText } = render(<Close onClick={handleClick} />)
  const node = getByLabelText("Close")
  fireEvent.click(node)
})
