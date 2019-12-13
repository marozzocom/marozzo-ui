import React, { FC, useEffect, useState } from "react"
import { Progress } from "../progress/Progress"
import { Box } from "../box/Box"

export const PageProgress: FC<{}> = () => {
  const [progress, setProgress] = useState(0)
  const source = document.scrollingElement

  let timer: number

  const updateProgress = () => {
    timer && cancelAnimationFrame(timer)
    timer = requestAnimationFrame(() => setProgress(Math.floor(source.scrollTop / (source.scrollHeight - source.clientHeight) * 100)))
  }

  useEffect(() => {
    addEventListener("scroll", updateProgress)
    addEventListener("resize", updateProgress)
    return (() => {
      removeEventListener("scroll", updateProgress)
      removeEventListener("resize", updateProgress)
      clearTimeout(timer)
    })
  }, [])

  return <Box position="fixed" top="0" left="0" right="0"><Progress value={progress} /></Box>
}