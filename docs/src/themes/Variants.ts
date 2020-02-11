import { useTheme } from "@marozzocom/marozzo-ui"

export const Variants = () => {
  const { theme } = useTheme()

  return {
    surfaces: {
      primary: {
        backgroundImage: "none",
        backgroundColor: theme.colors.background
      },
      drawer: {
        "&::before": {
          content: "''",
          display: "block",
          backgroundImage: "radial-gradient(at center center,rgba(0,0,0,0.2) 0%,transparent 70%,transparent 100%)",
          zIndex: -1,
          top: 0,
          right: 0,
          position: "absolute",
          transform: `translateY(${theme.sizes[2]}px)`,
          height: theme.sizes[4]
        },
        backgroundImage: "none",
        backgroundColor: theme.colors.background
      }
    }
  }
}

// variants = {
//   buttons: {
//     default: {
//       borderRadius: this.radii.normal,
//       background: "none"
//     },
//     primary: {
//       borderRadius: this.radii.normal,
//       backgroundImage: this.gradients.button,
//       boxShadow: this.shadows.inset
//     }
//   },
//   textStyles: {
//     actionSmall: {
//       fontFamily: this.fonts.action,
//       fontWeight: this.fontWeights.bold,
//       fontSize: this.fontSizes.s
//     },
//     actionNormal: {
//       fontFamily: this.fonts.action,
//       fontWeight: this.fontWeights.bold,
//       fontSize: this.fontSizes.m
//     },
//     headings: {
//       "1": {
//         fontSize: this.fontSizes.xxxl,
//         fontWeight: this.fontWeights.bold
//       },
//       "2": {
//         fontSize: this.fontSizes.xxl,
//         fontWeight: this.fontWeights.bold
//       },
//       "3": {
//         fontSize: this.fontSizes.xl,
//         fontWeight: this.fontWeights.bold
//       },
//       "4": {
//         fontSize: this.fontSizes.xl,
//         fontWeight: this.fontWeights.normal
//       },
//       "5": {
//         fontSize: this.fontSizes.l,
//         fontWeight: this.fontWeights.bold
//       },
//       "6": {
//         fontSize: this.fontSizes.l,
//         fontWeight: this.fontWeights.normal,
//         fontStyle: "italic"
//       }
//     },

//     body: {
//       fontFamily: this.fonts.body,
//       fontWeight: this.fontWeights.normal,
//       fontSize: this.fontSizes.m
//     }
//   },
//   cards: {
//     // TODO: I don't know whether the min size is a good idea.
//     primary: {
//       borderRadius: this.radii.normal,
//       boxShadow: this.shadows.subtle,
//       minWidth: this.sizes[5],
//       minHeight: this.sizes[5]
//     },
//     test: {
//       background: "#cf0",
//       backgroundImage: "none",
//       borderRadius: this.radii.normal,
//       boxShadow: this.shadows.subtle
//     }
//   },
//   surfaces: {
//     primary: {
//       backgroundImage: this.gradients.primary
//     },
//     secondary: {
//       backgroundColor: this.colors.secondary
//     }
//   }
// }
