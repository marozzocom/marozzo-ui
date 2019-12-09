import styled from '@emotion/styled'
import { color, space, typography, layout, SpaceProps, LayoutProps, ColorProps, TypographyProps, compose } from 'styled-system'
import { FC, StyleHTMLAttributes } from "react"
import css, { SystemStyleObject } from "@styled-system/css"

export interface BaseProps extends React.RefAttributes<any> {
  as?: React.ElementType
  style?: SystemStyleObject
}

export interface BoxProps
  extends BaseProps,
  SpaceProps,
  LayoutProps,
  TypographyProps,
  ColorProps { }

export const Box: FC<BoxProps> = styled("div")(
  {
    boxSizing: "border-box",
    minWidth: 0
  },
  props => css(props.style),
  compose(
    space,
    color,
    layout,
    typography
  )
)