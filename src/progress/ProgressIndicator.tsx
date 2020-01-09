import React, { FC, ComponentProps } from "react"
import { Transition } from "../transition/Transition"
import { Progress } from "./Progress"
import { useProgress } from "./useProgress"
import { Box } from "../box/Box"

export const ProgressIndicator: FC<ComponentProps<typeof Box>> = ({ ...props }) => {
  const { active } = useProgress()
  return <Transition>{active && <Progress {...props} style={{ width: "100vw" }} />}</Transition>
}
