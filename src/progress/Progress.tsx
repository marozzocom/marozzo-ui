import React, { FC } from "react"
import { Box } from "../box/Box"
import { motion } from "framer-motion"

interface Props {
  value?: number
}

export const Progress: FC<Props> = ({ value = 100 }) => (
  <Box height="2" bg="gray" aria-valuemin={0} aria-valuemax={0} aria-valuenow={value} aria-valuetext={`${value}%`} role="progressbar">
    <motion.div
      initial={{
        x: "-100%"
      }}
      animate={{
        x: `-${100 - value}%`
      }}
      transition={{
        duration: 0.2,
        type: "tween"
      }}>
      <Box height="2" width="100%" bg="tomato" />
    </motion.div>
  </Box>
)
