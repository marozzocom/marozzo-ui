import { useContext } from "react"
import { ProgressContext } from "./ProgressProvider"

export const useProgress = () => {
  const { start, stop } = useContext(ProgressContext)

  return { start, stop }
}
