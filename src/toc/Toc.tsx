import React, { FC, useCallback } from "react"
import { Box } from ".."
import { useToc } from "./useToc"
import { NavLink } from "../navLink/NavLink"

export const Toc: FC<{}> = () => {
  const { toc, active } = useToc()
  const scroll = useCallback((element: Element) => element.scrollIntoView({ behavior: "smooth" }), [])

  return (
    <Box>
      {Object.entries(toc).map(([id, { title, ref }]) => (
        <NavLink key={id} onClick={() => scroll(ref.current)} selected={ref.current === active}>
          {title}
        </NavLink>
      ))}
    </Box>
  )
}
