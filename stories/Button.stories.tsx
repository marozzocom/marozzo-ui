import React, { ComponentProps, FC, useState } from "react"
import { Button } from "../src/button/Button"
import { Fixture } from "../src/fixture/Fixture"
import { action } from "@storybook/addon-actions"
import { useTheme, ThemeProvider } from "../src/theme"
import { Transition } from "../src/transition/Transition"
import { Stack } from "../src/stack/Stack"
import { Box } from "../src/box/Box"
import { Text } from "../src/text/Text"

export default {
  component: Button,
  title: "Button"
}

const PrimaryButton: FC<ComponentProps<typeof Button>> = ({ children, style, ...props }) => {
  const {
    theme: { colors, gradients, shadows }
  } = useTheme()
  return (
    <Button
      style={{
        ...style,
        background: colors.primary,
        backgroundImage: gradients.button,
        boxShadow: shadows.inset
      }}
      {...props}>
      {children}
    </Button>
  )
}

export const defaultButton = () => (
  <Fixture>
    <Button onClick={action("clicked")}>Button</Button>
  </Fixture>
)

export const primaryButton = () => (
  <Fixture>
    <PrimaryButton onClick={action("clicked")}>Button</PrimaryButton>
  </Fixture>
)

export const primaryButtonWithCustomStylesAndTheme = () => (
  <Fixture>
    <ThemeProvider
      theme={{
        colors: {
          primary: "#f00"
        }
      }}>
      <PrimaryButton
        onClick={action("custom themed clicked")}
        style={{
          backgroundImage: "none"
        }}>
        Button with customized theme
      </PrimaryButton>
    </ThemeProvider>
  </Fixture>
)

export const MakeAllButtonsSmaller = () => {
  const {
    theme: { fontSizes }
  } = useTheme()

  return (
    <Fixture>
      <ThemeProvider
        theme={{
          fontSizes: {
            m: fontSizes.xs
          }
        }}>
        <Button onClick={action("clicked")}>Button</Button>
      </ThemeProvider>
    </Fixture>
  )
}

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

export const ButtonWithTransition = () => {
  const [visible, setVisible] = useState(true)
  const {
    theme: { sizes }
  } = useTheme()

  return (
    <Stack
      style={{
        padding: sizes[2]
      }}>
      <Box>
        <Button onClick={() => setVisible(!visible)}>Toggle</Button>
      </Box>
      <Transition>
        {visible && (
          <Button
            style={{
              width: "400px",
              height: "200px"
            }}>
            Big Button
          </Button>
        )}
      </Transition>
    </Stack>
  )
}

export const InvertedButton = () => {
  const {
    theme: { colors }
  } = useTheme()

  return (
    <Fixture>
      <ThemeProvider
        theme={{
          colors: {
            primary: "#000",
            text: colors.background,
            effect: colors.background
          }
        }}>
        <Button
          style={{
            width: "400px",
            height: "200px"
          }}>
          Inverted
        </Button>
      </ThemeProvider>
    </Fixture>
  )
}

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

export const ButtonWithCustomStyles = () => {
  const {
    theme: { timings }
  } = useTheme()

  return (
    <Fixture>
      <Button
        disableRipples
        onClick={action("clicked")}
        style={{
          transition: "all 0.5s ease-out",
          backgroundColor: "#a9c",
          borderRadius: "2px",
          boxShadow: "none",
          backgroundImage: "none",
          transitionProperty: `color opacity background-color transform box-shadow`,
          options: "1000ms",
          "&::after": {
            content: "none"
          },
          "&:hover": {
            transform: ["scale(1.2)", "scale(1.5)"],
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
            color: "#fff"
          },
          "&:active": {
            transform: "scale(0.85)"
          }
        }}>
        <Text
          style={{
            transition: `color ${timings.common}s`
          }}>
          Button
        </Text>
      </Button>
    </Fixture>
  )
}
