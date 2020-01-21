import { Box } from "../box/Box"
import React, { FC, ComponentProps, useState, useRef, MutableRefObject, createContext, useMemo, useCallback } from "react"
import { useTheme } from "../theme/useTheme"
import { ensureArray, dissociate } from "../_common/helpers"
import { useVariants } from "../variants"
import { Ripples } from "./components/Ripples"
import { Ripples as RipplesType } from "./models/ripples"
import Color from "color"
import { CSSObject } from "@emotion/core"

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
  width: number
  height: number
  effectColor: string
  rippleStyles?: CSSObject | CSSObject[]
}

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
    theme: { sizes, shadows, colors }
  } = useTheme()
  const [ripples, setRipples] = useState<RipplesType>({})

  const buttonElement = useRef(null)

  const variants = useVariants()

  const boundingRect = useMemo(() => {
    if (!buttonElement.current) {
      return null
    }
    return buttonElement.current.getBoundingClientRect()
  }, [buttonElement.current])

  const effectColor = inverted ? colors.highlight : colors.shadow

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

  const { width, height } = boundingRect ?? { width: 0, height: 0 }

  const contextValue = {
    ripples,
    setRipples,
    fadeOutRipple,
    removeRipple,
    buttonElement,
    rippleDuration,
    minimumRippleVisibleDuration,
    width,
    height,
    effectColor,
    rippleStyles
  }

  return (
    <Context.Provider value={contextValue}>
      <Box
        variant={{
          ...(primary ? variants?.buttons?.primary : variants?.buttons?.default),
          ...(small ? variants?.textStyles?.actionSmall : variants?.textStyles?.actionNormal)
        }}
        style={[
          {
            position: "relative",
            border: "none",
            overflow: "hidden",
            padding: `${small ? sizes[0] : sizes[1]} ${small ? sizes[2] : sizes[3]}`,
            ...(disabled && { pointerEvents: "none" }),
            "&::after": {
              content: '""',
              display: "block",
              background: Color(effectColor)
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
        onMouseDown={event => addRipple(event)}
        {...props}
        innerRef={buttonElement}>
        {!disableRipples && <Ripples />}
        <Box>{children}</Box>
      </Box>
    </Context.Provider>
  )
}
