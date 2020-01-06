import { routes } from "./constants"
import { NavigationItems } from "@marozzocom/marozzo-ui"

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
  awesome: {
    title: "Awesome ❤",
    path: `${routes.docs}awesome`
  }
}
