import React, { ElementType, ComponentProps, useMemo, forwardRef } from "react"
import { Text } from "../text/Text"
import { useTheme } from "../theme/useTheme"
import { Box } from "../box/Box"
import { ensureArray } from "../_common/helpers"

export type Level = 1 | 2 | 3 | 4 | 5 | 6

interface Props extends ComponentProps<typeof Box> {
  level?: Level
}

export const Heading = forwardRef<Props, any>(({ level = 2, children, style, ...rest }, ref) => {
  const { theme } = useTheme()

  // TODO: Consider offering a way to override these via themeprovider more easily. Maybe provide a variants provider, or typographyprovider?
  const variants = useMemo(() => {
    const { fontSizes, fontWeights } = theme
    return {
      "1": {
        fontSize: fontSizes.xxxl,
        fontWeight: fontWeights.bold
      },
      "2": {
        fontSize: fontSizes.xxl,
        fontWeight: fontWeights.bold
      },
      "3": {
        fontSize: fontSizes.xl,
        fontWeight: fontWeights.bold
      },
      "4": {
        fontSize: fontSizes.xl,
        fontWeight: fontWeights.normal
      },
      "5": {
        fontSize: fontSizes.l,
        fontWeight: fontWeights.normal
      },
      "6": {
        fontSize: fontSizes.m,
        fontWeight: fontWeights.normal,
        fontStyle: "italic"
      }
    }
  }, [theme])

  return (
    <Text
      ref={ref}
      as={`h${level}` as ElementType}
      role="heading"
      aria-level={level}
      style={[
        {
          fontFamily: theme.fonts.heading,
          margin: 0,
          ...(variants as any)[level]
        },
        ...ensureArray(style)
      ]}
      {...rest}>
      {children}
    </Text>
  )
})

Heading.displayName = "Heading"
