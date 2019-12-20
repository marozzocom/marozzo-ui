import styled from '@emotion/styled'
import { color, space, typography, layout, SpaceProps, LayoutProps, ColorProps, TypographyProps, compose, BorderProps, border, ShadowProps, shadow, PositionProps, position, FlexboxProps, flexbox, BackgroundImageProps, backgroundImage } from 'styled-system'
import { FC } from "react"
import css, { SystemStyleObject } from "@styled-system/css"

// TODO: Specify what props/attributes are exported and supposed to be used by Box primitive, and the components directly extended from it and then actual specific components. Most HTML Attributes should probably not be exposed to all components while the basic layout props maybe should be, at least to those closer to the metal such as Link and Button.

interface HTMLProps<T> extends React.RefAttributes<T>, Omit<React.HTMLAttributes<T>, "color"> {
  target?: string
}

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
  BackgroundImageProps,
  ShadowProps,
  FlexboxProps,
  ColorProps { }

export const Box: FC<Props> = styled("div")(
  {
    boxSizing: "border-box",
    minWidth: 0
  },
  props => css(props.style), // TODO: Are we using style or css?
  compose(
    space,
    color,
    backgroundImage,
    layout,
    typography,
    border,
    shadow,
    position,
    flexbox
  )
)
