import { useContext } from "react"
import { ParallaxContext } from "./ParallaxProvider"

export const useParallax = () => {
  const { progress, attach } = useContext(ParallaxContext)

  return { progress, attach }
}
