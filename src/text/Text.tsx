import React, { FC, forwardRef } from "react"
import { Box, Props as BoxProps} from "../box/Box"

interface Props extends BoxProps {}

export const Text: FC<Props> = forwardRef(({...props}, ref) => <Box ref={ref} as="p" {...props}/>)
