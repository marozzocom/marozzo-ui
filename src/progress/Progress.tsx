import React, { FC } from "react"
import { Box } from "../box/Box"

interface Props {
  value?: number
}

export const Progress: FC<Props> = ({ value = 100}) => <Box height="2" bg="gray"><Box height="2" width={`${value}%`} bg="tomato"/></Box>