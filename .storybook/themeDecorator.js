import React from "react"
import { Theme } from "../src/theme/Theme"
import { global } from "../src/theme/global"
import theme from "../src/theme/DefaultTheme"

const ThemeDecorator = storyFn => (
  <Theme theme={theme} global={global}>{storyFn()}</Theme>
)

export default ThemeDecorator
