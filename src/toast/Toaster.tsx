import React, { FC } from "react"
import { Disclosure } from "../disclosure/Disclosure"
import { Toast } from "./Toast"
import { useToast } from "./useToast"
import { MotionProps } from "framer-motion"
import { Flex } from "../flex/Flex"
import { Box } from ".."

export const Toaster: FC<{}> = () => {
  const { toasts, remove } = useToast()

  const animation: MotionProps = {
    initial: { opacity: -0.5, height: "0", y: "50px", overflow: "hidden", position: "relative" },
    animate: { opacity: 1, height: "100%", y: 0 },
    exit: { opacity: -0.5, height: "0", y: "50px" },
    transition: {
      type: "tween",
      duration: "0.3"
    }
  }

  // TODO: These styles need refinement

  return (
    <Flex flexDirection="column" position="fixed" right="0" bottom="0" left="0" justifyContent="flex-end">
      <Disclosure id="toaster" animation={animation}>
        {Object.entries(toasts).map(([id, { message, title, duration }]) => (
          <Toast key={id} id={id} duration={duration} message={message} title={title} remove={remove} />
        ))}
      </Disclosure>
    </Flex>
  )
}
