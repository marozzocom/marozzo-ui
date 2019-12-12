enum ToastType {
  Default,
  Success,
  Error
}

export interface Toast {
  message: string
  title?: string
  type?: ToastType
}

export interface Toasts {
  [id: string]: Toast
}