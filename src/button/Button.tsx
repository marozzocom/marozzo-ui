import { Box } from "../box/Box"
import { FC, forwardRef, ComponentProps } from "react"
import React from "react"
import { variant, size } from "styled-system"

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
    //variant={small ? "actionSmall" : "actionNormal"}
    variants={[primary ? ["buttons.primary"] : ["buttons.default"], small ? ["textStyles.actionSmall"] : ["textStyles.actionNormal"]]}
    {...props}
  />
))

Button.displayName = "Button"
