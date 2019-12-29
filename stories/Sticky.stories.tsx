import React from "react"
import { Sticky } from "../src/sticky/Sticky"
import { useTheme } from "../src/theme/useTheme"
import { Stack, Text, Box } from "../src"

export default {
  component: Sticky,
  title: "Sticky"
}

export const sticky = () => {
  const {
    theme: { sizes, colors }
  } = useTheme()

  return (
    <Stack>
      <Sticky
        style={{
          padding: sizes[3],
          background: colors.secondary
        }}>
        Sticky
      </Sticky>
      <Box>
        <Text>1</Text>
      </Box>
      <Box>
        <Text>2</Text>
      </Box>
    </Stack>
  )
}
