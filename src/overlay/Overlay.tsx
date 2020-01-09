import React, { ComponentProps, FC } from "react"
import { Box } from "../box/Box"
import { Transition } from "../transition/Transition"
import { OverlayRaw } from "./OverlayRaw"

export const Overlay: FC<ComponentProps<typeof Box>> = props => (
  <Transition>
    <OverlayRaw {...props} />
  </Transition>
)
