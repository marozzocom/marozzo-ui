import React, { FC, ComponentProps } from "react"
import { Box } from "../box/Box"

export const Flex: FC<ComponentProps<typeof Box>> = ({children}) => <Box style={{ display: "flex" }}>{children}</Box>