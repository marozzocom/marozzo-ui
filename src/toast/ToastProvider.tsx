import React, { createContext, FC, useState, useCallback } from "react"
import { Toasts, ToastItem } from "./models"
import { dissociate } from "../_common/helpers"

const ToastContext = createContext<{
  toasts: Toasts
  add: (item: ToastItem) => void
  remove: (id: string) => void
}>(null)

const ToastProvider: FC<{}> = ({ children }) => {
  const [toasts, setToasts] = useState<Toasts>({})

  const add = useCallback(
    ({ title, message, duration }: ToastItem, id = Date.now().toString()) =>
      setToasts((currentToasts: Toasts) => ({ ...currentToasts, [id]: { title, message, duration } })),
    []
  )

  const remove = useCallback((id: string) => setToasts((currentToasts: Toasts) => ({ ...dissociate(id)(currentToasts) })), [])

  return <ToastContext.Provider value={{ toasts, add, remove }}>{children}</ToastContext.Provider>
}

export { ToastContext, ToastProvider }
