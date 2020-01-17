import { VariantsContext } from "./VariantsProvider"
import { useContext } from "react"

export const useVariants = () => {
  try {
    const { variants } = useContext(VariantsContext)
    return variants
  } catch (error) {
    return null
  }
}
