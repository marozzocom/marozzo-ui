import { NavigationItems } from "src/navigation/Navigation"
import { routes } from "./constants"

// TODO: Combine with routes

export const navigation: NavigationItems = {
  home: {
    title: "Home",
    path: routes.home
  },
  introduction: {
    title: "Introduction",
    path: `${routes.docs}introduction`
  },
  api: {
    title: "Api",
    path: `${routes.docs}api`
  },
  hani: {
    title: "Awesome ❤",
    path: `${routes.docs}awesome`
  }
}
