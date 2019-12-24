export const dissociate = (key: string) => <T>(obj: { [key: string]: T }): { [key: string]: T } => {
  const result = Object.assign(obj)
  delete result[key]
  return result
}

export const positive = (n: number) => Math.max(0, n)
