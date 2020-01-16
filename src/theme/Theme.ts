export type ThemeProperties = Record<string, any>

export interface Theme {
  sizes?: ThemeProperties
  fonts?: ThemeProperties
  fontSizes?: ThemeProperties
  fontWeights?: ThemeProperties
  colors?: ThemeProperties
  motionProps?: ThemeProperties
  shadows?: ThemeProperties
  gradients?: ThemeProperties
  breakpoints?: ThemeProperties
  radii?: ThemeProperties
  variants?: () => ThemeProperties
  transitions?: ThemeProperties
  zIndices?: ThemeProperties
}
