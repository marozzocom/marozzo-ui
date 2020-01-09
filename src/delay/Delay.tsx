import React, { FC, useState, useEffect } from "react"

interface Props {
  delay?: number
}

export const Delay: FC<Props> = ({ children, delay }) => {
  if (!!delay) {
    const [done, setDone] = useState(false)

    useEffect(() => {
      const showTimer = setTimeout(() => setDone(true), delay * 1000)
      return () => clearTimeout(showTimer)
    })

    return done && <>{children}</>
  }

  return <>{children}</>
}
