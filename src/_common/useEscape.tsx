import { useEffect } from "react"

export const useEscape = (delegate: () => void) => {
  const handleKeyPress = (event: KeyboardEvent) => event.key === "Escape" && delegate()

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress)
    return () => {
      window.removeEventListener("keydown", handleKeyPress)
    }
  }, [])
}
