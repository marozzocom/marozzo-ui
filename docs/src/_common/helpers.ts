export const scrollTop = () => window.scrollTo(0, 0)

export const getRef = async () => {
  const response = await fetch("https://marozzoui.cdn.prismic.io/api/v2")
  const data = await response.json()
  const ref = data.refs[0].ref // TODO: get master ref
  return ref
}
