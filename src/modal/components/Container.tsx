import React, { FC, ComponentProps } from "react"
import { Box } from "../../box/Box"
import { Close } from "./Close"
import { useFocusTrap } from "../../_common/useFocusTrap"
import { Fixture, Vertical, Horizontal } from "../../fixture/Fixture"
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
    <Box
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
    </Box>
  )
}
