import React, { FC, useMemo } from "react"
import { Box } from "../box/Box"
import { Portal } from "../portal/Portal"
import { Disclosure } from "../disclosure/Disclosure"

interface Props {
  open?: boolean
  key?: string
}

export const Drawer: FC<Props> = ({ open = true, key, children }) => (
  <Portal>
    <Disclosure open={open} key={key}>
      <Box width="6" boxShadow="normal">{children}</Box>
    </Disclosure>
  </Portal>
)