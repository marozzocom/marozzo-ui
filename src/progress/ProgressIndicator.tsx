import React, { FC, ComponentProps } from "react"
import { Disclosure } from "../disclosure/Disclosure"
import { Progress } from "./Progress"
import { useProgress } from "./useProgress"
import { Box } from "../box/Box"

export const ProgressIndicator: FC<ComponentProps<typeof Box>> = ({ ...props }) => {
  const { active } = useProgress()
  return <Disclosure>{active && <Progress {...props} />}</Disclosure>
}
