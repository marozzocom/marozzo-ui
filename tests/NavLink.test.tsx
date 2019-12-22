import React from "react"
import { NavLink } from "../src/navLink/NavLink"
import { render } from "@testing-library/react"

test("Renders NavLink", () => {
  const { getByText } = render(<NavLink>NavLink</NavLink>)
  expect(getByText("NavLink")).not.toBeNull()
})
