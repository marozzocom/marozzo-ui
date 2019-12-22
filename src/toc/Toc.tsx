import React, { FC } from "react"
import { Box } from ".."
import { useToc } from "./useToc"
import { NavLink } from "../navLink/NavLink"

export const Toc: FC<{}> = () => {
  const { toc, selected } = useToc()

  const scroll = (element: Element) => {
    console.log("moi")
    element.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <Box>
      {toc.map(({ name, element }, index) => (
        <NavLink key={index} onClick={() => scroll(element)} selected={element === selected}>
          {name}
        </NavLink>
      ))}
    </Box>
  )
}
