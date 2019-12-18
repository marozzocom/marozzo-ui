import React from "react"
import { Theme } from "../src/theme/Theme"
import { global } from "../src/theme/global"
import { defaultTheme } from "../src/theme/DefaultTheme"

const ThemeDecorator = storyFn => (
  <Theme theme={defaultTheme} global={global}>{storyFn()}</Theme>
)

export default ThemeDecorator
