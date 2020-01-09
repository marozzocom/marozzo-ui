/** @jsx jsx */
import { jsx, CSSObject } from "@emotion/core"
import { FC } from "react"
import { useTheme } from "../theme"
import { ensureArray } from "../_common/helpers"

interface BoxProps<T> {
  target?: string
  as?: React.ElementType
  style?: CSSObject | CSSObject[]
  innerRef?: React.MutableRefObject<T>
  variant?: CSSObject
}

interface Props<T = HTMLElement> extends BoxProps<T>, Omit<React.AllHTMLAttributes<T>, keyof BoxProps<T> | "type" | "value"> {}

export const Box: FC<Props<HTMLElement>> = ({ as = "div", style, variant, children, innerRef, ...props }) => {
  const Tag: any = `${as}`
  const { breakpoints } = useTheme()

  return (
    <Tag
      ref={innerRef}
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
        variant,
        ensureArray(style)
      ])}
      {...props}>
      {children}
    </Tag>
  )
}
