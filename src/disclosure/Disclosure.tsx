import React, { FC, useMemo } from "react"
import nanoid from "nanoid"
import { AnimatePresence, motion } from "framer-motion"

interface Props {
  open?: boolean
  key?: string
}

export const Disclosure: FC<Props> = ({open = true, key, children}) => {
  const memoizedKey = key ?? useMemo(() => nanoid(), [])

  return <AnimatePresence>
    {open && <motion.div
      key={memoizedKey}
      initial={{ opacity: 0, x: "-100%" }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        type: "tween"
      }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>}
  </AnimatePresence>
}