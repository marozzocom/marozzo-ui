import React, { FC, useEffect } from "react"
import { useProgress } from "./useProgress"
import nanoid from "nanoid"

const id = nanoid()

export const ShowProgress: FC<{}> = () => {
  const { start, stop } = useProgress()
  useEffect(() => {
    start(id)
    return () => {
      stop(id)
    }
  }, [])

  return null
}
