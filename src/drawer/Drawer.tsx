import React, { FC, useMemo } from "react"
import { Box } from "../box/Box"
import { Portal } from "../portal/Portal"
import { Disclosure } from "../disclosure/Disclosure"
import { useTheme } from "emotion-theming"
import { ITheme } from "../themes/default"

interface Props {
  open?: boolean
  key?: string
}

export const Drawer: FC<Props> = ({ open = true, key, children }) => {
  const theme = useTheme<ITheme>()
  
  return (
  <Portal>
    <Disclosure animation={theme.disclosures.drawer} open={open} key={key}>
      <Box width="6" boxShadow="normal">{children}</Box>
    </Disclosure>
  </Portal>
)}