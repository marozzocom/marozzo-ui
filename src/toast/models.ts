enum ToastType {
  Default,
  Success,
  Error
}

export interface ToastData {
  message: string
  title?: string
  type?: ToastType
}

export interface Toasts {
  [id: string]: ToastData
}