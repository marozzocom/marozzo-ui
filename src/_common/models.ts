export interface NavigationItem {
  id: string
  title: string
  path?: string
  selected?: boolean
  subItems?: NavigationItem[]
  node?: HTMLElement
}
