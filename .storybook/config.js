import { configure, addDecorator } from "@storybook/react"
import themeDecorator from "./themeDecorator"
import { ThemeProvider } from "emotion-theming"

configure(require.context("../stories", true, /\.stories\.tsx$/), module)

addDecorator(themeDecorator);