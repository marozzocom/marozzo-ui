import React from "react"
import { MotionBox } from "../src/box/MotionBox"
import { useTheme } from "../src/theme/useTheme"

export default {
  component: MotionBox,
  title: "MotionBox"
}

export const MotionBoxContainer = () => {
  const {
    theme: { sizes, colors }
  } = useTheme()

  const motionProps = {
    initial: { opacity: 0, y: -sizes[1], overflow: "hidden" },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 0, overflow: "hidden" },
    transition: {
      staggerChildren: 0.5,
      type: "tween",
      duration: 2
    }
  }

  return (
    <MotionBox
      {...motionProps}
      style={{
        padding: sizes[3],
        background: colors.secondary
      }}>
      Box
    </MotionBox>
  )
}
