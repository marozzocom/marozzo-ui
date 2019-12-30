import React, { FC, ComponentProps } from "react"
import { Box } from "../box/Box"
import { useTheme } from "../theme"

interface Props extends ComponentProps<typeof Box> {
  to?: string
  newTab?: boolean
}

interface PropsWithHTMLAttributes extends Props {
  href?: string
}

export const Link: FC<PropsWithHTMLAttributes> = ({ to, newTab, style, children, ...props }) => {
  const {
    theme: {
      colors,
      shadows,
      variants: { textStyles }
    }
  } = useTheme()
  return (
    <Box
      as="a"
      href={to}
      target={newTab ? "_blank" : null}
      variant={textStyles.body}
      style={{
        cursor: "pointer",
        borderRadius: "1px",
        "&:active, &:visited": {
          color: "inherit"
        },
        ...style,
        "&:focus": {
          outline: "none",
          boxShadow: shadows.active
        },
        "&:hover": {
          color: colors.active
        }
      }}
      {...props}>
      {children}
    </Box>
  )
}
