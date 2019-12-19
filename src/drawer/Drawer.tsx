import React, { FC } from "react"
import { Box } from "../box/Box"
import { Portal } from "../portal/Portal"
import { Disclosure } from "../disclosure/Disclosure"
import { useTheme } from "emotion-theming"
import { Theme } from "../theme/ThemeProvider"
import nanoid from "nanoid"

interface Props {
  open?: boolean
  key?: string
}

export const Drawer: FC<Props> = ({ open = true, key=nanoid(), children }) => {
  const theme = useTheme<Theme>()
  
  return (
  <Portal>
    <Disclosure animation={theme.disclosures.drawer}>
      {open && <Box width="6" boxShadow="normal" key={key}>{children}</Box>}
    </Disclosure>
  </Portal>
)}