import { Theme } from "@marozzocom/marozzo-ui"
import { defaultTheme } from "../../../dist/theme/DefaultTheme"

export const docs: Theme = {
  sizes: {
    topBar: defaultTheme.sizes[4]
  },
  colors: {
    text: "#1a1a1a",
    background: "#fff",
    primary: "#faf",
    secondary: "#faa",
    overlay: "rgba(0, 0, 0, 0.25)",
    active: "#77daff"
  },
  variants: {
    surfaces: {
      primary: {
        backgroundImage: "none",
        backgroundColor: defaultTheme.colors.background
      }
    }
  }
}
