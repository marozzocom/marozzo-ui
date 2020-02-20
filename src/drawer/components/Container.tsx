import React, { FC, ComponentProps } from "react"
import { Surface } from "../../surface/Surface"
import { Close } from "../../close/Close"
import { useFocusTrap } from "../../_common/useFocusTrap"
import { Fixture, Vertical, Horizontal } from "../../fixture/Fixture"
import { Box } from "../../box/Box"
import { useEscape } from "../../_common/useEscape"
import { useTheme } from "../../theme/useTheme"
import { ensureArray } from "../../_common/helpers"

interface Props extends ComponentProps<typeof Box> {
  close?: () => void
}

export const Container: FC<Props> = ({ children, style, close, ...props }) => {
  const {
    theme: { sizes }
  } = useTheme()

  const focusTrap = useFocusTrap()
  useEscape(close)

  return (
    <Surface
      ref={focusTrap}
      style={[
        {
          padding: sizes[2],
          width: sizes[6],
          boxShadow: "subtle"
        },
        ...ensureArray(style)
      ]}
      {...props}>
      {children}
      {close && (
        <Fixture vertical={Vertical.Top} horizontal={Horizontal.End}>
          <Close onClick={close} />
        </Fixture>
      )}
    </Surface>
  )
}
