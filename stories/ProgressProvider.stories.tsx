import React from "react"
import { Button } from "../src/button/Button"
import { Box } from "../src/box/Box"
import { ProgressProvider } from "../src/progress/ProgressProvider"
import { useProgress } from "../src/progress/useProgress"
import nanoid from "nanoid"
import { useTheme } from "../src/theme/useTheme"
import { Fixture } from "../src"

const Loader = () => {
  const {
    theme: { colors, sizes }
  } = useTheme()

  return (
    <Box
      style={{
        background: colors.primary,
        width: "100vw",
        height: sizes[3]
      }}>
      🍩
    </Box>
  )
}

export const GlobalProgress = () => {
  return (
    <ProgressProvider component={<Loader />}>
      <Controls />
    </ProgressProvider>
  )
}

export default {
  component: GlobalProgress,
  title: "Global Progress"
}

const Controls = () => {
  const { start, stop } = useProgress()

  const queue = () => {
    const id = nanoid()
    start(id)
    setTimeout(() => stop(id), 3000)
  }

  return (
    <Fixture>
      <Button onClick={queue}>{"queue"}</Button>
    </Fixture>
  )
}
