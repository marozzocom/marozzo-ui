import React, { useContext } from "react"
import { ProgressProvider, ProgressContext } from "../src/progress/ProgressProvider";
import { Button } from "../src";

export default {
  component: ProgressProvider,
  title: "ProgressProvider",
};

export const progressProvider = () => {

  return (
    <ProgressProvider>
      <Controls />
    </ProgressProvider>
  )
}

const Controls = () => {
  const { active, start, stop } = useContext(ProgressContext)
  return <Button onClick={() => active ? stop("storybook") : start("storybook")}>{active ? "stop" : "start"}</Button>  
}