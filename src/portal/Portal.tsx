import React, { FC } from "react"
import { createPortal } from "react-dom"

interface Props {
  target?: Element,
  key?: string
}

export const Portal: FC<Props> = ({target=document.body, key, children}) => createPortal(children, target, key)