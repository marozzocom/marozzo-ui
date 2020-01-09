import React from "react"
import { Image } from "../src/image/Image"

export default {
  component: Image,
  title: "Image"
}

export const image = () => {
  return <Image src="https://raw.githubusercontent.com/marozzocom/marozzo-ui/master/logo/2x/logo%402x.png" alt="Image" />
}
