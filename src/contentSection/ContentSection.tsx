import React, { FC, useRef, useEffect, ComponentProps } from "react"
import { Box } from "../box/Box"
import { useToc } from "../toc"

interface Props extends ComponentProps<typeof Box> {
  name: string
}

export const ContentSection: FC<Props> = ({ name, children, ...props }) => {
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

  return (
    <Box innerRef={ref} {...props}>
      {children}
    </Box>
  )
}
