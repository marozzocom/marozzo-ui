import React, { FC, createContext } from "react"

interface Props {
  variants?: any
}

const VariantsContext = createContext<any>(null)

const VariantsProvider: FC<Props> = ({ variants, children }) => {
  return <VariantsContext.Provider value={{ variants }}>{children}</VariantsContext.Provider>
}

export { VariantsContext, VariantsProvider }
