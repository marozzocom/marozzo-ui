import React, { FC, ComponentProps } from "react"
import { Progress } from "../progress/Progress"
import { Box } from "../box/Box"
import { useScrollProgress } from "./useScrollProgress"
import { Disclosure } from ".."
import { Fixture, Vertical, FixtureProps } from "../fixture/Fixture"

interface Props extends ComponentProps<typeof Progress>, FixtureProps {}

export const ScrollProgress: FC<Props> = ({ value, type = "fixed", vertical = Vertical.Top, horizontal, ...props }) => {
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
    <Fixture type={type} vertical={vertical} horizontal={horizontal}>
      <Box
        style={{
          width: "100vw"
        }}>
        <Disclosure animation={animation}>{showProgress && <Progress value={progress} {...props} />}</Disclosure>
      </Box>
    </Fixture>
  )
}
