import React, { ComponentProps } from "react"
import { Transition } from "../transition/Transition"
import { Toast } from "./Toast"
import { MotionProps } from "framer-motion"
import { Stack } from "../stack/Stack"
import { ensureArray } from "../_common/helpers"
import { Toasts } from "./models"
import { Portal } from "../portal/Portal"
import { CSSObject } from "@emotion/core"

interface Props {
  toastProps?: ComponentProps<typeof Toast>
  motionProps?: MotionProps
  style?: CSSObject | Array<CSSObject>
  toasts: Toasts
  remove: (id: string) => void
}

const defaultMotionProps: MotionProps = {
  initial: { opacity: -0.5, height: "0", y: "50px", overflow: "hidden", position: "relative" },
  animate: { opacity: 1, height: "100%", y: 0 },
  exit: { opacity: -0.5, height: "0", y: "50px" },
  transition: {
    type: "tween",
    duration: 0.3
  }
}

export const Toaster = ({ toastProps, style, motionProps = defaultMotionProps, toasts, remove }: Props) => {
  return (
    <Portal>
      <Stack
        style={[
          {
            flexDirection: "column",
            position: "fixed",
            right: 0,
            bottom: 0,
            left: 0,
            justifyContent: "flex-end"
          },
          ...ensureArray(style)
        ]}>
        <Transition motionProps={motionProps}>
          {Object.entries(toasts).map(([id, { message, title, duration }]) => (
            <Toast key={id} id={id} duration={duration} message={message} title={title} remove={remove} {...toastProps} />
          ))}
        </Transition>
      </Stack>
    </Portal>
  )
}
