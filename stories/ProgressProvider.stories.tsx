import React from "react"
import { Button } from "../src/button/Button"
import { Box } from "../src/box/Box"
import { ProgressProvider } from "../src/progress/ProgressProvider"
import { useProgress } from "../src/progress/useProgress"
import nanoid from "nanoid"
import { useTheme } from "../src/theme/useTheme"
import { Transition } from "../src"

export const GlobalProgress = () => {
  return (
    <ProgressProvider>
      <Controls />
    </ProgressProvider>
  )
}

export default {
  component: GlobalProgress,
  title: "Global Progress"
}

const Controls = () => {
  const {
    theme: { colors, sizes }
  } = useTheme()
  const { start, stop, queueLength, active } = useProgress()

  const queue = () => {
    const id = nanoid()
    start(id)
    setTimeout(() => stop(id), 3000)
  }

  return (
    <>
      <Button onClick={queue}>{"queue"}</Button>
      <Transition>
        {active && (
          <Box
            style={{
              background: colors.primary,
              width: sizes[7],
              height: sizes[3]
            }}>
            Operations: {queueLength}
          </Box>
        )}
      </Transition>
    </>
  )
}
