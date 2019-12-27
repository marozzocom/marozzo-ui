import React, { FC, useRef, useEffect } from "react"
import { Box } from "../box/Box"
import { useToc } from "../toc"

interface Props {
  name: string
}

export const ContentSection: FC<Props> = ({ name, children }) => {
  const { observer, setToc } = useToc()
  const ref = useRef<HTMLHeadingElement>()

  if (observer) {
    useEffect(() => {
      observer.observe(ref.current)

      setToc((toc: any) => [
        ...toc,
        {
          name,
          element: ref.current
        }
      ])
    }, [])
  }

  return <Box innerRef={ref}>{children}</Box>
}
