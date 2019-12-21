import React, { FC, useEffect, ComponentProps } from "react"
import { Box } from "../box/Box"
import { ToastItem } from "./models"
import { Text } from "../text/Text"
import { Close } from "../close/Close"
import { Heading } from "../heading/Heading"
import { timings } from "../constants"

interface Props extends ToastItem, ComponentProps<typeof Box> {
  id?: string
  remove?: (id: string) => void
}

export const Toast: FC<Props> = ({ message, title, children, id, duration = timings.toast, remove }) => {
  remove && useEffect(() => {
    const removeTimer = setTimeout(() => remove(id), duration)
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