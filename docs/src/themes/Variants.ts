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
