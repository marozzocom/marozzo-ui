import React, { Suspense, lazy, FC, ComponentProps } from "react"
import { Box } from "../box/Box"

interface Props extends ComponentProps<typeof Box> {
  icon: string
}

export const Icon: FC<Props> = ({ icon, ...props }) => {
  const Icon = lazy(() => import(`./paths/${icon}`))

  return (
    <Box {...props}>
      <Suspense fallback={<></>}>
        <svg width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <Icon />
        </svg>
      </Suspense>
    </Box>
  )
}
