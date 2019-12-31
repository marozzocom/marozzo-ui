import React, { FC } from "react"
import { Stack, Box, Heading, Text, Fixture, Button, useTheme } from "@marozzocom/marozzo-ui"
import { useHistory } from "react-router-dom"
import { navigation } from "../_common/navigation"

const Home: FC<{}> = () => {
  const history = useHistory()
  const {
    theme: { sizes }
  } = useTheme()

  return (
    <Stack>
      <Box>
        <Heading level={1}>Marozzo UI</Heading>
        <Text>Work in progress...</Text>
        <Box
          style={{
            minHeight: "500px"
          }}>
          <Fixture>
            <Stack
              horizontal
              style={{
                "> *": {
                  marginLeft: sizes[2],
                  marginRight: sizes[2]
                }
              }}>
              <Button primary onClick={() => history.push(navigation["introduction"].path)}>
                Read docs
              </Button>
              <Button primary onClick={() => window.open("https://marozzoui.marozzo.com/", "_newtab")}>
                Explore Storybook
              </Button>
            </Stack>
          </Fixture>
        </Box>
      </Box>
    </Stack>
  )
}

export default Home
