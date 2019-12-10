import React from "react"
import { render, fireEvent } from '@testing-library/react'
import { Button } from "../src/button/Button"

test("renders button", () => {
  const { getByText } = render(<Button>button</Button>)
  expect(getByText('button')).not.toBeNull()
})

it("captures clicks", done => {
  const handleClick = () => {
    done()
  }
  const { getByText } = render(<Button onClick={handleClick}>button</Button>)
  const node = getByText("button");
  fireEvent.click(node);
});