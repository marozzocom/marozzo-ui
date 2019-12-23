import React, { FC } from "react"
import { Box } from ".."
import { useToc } from "./useToc"
import { NavLink } from "../navLink/NavLink"

export const Toc: FC<{}> = () => {
  const { toc, active } = useToc()
  const scroll = (element: Element, index: number) => element.scrollIntoView({ behavior: "smooth" })

  return (
    <Box>
      {toc.map(({ name, element }, index) => (
        <NavLink key={index} onClick={() => scroll(element, index)} selected={active ? element === active : index === 0}>
          {name}
        </NavLink>
      ))}
    </Box>
  )
}
