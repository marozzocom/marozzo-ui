/** @jsx jsx */
import { jsx } from "@emotion/core"
import { Box } from "../box/Box"
import { FC, forwardRef, ComponentProps } from "react"

export const Button: FC<ComponentProps<typeof Box>> = forwardRef(({ style, ...props }, ref) => (
  <Box style={{ border: "none", ...style }} bg="primary" p={2} borderRadius="normal" as="button" ref={ref} {...props} />
))

Button.displayName = "Button"
