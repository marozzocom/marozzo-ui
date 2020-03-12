import React from "react"
import { Icon } from "../src/icon/Icon"
import { Close } from "../src/icon/paths/Close"
import { useTheme } from "../src/theme"

export default {
  component: Icon,
  title: "Icon"
}

export const IconContainer = () => {
  const {
    theme: { fontSizes }
  } = useTheme()
  return (
    <Icon
      style={{
        height: fontSizes.xxl
      }}>
      <Close />
    </Icon>
  )
}
