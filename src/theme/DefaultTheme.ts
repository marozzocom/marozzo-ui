import { ThemeProperties } from "./Theme"

export class DefaultTheme {
  private static instance: DefaultTheme

  static getInstance() {
    if (!DefaultTheme.instance) {
      DefaultTheme.instance = new DefaultTheme()
    }
    return DefaultTheme.instance
  }

  sizes = {
    "0": 0,
    "1": 8,
    "2": 16,
    "3": 32,
    "4": 64,
    "5": 128,
    "6": 256,
    "7": 512,
    "8": 1024
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
    active: "#77daff",
    highlight: "#fff",
    shadow: "#000",
    effect: "#000",
    warning: "#ecd23d",
    error: "#bb1616",
    ok: "#2a9c2a"
  }

  motionProps = {
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

  breakpoints = {
    xs: 576,
    s: 768,
    m: 992,
    l: 1200,
    xl: 1600
  }

  radii = {
    normal: 10,
    round: 2000
  }

  // TODO: Decide whether to keep these with components, within Theme or somewhere else.
  transitions = {
    common: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: {
        type: "tween"
      }
    }
  }

  timings = {
    common: 0.3,
    stagger: 0.1,
    message: 5
  }

  zIndices = {
    hide: -1,
    auto: "auto",
    base: 0,
    dropdown: 1000,
    sticky: 1100,
    overlay: 1300,
    modal: 1400,
    popover: 1500,
    toast: 1700,
    tooltip: 1800
  }
}

const {
  sizes,
  fonts,
  fontSizes,
  fontWeights,
  colors,
  radii,
  shadows,
  transitions,
  gradients,
  breakpoints,
  motionProps,
  zIndices,
  timings
} = DefaultTheme.getInstance()

export const defaultTheme = {
  sizes,
  fonts,
  fontSizes,
  fontWeights,
  colors,
  radii,
  shadows,
  transitions,
  gradients,
  breakpoints,
  motionProps,
  zIndices,
  timings
}

export interface ITheme {
  sizes?: Partial<ThemeProperties & typeof defaultTheme.sizes>
  fonts?: Partial<ThemeProperties & typeof defaultTheme.fonts>
  fontSizes?: Partial<ThemeProperties & typeof defaultTheme.fontSizes>
  fontWeights?: Partial<ThemeProperties & typeof defaultTheme.fontWeights>
  colors?: Partial<ThemeProperties & typeof defaultTheme.colors>
  radii?: Partial<ThemeProperties & typeof defaultTheme.radii>
  shadows?: Partial<ThemeProperties & typeof defaultTheme.shadows>
  transitions?: Partial<ThemeProperties & typeof defaultTheme.transitions>
  gradients?: Partial<ThemeProperties & typeof defaultTheme.gradients>
  breakpoints?: Partial<ThemeProperties & typeof defaultTheme.breakpoints>
  motionProps?: Partial<ThemeProperties & typeof defaultTheme.motionProps>
  zIndices?: Partial<ThemeProperties & typeof defaultTheme.zIndices>
  timings?: Partial<ThemeProperties & typeof defaultTheme.timings>
}
