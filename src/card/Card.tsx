import React, { FC, ComponentProps } from "react"
import { Disclosure } from "../disclosure/Disclosure"
import { Surface } from "../surface/Surface"
import { Box } from ".."

export const Card: FC<ComponentProps<typeof Box>> = ({children}) => <Disclosure>
  <Surface
    borderRadius="normal"
    boxShadow="subtle"
    width="6"
    height="6">
    {children}
  </Surface>
</Disclosure>