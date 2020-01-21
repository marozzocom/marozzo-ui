import { Context } from "./Button"
import { useContext } from "react"

export const useButton = () => {
  try {
    const {
      ripples,
      removeRipple,
      fadeOutRipple,
      buttonElement,
      rippleDuration,
      minimumRippleVisibleDuration,
      width,
      height,
      effectColor,
      rippleStyles
    } = useContext(Context)
    return {
      ripples,
      removeRipple,
      fadeOutRipple,
      buttonElement,
      rippleDuration,
      minimumRippleVisibleDuration,
      width,
      height,
      effectColor,
      rippleStyles
    }
  } catch (error) {
    return {
      ripples: null,
      removeRipple: null,
      fadeOutRipple: null,
      buttonElement: null,
      rippleDuration: null,
      minimumRippleVisibleDuration: null,
      width: null,
      height: null,
      effectColor: null,
      rippleStyles: null
    }
  }
}
