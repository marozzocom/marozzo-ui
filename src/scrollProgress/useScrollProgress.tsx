import { useContext } from "react"
import { ScrollProgressContext } from "./ScrollProgressProvider"

export const useScrollProgress = () => {
  try {
    const { progress, attach, showProgress } = useContext(ScrollProgressContext)

    return { progress, attach, showProgress }
  } catch (error) {
    return { progress: null, attach: null, showProgress: null }
  }
}
