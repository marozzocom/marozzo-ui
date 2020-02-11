import { Context } from "./Button"
import { useContext } from "react"

export const useButton = () => {
  const { ripples, removeRipple, fadeOutRipple, buttonElement, rippleDuration, minimumRippleVisibleDuration, dimensions, rippleStyles } = useContext(Context)
  return {
    ripples,
    removeRipple,
    fadeOutRipple,
    buttonElement,
    rippleDuration,
    minimumRippleVisibleDuration,
    dimensions,
    rippleStyles
  }
}
