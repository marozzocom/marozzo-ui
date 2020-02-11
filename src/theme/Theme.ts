import { DefaultTheme } from "./DefaultTheme"

export type ThemeProperties = Record<string, any>

export type Theme = typeof DefaultTheme

// export interface Theme {
//   sizes?: ThemeProperties
//   fonts?: ThemeProperties
//   fontSizes?: ThemeProperties
//   fontWeights?: ThemeProperties
//   colors?: ThemeProperties
//   motionProps?: ThemeProperties
//   shadows?: ThemeProperties
//   gradients?: ThemeProperties
//   breakpoints?: ThemeProperties
//   radii?: ThemeProperties
//   transitions?: ThemeProperties
//   zIndices?: ThemeProperties
// }
