import React, { FC, useState } from "react"
import { Stack, Box, Heading, Text, Fixture, Button } from "@marozzocom/marozzo-ui"
import { useHistory } from "react-router-dom"
import { navigation } from "../_common/navigation"

const Home: FC<{}> = () => {
  const history = useHistory()

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
            <Button primary onClick={() => history.push(navigation["introduction"].path)}>
              Read docs
            </Button>
          </Fixture>
        </Box>
      </Box>
    </Stack>
  )
}

export default Home
