import React, { useState, useEffect } from "react"
import { useTheme } from "./useTheme"

export const useMediaQuery = () => {
  const {
    theme: { breakpoints }
  } = useTheme()
  const [value, setValue] = useState<Record<string, boolean>>()

  useEffect(() => {
    const match = () =>
      Object.entries(breakpoints as Record<string, number>).reduce(
        (acc, [key, breakpoint]) => ({ ...acc, [key]: matchMedia(`(min-width: ${breakpoint}px)`).matches }),
        {}
      )
    const handler = () => setValue((match as unknown) as Record<string, boolean>) // TODO: improve typings
    addEventListener("resize", handler)
    return () => removeEventListener("resize", handler)
  }, [breakpoints])

  return value
}
