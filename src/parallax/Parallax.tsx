import React, { FC } from "react"
import { Box } from "../box/Box"
import { useParallax } from "./useParallax"

export const Parallax: FC<{}> = ({}) => {
  const { progress } = useParallax()

  return (
    <Box
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0
      }}>
      TODO
    </Box>
  )
}
