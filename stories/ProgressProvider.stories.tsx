import React from "react"
import { Button } from "../src";
import { ProgressProvider } from "../src/progress/ProgressProvider"
import { ProgressIndicator } from "../src/progress/ProgressIndicator"
import { useProgress } from "../src/progress/useProgress";
import nanoid from "nanoid";

export const GlobalProgress = () => {

  return (
    <ProgressProvider>
      <Controls />
      <ProgressIndicator />
    </ProgressProvider>
  )
}

export default {
  component: GlobalProgress,
  title: "Global Progress",
};

const Controls = () => {
  const { start, stop, queueLength } = useProgress()

  const queue = () => {
    const id = nanoid()
    start(id)
    setTimeout(() => stop(id), 3000)
  }

return <><Button onClick={queue}>{"queue"}</Button>Operations: {queueLength}</>
}