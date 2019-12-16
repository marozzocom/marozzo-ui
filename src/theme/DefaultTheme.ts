export interface ITheme extends DefaultTheme {
}

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
    "6": "16rem"
  }

  fonts = {
    body: 'system-ui, sans-serif',
    heading: '"Avenir Next", sans-serif',
    monospace: 'Menlo, monospace'
  }

  colors = {
    text: '#000',
    background: '#fff',
    primary: '#33e',
    secondary: '#666'
  }

  radii = {
    normal: 10,
    round: 2000
  }

  shadows = {
    normal: "0 0 10px rgba(0, 0, 0, 0.5)"
  }

  disclosures = {
    default: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: {
        type: "tween"
      }
    },
    drawer: {
      initial: { opacity: 0, x: "-100%" },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, y: "-100%" },
      transition: {
        type: "tween"
      }
    }
  }

  timings = {
    toast: 5000
  }
}


const theme = DefaultTheme.getInstance()
export default theme