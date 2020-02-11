import { useContext } from "react"
import { ToastContext } from "./ToastProvider"

export const useToast = () => {
  const { toasts, add, remove } = useContext(ToastContext)

  return { toasts, add, remove }
}
