import React, { FC, ComponentProps } from "react"
import { Box } from "../box/Box"

export const Flex: FC<ComponentProps<typeof Box>> = ({children, ...props}) => <Box style={{ display: "flex" }} {...props}>{children}</Box>