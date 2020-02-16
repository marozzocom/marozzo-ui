import React, { FC, MouseEvent } from "react"
import { Box } from ".."
import { useToc } from "./useToc"
import { NavLink } from "../navLink/NavLink"
import { useTheme } from "../theme"
import { scrollIntoView } from "./helpers"

interface Props {
  scrollOffset?: number
  addHash?: boolean
  callback?: (event: MouseEvent<HTMLElement>, id: string) => void
}

export const Toc: FC<Props> = () => {
  const { toc } = useToc()

  const {
    theme: { colors }
  } = useTheme()

  return (
    <Box
      style={{
        background: colors.background,
        position: "sticky",
        overflow: "auto",
        maxHeight: "100%"
      }}>
      {toc.map(({ id, selected, title, ref }, index) => {
        const handleSubItemClick = () => {
          location.hash = `#${id}`
          scrollIntoView(ref?.current) // TODO: fix and also use id as hash if possible
        }

        return (
          <NavLink key={id} selected={selected ?? index === 0} onClick={handleSubItemClick}>
            {title}
          </NavLink>
        )
      })}
    </Box>
  )
}
