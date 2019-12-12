import React from "react"
import { render, fireEvent } from "@testing-library/react"
import { Button } from "../src/button/Button"

test("Renders Button", () => {
  const { getByText } = render(<Button>Button</Button>)
  expect(getByText("Button")).not.toBeNull()
})

it("Button Captures clicks", done => {
  const handleClick = () => {
    done()
  }
  const { getByText } = render(<Button onClick={handleClick}>Button</Button>)
  const node = getByText("Button");
  fireEvent.click(node);
});