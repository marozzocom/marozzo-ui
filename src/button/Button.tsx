/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Box } from "../box/Box"
import { FC, forwardRef, ComponentProps } from "react"

export const Button: FC<ComponentProps<typeof Box>> = forwardRef(({...props}) => <Box css={{color: "primary" }} m={2} as="button" {...props}/>)

Button.displayName = "Button"