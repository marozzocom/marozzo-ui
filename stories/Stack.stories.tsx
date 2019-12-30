import React from "react"
import { Stack, Text, Card, Fixture } from "../src"
import { useTheme } from "../src/theme/useTheme"

export default {
  component: Stack,
  title: "Stack"
}

export const stackVertical = () => {
  const {
    theme: { sizes, colors }
  } = useTheme()
  return (
    <Stack
      style={{
        padding: sizes[3],
        background: colors.secondary
      }}>
      <Card>
        <Fixture>
          <Text>Stack1</Text>
        </Fixture>
      </Card>
      <Card>
        <Fixture>
          <Text>Stack2</Text>
        </Fixture>
      </Card>
      <Card>
        <Fixture>
          <Text>Stack3</Text>
        </Fixture>
      </Card>
    </Stack>
  )
}

export const stackHorizontal = () => {
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
      <Card>
        <Fixture>
          <Text>Stack1</Text>
        </Fixture>
      </Card>
      <Card>
        <Fixture>
          <Text>Stack2</Text>
        </Fixture>
      </Card>
      <Card>
        <Fixture>
          <Text>Stack3</Text>
        </Fixture>
      </Card>
    </Stack>
  )
}

export const stackTest = () => {
  const {
    theme: {
      sizes,
      colors,
      variants: { cards }
    }
  } = useTheme()
  return (
    <Stack
      horizontal
      horizontalAlign="space-between"
      style={{
        padding: sizes[3],
        background: colors.secondary
      }}>
      <Card variant={cards.test}>
        <Text>Stack1</Text>
      </Card>
      <Card variant={cards.test}>
        <Text>Stack2</Text>
      </Card>
      <Card variant={cards.test}>
        <Text>Stack3</Text>
      </Card>
    </Stack>
  )
}