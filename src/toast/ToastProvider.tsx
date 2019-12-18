import React, { createContext, FC, useState } from "react"
import { Toasts } from "./models"

const ToastContext = createContext<{
    toasts: Toasts;
    setToasts: React.Dispatch<React.SetStateAction<Toasts>>;
}>(null)

const ToastProvider: FC<{}> = ({ children }) => {
    const [toasts, setToasts] = useState<Toasts>({})

    return (
        <ToastContext.Provider value={{toasts, setToasts}}>
            {children}
        </ToastContext.Provider>
    )
}

export { ToastContext, ToastProvider }