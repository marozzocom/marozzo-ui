import React from "react"
import { Card } from "../src/card/Card"
import { useTheme } from "../src/theme/useTheme"

export default {
  component: Card,
  title: "Card"
}

export const card = () => {
  const {
    theme: { colors }
  } = useTheme()

  // TODO: Why the following styling?
  return (
    <Card
      style={{
        background: colors.secondary
      }}>
      Card
    </Card>
  )
}
