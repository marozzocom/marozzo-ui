import React from "react"
import { CSSObject } from "@emotion/core"
import styled from "@emotion/styled"
import { forwardRef, useMemo } from "react"
import { useTheme } from "../theme"
import { ensureArray } from "../_common/helpers"
import { motion, MotionProps, Variants, AnimationControls } from "framer-motion"

interface BoxProps<T> {
  target?: string
  as?: React.ElementType
  style?: CSSObject | CSSObject[]
  motionProps?: MotionProps
  variants?: Variants
  animate?: AnimationControls
}

interface Props<T = HTMLElement> extends BoxProps<T>, Omit<React.AllHTMLAttributes<T>, keyof BoxProps<T> | "type" | "value"> {}

export const MotionBox = forwardRef<Props, any>(({ motionProps, variants, animate, as = "div", style, children, ...rest }, ref) => {
  const { breakpoints } = useTheme()
  const styles = useMemo(
    () =>
      breakpoints([
        {
          boxSizing: "border-box",
          position: "relative",
          minWidth: 0,
          pointerEvents: "all"
        },
        ensureArray(style)
      ]),
    [breakpoints, style]
  )

  const MotionComponent = styled((motion as any)[as])`
    ${styles}
  `

  return (
    <MotionComponent ref={ref} motionProps={motionProps} variants={variants} animate={animate} {...rest}>
      {children}
    </MotionComponent>
  )
})

MotionBox.displayName = "MotionBox"
