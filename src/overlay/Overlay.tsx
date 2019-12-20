import React, { ComponentProps, FC } from "react"
import { Box } from "../box/Box"
import { Disclosure } from "../disclosure/Disclosure"

export const Overlay: FC<ComponentProps<typeof Box>> = ({ ...props }) => <Disclosure><Box css={{ pointerEvents: "none" }} bg="overlay" position="fixed" top="0" right="0" bottom="0" left="0" {...props}/></Disclosure>