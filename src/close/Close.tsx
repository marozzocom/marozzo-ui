import React, { FC } from "react"
import { Icon } from "../icon/Icon"
import { Button } from "../button/Button"
import { useTheme } from "../theme/useTheme"

interface Props<T = HTMLButtonElement> extends React.HTMLAttributes<T> {}

// TODO: Default localization?

export const Close: FC<Props> = ({ onClick }, props) => {
  const {
    theme: { sizes }
  } = useTheme()
  return (
    <Button
      onClick={onClick}
      aria-label={props["aria-label"] ?? "Close"}
      style={{
        background: "transparent",
        width: sizes[3],
        height: sizes[3],
        padding: sizes[1],
        margin: sizes[1]
      }}>
      <Icon icon="Close" />
    </Button>
  )
}
