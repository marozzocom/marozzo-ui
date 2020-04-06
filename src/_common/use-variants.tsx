export const useVariants = (theme: any) => {
  const { radii, colors, sizes } = theme

  const field = {
    appearance: "none",
    WebkitAppearance: "none",
    lineHeight: "inherit",
    border: `${sizes[0]}px solid ${colors.primary}`,
    borderRadius: radii.subtle,
    color: colors.text,
    backgroundColor: colors.background,
    padding: sizes[2],
    "&:focus": {
      outline: "none",
      boxShadow: `0px 0px 2px 3px ${colors.active}`,
    },
  }

  return { field }
}
