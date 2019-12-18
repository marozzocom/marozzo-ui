import React, { FC } from "react"
import { Disclosure } from "../disclosure/Disclosure"
import { Progress } from "./Progress"
import { useProgress } from "./useProgress"

export const ProgressIndicator: FC<{}> = () => {
  const { active } = useProgress()
  return <Disclosure>
  {active && <Progress />}
</Disclosure>
} 