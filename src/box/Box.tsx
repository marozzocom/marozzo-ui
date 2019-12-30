/** @jsx jsx */
import { jsx } from "@emotion/core"

// TODO: The typings are not correct

import { FC } from "react"
import { useTheme } from "../theme"
import { Arg } from "facepaint"
import merge from "deepmerge"

interface HTMLProps<T> extends React.RefAttributes<T>, Omit<React.HTMLAttributes<T>, "style"> {
  target?: string
  as?: React.ElementType
  style?: Arg
  innerRef?: React.MutableRefObject<T>
  variant?: Arg
}

interface Props<T = HTMLElement> extends HTMLProps<T> {}

export const Box: FC<Props<HTMLElement>> = ({ as = "div", style, variant, children, innerRef, ...props }) => {
  const Tag: any = `${as}`

  // TODO: Consider adding other pseudo states

  const { breakpoints } = useTheme()

  console.log(
    "styles",
    breakpoints(
      merge.all([
        {
          transitionProperty: "box-shadow, opacity, color, background-color, transform",
          transitionDuration: "100ms",
          transitionTimingFunction: "ease-in-out",
          boxSizing: "border-box",
          position: "relative",
          minWidth: 0,
          pointerEvents: "all"
        },
        { ...variant },
        { ...style }
      ])
    )
  )

  return (
    <Tag
      ref={innerRef}
      css={breakpoints(
        merge.all([
          {
            transitionProperty: "box-shadow, opacity, color, background-color, transform",
            transitionDuration: "100ms",
            transitionTimingFunction: "ease-in-out",
            boxSizing: "border-box",
            position: "relative",
            minWidth: 0,
            pointerEvents: "all"
          },
          { ...variant },
          { ...style }
        ])
      )}
      {...props}>
      {children}
    </Tag>
  )
}
