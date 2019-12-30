import React, { FC, ComponentProps } from "react"
import { Icon } from "../icon/Icon"
import { Button } from "../button/Button"
import { useTheme } from "../theme/useTheme"
import { ensureArray } from "../_common/helpers"
import { Box } from "../box/Box"

// TODO: Default localization?

export const Close: FC<ComponentProps<typeof Box>> = ({ onClick, style, ...props }) => {
  const {
    theme: { sizes }
  } = useTheme()

  return (
    <Button
      onClick={onClick}
      aria-label={props["aria-label"] ?? "Close"}
      style={[
        {
          background: "transparent",
          width: sizes[3],
          height: sizes[3],
          padding: sizes[1],
          margin: sizes[1]
        },
        ...ensureArray(style)
      ]}
      {...props}>
      <Icon icon="Close" />
    </Button>
  )
}
