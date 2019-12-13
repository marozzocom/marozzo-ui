import React, { FC } from "react"
import { Box } from "../box/Box"

interface Props {
  value?: number
}

export const Progress: FC<Props> = ({ value = 100}) => <Box height="2" bg="gray" aria-valuemin={0} aria-valuemax={0} aria-valuenow={value} aria-valuetext={`${value}%`} role="progressbar"><Box style={{ transform: `translateX(-${100-value}%)` }} height="2" width="100%" bg="tomato"/></Box>