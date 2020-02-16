import { MutableRefObject } from "react"

export interface NavigationItem {
  id: string
  title: string
  path?: string
  selected?: boolean
  subItems?: NavigationItem[]
  ref?: MutableRefObject<HTMLElement>
}
