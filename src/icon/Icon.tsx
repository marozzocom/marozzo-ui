import React, { Suspense, lazy, FC } from "react"
import { Box } from "../box/Box"

interface Props {
  icon: string
}

export const Icon: FC<Props> = ({ icon }) => {
  const Icon = lazy(() => import(`./paths/${icon}`))
  
  return <Box width="3" height="3"><Suspense fallback={<></>}><svg width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><Icon/></svg></Suspense></Box>
}