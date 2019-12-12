import React, { FC, useContext, useEffect } from "react"
import { Box } from "../box/Box"
import { Toast as IToast } from "./models"
import { Text } from "../text/Text"
import { Close } from "../close/Close"
import { ToastContext } from "./ToastProvider"
import { useTheme } from "emotion-theming"
import { ITheme } from "../themes/default"

export interface Props extends IToast {
  id: string
}

export const Toast: FC<Props> = ({ message, children, id }) => {
  const { remove } = useContext(ToastContext)
  const { timings } = useTheme<ITheme>()

  useEffect(() => {
    const removeTimer = setTimeout(() => remove(id), timings.toast)
    return () => clearTimeout(removeTimer)
  }, [])

  return (
    <Box borderRadius="normal" backgroundColor="tomato">
      <Text>{message}</Text>
      {children}
      <Close onClick={() => remove(id)} />
    </Box>
  )
}