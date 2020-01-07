import React, { FC, Fragment, Children, MutableRefObject, useCallback } from "react"
import { Stack, NavLink, useTheme, Box, Toc, Disclosure, useToc, tocEmitter, NavigationItems, scrollIntoView } from "@marozzocom/marozzo-ui"
import { useHistory } from "react-router-dom"

interface Props {
  items: NavigationItems
}

const animation = {
  initial: { opacity: 0, height: 0, overflow: "hidden" },
  animate: { opacity: 1, height: "100%" },
  exit: { opacity: 0, height: 0, overflow: "hidden" },
  transition: {
    type: "tween"
  }
}

export const Navigation: FC<Props> = ({ items }) => {
  const history = useHistory()
  const {
    theme: { sizes }
  } = useTheme() as any

  return (
    <Stack
      itemStyle={{
        display: "block"
      }}
      gap={0}>
      {Object.entries(items).map(([key, { title, path, selected, subItems }]) => {
        return (
          <Fragment key={key}>
            <NavLink selected={selected} onClick={() => history.push(path)}>
              {title}
            </NavLink>
            {/* <Disclosure animation={animation}> */}
            {subItems && Object.keys(subItems).length > 0 && (
              <Box key={`${key}-sub`} style={{ paddingLeft: sizes[2] }}>
                {Object.entries(subItems).map(([key, { title, selected, ref }], index) => {
                  const handleSubItemClick = () => {
                    history.push(`${history.location.pathname}#${key}`)
                    scrollIntoView(ref?.current)(-sizes["topBar"])
                  }

                  return (
                    <NavLink key={key} selected={selected ?? index === 0} onClick={handleSubItemClick}>
                      {title}
                    </NavLink>
                  )
                })}
              </Box>
            )}
            {/* </Disclosure> */}
          </Fragment>
        )
      })}
    </Stack>
  )
}
