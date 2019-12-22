import { useContext } from "react"
import { TocContext } from "./TocProvider"

export const useToc = () => {
  try {
    const { toc, setToc, observer, selected } = useContext(TocContext)

    return { toc, setToc, observer, selected }
  } catch (error) {
    throw "Failed to read context."
  }
}
