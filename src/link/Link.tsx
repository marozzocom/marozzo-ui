import React, { FC, ComponentProps, forwardRef } from "react"
import { Box } from "../box/Box"

interface Props extends ComponentProps<typeof Box> {
  to?: string
  newTab?: boolean
}

interface PropsWithHTMLAttributes extends Props {
  href: string
}

export const Link: FC<Props> = forwardRef<HTMLElement, PropsWithHTMLAttributes>(({ to, newTab, style, ...props }, ref) => (
  <Box as="a" href={to} target={newTab ? "_blank" : null} ref={ref} style={{ cursor: "pointer", ...style }} {...props} />
))
