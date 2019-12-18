import React, { FC, useState, createContext, Dispatch, SetStateAction } from "react"

export interface Operations {
  [id: string]: boolean
}

const ProgressContext = createContext<{
  operations: Operations,
  setOperations: Dispatch<SetStateAction<Operations>>
}>(null)

const ProgressProvider: FC<{}> = ({ children }) => {
  const [operations, setOperations] = useState<Operations>({})

  return (
    <ProgressContext.Provider value={{ operations, setOperations }}>
      {children}
    </ProgressContext.Provider>
  )
}

export { ProgressContext, ProgressProvider }