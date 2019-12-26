import React from "react"
import { Heading } from "../src/heading/Heading"

export default {
  component: Heading,
  title: "Heading"
}

// TODO: Standardize heading sizes in theme

export const defaultHeading = () => <Heading>Default Heading</Heading>
export const heading1 = () => <Heading level={1}>Heading 1</Heading>
export const heading2 = () => <Heading level={2}>Heading 2</Heading>
export const heading3 = () => <Heading level={3}>Heading 3</Heading>
export const heading4 = () => <Heading level={4}>Heading 4</Heading>
export const heading5 = () => <Heading level={5}>Heading 5</Heading>
export const heading6 = () => <Heading level={6}>Heading 6</Heading>
