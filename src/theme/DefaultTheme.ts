class DefaultTheme {
  private spring = {
    type: "spring",
    damping: 10,
    stiffness: 100
  }

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
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.25rem",
    xl: "1.5rem"
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
    overlay: "rgba(0, 0, 0, 0.25)"
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

  shadows = {
    subtle: "0px 5px 10px 0px rgba(0, 0, 0, 0.02)",
    normal: "0 0 10px rgba(0, 0, 0, 0.5)",
    inset: "inset 3.536px 3.536px 10px 0px rgba(0, 0, 0, 0.15)"
  }

  variants = {
    buttons: {
      default: {
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
        fontSize: this.fontSizes.sm
      },
      actionNormal: {
        fontFamily: this.fonts.action,
        fontWeight: this.fontWeights.bold,
        fontSize: this.fontSizes.md
      },
      heading: {
        fontFamily: this.fonts.heading,
        fontWeight: this.fontWeights.bold
      },
      body: {
        fontFamily: this.fonts.body,
        fontWeight: this.fontWeights.normal,
        fontSize: this.fontSizes.md
      }
    },
    cards: {
      primary: {
        borderRadius: this.radii.normal,
        boxShadow: this.shadows.subtle,
        minWidth: this.sizes[6],
        minHeight: this.sizes[6]
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

const { sizes, fonts, fontSizes, fontWeights, colors, radii, shadows, disclosures, gradients, variants, breakpoints } = DefaultTheme.getInstance()

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
  breakpoints
}
