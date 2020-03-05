import React from "react"
import { Stack, Text, Fixture, Box } from "../src"
import { useTheme } from "../src/theme/useTheme"

export default {
  component: Stack,
  title: "Stack"
}

export const StackVertical = () => {
  const {
    theme: { sizes, colors }
  } = useTheme()
  return (
    <Stack
      style={{
        padding: sizes[3],
        background: colors.secondary
      }}>
      <Box>
        <Fixture>
          <Text>Stack1</Text>
        </Fixture>
      </Box>
      <Box>
        <Fixture>
          <Text>Stack2</Text>
        </Fixture>
      </Box>
      <Box>
        <Fixture>
          <Text>Stack3</Text>
        </Fixture>
      </Box>
      <Box>
        <Fixture>
          <Text>Stack4</Text>
        </Fixture>
      </Box>
      <Box>
        <Fixture>
          <Text>Stack5</Text>
        </Fixture>
      </Box>
    </Stack>
  )
}

export const StackHorizontal = () => {
  const {
    theme: { sizes, colors }
  } = useTheme()
  return (
    <Stack
      horizontal
      style={{
        padding: sizes[3],
        background: colors.secondary
      }}>
      <Box>
        <Fixture>
          <Text>Stack1</Text>
        </Fixture>
      </Box>
      <Box>
        <Fixture>
          <Text>Stack2</Text>
        </Fixture>
      </Box>
      <Box>
        <Fixture>
          <Text>Stack3</Text>
        </Fixture>
      </Box>
      <Box>
        <Fixture>
          <Text>Stack4</Text>
        </Fixture>
      </Box>
      <Box>
        <Fixture>
          <Text>Stack5</Text>
        </Fixture>
      </Box>
    </Stack>
  )
}

export const StackWithItemStylesAndCustomGap = () => {
  const {
    theme: { sizes, colors }
  } = useTheme()
  return (
    <Stack
      horizontal
      style={{
        padding: sizes[3],
        background: colors.secondary
      }}
      gap="2px"
      itemStyle={{
        border: "3px solid #f00"
      }}>
      <Box>
        <Fixture>
          <Text>Stack1</Text>
        </Fixture>
      </Box>
      <Box>
        <Fixture>
          <Text>Stack2</Text>
        </Fixture>
      </Box>
      <Box>
        <Fixture>
          <Text>Stack3</Text>
        </Fixture>
      </Box>
      <Box>
        <Fixture>
          <Text>Stack4</Text>
        </Fixture>
      </Box>
      <Box>
        <Fixture>
          <Text>Stack5</Text>
        </Fixture>
      </Box>
    </Stack>
  )
}

export const StackTest = () => {
  const {
    theme: { sizes, colors }
  } = useTheme()
  return (
    <Stack
      horizontal
      horizontalAlign="space-between"
      style={{
        padding: sizes[3],
        background: colors.secondary
      }}>
      <Box>
        <Text>Stack1</Text>
      </Box>
      <Box>
        <Text>Stack2</Text>
      </Box>
      <Box>
        <Text>Stack3</Text>
      </Box>
    </Stack>
  )
}
