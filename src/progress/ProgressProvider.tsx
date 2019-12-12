import React, { FC } from "react"
import { Progress } from "./Progress"
import { ProgressContext, useProgress } from "./useProgress"
import { Disclosure } from "../disclosure/Disclosure"

export const ProgressProvider: FC<{}> = ({ children }) => {
  const { active, start, stop } = useProgress()

  return (
    <ProgressContext.Provider value={{ active, start, stop }}>
      <Disclosure open={active}>
        <Progress />
      </Disclosure>
      {children}
    </ProgressContext.Provider>
  )
}