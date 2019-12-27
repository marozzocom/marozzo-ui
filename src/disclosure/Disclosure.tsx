import React, { FC, useMemo, Children, ReactElement } from "react"
import nanoid from "nanoid"
import { AnimatePresence, motion, MotionProps } from "framer-motion"
import { useTheme } from "../theme/useTheme"

interface Props {
  animation?: MotionProps
  open?: boolean
  id?: string
}

export const Disclosure: FC<Props> = ({ animation, id, children }) => {
  const {
    theme: { disclosures }
  } = useTheme()
  const rootKey = useMemo(() => id ?? nanoid(), [id])

  return (
    <AnimatePresence>
      {children &&
        Children.map(children, (child: ReactElement<any>) => (
          <motion.div key={child.key ?? rootKey} {...{ ...(animation ?? disclosures.default) }}>
            {child}
          </motion.div>
        ))}
    </AnimatePresence>
  )
}
