import React, { FC } from "react"
import { Surface } from "../surface/Surface"
import { Close } from "../close/Close"
import { useFocusTrap } from "../_common/useFocusTrap"
import { Fixture, Position } from "../fixture/Fixture"
import { Box } from "../box/Box"
import { useEscape } from "../_common/useEscape"
import { useTheme } from "../theme/useTheme"

interface Props {
  close?: () => void
}

export const DrawerRaw: FC<Props> = ({ children, close }) => {
  const {
    theme: { sizes }
  } = useTheme()

  const focusTrap = useFocusTrap()
  useEscape(close)

  return (
    <Surface
      ref={focusTrap}
      style={{
        width: sizes[6],
        boxShadow: "subtle"
      }}>
      <Box>{children}</Box>
      {close && (
        <Fixture position={Position.TopRight}>
          <Close onClick={close} />
        </Fixture>
      )}
    </Surface>
  )
}
