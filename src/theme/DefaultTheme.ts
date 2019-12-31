class DefaultTheme {
  private static instance: DefaultTheme

  static getInstance() {
    if (!DefaultTheme.instance) {
      DefaultTheme.instance = new DefaultTheme()
    }
    return DefaultTheme.instance
  }

  sizes = {
    "0": "0",
    "1": "0.5rem",
    "2": "1rem",
    "3": "2rem",
    "4": "4rem",
    "5": "8rem",
    "6": "16rem",
    "7": "32rem",
    "8": "64rem"
  }

  fonts = {
    body: "mr-eaves-xl-sans, sans-serif",
    heading: "rigid-square, sans-serif",
    action: "mr-eaves-xl-sans, sans-serif",
    monospace: "Menlo, monospace"
  }

  fontSizes = {
    xxs: "0.4rem",
    xs: "0.6rem",
    s: "0.8rem",
    m: "1rem",
    l: "1.2rem",
    xl: "1.4rem",
    xxl: "1.6rem",
    xxxl: "2rem"
  }

  fontWeights = {
    normal: 400,
    medium: 500,
    bold: 700
  }

  colors = {
    text: "#1a1a1a",
    background: "#fff",
    primary: "#0ff",
    secondary: "#faa",
    overlay: "rgba(0, 0, 0, 0.25)",
    active: "#77daff"
  }

  animations = {
    normal: "0.2s ease-out"
  }

  shadows = {
    active: `${this.colors.active} 0 0 0 2px`,
    subtle: "0px 5px 10px 0px rgba(0, 0, 0, 0.02)",
    normal: "0 0 10px rgba(0, 0, 0, 0.5)",
    inset: "inset 3.536px 3.536px 10px 0px rgba(0, 0, 0, 0.15)"
  }

  // TODO: base these on the theme colors
  gradients = {
    primary: "linear-gradient(-45deg, rgb(140,106,0) 0%, rgb(240,181,0) 100%)",
    button: "linear-gradient(45deg, rgb(198,166,64) 0%, rgb(255,208,64) 100%)"
  }

  breakpoints = [576, 768, 992, 1200]

  radii = {
    normal: 10,
    round: 2000
  }

  variants = {
    buttons: {
      default: {
        borderRadius: this.radii.normal,
        background: "none"
      },
      primary: {
        borderRadius: this.radii.normal,
        backgroundImage: this.gradients.button,
        boxShadow: this.shadows.inset
      }
    },
    textStyles: {
      actionSmall: {
        fontFamily: this.fonts.action,
        fontWeight: this.fontWeights.bold,
        fontSize: this.fontSizes.s
      },
      actionNormal: {
        fontFamily: this.fonts.action,
        fontWeight: this.fontWeights.bold,
        fontSize: this.fontSizes.m
      },
      headings: {
        "1": {
          fontSize: this.fontSizes.xxxl,
          fontWeight: this.fontWeights.bold
        },
        "2": {
          fontSize: this.fontSizes.xxl,
          fontWeight: this.fontWeights.bold
        },
        "3": {
          fontSize: this.fontSizes.xl,
          fontWeight: this.fontWeights.bold
        },
        "4": {
          fontSize: this.fontSizes.xl,
          fontWeight: this.fontWeights.normal
        },
        "5": {
          fontSize: this.fontSizes.l,
          fontWeight: this.fontWeights.bold
        },
        "6": {
          fontSize: this.fontSizes.l,
          fontWeight: this.fontWeights.normal,
          fontStyle: "italic"
        }
      },

      body: {
        fontFamily: this.fonts.body,
        fontWeight: this.fontWeights.normal,
        fontSize: this.fontSizes.m
      }
    },
    cards: {
      // TODO: I don't know whether the min size is a good idea.
      primary: {
        borderRadius: this.radii.normal,
        boxShadow: this.shadows.subtle,
        minWidth: this.sizes[5],
        minHeight: this.sizes[5]
      },
      test: {
        background: "#cf0",
        backgroundImage: "none",
        borderRadius: this.radii.normal,
        boxShadow: this.shadows.subtle
      }
    }
  }

  // TODO: Decide whether to keep these with components, within Theme or somewhere else.
  disclosures = {
    default: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: {
        type: "tween"
      }
    }
  }
}

const { sizes, fonts, fontSizes, fontWeights, colors, radii, shadows, disclosures, gradients, variants, breakpoints, animations } = DefaultTheme.getInstance()

export const defaultTheme = {
  sizes,
  fonts,
  fontSizes,
  fontWeights,
  colors,
  radii,
  shadows,
  disclosures,
  gradients,
  variants,
  breakpoints,
  animations
}
