import React, { forwardRef, ComponentProps } from "react"
import { Input } from "."

interface Props extends ComponentProps<typeof Input> {}

export const Password = forwardRef<Props, any>(({ style, ...rest }, ref) => {
  return <Input ref={ref} type="password" {...rest} />
})

Password.displayName = "Password"
