import React, { FC, ComponentProps } from "react"
import { Disclosure } from "../disclosure/Disclosure"
import { Box } from ".."
import { CardRaw } from "./CardRaw"

export const Card: FC<ComponentProps<typeof Box>> = ({ children, ...props }) => {
  return (
    <Disclosure>
      <CardRaw {...props}>{children}</CardRaw>
    </Disclosure>
  )
}
