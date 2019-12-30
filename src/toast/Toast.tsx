import React, { FC, useEffect, ComponentProps } from "react"
import { Box } from "../box/Box"
import { ToastItem } from "./models"
import { Text } from "../text/Text"
import { Close } from "../close/Close"
import { Heading } from "../heading/Heading"
import { timings } from "../_common/constants"
import { Surface } from ".."
import { Fixture, Vertical, Horizontal, FixtureProps } from "../fixture/Fixture"
import { useTheme } from "../theme/useTheme"
import { ensureArray } from "../_common/helpers"

interface CloseButtonProps extends ComponentProps<typeof Close>, Omit<FixtureProps, "type"> {}

interface Props extends ToastItem, ComponentProps<typeof Box> {
  id?: string
  closeButtonProps?: CloseButtonProps
  remove?: (id: string) => void
}

export const Toast: FC<Props> = ({ message, closeButtonProps = {}, title, children, id, duration = timings.toast, remove, style, ...props }) => {
  const { theme } = useTheme()
  const { vertical: closeButtonVertical = Vertical.Top, horizontal: closeButtonHorizontal = Horizontal.End, ...otherCloseButtonProps } = closeButtonProps
  remove &&
    useEffect(() => {
      const removeTimer = setTimeout(() => remove(id), duration)
      return () => clearTimeout(removeTimer)
    }, [])

  return (
    <Surface
      style={[
        {
          borderRadius: theme.radii.normal,
          boxShadow: theme.shadows.subtle,
          margin: theme.sizes[2],
          padding: theme.sizes[2],
          width: theme.sizes[7],
          height: theme.sizes[5],
          flex: "0 0 auto"
        },
        ...ensureArray(style)
      ]}
      {...props}>
      <Heading level={3}>{title}</Heading>
      <Text>{message}</Text>
      {children}

      {remove && id && (
        <Fixture vertical={closeButtonVertical} horizontal={closeButtonHorizontal}>
          <Close onClick={() => remove(id)} {...otherCloseButtonProps} />
        </Fixture>
      )}
    </Surface>
  )
}
