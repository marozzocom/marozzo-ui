import React from "react"
import { Button } from "../src/button/Button"
import { Fixture } from "../src/fixture/Fixture"
import { action } from "@storybook/addon-actions"

export default {
  component: Button,
  title: "Button"
}

export const defaultButton = () => (
  <Fixture>
    <Button onClick={action("clicked")}>Button</Button>
  </Fixture>
)
export const primaryButton = () => (
  <Fixture>
    <Button primary onClick={action("clicked")}>
      Button
    </Button>
  </Fixture>
)
export const smallButton = () => (
  <Fixture>
    <Button small onClick={action("clicked")}>
      Button
    </Button>
  </Fixture>
)
export const bigButton = () => (
  <Fixture>
    <Button
      style={{
        width: "400px",
        height: "200px"
      }}>
      Big Button
    </Button>
  </Fixture>
)
export const invertedButton = () => (
  <Fixture>
    <Button
      style={{
        width: "400px",
        height: "200px"
      }}
      primary
      inverted>
      Big Button
    </Button>
  </Fixture>
)
export const verticalButton = () => (
  <Fixture>
    <Button
      primary
      style={{
        width: "100px",
        height: "250px"
      }}>
      Vertical
    </Button>
  </Fixture>
)
export const smallPrimaryButton = () => (
  <Fixture>
    <Button small primary onClick={action("clicked")}>
      Button
    </Button>
  </Fixture>
)
export const disabledButton = () => (
  <Fixture>
    <Button disabled onClick={action("clicked")}>
      Button
    </Button>
  </Fixture>
)
export const buttonWithCustomStyles = () => (
  <Fixture>
    <Button
      primary
      onClick={action("clicked")}
      style={{
        borderRadius: "2px",
        boxShadow: "none",
        backgroundImage: "none",
        transitionProperty: `color opacity background-color transform box-shadow`,
        options: "1000ms",
        "&::after": {
          content: "none"
        },
        "&:hover": {
          backgroundColor: "#f00",
          transform: ["scale(1.2)", "scale(1.5)"],
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
          color: "#fff"
        },
        "&:active": {
          transform: "scale(0.85)"
        }
      }}>
      Button
    </Button>
  </Fixture>
)
