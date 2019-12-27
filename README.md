[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

# marozzo-ui

React UI components used in marozzo.com.

This library is still in **alpha stage**.

# Design principles

- Offer highly customizable clean primitives
- Create an opinionated set of UI components with a combination of the primitives
- Offer functionality as reusable hooks
- Keep component api simple -- instead make it easy to fork or rebuild new components (no custom renderers and overly complicated objects)
- Most of stylistic customization comes from theme and by exposing primitive style props to component
- Aim for good composition. While a _Card_ component may recommend a _CardHeading_, _CardBody_ and _CardActions_ as its content, allow passing in whatever as children instead of forcing to set these via props.

# Features

- Based on extensible, composable primitives (inspiration shamelessly taken from Rebass/Theme-UI and Chakra-UI)
- Written with, for and only in TypeScript
- Focus on app development, not static sites
- No support for legacy browsers such as IE11

# Demo

[Component library Storybook](https://marozzoui.marozzo.com)

# Documentation

Not yet available, check source code.

# Roadmap

Some of the short-term components you can expect.

🔲 Light and dark default theme

🔲 Data table (based on react-table)

🔲 Basic form elements

🔲 Image

🔲 Menu (popup menu)

🔲 Dialog

🔲 Card content components

🔲 Video (cloudflare stream component)

🔲 List

🔲 Avatar

🔲 Properly styled buttons

# Some things I might add to this library, or just use this library to create them with

🔲 A very cool drag-and-drop "builder" for hierarchical page content

🔲 Top and side menus

# Installation

At this stage the package is only available from this GitHub registry: https://github.com/marozzocom/marozzo-ui/packages/71017

You will need to create a `.npmrc` file in the same folder as you `package.json` file with the following line
`@marozzocom:registry=https://npm.pkg.github.com`

Then you should be able to install the package with

`npm i @marozzocom/marozzo-ui`

You can then import everything you need with named imports, for example:

`import { Box, Text } from "@marozzocom/marozzo-ui`

# Contributing

Contributions are welcome, but probably still unlikely at this stage. Drop me an email if you have ideas. 🙂

# Technologies used

[Emotion](https://emotion.sh/) for css and component primitives
[Framer motion](https://www.framer.com/motion/) for animations
