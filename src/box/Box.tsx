import styled from "@emotion/styled"
import {
  color,
  space,
  typography,
  layout,
  SpaceProps,
  LayoutProps,
  ColorProps,
  TypographyProps,
  compose,
  BorderProps,
  border,
  ShadowProps,
  shadow,
  PositionProps,
  position,
  FlexboxProps,
  flexbox,
  BackgroundImageProps,
  backgroundImage,
  ResponsiveValue
} from "styled-system"
import { FC } from "react"
import css, { get, SystemStyleObject, CSSObject } from "@styled-system/css"
import { Theme } from "../theme"

// TODO: Specify what props/attributes are exported and supposed to be used by Box primitive, and the components directly extended from it and then actual specific components. Most HTML Attributes should probably not be exposed to all components while the basic layout props maybe should be, at least to those closer to the metal such as Link and Button.

interface HTMLProps<T> extends React.RefAttributes<T>, Omit<React.HTMLAttributes<T>, "color"> {
  target?: string
}

interface BaseProps<T> extends Omit<HTMLProps<T>, "style"> {
  as?: React.ElementType
  style?: SystemStyleObject
  variants?: ResponsiveValue<string>[]
}

interface Variant {
  theme: Theme
  variants: string[]
  tx: string
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
    ColorProps {}

// TODO: Add support for multiple variants
const variants = ({ theme, variants, tx = "variants" }: Variant): CSSObject => {
  return variants.reduce((acc: CSSObject, variant: string) => ({ ...acc, ...css(get(theme, tx + "." + variant, get(theme, variant)))(theme) }), {})
}

export const Box: FC<Props> = styled("div")(
  {
    boxSizing: "border-box",
    position: "relative",
    minWidth: 0,
    pointerEvents: "all"
  },
  variants,
  props => css(props.style), // TODO: Are we using style or css?
  compose(space, color, backgroundImage, layout, typography, border, shadow, position, flexbox)
)
