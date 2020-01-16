import React, { FC, ComponentProps } from "react"
import { Link } from "../link/Link"
import { CSSObject } from "@emotion/core"
import { useTheme } from "../theme"
import { ensureArray } from "../_common/helpers"
import { useVariants } from "../variants/useVariants"

interface Props extends ComponentProps<typeof Link> {
  selected?: boolean
  selectedStyle?: CSSObject
}

// TODO: I am not happy about the difference between Link and NavLink, and their behavior with onClick vs to/href.
// Suggestion: Make Link always simple inline A element, no special click funtionality but with to prop (support for router TBD).
// Make NavLink always an A that is block-level.
// Add Router support to both elements and consider creating a click/keypress handler to NavLink

export const NavLink: FC<Props> = ({ style, children, selected, selectedStyle, ...props }) => {
  const {
    theme: { colors, shadows }
  } = useTheme()

  const { textStyles } = useVariants()

  const selectedStylesWithDefault = {
    color: colors.primary,
    ...selectedStyle
  }

  return (
    <Link
      variant={textStyles.actionNormal}
      style={[
        {
          color: colors.text,
          display: "block",
          "&:hover": {
            ...selectedStylesWithDefault
          },
          "&:focus": {
            outline: "none",
            boxShadow: shadows.active
          }
        },
        selected && selectedStylesWithDefault,
        ...ensureArray(style)
      ]}
      tabIndex={0}
      {...props}>
      {children}
    </Link>
  )
}
