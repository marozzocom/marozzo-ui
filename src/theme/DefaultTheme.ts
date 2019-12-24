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
    body: "system-ui, sans-serif",
    heading: `"Avenir Next", sans-serif`,
    monospace: "Menlo, monospace"
  }

  colors = {
    text: "#000",
    background: "#fff",
    primary: "#f00",
    secondary: "#faa",
    overlay: "rgba(0, 0, 0, 0.25)"
  }

  gradients = {
    primary: "linear-gradient( -45deg, rgb(140,106,0) 0%, rgb(240,181,0) 100%)"
  }

  radii = {
    normal: 10,
    round: 2000
  }

  shadows = {
    subtle: "0px 5px 10px 0px rgba(0, 0, 0, 0.02)",
    normal: "0 0 10px rgba(0, 0, 0, 0.5)"
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

const { sizes, fonts, colors, radii, shadows, disclosures, gradients } = DefaultTheme.getInstance()

export const defaultTheme = {
  sizes,
  fonts,
  colors,
  radii,
  shadows,
  disclosures,
  gradients
}
