import React, { createContext, FC, useState, useCallback, ComponentProps } from "react"
import { Toasts, ToastItem } from "./models"
import { dissociate } from "../_common/helpers"
import { Toaster } from "./Toaster"
import { MotionProps } from "framer-motion"
import { Toast } from "./Toast"
import { CSSObject } from "@emotion/core"

const ToastContext = createContext<{
  add: (item: ToastItem, id?: string) => void
}>(null)

interface Props {
  toastProps?: ComponentProps<typeof Toast>
  motionProps?: MotionProps
  style?: CSSObject | Array<CSSObject>
}

const ToastProvider: FC<Props> = ({ children, toastProps, motionProps, style }) => {
  const [toasts, setToasts] = useState<Toasts>({})

  const add = useCallback(
    ({ title, message, duration }: ToastItem, id = Date.now().toString()) =>
      setToasts((currentToasts: Toasts) => ({ ...currentToasts, [id]: { title, message, duration } })),
    []
  )

  const remove = useCallback((id: string) => setToasts((currentToasts: Toasts) => ({ ...dissociate(id)(currentToasts) })), [])

  return (
    <ToastContext.Provider value={{ add }}>
      {children}
      <Toaster style={style} toasts={toasts} remove={remove} toastProps={toastProps} motionProps={motionProps} />
    </ToastContext.Provider>
  )
}

export { ToastContext, ToastProvider }
