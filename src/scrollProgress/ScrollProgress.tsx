import React, { FC } from "react"
import { Progress } from "../progress/Progress"
import { Box } from "../box/Box"
import { useScrollProgress } from "./useScrollProgress"
import { Disclosure } from ".."
import { Position, Fixture } from "../fixture/Fixture"

export const ScrollProgress: FC<{}> = ({}) => {
  const { progress, showProgress } = useScrollProgress()

  const exit = progress === 100 ? { x: "100%" } : { opacity: 0 }

  const animation = {
    initial: { opacity: 0, x: 0 },
    animate: { opacity: 1, x: 0 },
    exit,
    transition: {
      type: "tween",
      duration: 0.6
    }
  }

  return (
    <Fixture type="fixed" position={Position.Top}>
      <Box width="100vw">
        <Disclosure animation={animation}>{showProgress && <Progress value={progress} />}</Disclosure>
      </Box>
    </Fixture>
  )
}
