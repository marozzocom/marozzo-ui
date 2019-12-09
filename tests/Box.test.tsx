import React from "react"
import { Box } from "box/Box"
import { render } from '@testing-library/react'

test("renders box", () => {
  const { getByText } = render(<Box>box</Box>)
  expect(getByText('box')).not.toBeNull()
})