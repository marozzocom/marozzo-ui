import React, { FC, ComponentProps } from "react"
import { Box } from "../box/Box"
import { ensureArray } from "../_common/helpers"
import { useVariants } from "../variants/useVariants"

export const Surface: FC<ComponentProps<typeof Box>> = ({ style, variant, children, ...props }) => {
  const { surfaces } = useVariants()

  return (
    <Box
      variant={variant ?? surfaces.primary}
      style={[
        {
          height: "100%"
        },
        ...ensureArray(style)
      ]}
      {...props}>
      {children}
    </Box>
  )
}
