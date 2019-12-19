import React, { FC } from "react"
import { Disclosure } from "../disclosure/Disclosure"
import { Toast } from "./Toast"
import { useToast } from "./useToast"


export const Toaster: FC<{}> = () => {
  const { toasts, remove } = useToast()
  return <Disclosure>
    {Object.entries(toasts).map(([id, { message, title }]) => <Toast key={id} id={id} message={message} title={title} remove={remove}/>)}
  </Disclosure>
}