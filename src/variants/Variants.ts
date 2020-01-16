import { useTheme } from "../theme/useTheme"

export const Variants = () => {
  const { theme } = useTheme()

  return {
    buttons: {
      default: {
        borderRadius: theme.radii.normal,
        background: "none",
        color: theme.colors.text
      },
      primary: {
        borderRadius: theme.radii.normal,
        backgroundImage: theme.gradients.button,
        boxShadow: theme.shadows.inset
      }
    },
    textStyles: {
      actionSmall: {
        fontFamily: theme.fonts.action,
        fontWeight: theme.fontWeights.bold,
        fontSize: theme.fontSizes.s
      },
      actionNormal: {
        fontFamily: theme.fonts.action,
        fontWeight: theme.fontWeights.bold,
        fontSize: theme.fontSizes.m
      },
      headings: {
        "1": {
          fontSize: theme.fontSizes.xxxl,
          fontWeight: theme.fontWeights.bold
        },
        "2": {
          fontSize: theme.fontSizes.xxl,
          fontWeight: theme.fontWeights.bold
        },
        "3": {
          fontSize: theme.fontSizes.xl,
          fontWeight: theme.fontWeights.bold
        },
        "4": {
          fontSize: theme.fontSizes.xl,
          fontWeight: theme.fontWeights.normal
        },
        "5": {
          fontSize: theme.fontSizes.l,
          fontWeight: theme.fontWeights.bold
        },
        "6": {
          fontSize: theme.fontSizes.l,
          fontWeight: theme.fontWeights.normal,
          fontStyle: "italic"
        }
      },
      body: {
        fontFamily: theme.fonts.body,
        fontWeight: theme.fontWeights.normal,
        fontSize: theme.fontSizes.m,
        color: theme.colors.text
      }
    },
    cards: {
      // TODO: I don't know whether the min size is a good idea.
      primary: {
        borderRadius: theme.radii.normal,
        boxShadow: theme.shadows.subtle,
        minWidth: theme.sizes[5],
        minHeight: theme.sizes[5]
      },
      test: {
        background: "#cf0",
        backgroundImage: "none",
        borderRadius: theme.radii.normal,
        boxShadow: theme.shadows.subtle
      }
    },
    surfaces: {
      primary: {
        backgroundImage: theme.gradients.primary
      },
      secondary: {
        backgroundColor: theme.colors.secondary
      }
    }
  }
}
