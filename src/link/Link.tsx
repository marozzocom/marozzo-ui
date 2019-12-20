import React, { FC, ComponentProps, forwardRef, RefAttributes } from "react"
import { Box } from "../box/Box"

interface Props {
  to: string
  newTab?: boolean
}

interface PropsWithHTMLAttributes extends Props {
  href: string
}

export const Link: FC<Props> = forwardRef<HTMLElement, PropsWithHTMLAttributes>(({to, newTab, ...props}, ref) => <Box as="a" href={to} target={newTab ? "_blank" : null} ref={ref} {...props}/>)