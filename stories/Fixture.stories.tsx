import React from "react"
import { Fixture, Vertical, Horizontal } from "../src/fixture/Fixture"
import { Box } from "../src"

export default {
  component: Fixture,
  title: "Fixture"
}

export const center = () => (
  <Fixture>
    <Box
      style={{
        width: "200px",
        height: "200px"
      }}>
      <Fixture>
        <Box>Fixture</Box>
      </Fixture>
    </Box>
  </Fixture>
)
export const top = () => (
  <Fixture vertical={Vertical.Top}>
    <Box
      style={{
        width: "200px",
        height: "200px"
      }}>
      <Fixture>
        <Box>Fixture</Box>
      </Fixture>
    </Box>
  </Fixture>
)
export const right = () => (
  <Fixture horizontal={Horizontal.End}>
    <Box
      style={{
        width: "200px",
        height: "200px"
      }}>
      <Fixture>
        <Box>Fixture</Box>
      </Fixture>
    </Box>
  </Fixture>
)
export const bottom = () => (
  <Fixture vertical={Vertical.Bottom}>
    <Box
      style={{
        width: "200px",
        height: "200px"
      }}>
      <Fixture>
        <Box>Fixture</Box>
      </Fixture>
    </Box>
  </Fixture>
)
export const left = () => (
  <Fixture horizontal={Horizontal.Start}>
    <Box
      style={{
        width: "200px",
        height: "200px"
      }}>
      <Fixture>
        <Box>Fixture</Box>
      </Fixture>
    </Box>
  </Fixture>
)
export const topLeft = () => (
  <Fixture vertical={Vertical.Top} horizontal={Horizontal.Start}>
    <Box
      style={{
        width: "200px",
        height: "200px"
      }}>
      <Fixture>
        <Box>Fixture</Box>
      </Fixture>
    </Box>
  </Fixture>
)
export const topRight = () => (
  <Fixture vertical={Vertical.Top} horizontal={Horizontal.End}>
    <Box
      style={{
        width: "200px",
        height: "200px"
      }}>
      <Fixture>
        <Box>Fixture</Box>
      </Fixture>
    </Box>
  </Fixture>
)
export const bottomRight = () => (
  <Fixture vertical={Vertical.Bottom} horizontal={Horizontal.End}>
    <Box
      style={{
        width: "200px",
        height: "200px"
      }}>
      <Fixture>
        <Box>Fixture</Box>
      </Fixture>
    </Box>
  </Fixture>
)
export const bottomLeft = () => (
  <Fixture vertical={Vertical.Bottom} horizontal={Horizontal.Start}>
    <Box
      style={{
        width: "200px",
        height: "200px"
      }}>
      <Fixture>
        <Box>Fixture</Box>
      </Fixture>
    </Box>
  </Fixture>
)
