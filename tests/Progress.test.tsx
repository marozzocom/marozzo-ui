import React from "react"
import { render } from "@testing-library/react"
import { Progress } from "../src/progress/Progress"

test("Renders Progress", () => {
  const { getByRole } = render(<Progress value={80}/>)
  expect(getByRole("progressbar")).not.toBeNull()
})