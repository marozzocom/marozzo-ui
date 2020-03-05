import React, { FC, useState, createContext, useCallback, ReactNode, ComponentProps } from "react"
import { dissociate } from "../_common/helpers"
import { Portal, Transition, Fixture } from ".."
import { Vertical, Horizontal } from "../fixture/Fixture"

export interface Operations {
  [id: string]: boolean
}

const ProgressContext = createContext<{
  start: (id: string) => void
  stop: (id: string) => void
}>(null)

interface Props {
  component: ReactNode
  fixtureProps?: ComponentProps<typeof Fixture>
}

// TODO: Offer possibility to build the exact composition around the active elements. Not necessary for now 😉
// TODO: Fix the horizontal-vertical values, they're a total mess

const ProgressProvider: FC<Props> = ({
  component,
  children,
  fixtureProps = {
    vertical: Vertical.Top,
    horizontal: Horizontal.Center,
    style: {
      width: "100%"
    }
  }
}) => {
  const [operations, setOperations] = useState<Operations>({})

  const start = useCallback(id => setOperations(currentOperations => ({ ...currentOperations, [id]: true })), [])
  const stop = useCallback(id => setOperations(currentOperations => ({ ...dissociate(id)(currentOperations) })), [])
  const active = Object.keys(operations).length > 0

  return (
    <ProgressContext.Provider value={{ start, stop }}>
      {children}
      <Portal>
        <Fixture {...fixtureProps}>
          <Transition>{active && component}</Transition>
        </Fixture>
      </Portal>
    </ProgressContext.Provider>
  )
}

export { ProgressContext, ProgressProvider }
