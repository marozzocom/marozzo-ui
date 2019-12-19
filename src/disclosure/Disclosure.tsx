import React, { FC, useMemo, Children, ReactNode, cloneElement, ReactElement } from "react"
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

  return <AnimatePresence>
    {Children.map(children, (child: ReactElement<any>, index) => (
      <motion.div
        key={`${key}-${child?.key ?? index}`}
        {...{ ...animation ?? disclosures.default }}
      >{child}
      </motion.div>
    )
    )}
  </AnimatePresence>
}