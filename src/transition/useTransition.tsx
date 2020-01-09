import { useContext } from "react"
import { TransitionContext } from "./Transition"
import { getContextError } from "../_common/helpers"

export const useTransition = () => {
  const context = useContext(TransitionContext)
  if (!context) {
    throw new Error(getContextError("Transition"))
  }
  return context
}
