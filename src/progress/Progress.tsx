import React, { FC } from "react"
import { Box } from "../box/Box"
import { motion } from "framer-motion"
import { useTheme } from "../theme/useTheme"

interface Props {
  value?: number
}

export const Progress: FC<Props> = ({ value = 100 }) => {
  const {
    theme: { sizes }
  } = useTheme()
  return (
    <Box
      style={{
        height: sizes[2],
        background: "gray"
      }}
      aria-valuemin={0}
      aria-valuemax={0}
      aria-valuenow={value}
      aria-valuetext={`${value}%`}
      role="progressbar">
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
        <Box
          style={{
            height: sizes[2],
            width: "100%",
            background: "tomato"
          }}
        />
      </motion.div>
    </Box>
  )
}
