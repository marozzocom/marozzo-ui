import React, { FC, ComponentProps } from "react"
import { Transition } from "../transition/Transition"
import { Box } from "../box/Box"
import { CardRaw } from "./CardRaw"

export const Card: FC<ComponentProps<typeof Box>> = ({ children, ...props }) => {
  return (
    <Transition>
      <CardRaw {...props}>{children}</CardRaw>
    </Transition>
  )
}
