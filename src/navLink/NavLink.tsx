import React, { FC, ComponentProps } from "react"
import { Link } from "../link/Link"
import { SystemStyleObject } from "@styled-system/css"

interface Props extends ComponentProps<typeof Link> {
  selected?: boolean
  selectedStyle?: SystemStyleObject
}

const defaultSelectedStyle = {
  fontWeight: "700"
}

export const NavLink: FC<Props> = ({ onClick, style, children, selected, selectedStyle = defaultSelectedStyle }, props) => (
  <Link onClick={onClick} display="block" style={{ ...style, ...(selected && selectedStyle) }} {...props}>
    {children}
  </Link>
)
