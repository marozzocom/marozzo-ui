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
      shadows,
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
      variant={textStyles.actionNormal}
      style={{
        display: "block",
        ...style,
        ...(selected && selectedStylesWithDefault),
        "&:hover": {
          ...selectedStylesWithDefault
        },
        "&:focus": {
          outline: "none",
          boxShadow: shadows.active
        }
      }}
      {...props}
      as="a"
      tabIndex={0}>
      {children}
    </Link>
  )
}
