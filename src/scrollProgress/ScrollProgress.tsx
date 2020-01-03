import React, { FC, ComponentProps, useMemo } from "react"
import { Progress } from "../progress/Progress"
import { Box } from "../box/Box"
import { useScrollProgress } from "./useScrollProgress"
import { Disclosure } from ".."
import { Fixture, Vertical, FixtureProps } from "../fixture/Fixture"

interface Props extends ComponentProps<typeof Progress>, FixtureProps {}

export const ScrollProgress: FC<Props> = ({ type = "fixed", vertical = Vertical.Top, horizontal, ...props }) => {
  const { progress, showProgress } = useScrollProgress()

  const animation = useMemo(
    () => ({
      initial: { opacity: 0, x: 0 },
      animate: { opacity: 1, x: 0 },
      exit: progress === 100 ? { x: "100%" } : { opacity: 0 },
      transition: {
        type: "tween",
        duration: 0.6
      }
    }),
    [showProgress]
  )

  return (
    <Fixture type={type} vertical={vertical} horizontal={horizontal}>
      <Box
        style={{
          width: "100%"
        }}>
        <Disclosure animation={animation}>{showProgress && <Progress value={progress} {...props} />}</Disclosure>
      </Box>
    </Fixture>
  )
}
