import React, { FC, forwardRef, ComponentProps } from "react"
import { Box } from "../box/Box"

interface Props extends ComponentProps<typeof Box> {}

export const Text: FC<Props> = forwardRef(({...props}, ref) => <Box ref={ref} as="p" {...props}/>)
