import React from "react"
import { ColorMode } from "../src/colorMode/ColorMode"
import { ColorMode as ColorModeType } from "../src/theme/models"

export default {
  component: ColorMode,
  title: "ColorMode"
}

export const colorMode = () => {
  const saveColorModeToLocalStorage = (colorMode: ColorModeType) => {
    console.log("set color mode")
    localStorage.setItem("colorMode", colorMode)
  }

  return <ColorMode onToggleColorMode={saveColorModeToLocalStorage} />
}
