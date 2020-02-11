import React, { FC, useState, createContext, useCallback } from "react"
import { dissociate } from "../_common/helpers"

export interface Operations {
  [id: string]: boolean
}

const ProgressContext = createContext<{
  operations: Operations
  start: (operations: Operations) => void
  stop: (id: string) => void
}>(null)

const ProgressProvider: FC<{}> = ({ children }) => {
  const [operations, setOperations] = useState<Operations>({})

  const start = useCallback(operations => setOperations(currentOperations => ({ ...currentOperations, ...operations })), [])
  const stop = useCallback(id => setOperations(currentOperations => ({ ...dissociate(id)(currentOperations) })), [])

  return <ProgressContext.Provider value={{ operations, start, stop }}>{children}</ProgressContext.Provider>
}

export { ProgressContext, ProgressProvider }
