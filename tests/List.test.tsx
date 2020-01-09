import React from "react"
import { List, ListItem } from "../src/list"
import { render } from "@testing-library/react"

test("Renders List", () => {
  const { getByText } = render(
    <List>
      <ListItem>List</ListItem>
    </List>
  )
  expect(getByText("List")).not.toBeNull()
})
