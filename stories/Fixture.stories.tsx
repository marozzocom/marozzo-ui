import React from "react"
import { Fixture, Vertical, Horizontal } from "../src/fixture/Fixture"
import { Card } from "../src/card/Card"
import { Box } from "../src"

export default {
  component: Fixture,
  title: "Fixture"
}

export const center = () => (
  <Fixture>
    <Card
      style={{
        width: "200px",
        height: "200px"
      }}>
      <Fixture>
        <Box>Fixture</Box>
      </Fixture>
    </Card>
  </Fixture>
)
export const top = () => (
  <Fixture vertical={Vertical.Top}>
    <Card
      style={{
        width: "200px",
        height: "200px"
      }}>
      <Fixture>
        <Box>Fixture</Box>
      </Fixture>
    </Card>
  </Fixture>
)
export const right = () => (
  <Fixture horizontal={Horizontal.End}>
    <Card
      style={{
        width: "200px",
        height: "200px"
      }}>
      <Fixture>
        <Box>Fixture</Box>
      </Fixture>
    </Card>
  </Fixture>
)
export const bottom = () => (
  <Fixture vertical={Vertical.Bottom}>
    <Card
      style={{
        width: "200px",
        height: "200px"
      }}>
      <Fixture>
        <Box>Fixture</Box>
      </Fixture>
    </Card>
  </Fixture>
)
export const left = () => (
  <Fixture horizontal={Horizontal.Start}>
    <Card
      style={{
        width: "200px",
        height: "200px"
      }}>
      <Fixture>
        <Box>Fixture</Box>
      </Fixture>
    </Card>
  </Fixture>
)
export const topLeft = () => (
  <Fixture vertical={Vertical.Top} horizontal={Horizontal.Start}>
    <Card
      style={{
        width: "200px",
        height: "200px"
      }}>
      <Fixture>
        <Box>Fixture</Box>
      </Fixture>
    </Card>
  </Fixture>
)
export const topRight = () => (
  <Fixture vertical={Vertical.Top} horizontal={Horizontal.End}>
    <Card
      style={{
        width: "200px",
        height: "200px"
      }}>
      <Fixture>
        <Box>Fixture</Box>
      </Fixture>
    </Card>
  </Fixture>
)
export const bottomRight = () => (
  <Fixture vertical={Vertical.Bottom} horizontal={Horizontal.End}>
    <Card
      style={{
        width: "200px",
        height: "200px"
      }}>
      <Fixture>
        <Box>Fixture</Box>
      </Fixture>
    </Card>
  </Fixture>
)
export const bottomLeft = () => (
  <Fixture vertical={Vertical.Bottom} horizontal={Horizontal.Start}>
    <Card
      style={{
        width: "200px",
        height: "200px"
      }}>
      <Fixture>
        <Box>Fixture</Box>
      </Fixture>
    </Card>
  </Fixture>
)
