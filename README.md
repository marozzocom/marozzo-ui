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

✅ Properly styled buttons

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

[Emotion](https://emotion.sh/) for styling
[Emotion Face Paint](https://github.com/emotion-js/facepaint) for responsive values
[Framer motion](https://www.framer.com/motion/) for motion animations

# Technologies considered but not used

**Styled System** Original idea was t utilize Styled System for providing an abstraction layer over CSS and for "easier" use of theme values within the components. However, I faced the following challenges:

- Emotion's theme is tricky to use when basing a _component library_ on Emotion. Emotion within this library ended up looking for a different Theme context than the one used in the application using this library. Providing my own Theme context via Hooks was then again tricky to utilize with Styled System's styled function.
- How useful the Styled System abstraction over CSS is is debatable. I like it in theory, but in practice I would end up just exposing everything to the component's and basically just replacing almost all of CSS with another, closely related syntax.
- Using Emotion's css prop (named `style` to replace React's style prop in Marozzo UI) combines all style related props into one object, which enables separating "logic" props from "style" props. This way, I can keep style-related props within a component to minimum (most stylistic changes should be based on theme anyway), and in corner-cases such as a width-setting for a Drawer I can expose a specific prop if I want to, or leave it to the style prop if I want to be more opinionated regarding it.
- Face paint enables creating responsive styles natively with Emotion, just like with Styled System.
- In the end these two (to me) are not that different:

```
return <Box p={2} m={3}>Hi!</Box>
```

```
const { theme: { sizes }} = useTheme()

return (
  <Box style={{
    padding: sizes[2],
    margin: sizes[3]
  }}>Hi!</Box>
)
```

Sure, there is more code in the second, but really the end user of this library doesn't need to bother with it all that much, and they're bound to know JS and CSS anyway, so I don't see this being that much of a hurdle.

- Native Emotion/CSS Object gives all the flexibility and power of JS.
- With Styled System there would become times when passing style props as strings and passing them as objects and sometimes extending with CSS would become necessary, making the end result less coherent.
- And finally less dependencies is always better in a library like this.
