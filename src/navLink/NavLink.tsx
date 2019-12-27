import React, { FC, ComponentProps } from "react"
import { Link } from "../link/Link"
import { CSSObject } from "@emotion/core"

interface Props extends ComponentProps<typeof Link> {
  selected?: boolean
  selectedStyle?: CSSObject
}

const defaultSelectedStyle = {
  fontWeight: "700"
}

export const NavLink: FC<Props> = ({ onClick, style, children, selected, selectedStyle = defaultSelectedStyle }, props) => (
  <Link
    onClick={onClick}
    style={{
      display: "block",
      ...style,
      ...(selected && selectedStyle)
    }}
    {...props}>
    {children}
  </Link>
)
