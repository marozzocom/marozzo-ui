import { useContext } from "react"
import { TocContext } from "./TocProvider"

export const useToc = () => {
  try {
    const { toc, setToc, observer, active } = useContext(TocContext)
    const resetToc = () => setToc([])
    return { toc, setToc, observer, active, resetToc }
  } catch (error) {
    return { toc: null, setToc: null, observer: null, active: null, resetToc: null }
  }
}
