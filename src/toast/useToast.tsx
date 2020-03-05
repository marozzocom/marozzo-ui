import { useContext } from "react"
import { ToastContext } from "./ToastProvider"

export const useToast = () => {
  const { add } = useContext(ToastContext)

  return { add }
}
