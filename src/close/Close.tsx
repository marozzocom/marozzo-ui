import React, { FC } from "react"
import { Icon } from "../icon/Icon"
import { Button } from "../button/Button"
import { SpaceProps } from "styled-system"

interface Props<T = HTMLButtonElement> extends React.HTMLAttributes<T>, SpaceProps {}

// TODO: Default localization
// TODO: Standardize the way of creating focus styles (pseudo styles)

export const Close: FC<Props> = ({ onClick }, props) => (
  <Button
    onClick={onClick}
    bg="transparent"
    aria-label={props["aria-label"] ?? "Close"}
    width={3}
    height={3}
    p={1}
    m={1}
    style={{
      "&:focus": {
        outline: "none",
        background: "rgba(0, 0, 0, 0.1)"
      }
    }}>
    <Icon icon="Close" />
  </Button>
)
