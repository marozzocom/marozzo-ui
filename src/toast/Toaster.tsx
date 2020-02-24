import React, { FC, ComponentProps } from "react"
import { Transition } from "../transition/Transition"
import { Toast } from "./Toast"
import { useToast } from "./useToast"
import { MotionProps } from "framer-motion"
import { Stack } from "../stack/Stack"
import { Box } from ".."
import { ensureArray } from "../_common/helpers"

interface Props extends ComponentProps<typeof Box> {
  toastProps?: ComponentProps<typeof Toast>
  motionProps?: MotionProps
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

export const Toaster: FC<Props> = ({ toastProps, style, motionProps = defaultMotionProps, ...props }) => {
  const { toasts, remove } = useToast()

  return (
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
      ]}
      {...props}>
      <Transition motionProps={motionProps}>
        {Object.entries(toasts).map(([id, { message, title, duration }]) => (
          <Toast key={id} id={id} duration={duration} message={message} title={title} remove={remove} {...toastProps} />
        ))}
      </Transition>
    </Stack>
  )
}
