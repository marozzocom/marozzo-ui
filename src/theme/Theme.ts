// import { DefaultTheme } from "./DefaultTheme"

// export type ThemeProperty = Record<string | number, string | ThemeProperty>

type ThemeValue = string | number | Array<string | number>

export type ThemeProperty = { [K in symbol]: ThemeValue | ThemeProperty }

// export type Theme = typeof DefaultTheme

// export interface ITheme {
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
