import React, { FC, Fragment, ReactNode, useState } from "react"
import { Stack, NavLink, useTheme, Box } from "@marozzocom/marozzo-ui"
import { useHistory } from "react-router-dom"

export interface NavigationItems {
  [key: string]: {
    title: string
    path?: string
    selected?: boolean
  }
}

interface Props {
  items: NavigationItems
  toc?: React.ReactNode
}

export const Navigation: FC<Props> = ({ items, toc, children }) => {
  const history = useHistory()
  const {
    theme: { sizes }
  } = useTheme()

  return (
    <Stack>
      {Object.entries(items).map(([key, { title, path, selected }]) => {
        return (
          <Fragment key={key}>
            <NavLink selected={selected} onClick={() => history.push(path)}>
              {title}
            </NavLink>
            {selected && <Box style={{ paddingLeft: sizes[2] }}>{toc}</Box>}
          </Fragment>
        )
      })}
    </Stack>
  )
}
