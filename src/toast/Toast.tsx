import React, { FC, useEffect } from "react"
import { Box } from "../box/Box"
import { ToastData } from "./models"
import { Text } from "../text/Text"
import { Close } from "../close/Close"
import { useTheme } from "emotion-theming"
import { Theme } from "../theme/models"
import { useToast } from "./useToast"
import { Heading } from "../heading/Heading"

interface Props extends ToastData {
  id?: string
  remove?: (id: string) => void
}

export const Toast: FC<Props> = ({ message, title, children, id }) => {
  const { timings } = useTheme<Theme>()
  const { remove } = useToast()

  remove && useEffect(() => {
    const removeTimer = setTimeout(() => remove(id), timings.toast)
    return () => clearTimeout(removeTimer)
  }, [])

  return (
    <Box borderRadius="normal" backgroundColor="tomato">
      <Heading>{title}</Heading>
      <Text>{message}</Text>
      {children}
      {remove && id && <Close onClick={() => remove(id)} />}
    </Box>
  )
}