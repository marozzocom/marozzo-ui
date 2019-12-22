export const global = {
  "*, *::before, *::after": {
    boxSizing: "border-box"
  },
  // Set core body defaults
  body: {
    minHeight: "100vh",
    scrollBehavior: "smooth",
    lineHeight: "1.62",
    backgroundColor: "#ccf"
  },
  "div::before, div::after": {
    boxSizing: "border-box"
  },
  // Remove default margin
  "body, h1, h2, h3, h4, p, ul[class], ol[class], li, figure, figcaption, blockquote, dl, dd": {
    margin: 0
  },
  // A elements that don't have a class get default styles */
  "a:not([class])": {
    textDecorationSkipInk: "auto"
  },
  // Make images easier to work with
  img: {
    maxWidth: "100%",
    display: "block"
  },
  // Inherit fonts for inputs and buttons
  "input, button, textarea, select": {
    font: "inherit"
  },
  // Pointer cursor for buttons
  "button, input[type='button'], input[type='submit'], input[type='reset']": {
    cursor: "pointer"
  }
}
