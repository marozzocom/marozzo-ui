import React from "react"
import { Ripple } from "./Ripple"
import { useButton } from "../useButton"

export const Ripples = () => {
  const { ripples } = useButton()

  return (
    <>
      {Object.entries(ripples).map(([id, { clickX, clickY, dismounting }]) => (
        <Ripple key={id} id={id} clickX={clickX} clickY={clickY} dismounting={dismounting} />
      ))}
    </>
  )
}
