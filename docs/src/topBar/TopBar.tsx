import React, { FC } from "react"
import { useTheme, Stack, Box, Heading, NavLink } from "@marozzocom/marozzo-ui"

export const TopBar: FC<{}> = () => {
  const {
    theme: { sizes, colors }
  } = useTheme() as any // TODO: Fix typings
  return (
    <Box
      style={{
        "&::before": {
          content: "''",
          display: "block",
          backgroundImage: "radial-gradient(at center center,rgba(0,0,0,0.2) 0%,transparent 70%,transparent 100%)",
          zIndex: -1,
          left: 0,
          right: 0,
          position: "absolute",
          transform: `translateY(${sizes[2]}px)`,
          height: sizes[4]
        },
        backgroundColor: colors.background
      }}>
      <Box>
        <Stack
          horizontal
          horizontalAlign="space-between"
          style={{
            padding: sizes[2],
            height: sizes[4]
          }}>
          <Box>
            <Heading>Marozzo UI</Heading>
          </Box>
          <Stack horizontal verticalAlign="center">
            <NavLink to="https://marozzoui.marozzo.com" newTab>
              Storybook
            </NavLink>
            <NavLink to="https://github.com/marozzocom/marozzo-ui" newTab>
              Github
            </NavLink>
          </Stack>
        </Stack>
      </Box>
    </Box>
  )
}
