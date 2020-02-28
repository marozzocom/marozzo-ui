export const dissociate = (key: string) => <T>(obj: { [key: string]: T }): { [key: string]: T } => {
  const result = Object.assign(obj)
  delete result[key]
  return result
}

export const positive = (n: number) => Math.max(0, n)

export const binaryFromBooleans = (...rest: boolean[]) =>
  parseInt(
    rest.reduce((acc, value) => acc + ~~value, ""),
    2
  )

export const ensureArray = <T>(value: T | Array<T>): Array<T> => (Array.isArray(value) ? value : [value])

export const getContextError = (component: string) => `To use ${component} compound components they must be inside ${component} component or context.`

export const milliseconds = (seconds: number) => seconds * 1000
