import React from "react"
import { Fixture, Position } from "../src/fixture/Fixture"
import { Card } from "../src/card/Card"
import { Box } from "../src"

export default {
  component: Fixture,
  title: "Fixture"
}

export const center = () => (
  <Fixture>
    <Card>
      <Fixture>
        <Box>Fixture</Box>
      </Fixture>
    </Card>
  </Fixture>
)
export const top = () => (
  <Fixture position={Position.Top}>
    <Card>
      <Fixture>
        <Box>Fixture</Box>
      </Fixture>
    </Card>
  </Fixture>
)
export const right = () => (
  <Fixture position={Position.Right}>
    <Card>
      <Fixture>
        <Box>Fixture</Box>
      </Fixture>
    </Card>
  </Fixture>
)
export const bottom = () => (
  <Fixture position={Position.Bottom}>
    <Card>
      <Fixture>
        <Box>Fixture</Box>
      </Fixture>
    </Card>
  </Fixture>
)
export const left = () => (
  <Fixture position={Position.Left}>
    <Card>
      <Fixture>
        <Box>Fixture</Box>
      </Fixture>
    </Card>
  </Fixture>
)
export const topLeft = () => (
  <Fixture position={Position.TopLeft}>
    <Card>
      <Fixture>
        <Box>Fixture</Box>
      </Fixture>
    </Card>
  </Fixture>
)
export const topRight = () => (
  <Fixture position={Position.TopRight}>
    <Card>
      <Fixture>
        <Box>Fixture</Box>
      </Fixture>
    </Card>
  </Fixture>
)
export const bottomRight = () => (
  <Fixture position={Position.BottomRight}>
    <Card>
      <Fixture>
        <Box>Fixture</Box>
      </Fixture>
    </Card>
  </Fixture>
)
export const bottomLeft = () => (
  <Fixture position={Position.BottomLeft}>
    <Card>
      <Fixture>
        <Box>Fixture</Box>
      </Fixture>
    </Card>
  </Fixture>
)
