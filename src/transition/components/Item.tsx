import React, { FC } from "react"
import { motion } from "framer-motion"
import { useTransition } from "../useTransition"
import { Delay } from "../../delay/Delay"

interface Props {
  index: number
}

export const Item: FC<Props> = ({ children, index }) => {
  const { motionProps, delayChildren } = useTransition()
  const delay = delayChildren * index

  return (
    <Delay delay={delay}>
      <motion.div {...motionProps}>{children}</motion.div>
    </Delay>
  )
}
