import { Box } from "../box/Box"
import React, { FC, ComponentProps, useState, useRef, MutableRefObject, createContext, useCallback, useLayoutEffect } from "react"
import { useTheme } from "../theme/useTheme"
import { ensureArray, dissociate } from "../_common/helpers"
import { Ripples } from "./components/Ripples"
import { Ripples as RipplesType } from "./models/ripples"
import Color from "color"
import { CSSObject } from "@emotion/core"
import { useWrapText } from "../_common/useWrapText"

interface Props extends ComponentProps<typeof Box> {
  primary?: boolean
  small?: boolean
  disabled?: boolean
  rippleDuration?: number
  minimumRippleVisibleDuration?: number
  disableRipples?: boolean
  rippleStyles?: CSSObject
  inverted?: boolean // Consider making this automatic, maybe exposing the button color as a prop instead of style -- I'm not sure what would be best
}

interface ButtonContext {
  ripples: RipplesType
  removeRipple: (id: string) => void
  fadeOutRipple: (id: string) => void
  buttonElement: MutableRefObject<HTMLButtonElement>
  rippleDuration: number
  minimumRippleVisibleDuration: number
  dimensions: Dimensions
  rippleStyles?: CSSObject | CSSObject[]
}

type Dimensions = { width: number; height: number }

export const Context = createContext<ButtonContext>(null)

export const Button: FC<Props> = ({
  inverted,
  rippleStyles,
  rippleDuration = 300,
  minimumRippleVisibleDuration = 100,
  disabled,
  disableRipples,
  primary,
  small,
  style,
  children,
  ...props
}) => {
  const {
    theme: { sizes, shadows, radii, colors }
  } = useTheme()
  const [ripples, setRipples] = useState<RipplesType>({})

  const buttonElement = useRef(null)

  const [dimensions, setDimensions] = useState<Dimensions>()

  useLayoutEffect(() => setDimensions(buttonElement.current.getBoundingClientRect()), [])

  const addRipple = useCallback((event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const { x, y } = event.currentTarget.getBoundingClientRect()
    const clickX = event.clientX - x
    const clickY = event.clientY - y
    const start = Date.now()
    const id = start.toString()
    setRipples(currentRipples => ({ ...currentRipples, [id]: { clickX, clickY, dismounting: false } }))
  }, [])

  const fadeOutRipple = useCallback((id: string) => {
    setRipples(currentRipples => ({
      ...currentRipples,
      [id]: {
        ...currentRipples[id],
        dismounting: true
      }
    }))
  }, [])

  const removeRipple = useCallback((id: string) => {
    setRipples(currentRipples => ({ ...dissociate(id)(currentRipples) }))
  }, [])

  const contextValue = {
    ripples,
    setRipples,
    fadeOutRipple,
    removeRipple,
    buttonElement,
    rippleDuration,
    minimumRippleVisibleDuration,
    dimensions,
    rippleStyles
  }

  const childrenAsObject = useWrapText(children)

  return (
    <Context.Provider value={contextValue}>
      <Box
        style={[
          {
            position: "relative",
            border: "none",
            borderRadius: radii.normal,
            boxShadow: shadows.subtle,
            overflow: "hidden",
            padding: `${sizes[1]} ${sizes[3]}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: colors.primary,
            color: colors.text,
            ...(disabled && { pointerEvents: "none" }),
            "&::after": {
              content: `""`,
              display: "block",
              background: Color(colors.effect)
                .alpha(0.1)
                .toString(),
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              position: "absolute",
              opacity: 0,
              transitionDuration: "300ms"
            },
            ...(!disabled && {
              "&:hover": {
                "&::after": {
                  opacity: 1
                }
              }
            }),
            "&:focus": {
              outline: "none",
              boxShadow: shadows.active
            }
          },
          ...ensureArray(style)
        ]}
        disabled={disabled}
        as="button"
        onMouseDown={(event: React.MouseEvent<HTMLElement, MouseEvent>) => addRipple(event)}
        {...props}
        ref={buttonElement}>
        {!disableRipples && <Ripples />}
        {childrenAsObject}
      </Box>
    </Context.Provider>
  )
}
