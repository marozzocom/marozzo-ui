import React, { FC, useRef, useEffect, useCallback } from "react"
import { Box } from "../../box/Box"
import { useButton } from "../useButton"
import { Ripple as RippleType } from "../models/ripple"
import { keyframes } from "@emotion/core"
import Color from "color"
import { ensureArray } from "../../_common/helpers"
import { useTheme } from "../../theme"

interface Props extends RippleType {
  id: string
}

const focus = keyframes({
  "0%": {},
  "100%": {
    transform: "scale(2.25)"
  }
})

export const Ripple: FC<Props> = ({ clickX, clickY, dismounting, id }) => {
  const {
    theme: { colors }
  } = useTheme()

  const { fadeOutRipple, removeRipple, buttonElement, rippleDuration, minimumRippleVisibleDuration, dimensions, rippleStyles } = useButton()

  const { width, height } = dimensions

  const removeTimeout = useRef<ReturnType<typeof setTimeout>>()

  const handleRemove = useCallback(() => {
    fadeOutRipple(id)
    removeTimeout.current = setTimeout(() => removeRipple(id), rippleDuration + minimumRippleVisibleDuration)
  }, [fadeOutRipple, id, minimumRippleVisibleDuration, removeRipple, rippleDuration])

  useEffect(() => {
    const current = buttonElement.current
    addEventListener("mouseup", handleRemove)
    current.addEventListener("mouseleave", handleRemove)
    return () => {
      clearTimeout(removeTimeout.current)
      removeEventListener("mouseup", handleRemove)
      current.removeEventListener("mouseleave", handleRemove)
    }
  }, [buttonElement, fadeOutRipple, handleRemove, id, minimumRippleVisibleDuration, removeRipple, rippleDuration])

  const position =
    width >= height
      ? {
          width,
          height: 0,
          paddingBottom: "100%",
          left: `calc(-50% + ${clickX}px)`,
          top: -width / 2 + clickY
        }
      : {
          width: 0,
          height,
          paddingLeft: height,
          top: `calc(-50% + ${clickY}px)`,
          left: -height / 2 + clickX
        }

  return (
    <Box
      style={[
        {
          position: "absolute",
          overflow: "hidden",
          display: "block",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          "&::after": {
            content: `""`,
            background: Color(colors.effect)
              .alpha(0.15)
              .toString(),
            boxShadow: Color(colors.effect)
              .alpha(0.25)
              .toString(),
            animation: `${focus} ${rippleDuration}ms ease-out forwards`,
            position: "absolute",
            borderRadius: "50%",
            transform: "scale(0.01)",
            ...(dismounting && { opacity: 0 }),
            transition: `opacity 300ms ease-out ${minimumRippleVisibleDuration}ms`,
            ...position
          }
        },
        ...ensureArray(rippleStyles)
      ]}
    />
  )
}
