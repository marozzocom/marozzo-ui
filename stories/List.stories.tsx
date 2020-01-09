import React from "react"
import { List, ListItem } from "../src/list"

export default {
  component: List,
  title: "List"
}

export const list = () => {
  return (
    <List>
      {[...Array(6)].map((_, index) => (
        <ListItem>{`Item ${index}`}</ListItem>
      ))}
    </List>
  )
}

export const orderedList = () => {
  return (
    <List ordered>
      {[...Array(6)].map((_, index) => (
        <ListItem>{`Item ${index}`}</ListItem>
      ))}
    </List>
  )
}
