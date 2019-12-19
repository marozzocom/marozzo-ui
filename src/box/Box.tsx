import styled from '@emotion/styled'
import { color, space, typography, layout, SpaceProps, LayoutProps, ColorProps, TypographyProps, compose, BorderProps, border, ShadowProps, shadow, PositionProps, position, FlexboxProps, flexbox } from 'styled-system'
import { FC } from "react"
import css, { SystemStyleObject } from "@styled-system/css"

interface HTMLProps<T> extends React.RefAttributes<T>, Omit<React.HTMLAttributes<T>, "color"> {}

interface BaseProps<T> extends Omit<HTMLProps<T>, "style"> {
  as?: React.ElementType
  style?: SystemStyleObject
}

interface Props<T = HTMLElement>
  extends BaseProps<T>,
  SpaceProps,
  PositionProps,
  LayoutProps,
  TypographyProps,
  BorderProps,
  ShadowProps,
  FlexboxProps,
  ColorProps { }

export const Box: FC<Props> = styled("div")(
  {
    boxSizing: "border-box",
    minWidth: 0
  },
  props => css(props.style),
  compose(
    space,
    color,
    layout,
    typography,
    border,
    shadow,
    position,
    flexbox
  )
)
