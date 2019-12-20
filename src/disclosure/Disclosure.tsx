import React, { FC, useMemo, Children, ReactElement } from "react"
import nanoid from "nanoid"
import { AnimatePresence, motion, AnimationProps } from "framer-motion"
import { useTheme } from "emotion-theming"
import { Theme } from "../theme/models"

interface Props {
  animation?: AnimationProps
  open?: boolean
  id?: string
}

export const Disclosure: FC<Props> = ({ animation, id, children }) => {
  const { disclosures } = useTheme<Theme>()
  const rootKey = useMemo(() => (id ?? nanoid()), [])

  return <AnimatePresence>
    {children && Children.map(children, (child: ReactElement<any>) => {
      const motionKey = `${rootKey}-${child?.key ?? nanoid()}`

      return (
        <motion.div
          key={motionKey}
          {...{ ...animation ?? disclosures.default }}
        >{child}
        </motion.div>
      )
    }
    )}
  </AnimatePresence>
}