import React, { FC, ComponentProps } from "react"
import { Link } from "../link/Link"
import { CSSObject } from "@emotion/core"
import { useTheme } from "../theme"

interface Props extends ComponentProps<typeof Link> {
  selected?: boolean
  selectedStyle?: CSSObject
}

export const NavLink: FC<Props> = ({ onClick, style, children, selected, selectedStyle }, props) => {
  const {
    theme: {
      colors,
      variants: { textStyles }
    }
  } = useTheme()

  const selectedStylesWithDefault = {
    color: colors.primary,
    ...selectedStyle
  }

  return (
    <Link
      onClick={onClick}
      style={{
        display: "block",
        transition: "color 200ms",
        ...textStyles.actionNormal,
        ...style,
        ...(selected && selectedStylesWithDefault)
      }}
      {...props}>
      {children}
    </Link>
  )
}
