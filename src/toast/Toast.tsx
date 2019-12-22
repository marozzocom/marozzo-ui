import React, { FC, useEffect, ComponentProps } from "react"
import { Box } from "../box/Box"
import { ToastItem } from "./models"
import { Text } from "../text/Text"
import { Close } from "../close/Close"
import { Heading } from "../heading/Heading"
import { timings } from "../_common/constants"
import { Surface } from ".."
import { Fixture, Position } from "../fixture/Fixture"

interface Props extends ToastItem, ComponentProps<typeof Box> {
  id?: string
  remove?: (id: string) => void
}

export const Toast: FC<Props> = ({ message, title, children, id, duration = timings.toast, remove }) => {
  remove &&
    useEffect(() => {
      const removeTimer = setTimeout(() => remove(id), duration)
      return () => clearTimeout(removeTimer)
    }, [])

  return (
    <Surface borderRadius="normal" boxShadow="subtle" m={2} p={2} width={7} height={4} flex="0 0 auto">
      <Heading level={3}>{title}</Heading>
      <Text>{message}</Text>
      {children}

      {remove && id && (
        <Fixture position={Position.TopRight}>
          <Close onClick={() => remove(id)} />
        </Fixture>
      )}
    </Surface>
  )
}
