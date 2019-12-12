import React, { FC, useContext, createContext, useState } from "react"
import { Toast } from "./Toast"
import { Toast as IToast, Toasts } from "./models"
import { dissociate } from "../helpers"
import { Disclosure } from "../disclosure/Disclosure"

export const ToastContext = createContext<{ toasts: Toasts, add: (data: IToast, id: string) => void, remove: (id: string) => void }>(null)

export const ToastProvider: FC<{}> = ({ children }) => {
  const [toasts, setToasts] = useState<Toasts>({})

  const add = ({ message }: IToast, id: string) => setToasts(currentToasts => ({ ...currentToasts, [id]: { message } }))

  const remove = (id: string) => setToasts(currentToasts => ({...dissociate(id)(currentToasts)}))

  return (
    <ToastContext.Provider value={{ toasts, add, remove }}>
      <Toaster />
      {children}
    </ToastContext.Provider>
  )
}

const Toaster: FC<{}> = () => {
  const { toasts, remove } = useContext(ToastContext)
  return <Disclosure>{Object.entries(toasts).map(([id, { message }]) => <Toast key={id} id={id} message={message} remove={() => remove(id)} />)}</Disclosure>
}