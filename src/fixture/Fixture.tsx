import React, { FC, ComponentProps } from "react"
import { Box } from "../box/Box"
import { ensureArray } from "../_common/helpers"

export enum Vertical {
  Top = "flex-start",
  Center = "center",
  Bottom = "flex-end"
}

export enum Horizontal {
  Start = "flex-start",
  Center = "center",
  End = "flex-end"
}

export interface FixtureProps {
  horizontal?: Horizontal
  vertical?: Vertical
  type?: "absolute" | "fixed"
}

interface Props extends ComponentProps<typeof Box>, FixtureProps {}

export const Fixture: FC<Props> = ({ vertical = Vertical.Center, horizontal = Horizontal.Center, children, type = "absolute", style, ...props }) => (
  <Box
    style={[
      {
        display: "flex",
        position: type,
        pointerEvents: "none",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        alignItems: vertical,
        justifyContent: horizontal
      },
      ...ensureArray(style)
    ]}
    {...props}>
    {children}
  </Box>
)
