import { Box } from "../box/Box"
import { FC, forwardRef, ComponentProps } from "react"
import React from "react"

interface Props extends ComponentProps<typeof Box> {
  primary?: boolean
  small?: boolean
}

export const Button: FC<Props> = forwardRef(({ primary, small, style, ...props }, ref) => (
  <Box
    style={{ border: "none", ...style }}
    px={small ? 2 : 3}
    py={small ? 0 : 1}
    as="button"
    ref={ref}
    textStyle={small ? "actionSmall" : "actionNormal"}
    variant={primary ? "primary" : "default"}
    {...props}
  />
))

Button.displayName = "Button"
