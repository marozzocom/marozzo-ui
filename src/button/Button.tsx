/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Box } from "box/Box"
import { FC } from "react"

export const Button: FC<any> = (props) => <Box css={{color: "primary" }} m={2} as="button" {...props}>{props.children}</Box>