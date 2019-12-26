import { configure, addDecorator } from "@storybook/react"
import themeDecorator from "./themeDecorator"

configure(require.context("../stories", true, /\.stories\.tsx$/), module)

addDecorator(themeDecorator)
