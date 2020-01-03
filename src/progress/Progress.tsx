import React, { FC, ComponentProps } from "react"
import { Box } from "../box/Box"
import { motion } from "framer-motion"
import { useTheme } from "../theme/useTheme"
import { ensureArray } from "../_common/helpers"

interface Props extends ComponentProps<typeof Box> {
  value?: number
  indicatorProps?: ComponentProps<typeof Box>
}

export const Progress: FC<Props> = ({ style, indicatorProps = {}, value = 100, ...props }) => {
  const {
    theme: { sizes }
  } = useTheme()
  const { style: indicatorStyle, ...otherIndicatorProps } = indicatorProps
  return (
    <Box
      style={[
        {
          height: sizes[2],
          background: "gray"
        },
        ...ensureArray(style)
      ]}
      aria-valuemin={0}
      aria-valuemax={0}
      aria-valuenow={value}
      aria-valuetext={`${value}%`}
      role="progressbar"
      {...props}>
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
          style={[
            {
              height: sizes[2],
              width: "100%",
              background: "tomato"
            },
            ...ensureArray(indicatorProps.style)
          ]}
          {...otherIndicatorProps}
        />
      </motion.div>
    </Box>
  )
}
