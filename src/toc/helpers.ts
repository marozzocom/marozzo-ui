export const scrollIntoView = (element: Element) => (offset = 0, behavior = "smooth" as ScrollBehavior) =>
  element && document.scrollingElement.scrollTo({ top: document.scrollingElement.scrollTop + element.getBoundingClientRect().top + offset, behavior })
