import React, { FC, ComponentProps } from "react"
import { Link } from "../link/Link"
import { CSSObject } from "@emotion/core"
import { useTheme } from "../theme"
import { ensureArray } from "../_common/helpers"
import { useWrapText } from "../_common/useWrapText"
import { Box } from "../box"

interface Props extends Partial<ComponentProps<typeof Link>> {
  selected?: boolean
  selectedStyle?: CSSObject
  behavior?: "link" | "box"
}

// TODO: I am not happy about the difference between Link and NavLink, and their behavior with onClick vs to/href.
// Suggestion: Make Link always simple inline A element, no special click functionality but with to prop (support for router TBD).
// Make NavLink always an A that is block-level.
// Add Router support to both elements and consider creating a click/keypress handler to NavLink
// The bahavior prop is to make it easier to use this with React Router. I am deeply unsatisfied with this solution though.

export const NavLink: FC<Props> = ({ style, children, selected, selectedStyle, behavior = "link", ...props }) => {
  const {
    theme: { colors, shadows, fonts, fontWeights, fontSizes }
  } = useTheme()

  const selectedStylesWithDefault = {
    color: colors.primary,
    ...selectedStyle
  }

  const childrenAsObject = useWrapText(children)

  const Component = behavior === "link" ? Link : Box

  return (
    <Component
      style={[
        {
          fontFamily: fonts.action,
          fontWeight: fontWeights.bold,
          fontSize: fontSizes.m,
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
      tabIndex={behavior === "link" ? 0 : null}
      {...props}>
      {childrenAsObject}
    </Component>
  )
}
