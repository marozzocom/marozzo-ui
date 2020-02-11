import { useContext, useMemo } from "react"
import { ProgressContext } from "./ProgressProvider"

export const useProgress = () => {
  const { operations, start, stop } = useContext(ProgressContext)
  const active = useMemo(() => Object.keys(operations).length > 0, [operations])
  const queueLength = useMemo(() => Object.keys(operations).length, [operations])

  return { active, start, stop, queueLength }
}
