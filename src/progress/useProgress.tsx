import React, { useState, createContext, useEffect } from "react"

interface IOperation {
  [id: string]: boolean
}

export const ProgressContext = createContext(null)

export const useProgress = () => {
  const [operations, setOperations] = useState<IOperation>({})
  const [active, setActive] = useState(false)

  const start = (id: string) => setOperations({ ...operations, [id]: true })

  const stop = (id: string) => {
      const { [id]: removed, ...runningOperations} = operations
      setOperations(runningOperations)
  }

  useEffect(() => setActive(Object.entries(operations).length > 0), [operations])

  return { start, stop, operations, active }
}