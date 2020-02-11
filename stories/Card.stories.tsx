import React from "react"
import { Card as CardComponent } from "../src/card/Card"
import { useTheme } from "../src/theme/useTheme"

export default {
  component: CardComponent,
  title: "Card"
}

export const Card = () => {
  const {
    theme: { colors }
  } = useTheme()

  // TODO: Why the following styling?
  return (
    <CardComponent
      style={{
        background: colors.secondary
      }}>
      Card
    </CardComponent>
  )
}
