/** @jsx jsx */
import { jsx, CSSObject } from "@emotion/core"
import { forwardRef } from "react"
import { useTheme } from "../theme"
import { ensureArray } from "../_common/helpers"

interface BoxProps<T> {
  target?: string
  as?: React.ElementType
  style?: CSSObject | CSSObject[]
}

interface Props<T = HTMLElement> extends BoxProps<T>, Omit<React.AllHTMLAttributes<T>, keyof BoxProps<T> | "type" | "value"> {}

export const Box = forwardRef<Props, any>(({ as = "div", style, children, ...rest }, ref) => {
  const Tag: any = `${as}`

  const { breakpoints } = useTheme()

  return (
    <Tag
      ref={ref}
      css={breakpoints([
        {
          transitionProperty: "box-shadow, opacity, color, background-color, transform",
          transitionDuration: "100ms",
          transitionTimingFunction: "ease-in-out",
          boxSizing: "border-box",
          position: "relative",
          minWidth: 0,
          pointerEvents: "all"
        },
        ensureArray(style)
      ])}
      {...rest}>
      {children}
    </Tag>
  )
})

Box.displayName = "Box"
