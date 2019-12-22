import { useContext, useMemo } from "react"
import { dissociate } from "../_common/helpers"
import { ProgressContext } from "./ProgressProvider"

export const useProgress = () => {
  try {
    const { operations, setOperations } = useContext(ProgressContext)
    const active = useMemo(() => Object.keys(operations).length > 0, [operations])
    const queueLength = useMemo(() => Object.keys(operations).length, [operations])
    const start = (id: string) => setOperations(currentOperations => ({ ...currentOperations, [id]: true }))
    const stop = (id: string) => setOperations(currentOperations => ({ ...dissociate(id)(currentOperations) }))

    return { active, start, stop, queueLength }
  } catch (error) {
    throw "Failed to read context."
  }
}
