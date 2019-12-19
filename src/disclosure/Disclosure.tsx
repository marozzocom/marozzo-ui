import React, { FC, useMemo, Children, ReactElement } from "react"
import nanoid from "nanoid"
import { AnimatePresence, motion, AnimationProps } from "framer-motion"
import { useTheme } from "emotion-theming"
import { Theme } from "../theme/models"

interface Props {
  animation?: AnimationProps
  open?: boolean
  key?: string
}

export const Disclosure: FC<Props> = ({ animation, key, children }) => {
  const { disclosures } = useTheme<Theme>()
  const rootKey = useMemo(() => (key ?? nanoid()), [])

  return <AnimatePresence>
    {children && Children.map(children, (child: ReactElement<any>, index) => {
      const motionKey = `${rootKey}-${child?.key ?? "child"}-${index}`
      console.log("motionKey", motionKey)
      return (
      <motion.div
        key={motionKey}
        {...{ ...animation ?? disclosures.default }}
      >{child}
      </motion.div>
    )}
    )}
  </AnimatePresence>
}