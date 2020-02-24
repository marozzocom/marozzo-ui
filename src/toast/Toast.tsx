import React, { FC, useEffect, ComponentProps } from "react"
import { Box } from "../box/Box"
import { ToastItem } from "./models"
import { Text } from "../text/Text"
import { Close } from "../close/Close"
import { Heading } from "../heading/Heading"
import { Surface } from "../surface/Surface"
import { Fixture, Vertical, Horizontal, FixtureProps } from "../fixture/Fixture"
import { useTheme } from "../theme/useTheme"
import { ensureArray } from "../_common/helpers"

interface CloseButtonProps extends ComponentProps<typeof Close>, Omit<FixtureProps, "type"> {}

interface Props extends ToastItem, ComponentProps<typeof Box> {
  id?: string
  closeButtonProps?: CloseButtonProps
  remove?: (id: string) => void
}

export const Toast: FC<Props> = ({ message, closeButtonProps = {}, title, children, id, duration, remove, style, ...props }) => {
  const {
    theme: { shadows, sizes, timings, radii }
  } = useTheme()
  const { vertical: closeButtonVertical = Vertical.Top, horizontal: closeButtonHorizontal = Horizontal.End, ...otherCloseButtonProps } = closeButtonProps

  useEffect(() => {
    if (!remove) {
      return
    }
    const removeTimer = setTimeout(() => remove(id), duration ?? timings.message)
    return () => clearTimeout(removeTimer)
  }, [duration, id, remove, timings])

  return (
    <Surface
      style={[
        {
          borderRadius: radii.normal,
          boxShadow: shadows.subtle,
          margin: sizes[1],
          padding: sizes[1],
          width: sizes[7],
          height: sizes[5],
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
