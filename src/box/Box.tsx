/** @jsx jsx */
import { jsx } from "@emotion/core"

// TODO: The typings are not correct

import { FC } from "react"
import { useTheme } from "../theme"
import facepaint from "facepaint"

interface HTMLProps<T> extends React.RefAttributes<T>, Omit<React.HTMLAttributes<T>, "style"> {
  target?: string
  as?: React.ElementType
  style?: facepaint.Arg
  innerRef?: React.MutableRefObject<T>
  variant?: facepaint.Arg
  onClick?: (event: any) => void
}

interface Props<T = HTMLElement> extends HTMLProps<T> {}

export const Box: FC<Props<HTMLElement>> = ({ as = "div", style, variant, children, innerRef, ...props }) => {
  const Tag: any = `${as}`
  const { breakpoints } = useTheme()

  return (
    <Tag
      ref={innerRef}
      css={breakpoints({
        boxSizing: "border-box",
        position: "relative",
        minWidth: 0,
        pointerEvents: "all",
        ...variant,
        ...style
      })}
      {...props}>
      {children}
    </Tag>
  )
}
