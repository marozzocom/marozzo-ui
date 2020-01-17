import React, { FC, createContext } from "react"
import merge from "deepmerge"
import { Variants } from "./Variants"

interface Props {
  variants?: any
}

const VariantsContext = createContext<any>({})

const VariantsProvider: FC<Props> = ({ variants, children }) => {
  const mergedVariants = variants ? merge(Variants(), variants) : Variants()
  return <VariantsContext.Provider value={{ variants: mergedVariants }}>{children}</VariantsContext.Provider>
}

export { VariantsContext, VariantsProvider }
