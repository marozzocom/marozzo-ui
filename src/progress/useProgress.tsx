import React, { useState, createContext, useEffect } from "react"
import { dissociate } from "../helpers"

interface Operations {
  [id: string]: boolean
}

export const ProgressContext = createContext(null)

export const useProgress = () => {
  const [operations, setOperations] = useState<Operations>({})
  const [active, setActive] = useState(false)

  const start = (id: string) => setOperations({ ...operations, [id]: true })

  const stop = (id: string) => setOperations({...dissociate(id)(operations)})

  useEffect(() => setActive(Object.keys(operations).length > 0), [operations])

  return { start, stop, operations, active }
}