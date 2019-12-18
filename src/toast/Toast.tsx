import React, { FC, useEffect } from "react"
import { Box } from "../box/Box"
import { Toast as IToast } from "./models"
import { Text } from "../text/Text"
import { Close } from "../close/Close"
import { useTheme } from "emotion-theming"
import { ITheme } from "../theme/DefaultTheme"

interface Props extends IToast {
  id?: string
  remove?: (id: string) => void
}

export const Toast: FC<Props> = ({ message, children, id, remove }) => {
  const { timings } = useTheme<ITheme>()

  useEffect(() => {
    const removeTimer = setTimeout(() => remove(id), timings.toast)
    return () => clearTimeout(removeTimer)
  }, [])

  return (
    <Box borderRadius="normal" backgroundColor="tomato">
      <Text>{message}</Text>
      {children}
      {remove && id && <Close onClick={() => remove(id)} />}
    </Box>
  )
}