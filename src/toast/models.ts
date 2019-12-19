export enum ToastType {
  Default,
  Success,
  Error
}

export interface ToastItem {
  message: string
  title?: string
  type?: ToastType
}

export interface Toasts {
  [id: string]: ToastItem
}