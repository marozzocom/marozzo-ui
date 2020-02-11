export class DefaultTheme {
  private static instance: DefaultTheme

  static getInstance() {
    if (!DefaultTheme.instance) {
      DefaultTheme.instance = new DefaultTheme()
    }
    return DefaultTheme.instance
  }

  colors = {
    text: "#f1f1f1",
    background: "#1a1a1a",
    primary: "#faf",
    secondary: "#faa",
    overlay: "rgba(0, 0, 0, 0.25)",
    active: "#77daff"
  }
}

const { colors } = DefaultTheme.getInstance()

export const defaultTheme = {
  colors
}

export interface ITheme {
  colors?: Partial<typeof colors>
}
