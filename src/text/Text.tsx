import React, { FC } from "react"
import { Box } from "../box/Box"

export const Text: FC<{}> = ({ children }) => <Box as="p">{children}</Box> 