import React, { ReactNode, Children } from "react"
import { Text } from "../text/Text"

// TODO: The way typography is reset is inadequate. Figure out how to handle all typography consistently.
export const useWrapText = (children: ReactNode) =>
  Children.toArray(children).length === 1 && typeof Children.toArray(children)[0] ? (
    <Text
      as="span"
      style={{
        font: "inherit",
        fontWeight: "inherit",
        fontSize: "inherit",
        color: "inherit"
      }}>
      {children}
    </Text>
  ) : (
    { children }
  )
