import React from "react"
import { render } from '@testing-library/react'
import { Toast } from "../src/toast/Toast"

test("renders toast", () => {
  const { getByText } = render(<Toast>toast</Toast>)
  expect(getByText('toast')).not.toBeNull()
})