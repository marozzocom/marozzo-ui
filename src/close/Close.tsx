import React, { FC, DOMAttributes } from "react"
import { Box } from "../box/Box"
import { Icon } from "../icon/Icon"

interface Props<T = HTMLButtonElement> extends DOMAttributes<T> {}

export const Close: FC<Props> = ({onClick}) => <Box onClick={onClick} as="button" aria-label="Close"><Icon icon="Close"/></Box> // TODO: aria label need localization