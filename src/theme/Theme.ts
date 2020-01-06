export type ThemeProperties = Record<string, any>

export interface Theme {
  sizes?: ThemeProperties
  fonts?: ThemeProperties
  fontSizes?: ThemeProperties
  fontWeights?: ThemeProperties
  colors?: ThemeProperties
  animations?: ThemeProperties
  shadows?: ThemeProperties
  gradients?: ThemeProperties
  breakpoints?: Array<number>
  radii?: ThemeProperties
  variants?: ThemeProperties
  disclosures?: ThemeProperties
  zIndices?: ThemeProperties
}
