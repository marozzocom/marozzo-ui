import { useContext } from "react"
import { Toasts, ToastItem } from "./models"
import { dissociate } from "../_common/helpers"
import { ToastContext } from "./ToastProvider"
import nanoid from "nanoid"

export const useToast = () => {
  try {
    const { toasts, setToasts } = useContext(ToastContext)
    const add = ({ title, message, duration }: ToastItem, id = nanoid()) =>
      setToasts((currentToasts: Toasts) => ({ ...currentToasts, [id]: { title, message, duration } }))
    const remove = (id: string) => setToasts((currentToasts: Toasts) => ({ ...dissociate(id)(currentToasts) }))

    return { toasts, add, remove }
  } catch (error) {
    return { toasts: null, add: null, remove: null }
  }
}
