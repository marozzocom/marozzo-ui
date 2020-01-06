import { MutableRefObject } from "react"

export interface NavigationItems {
  [key: string]: {
    title: string
    path?: string
    selected?: boolean
    subItems?: NavigationItems
    ref?: MutableRefObject<HTMLElement>
  }
}
