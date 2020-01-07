import React, { FC, useMemo, Children, ReactElement } from "react"
import nanoid from "nanoid"
import { AnimatePresence, motion, MotionProps } from "framer-motion"
import { useTheme } from "../theme/useTheme"

interface Props {
  animation?: MotionProps
  id?: string
  onExitComplete?: () => void
}

export const Disclosure: FC<Props> = ({ animation, id, onExitComplete: callback, children }) => {
  const {
    theme: { disclosures }
  } = useTheme()
  const rootKey = useMemo(() => id ?? nanoid(), [id])

  return (
    <AnimatePresence onExitComplete={callback}>
      <motion.div key={id} {...{ ...(animation ?? disclosures.default) }}>
        {children}
      </motion.div>
    </AnimatePresence>
  )

  // return (
  //   <AnimatePresence onExitComplete={callback}>
  //     {children &&
  //       Children.map(children, (child: ReactElement<any>) => (
  //         <motion.div key={child.key ?? rootKey} {...{ ...(animation ?? disclosures.default) }}>
  //           {child}
  //         </motion.div>
  //       ))}
  //   </AnimatePresence>
  // )
}
