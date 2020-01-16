import React, { FC, ComponentProps, useEffect } from "react"
import { Surface } from "../surface/Surface"
import { Close } from "../close/Close"
import { useFocusTrap } from "../_common/useFocusTrap"
import { Fixture, Vertical, Horizontal } from "../fixture/Fixture"
import { Box } from "../box/Box"
import { useEscape } from "../_common/useEscape"
import { useTheme } from "../theme/useTheme"
import { ensureArray } from "../_common/helpers"
import { useVariants, VariantsProvider } from "../variants"

interface Props extends ComponentProps<typeof Box> {
  close?: () => void
}

export const DrawerRaw: FC<Props> = ({ children, style, close, ...props }) => {
  const {
    theme: { sizes }
  } = useTheme()
  const variants = useVariants()

  const focusTrap = useFocusTrap()
  useEscape(close)

  return (
    <Surface
      innerRef={focusTrap}
      style={[
        {
          padding: sizes[2],
          width: sizes[6],
          boxShadow: "subtle"
        },
        ...ensureArray(style)
      ]}
      {...props}>
      <h2>{JSON.stringify(variants)}</h2>
      {children}
      {close && (
        <Fixture vertical={Vertical.Top} horizontal={Horizontal.End}>
          <Close onClick={close} />
        </Fixture>
      )}
    </Surface>
  )
}
