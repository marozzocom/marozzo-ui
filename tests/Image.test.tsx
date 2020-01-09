import React from "react"
import { Image } from "../src/image/Image"
import { render } from "@testing-library/react"

test("Renders Image", () => {
  const { getByAltText } = render(<Image src="https://raw.githubusercontent.com/marozzocom/marozzo-ui/master/logo/2x/logo%402x.png" alt="Image" />)
  expect(getByAltText("Image")).not.toBeNull()
})
