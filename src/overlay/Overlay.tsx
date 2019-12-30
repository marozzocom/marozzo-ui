import React, { ComponentProps, FC } from "react"
import { Box } from "../box/Box"
import { Disclosure } from "../disclosure/Disclosure"
import { OverlayRaw } from "./OverlayRaw"

export const Overlay: FC<ComponentProps<typeof Box>> = props => (
  <Disclosure>
    <OverlayRaw {...props} />
  </Disclosure>
)
