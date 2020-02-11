import { useEffect } from "react"

export const useEscape = (delegate: () => void) => {
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => event.key === "Escape" && delegate()
    window.addEventListener("keydown", handleKeyPress)
    return () => {
      window.removeEventListener("keydown", handleKeyPress)
    }
  }, [delegate])
}
