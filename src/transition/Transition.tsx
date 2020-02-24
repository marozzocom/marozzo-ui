import React, { FC, createContext, Children, ReactElement } from "react"
import { AnimatePresence, MotionProps } from "framer-motion"
import { useTheme } from "../theme/useTheme"
import { Item } from "./components/Item"
import merge from "deepmerge"

interface Props {
  motionProps?: MotionProps
  delayChildren?: number
  disableExitAnimation?: boolean
  onExitComplete?: () => void
}

export const TransitionContext = createContext<{
  motionProps: MotionProps
  delayChildren: number
}>(null)

export const Transition: FC<Props> = ({ motionProps = {}, delayChildren, disableExitAnimation = false, onExitComplete, children, ...props }) => {
  const {
    theme: { transitions }
  } = useTheme()

  const value = { motionProps: merge(transitions.common, motionProps), delayChildren }

  // const items = Children.map(children, (child, index) => <Item index={index} key={index}>{child}</Item>)
  const items = Children.toArray(children)
    .filter(Boolean)
    .map((child: ReactElement, index) => (
      <Item key={child.props.id || index} index={index}>
        {child}
      </Item>
    ))

  return (
    <TransitionContext.Provider value={value}>
      <AnimatePresence onExitComplete={onExitComplete}>{items}</AnimatePresence>
    </TransitionContext.Provider>
  )
}
