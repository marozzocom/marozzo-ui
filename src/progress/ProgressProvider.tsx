import React, { FC, useState, useEffect, createContext, useContext } from "react"
import { Progress } from "./Progress"
import { Disclosure } from "../disclosure/Disclosure"
import { dissociate } from "../helpers"

interface Operations {
  [id: string]: boolean
}

export const ProgressContext = createContext<{ active: boolean, start: (id: string) => void, stop: (id: string) => void }>(null)

export const ProgressProvider: FC<{}> = ({ children }) => {
  const [operations, setOperations] = useState<Operations>({})
  const [active, setActive] = useState(false)

  const start = (id: string) => setOperations(currentOperations => ({ ...currentOperations, [id]: true }))

  const stop = (id: string) => setOperations(currentOperations => ({...dissociate(id)(currentOperations)}))

  useEffect(() => setActive(Object.keys(operations).length > 0), [operations])

  return (
    <ProgressContext.Provider value={{ active, start, stop }}>
      <ProgressIndicator />
      {children}
    </ProgressContext.Provider>
  )
}

const ProgressIndicator: FC<{}> = () => {
  const { active } = useContext(ProgressContext)
  return <Disclosure>
  {active && <Progress />}
</Disclosure>
} 