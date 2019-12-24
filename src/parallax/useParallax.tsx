import { useContext } from "react"
import { ParallaxContext } from "./ParallaxProvider"

export const useParallax = () => {
  try {
    const { progress, attach } = useContext(ParallaxContext)

    return { progress, attach }
  } catch (error) {
    return { progress: null, attach: null }
  }
}
