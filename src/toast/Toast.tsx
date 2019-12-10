import React, { FC } from "react"
import { Box } from "../box/Box"

enum ToastType {
  Default,
  Success,
  Error
}

export const Toast: FC<{}> = (props) => <Box borderRadius="normal" backgroundColor="tomato">{props.children}</Box>