import React, { FC } from "react"
import { Icon } from "../icon/Icon"
import { Button } from "../button/Button"
import { SpaceProps } from "styled-system"

interface Props<T = HTMLButtonElement> extends React.HTMLAttributes<T>, SpaceProps {}

export const Close: FC<Props> = ({ onClick }, props) => (
  <Button onClick={onClick} bg="transparent" aria-label={props["aria-label"] ?? "Close"} width={2} height={2} p={0}>
    <Icon icon="Close" />
  </Button>
) // TODO: Default localization
