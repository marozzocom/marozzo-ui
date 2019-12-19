import { useContext } from "react"
import { Toasts, ToastItem } from "./models"
import { dissociate } from "../helpers"
import { ToastContext } from "./ToastProvider"

export const useToast = () => {
  try {
    const { toasts, setToasts } = useContext(ToastContext)
    const add = ({ title, message }: ToastItem, id: string) => setToasts((currentToasts: Toasts) => ({ ...currentToasts, [id]: { title, message } }))
    const remove = (id: string) => setToasts((currentToasts: Toasts) => ({ ...dissociate(id)(currentToasts) }))

    return { toasts, add, remove }
  } catch (error) {
    return { toasts: null, add: null, remove: null }
  }
}