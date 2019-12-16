/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Box } from "../box/Box"
import { FC, forwardRef } from "react"

export const Button: FC<any> = forwardRef(({...props}, ref) => <Box css={{color: "primary" }} m={2} as="button" {...props}/>)