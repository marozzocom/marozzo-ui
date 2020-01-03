import React, { FC, Fragment } from "react"
import { Stack, NavLink, useTheme, Box, Toc } from "@marozzocom/marozzo-ui"
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
}

export const Navigation: FC<Props> = ({ items }) => {
  const history = useHistory()
  const {
    theme: { sizes }
  } = useTheme()

  return (
    <Stack itemStyle={{ display: "block" }}>
      {Object.entries(items).map(([key, { title, path, selected }]) => {
        return (
          <Fragment key={key}>
            <NavLink selected={selected} onClick={() => history.push(path)}>
              {title}
            </NavLink>
            {selected && (
              <Box style={{ paddingLeft: sizes[2] }}>
                <Toc />
              </Box>
            )}
          </Fragment>
        )
      })}
    </Stack>
  )
}
