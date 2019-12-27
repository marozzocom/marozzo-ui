import React, { FC, useEffect, ComponentProps } from "react"
import { Box } from "../box/Box"
import { ToastItem } from "./models"
import { Text } from "../text/Text"
import { Close } from "../close/Close"
import { Heading } from "../heading/Heading"
import { timings } from "../_common/constants"
import { Surface } from ".."
import { Fixture, Position } from "../fixture/Fixture"
import { useTheme } from "../theme/useTheme"

interface Props extends ToastItem, ComponentProps<typeof Box> {
  id?: string
  remove?: (id: string) => void
}

export const Toast: FC<Props> = ({ message, title, children, id, duration = timings.toast, remove }) => {
  const { theme } = useTheme()
  remove &&
    useEffect(() => {
      const removeTimer = setTimeout(() => remove(id), duration)
      return () => clearTimeout(removeTimer)
    }, [])

  return (
    <Surface
      style={{
        borderRadius: theme.radii.normal,
        boxShadow: theme.shadows.subtle,
        margin: theme.sizes[2],
        padding: theme.sizes[2],
        width: theme.sizes[7],
        height: theme.sizes[4],
        flex: "0 0 auto"
      }}>
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
