import { useContext } from "react"
import { TocContext } from "./TocProvider"

export const useToc = () => {
  try {
    const { toc, setToc, observer, active } = useContext(TocContext)

    return { toc, setToc, observer, active }
  } catch (error) {
    throw "Failed to read context."
  }
}
