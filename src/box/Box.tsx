/** @jsx jsx */
import { jsx, CSSObject } from "@emotion/core"
import { forwardRef, useMemo } from "react"
import { useTheme } from "../theme"
import { ensureArray } from "../_common/helpers"
import isPropValid from "@emotion/is-prop-valid"

interface BoxProps<T> {
  target?: string
  as?: React.ElementType
  style?: CSSObject | CSSObject[]
  onClick?: () => void // TODO: unsure about this
}

interface Props<T = HTMLElement> extends BoxProps<T>, Omit<React.AllHTMLAttributes<T>, keyof BoxProps<T> | "type" | "value"> {}

export const Box = forwardRef<Props, any>(({ as = "div", style, children, ...rest }, ref) => {
  const Tag: any = `${as}`
  const { breakpoints } = useTheme()

  const htmlAttributes = Object.keys(rest)
    .filter(key => isPropValid(key))
    .reduce((obj: any, key) => {
      obj[key] = rest[key]
      return obj
    }, {})

  const styles = useMemo(
    () =>
      breakpoints([
        {
          transitionProperty: "box-shadow, opacity, color, background-color, transform",
          transitionDuration: "100ms",
          transitionTimingFunction: "ease-in-out",
          boxSizing: "border-box",
          position: "relative",
          minWidth: 0,
          pointerEvents: "all",
        },
        ensureArray(style),
      ]),
    [breakpoints, style]
  )

  return (
    <Tag ref={ref} css={styles} {...htmlAttributes}>
      {children}
    </Tag>
  )
})

Box.displayName = "Box"
