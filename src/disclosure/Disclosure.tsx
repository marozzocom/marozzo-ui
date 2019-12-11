import React, { FC, useMemo } from "react"
import nanoid from "nanoid"
import { AnimatePresence, motion, AnimationProps } from "framer-motion"
import { useTheme } from "emotion-theming"
import { ITheme } from "../themes/default"

interface Props {
  animation?: AnimationProps
  open?: boolean
  key?: string
}

export const Disclosure: FC<Props> = ({animation, open = true, key, children}) => {
  const memoizedKey = key ?? useMemo(() => nanoid(), [])
  const theme = useTheme<ITheme>()

  return <AnimatePresence>
    {open && <motion.div
      key={memoizedKey}
      {...{...animation ?? theme.disclosures.default}}
    >
      {children}
    </motion.div>}
  </AnimatePresence>
}