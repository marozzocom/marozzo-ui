import React, { useRef, useState, useEffect } from "react"

export const useFocusTrap = () => {
  const focusTrap = useRef(null)
  const [focusTrapZone, setFocusTrapZone] = useState({ first: undefined, last: undefined })

  useEffect(() => {
    if (!focusTrap.current) {
      return
    }

    const handleTab = (event: KeyboardEvent) => {
      if (event.key !== "Tab") {
        return
      }
      if (!focusTrap.current.contains(event.target)) {
        focusTrapZone.first.focus()
        event.preventDefault()
      }
      if (event.target === focusTrapZone.first && event.shiftKey) {
        focusTrapZone.last.focus()
        event.preventDefault()
      }
      if (event.target === focusTrapZone.last && !event.shiftKey) {
        focusTrapZone.first.focus()
        event.preventDefault()
      }
    }

    const focusableElements = focusTrap.current.querySelectorAll(`button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])`)

    if (focusableElements.length === 0) {
      return
    }

    setFocusTrapZone({
      first: focusableElements[0],
      last: focusableElements[focusableElements.length - 1]
    })

    focusableElements[0].focus()

    window.addEventListener("keydown", handleTab)

    return () => {
      window.removeEventListener("keydown", handleTab)
    }
  }, [focusTrapZone.first, focusTrapZone.last])

  return focusTrap
}
