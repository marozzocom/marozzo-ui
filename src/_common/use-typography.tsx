export const useTypography = (theme: any) => {
  const { fontSizes, fontWeights, fonts } = theme

  const form = {
    fontFamily: fonts.action,
    fontWeight: fontWeights.regular,
    fontSize: fontSizes.m,
    lineHeight: "inherit",
  }

  return { form }
}
