import React, { FC, useEffect, ComponentProps } from "react"
import { Box } from "../box/Box"
import { ToastItem } from "./models"
import { Text } from "../text/Text"
import { Heading } from "../heading/Heading"
import { Fixture, Vertical, Horizontal } from "../fixture/Fixture"
import { useTheme } from "../theme/useTheme"
import { ensureArray, milliseconds } from "../_common/helpers"
import { Button } from "../button/Button"

interface Props extends ToastItem, ComponentProps<typeof Box> {
  id?: string
  remove?: (id: string) => void
}

// TODO: Redesign this component, and create a context and composition, think how it should work and so on. Deprecate from this package.

export const Toast: FC<Props> = ({ message, closeButtonProps = {}, title, children, id, duration, remove, style, ...props }) => {
  const {
    theme: { shadows, sizes, timings, radii, colors }
  } = useTheme()
  const { vertical: closeButtonVertical = Vertical.Top, horizontal: closeButtonHorizontal = Horizontal.End, ...otherCloseButtonProps } = closeButtonProps

  useEffect(() => {
    if (!remove || duration === 0) {
      return
    }
    const removeTimer = setTimeout(() => remove(id), milliseconds(duration ?? timings.message))
    return () => clearTimeout(removeTimer)
  }, [duration, id, remove, timings])

  return (
    <Box
      style={[
        {
          backgroundColor: colors.primary,
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
          <Button onClick={() => remove(id)} style={{ margin: sizes[1] }} {...otherCloseButtonProps}>
            ✖
          </Button>
        </Fixture>
      )}
    </Box>
  )
}
