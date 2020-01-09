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
          transform: `translateY(${defaultTheme.sizes[2]}px)`,
          height: defaultTheme.sizes[4]
        },
        backgroundImage: "none",
        backgroundColor: defaultTheme.colors.background
      }
    }
  }
}
