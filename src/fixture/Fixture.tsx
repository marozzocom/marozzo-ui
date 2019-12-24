import React, { FC } from "react"
import { Flex } from "../flex/Flex"
import { SpaceProps } from "styled-system"

export enum Position {
  Center,
  Top,
  Right,
  Bottom,
  Left,
  TopLeft,
  TopRight,
  BottomRight,
  BottomLeft
}

interface Props extends SpaceProps {
  position?: Position
  type?: "absolute" | "fixed"
}

const getFlexboxProps = (position: Position) => {
  switch (position) {
    case Position.Top:
      return {
        alignItems: "flex-start",
        justifyContent: "center"
      }
    case Position.Right:
      return {
        alignItems: "center",
        justifyContent: "flex-end"
      }
    case Position.Bottom:
      return {
        alignItems: "flex-end",
        justifyContent: "center"
      }
    case Position.Left:
      return {
        alignItems: "center",
        justifyContent: "flex-start"
      }
    case Position.TopLeft:
      return {
        alignItems: "flex-start",
        justifyContent: "flex-start"
      }
    case Position.TopRight:
      return {
        alignItems: "flex-start",
        justifyContent: "flex-end"
      }
    case Position.BottomRight:
      return {
        alignItems: "flex-end",
        justifyContent: "flex-end"
      }
    case Position.BottomLeft:
      return {
        alignItems: "flex-end",
        justifyContent: "flex-start"
      }
    case Position.Center:
    default:
      return {
        alignItems: "center",
        justifyContent: "center"
      }
  }
}

export const Fixture: FC<Props> = ({ position, children, type = "absolute", ...props }) => (
  <Flex position={type} style={{ pointerEvents: "none" }} top="0" right="0" bottom="0" left="0" {...getFlexboxProps(position)} {...props}>
    {children}
  </Flex>
)
