export const dissociate = (key: string) => <T>(obj: { [key: string]: T }): { [key: string]: T } => {
  const result = Object.assign(obj)
  delete result[key]
  return result
}
